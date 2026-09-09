import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import FinalCta from "@/components/FinalCta";
import FinancialQuiz from "@/components/FinancialQuiz";
import { SCHEDULE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "How We Work",
  description:
    "A clear planning process before any commitment: a complimentary intro call, three engagement options, and plain-language recommendations. Newport Beach, CA.",
};

export default function HowWeWorkPage() {
  return (
    <>
      <PageHero
        eyebrow="How We Work"
        title="A clear process, before any commitment."
        description="You will always know what happens next, what it costs, and what you receive. That is the standard."
        crumbLabel="How We Work"
      />
      <section className="section">
        <div className="wrap hero-grid">
          <div>
            <p className="eyebrow">Behind Every Plan</p>
            <h2>Real conversations, real numbers.</h2>
            <p>
              Every recommendation starts on paper, gets tested against your actual numbers, and
              only becomes a plan once it holds up in plain language, not just in an illustration.
            </p>
          </div>
          <div>
            <img className="env-photo" src="/assets/workspace.jpg" alt="Financial planning documents and laptops during a strategy session" />
          </div>
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          <div className="steps">
            <div className="step">
              <p className="num">Step One</p>
              <h3>Complimentary Intro Call</h3>
              <p>
                A needs analysis and goal-based conversation. Before we meet, you receive a short
                list of questions by email so our time together is focused on you, not paperwork.
              </p>
            </div>
            <div className="step">
              <p className="num">Step Two</p>
              <h3>Choose Your Path</h3>
              <p>
                Based on your goals and complexity, we recommend one of three planning engagements.
                You choose. There is never an obligation to move forward.
              </p>
            </div>
            <div className="step">
              <p className="num">Step Three</p>
              <h3>Plan, Decide, Act</h3>
              <p>
                You receive clear recommendations in plain language, with every option explained:
                what it is, why it fits, and what it costs. Then we help you put it into motion.
              </p>
            </div>
          </div>
          <div className="tiers">
            <div className="tier">
              <h3>Foundational</h3>
              <p className="tag">Focused Planning</p>
              <ul>
                <li>Complimentary intro call and needs analysis</li>
                <li>Review of your current financial picture</li>
                <li>Identify your key areas of opportunity</li>
                <li>Focused recommendations on one or two priorities</li>
                <li>Written summary you keep, whether or not we work together again</li>
              </ul>
              <a className="btn btn-light" href={SCHEDULE_URL} target="_blank" rel="noopener">Start Here</a>
            </div>
            <div className="tier featured">
              <h3>Comprehensive</h3>
              <p className="tag">Full Holistic Plan</p>
              <ul>
                <li>Everything in Foundational</li>
                <li>In-depth needs analysis across your full financial picture</li>
                <li>Holistic recommendations: insurance, tax efficiency, investments, cash flow</li>
                <li>Estate planning review and readiness questions</li>
                <li>Complete written financial plan</li>
                <li>Follow-up meeting to walk through every recommendation</li>
              </ul>
              <a className="btn btn-dark btn-on-dark" href={SCHEDULE_URL} target="_blank" rel="noopener">Most Popular</a>
            </div>
            <div className="tier">
              <h3>Elite</h3>
              <p className="tag">Ongoing Partnership</p>
              <ul>
                <li>Everything in Comprehensive</li>
                <li>Implementation support on every recommendation</li>
                <li>Ongoing reviews throughout the year</li>
                <li>Coordination with your CPA and estate attorney</li>
                <li>Year-round access as life and laws change</li>
                <li>A standing partner for every major financial decision</li>
              </ul>
              <a className="btn btn-light" href={SCHEDULE_URL} target="_blank" rel="noopener">Request a Proposal</a>
            </div>
          </div>
          <p className="tiers-note">
            Every engagement begins with a complimentary review. Your exact fee is quoted in writing
            before you commit to anything, so there are never surprises. Insurance products, when
            recommended and chosen, are compensated separately by the insurance carrier.
          </p>
        </div>
      </section>
      <section className="section" id="case-studies">
        <div className="wrap">
          <div className="section-head center">
            <p className="eyebrow">Case Studies</p>
            <h2>What a plan looks like in practice.</h2>
            <p>
              Two illustrative examples of how a Comprehensive plan comes together for different
              households. Names, numbers, and circumstances below are hypothetical composites created
              for illustration, not actual clients.
            </p>
          </div>
          <div className="case-grid">
            <div className="case-card">
              <p className="cat">Case Study · High-Earning Family</p>
              <h3>The Whitfield Family</h3>
              <p className="subtitle">Dual-income household, Newport Beach, CA · two children, ages 6 and 9</p>
              <div className="case-stats">
                <div className="case-stat">
                  <p className="label">Household Income</p>
                  <p className="value">$650,000/yr</p>
                </div>
                <div className="case-stat">
                  <p className="label">Engagement</p>
                  <p className="value">Comprehensive</p>
                </div>
                <div className="case-stat">
                  <p className="label">Est. Annual Premium</p>
                  <p className="value">$15,600</p>
                </div>
              </div>
              <h4>The Challenge</h4>
              <p>
                David and Priya had strong incomes but no coordinated plan. Their employer life
                insurance would not come close to replacing either income, they had no long-term care
                protection, and they were saving for college in a single account with no strategy
                behind it.
              </p>
              <h4>What We Did</h4>
              <ul>
                <li>$2,000,000 term life insurance on David, $1,500,000 on Priya, sized to fully replace both incomes</li>
                <li>A long-term care rider added to a permanent policy, protecting retirement assets from a future care event</li>
                <li>529 college savings accounts opened for both children, coordinated with new Trump Accounts to add a second, tax-advantaged savings track</li>
                <li>Full holistic plan covering cash flow, tax efficiency, and estate planning readiness</li>
              </ul>
              <h4>The Outcome</h4>
              <p>
                Both incomes are now protected, a future long-term care need would not derail their
                retirement, and their college funding strategy is projected to cover the majority of a
                four-year public university for each child.
              </p>
            </div>
            <div className="case-card">
              <p className="cat">Case Study · Single Business Owner</p>
              <h3>Monica Reyes</h3>
              <p className="subtitle">Single mother and business owner, Newport Beach, CA · two children, ages 8 and 11</p>
              <div className="case-stats">
                <div className="case-stat">
                  <p className="label">Personal Income</p>
                  <p className="value">$350,000/yr</p>
                </div>
                <div className="case-stat">
                  <p className="label">Engagement</p>
                  <p className="value">Foundational</p>
                </div>
                <div className="case-stat">
                  <p className="label">Est. Monthly Premium</p>
                  <p className="value">$74</p>
                </div>
              </div>
              <h4>The Challenge</h4>
              <p>
                As the sole owner of her business and the only income in her household, Monica had no
                plan for what would happen to her children financially if something happened to her.
                Life insurance had always felt like something to get to later.
              </p>
              <h4>What We Did</h4>
              <ul>
                <li>$1,500,000 term life insurance policy, with proceeds directed to a trust for her children's benefit</li>
                <li>Guardianship and beneficiary designations coordinated with her estate documents</li>
                <li>A simple, written summary she could act on immediately, with no pressure to purchase anything further</li>
              </ul>
              <h4>The Outcome</h4>
              <p>
                Coverage was approved and in place within a few weeks, at a cost that fit easily
                within her budget. Monica has since moved into a Comprehensive engagement as her
                business has grown.
              </p>
            </div>
          </div>
          <p className="case-disclaimer">
            The individuals, households, and figures shown above are hypothetical composites created
            for illustrative purposes only. They do not represent actual clients of Essential Trust
            Financial, and are not a guarantee or projection of results. Insurance premiums vary by
            carrier, product, health, and underwriting outcome. This is not tax, legal, or investment
            advice; consult your own tax advisor or attorney. Contact us for recommendations based on
            your own circumstances.
          </p>
        </div>
      </section>
      <section className="section" id="quiz" style={{ background: "var(--mist)" }}>
        <div className="wrap">
          <div className="section-head center">
            <p className="eyebrow">Financial Readiness Quiz</p>
            <h2>How protected is your financial life?</h2>
            <p>Eight questions, about two minutes, no email required. See where you stand and what to do next.</p>
          </div>
          <FinancialQuiz />
        </div>
      </section>
      <FinalCta />
    </>
  );
}
