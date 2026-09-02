import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import FinalCta from "@/components/FinalCta";
import { getPublishedBlogPosts } from "@/lib/hubspot";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Plain-language articles on estate planning, life insurance, tax strategy, and holistic wealth planning from Essential Trust Financial in Newport Beach, CA.",
};

function formatDate(iso: string | null) {
  if (!iso) return null;
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return null;
  return d.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}

export default async function BlogPage() {
  const posts = await getPublishedBlogPosts();

  return (
    <>
      <PageHero
        eyebrow="The Blog"
        title="Plain-language answers to real financial questions."
        description="New articles regularly. No jargon, no sales pitch, just education you can use."
        crumbLabel="Blog"
      />
      <section className="section">
        <div className="wrap">
          {posts.length === 0 ? (
            <div className="section-head center">
              <p className="eyebrow">Check Back Soon</p>
              <h2>New articles are on the way.</h2>
              <p>
                We are working on our first posts. In the meantime, explore the{" "}
                <Link href="/concepts">Concepts Library</Link> or schedule a call.
              </p>
            </div>
          ) : (
            <div className="blog-grid">
              {posts.map((post) => {
                const date = formatDate(post.publishDate);
                return (
                  <Link
                    className="post"
                    href={`/blog/${post.slug}`}
                    key={post.id}
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <div className="post-band" />
                    <div className="post-body">
                      {date && <p className="cat">{date}</p>}
                      <h3>{post.title}</h3>
                      {post.summary && <p>{post.summary}</p>}
                      <span>Read Article</span>
                    </div>
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </section>
      <FinalCta />
    </>
  );
}
