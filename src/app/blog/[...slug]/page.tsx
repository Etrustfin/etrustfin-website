import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import FinalCta from "@/components/FinalCta";
import { getBlogPostBySlug } from "@/lib/hubspot";
import { LINKEDIN_URL, SITE_NAME, SITE_URL } from "@/lib/constants";

type Params = { slug: string[] };

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug.join("/"));
  if (!post) return { title: "Blog" };
  // Prefer the description written for search results; fall back to the opening text.
  const description = post.metaDescription || post.summary || undefined;
  const path = `/blog/${slug.join("/")}`;
  return {
    title: post.title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "article",
      title: post.title,
      description,
      url: path,
      siteName: SITE_NAME,
      publishedTime: post.publishDate || undefined,
      modifiedTime: post.updated || undefined,
      authors: ["Samantha Dalby"],
      images: post.featuredImage ? [{ url: post.featuredImage, alt: post.featuredImageAlt || post.title }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description,
      images: post.featuredImage ? [post.featuredImage] : undefined,
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug.join("/"));
  if (!post) notFound();

  // Structured data so search engines can read the post's author, dates and image.
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.metaDescription || post.summary,
    image: post.featuredImage ? [post.featuredImage] : undefined,
    datePublished: post.publishDate || undefined,
    dateModified: post.updated || post.publishDate || undefined,
    author: { "@type": "Person", name: "Samantha Dalby", url: LINKEDIN_URL },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      logo: { "@type": "ImageObject", url: `${SITE_URL}/assets/logo.png` },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_URL}/blog/${slug.join("/")}` },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <section className="page-hero">
        <div className="wrap">
          <p className="eyebrow">The Blog</p>
          <h1>{post.title}</h1>
          <p className="crumb">
            <Link href="/">Home</Link> &nbsp;/&nbsp; <Link href="/blog">Blog</Link>
          </p>
        </div>
      </section>
      <section className="section">
        <div className="wrap" style={{ maxWidth: 760 }}>
          {post.featuredImage && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={post.featuredImage}
              alt={post.featuredImageAlt || post.title}
              style={{ borderRadius: 10, border: "1px solid var(--line)", marginBottom: 40 }}
            />
          )}
          <div className="post-content" dangerouslySetInnerHTML={{ __html: post.body }} />
        </div>
      </section>
      <FinalCta />
    </>
  );
}
