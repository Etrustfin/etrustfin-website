import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import FinalCta from "@/components/FinalCta";
import AccordionItem from "@/components/AccordionItem";

export const metadata: Metadata = {
  title: "Concepts Library",
  description:
    "Plain-language explanations of core investment and planning concepts: tax buckets, compounding, diversification, Roth conversions, term vs. IUL, and more.",
};

const CONCEPTS = [
  {
    title: "The Three Tax Buckets",
    body: "Every dollar you save lands in one of three buckets. Taxable: regular accounts, taxed as you go. Tax-deferred: 401(k)s and traditional IRAs, taxed later when you withdraw. Tax-free: Roth accounts and certain insurance strategies, taxed never, if the rules are followed. Most people accidentally pile everything into one bucket. Balancing all three gives you control over your tax bill in retirement, when control matters most.",
  },
  {
    title: "Compound Growth",
    body: "Compounding means your money earns returns, and then those returns earn returns. It feels slow at first and unstoppable later. The practical lesson: time invested matters more than timing the market, and the most expensive financial mistake most people make is simply waiting to start.",
  },
  {
    title: "Diversification",
    body: "Diversification means not letting any single company, industry, or asset type determine your future. When one piece struggles, others can hold steady. It does not guarantee a profit or protect against all loss, but it removes the single points of failure that destroy unprepared portfolios. Our founder's family lost over $1.7 million in one fraudulent scheme. Concentration risk is not theoretical to us.",
  },
  {
    title: "Risk Tolerance vs. Risk Capacity",
    body: "Risk tolerance is how much market movement you can stomach emotionally. Risk capacity is how much your plan can actually afford. They are not the same thing, and good planning respects both. A portfolio you abandon in a downturn was never the right portfolio, no matter what the math said.",
  },
  {
    title: "Dollar-Cost Averaging",
    body: "Instead of trying to guess the perfect moment to invest, you invest a fixed amount on a regular schedule. You automatically buy more shares when prices are low and fewer when prices are high, and you remove emotion, the most expensive variable in investing, from the decision entirely.",
  },
  {
    title: "Asset Allocation vs. Asset Location",
    body: "Allocation is what you own: the mix of stocks, bonds, and other assets that sets your risk and return. Location is where you hold it: which investments sit in which tax bucket. Two people can own identical investments and end up with very different after-tax wealth purely because of location. It is one of the most overlooked advantages in planning.",
  },
  {
    title: "Roth Conversions",
    body: "A Roth conversion moves money from a tax-deferred account into a tax-free one. You pay tax on the converted amount now, in exchange for tax-free growth and withdrawals later. It can be powerful in lower-income years or before tax rates rise, and a mistake when done at the wrong time. This is a strategy to model carefully with your advisor and CPA, never a default move.",
  },
  {
    title: "Term vs. Indexed Universal Life",
    body: "Term insurance is pure protection: a large death benefit for a set period, at the lowest cost. It is the right answer for most income-protection needs. Indexed universal life is permanent coverage with a cash value component tied to a market index, with downside floors and upside caps. Used correctly, in the right situation, it can add tax-advantaged flexibility to a plan. Used as a default sales product, it is one of the most misused tools in the industry. We will always show you the math for both.",
  },
  {
    title: "Sequence of Returns Risk",
    body: "Two retirees can earn the same average return and end up in completely different places, depending on the order the returns arrive. Bad markets early in retirement, while you are withdrawing, do permanent damage that later good years cannot repair. This is why retirement income planning is its own discipline, not just keep investing.",
  },
  {
    title: "Wills, Trusts & Beneficiaries",
    body: "A will says who gets what, but in California it generally still goes through probate: a public, slow, expensive court process. A living trust avoids probate and keeps your affairs private, if assets are actually titled into it. And here is what surprises most people: beneficiary designations on accounts and policies override both. An outdated beneficiary form can undo an entire estate plan. We audit all three layers together.",
  },
];

export default function ConceptsPage() {
  return (
    <>
      <PageHero
        eyebrow="The Concepts Library"
        title="The ideas behind every recommendation."
        description="You should never agree to a strategy you do not understand. These are the core concepts we use in planning, explained the way we explain them in meetings."
        crumbLabel="Concepts Library"
      />
      <section className="section">
        <div className="wrap">
          <div className="con-grid">
            {CONCEPTS.map((c) => (
              <AccordionItem key={c.title} title={c.title} variant="con">
                <p>{c.body}</p>
              </AccordionItem>
            ))}
          </div>
          <p className="con-note">
            The Concepts Library is educational only and is not a recommendation of any strategy or
            product. Whether any concept fits your situation depends on your full financial
            picture, which is exactly what a planning engagement is for.
          </p>
        </div>
      </section>
      <FinalCta />
    </>
  );
}
