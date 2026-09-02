const HUBSPOT_TOKEN = process.env.HUBSPOT_PRIVATE_APP_TOKEN;
const HUBSPOT_API = "https://api.hubapi.com";

export type BlogPostSummary = {
  id: string;
  title: string;
  slug: string;
  summary: string;
  featuredImage: string | null;
  publishDate: string | null;
};

export type BlogPostDetail = BlogPostSummary & {
  body: string;
};

function hubspotHeaders() {
  return {
    Authorization: `Bearer ${HUBSPOT_TOKEN}`,
    "Content-Type": "application/json",
  };
}

function stripHtml(html: string) {
  return html.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
}

type RawHubspotPost = {
  id: number | string;
  htmlTitle?: string;
  name?: string;
  slug: string;
  postSummary?: string;
  postBody?: string;
  featuredImage?: string;
  publishDate?: string;
};

function mapSummary(post: RawHubspotPost): BlogPostSummary {
  return {
    id: String(post.id),
    title: post.htmlTitle || post.name || "Untitled",
    slug: post.slug,
    summary: stripHtml(post.postSummary || "").slice(0, 220),
    featuredImage: post.featuredImage || null,
    publishDate: post.publishDate || null,
  };
}

/**
 * Fetches published blog posts from HubSpot. Returns an empty array if
 * HubSpot isn't configured yet or the request fails, so the blog page can
 * always render a graceful "no posts yet" state instead of crashing.
 */
export async function getPublishedBlogPosts(limit = 20): Promise<BlogPostSummary[]> {
  if (!HUBSPOT_TOKEN) return [];
  try {
    const res = await fetch(
      `${HUBSPOT_API}/cms/v3/blogs/posts?state=PUBLISHED&limit=${limit}&sort=-publishDate`,
      { headers: hubspotHeaders(), next: { revalidate: 300 } },
    );
    if (!res.ok) return [];
    const data = await res.json();
    const results: RawHubspotPost[] = data.results ?? [];
    return results.map(mapSummary);
  } catch {
    return [];
  }
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPostDetail | null> {
  if (!HUBSPOT_TOKEN) return null;
  try {
    const res = await fetch(
      `${HUBSPOT_API}/cms/v3/blogs/posts?state=PUBLISHED&slug=${encodeURIComponent(slug)}`,
      { headers: hubspotHeaders(), next: { revalidate: 300 } },
    );
    if (!res.ok) return null;
    const data = await res.json();
    const post: RawHubspotPost | undefined = data.results?.[0];
    if (!post) return null;
    return { ...mapSummary(post), body: post.postBody ?? "" };
  } catch {
    return null;
  }
}

/**
 * Creates or updates a HubSpot contact by email (upsert). Used by the
 * newsletter popup so new signups appear in the CRM immediately.
 */
export async function upsertNewsletterContact(email: string) {
  if (!HUBSPOT_TOKEN) {
    throw new Error("HubSpot is not configured (missing HUBSPOT_PRIVATE_APP_TOKEN).");
  }
  const res = await fetch(`${HUBSPOT_API}/crm/v3/objects/contacts/batch/upsert`, {
    method: "POST",
    headers: hubspotHeaders(),
    body: JSON.stringify({
      inputs: [
        {
          idProperty: "email",
          id: email,
          properties: {
            email,
            lifecyclestage: "subscriber",
          },
        },
      ],
    }),
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`HubSpot error ${res.status}: ${text}`);
  }
  return res.json();
}
