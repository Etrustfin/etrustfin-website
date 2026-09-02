import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import FinalCta from "@/components/FinalCta";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Plain-language articles on estate planning, life insurance, tax strategy, and holistic wealth planning from Essential Trust Financial in Newport Beach, CA.",
};

const POSTS = [
  {
    cat: "Estate Planning",
    title: "What actually happens if you pass away without a will in California",
    summary:
      "The state has a plan for your money. You probably would not have chosen it. Here is how intestate succession works and how to take the decision back.",
  },
  {
    cat: "Life Insurance",
    title: "Term vs. IUL: a plain-language comparison",
    summary:
      "One is a safety net, the other is a strategy. Neither is right for everyone. What each one actually does, what it costs, and how to know which fits your situation.",
  },
  {
    cat: "Tax Strategy",
    title: "Five tax moves high earners overlook every year",
    summary:
      "Most tax savings do not happen in April. They happen in the planning you do the other eleven months. Five strategies to discuss with your advisor and CPA.",
  },
  {
    cat: "Women & Wealth",
    title: "Why planning looks different when you live longer",
    summary:
      "Longer life expectancy changes the math on retirement, income, and care. What women should be asking their advisor that most plans quietly skip.",
  },
  {
    cat: "Generational Wealth",
    title: "How to leave money without leaving a mess",
    summary:
      "An inheritance can be a gift or a burden. The difference is preparation. A practical look at passing on wealth your family can actually manage.",
  },
  {
    cat: "Getting Started",
    title: "The order of operations for your money",
    summary:
      "Emergency fund, match, debt, Roth, taxable. The sequence matters more than the amount. A simple framework for where every dollar should go first.",
  },
];

export default function BlogPage() {
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
          <div className="blog-grid">
            {POSTS.map((post) => (
              <div className="post" key={post.title}>
                <div className="post-band" />
                <div className="post-body">
                  <p className="cat">{post.cat}</p>
                  <h3>{post.title}</h3>
                  <p>{post.summary}</p>
                  <a href="#">Read Article</a>
                </div>
              </div>
            ))}
          </div>
          {/* TO ADD A POST: add an entry to the POSTS array above. */}
        </div>
      </section>
      <FinalCta />
    </>
  );
}
