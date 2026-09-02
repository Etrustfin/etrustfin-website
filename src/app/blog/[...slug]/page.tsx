import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import FinalCta from "@/components/FinalCta";
import { getBlogPostBySlug } from "@/lib/hubspot";

type Params = { slug: string[] };

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug.join("/"));
  if (!post) return { title: "Blog" };
  return {
    title: post.title,
    description: post.summary || undefined,
  };
}

export default async function BlogPostPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug.join("/"));
  if (!post) notFound();

  return (
    <>
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
              alt={post.title}
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
