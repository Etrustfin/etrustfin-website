import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import FinalCta from "@/components/FinalCta";
import AccordionItem from "@/components/AccordionItem";

export const metadata: Metadata = {
  title: "Who We Serve",
  description:
    "Essential Trust Financial serves affluent professionals, female entrepreneurs, six-figure earners, and families in transition with holistic wealth planning.",
};

const RISK_ROWS: { domain: string; risk: string; example: string; protection: string }[] = [
  { domain: "Business", risk: "Key person loss", example: "A top salesperson or technical partner dies unexpectedly", protection: "Key Man Insurance" },
  { domain: "Business", risk: "Ownership transition", example: "A co-owner dies or exits with no funded plan to buy them out", protection: "Buy-Sell Agreement" },
  { domain: "Business", risk: "Employee turnover", example: "Competitors offer better benefits and poach staff", protection: "Group 401(k), Group Health, Group Life" },
  { domain: "Business", risk: "Tax inefficiency", example: "Business overpays taxes with no qualified plan or deductible compensation structure", protection: "Group 401(k), Executive Bonus Plan" },
  { domain: "Business", risk: "Sale readiness", example: "Business is undervalued or unsellable with no continuity plan in place", protection: "Buy-Sell Agreement, Key Man Insurance" },
  { domain: "Personal", risk: "Premature death", example: "A primary income earner dies, leaving family without income replacement", protection: "Life Insurance" },
  { domain: "Personal", risk: "Outdated estate plan", example: "Assets pass through probate or to the wrong people because documents were never updated", protection: "Will & Trust Review" },
  { domain: "Personal", risk: "Longevity risk", example: "Retirement savings run out because the withdrawal plan was never modeled against a real timeline", protection: "Retirement Plan, Wealth Plan" },
  { domain: "Personal", risk: "Uncoordinated accounts", example: "Investment, insurance, and estate decisions made separately conflict with each other", protection: "Comprehensive Wealth Management" },
  { domain: "Personal", risk: "Social Security missteps", example: "Claiming at the wrong time leaves lifetime income on the table", protection: "Social Security Guidance" },
];

const PROCESS_LIST = [
  { title: "Life Insurance Review", body: "Confirm coverage matches current obligations, income replacement, debt, dependents, not what was purchased years ago under different circumstances." },
  { title: "Will & Trust Review", body: "Confirm estate documents exist, are current, and actually reflect your wishes and family situation today." },
  { title: "Wealth Plan", body: "Build a coordinated plan across all accounts and assets rather than managing them in isolation." },
  { title: "Retirement Plan", body: "Model income needs and savings strategy against a real retirement timeline." },
  { title: "College Savings", body: "Plan education funding without compromising retirement savings to do it." },
  { title: "Comprehensive Wealth Management", body: "A ground-up, holistic view that connects every piece above into one plan instead of separate, disconnected decisions." },
  { title: "Social Security Guidance", body: "Identify the claiming strategy that fits your specific situation, since the default choice is rarely the optimal one." },
];

export default function WhoWeServePage() {
  return (
    <>
      <PageHero
        eyebrow="Who We Serve"
        title="Built for real complexity and real goals."
        description="Great planning starts with understanding who you are and what you are facing. These are the people we know best."
        crumbLabel="Who We Serve"
      />

      <section className="section">
        <div className="wrap">
          <div className="serve-grid">
            <div className="serve with-photo" id="professionals">
              <div className="serve-figure">
                <img src="/assets/signing.jpg" alt="A professional signing planning documents" />
              </div>
              <div className="serve-pad">
                <h3>Affluent Professionals</h3>
                <p className="intro">
                  Tech, legal, and medical professionals with strong incomes and no time to manage
                  the complexity that comes with them.
                </p>
                <h4>What you are likely facing</h4>
                <ul>
                  <li>Equity compensation, RSUs, or partnership income with confusing tax consequences</li>
                  <li>High income, high taxes, and the feeling you are leaving money on the table</li>
                  <li>Old 401(k)s and accounts scattered across past employers</li>
                  <li>No time to coordinate it all, and no single advisor who sees the whole picture</li>
                </ul>
                <p className="how">
                  <strong>How we help:</strong> one coordinated strategy across income, taxes,
                  protection, and investments, managed by a fiduciary who explains every
                  recommendation in plain language.
                </p>
              </div>
            </div>

            <div className="serve" id="women">
              <h3>Female Entrepreneurs</h3>
              <p className="intro">
                Business owners who want clarity, structure, and an advisor who listens before
                recommending.
              </p>
              <h4>What you are likely facing</h4>
              <ul>
                <li>Personal and business finances tangled together</li>
                <li>Irregular income that makes saving and planning feel impossible</li>
                <li>No retirement structure beyond the business itself</li>
                <li>Advisors who talk past you instead of with you</li>
              </ul>
              <p className="how">
                <strong>How we help:</strong> separating and structuring business and personal
                wealth, building protection for both, and creating a retirement strategy that does
                not depend on selling the company at the perfect moment.
              </p>
            </div>

            <div className="serve" id="earners">
              <h3>Six-Figure Earners Building Wealth</h3>
              <p className="intro">
                High earners ready to move from earning well to building real, protected wealth.
              </p>
              <h4>What you are likely facing</h4>
              <ul>
                <li>Good income, but savings that are not growing with intention</li>
                <li>Uncertainty about which accounts to fund first and why</li>
                <li>Coverage gaps you would not discover until it is too late</li>
                <li>A nagging sense that you should be further along</li>
              </ul>
              <p className="how">
                <strong>How we help:</strong> a clear order of operations for your money, a
                protection foundation sized to your actual needs, and a written plan that turns
                income into lasting wealth.
              </p>
            </div>

            <div className="serve with-photo" id="families">
              <div className="serve-figure">
                <img src="/assets/family.jpg" alt="A family sharing a meal together at home" />
              </div>
              <div className="serve-pad">
                <h3>Families in Transition</h3>
                <p className="intro">
                  Households preparing for major moments: homeownership, inheritance, a growing
                  family, or early retirement.
                </p>
                <h4>What you are likely facing</h4>
                <ul>
                  <li>A large decision with permanent consequences and no roadmap</li>
                  <li>An inheritance or windfall and pressure to handle it wisely</li>
                  <li>Estate documents that do not exist or have not been updated</li>
                  <li>Two spouses with different comfort levels around money</li>
                </ul>
                <p className="how">
                  <strong>How we help:</strong> guidance through the transition itself, plus a
                  durable plan for what comes after, so one big moment becomes the start of
                  generational stability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--mist)" }}>
        <div className="wrap">
          <div className="section-head">
            <p className="eyebrow">Two Tracks, One Approach</p>
            <h2>Business owners and individuals, protected from the ground up.</h2>
            <p>
              Every plan starts the same way: identify where you are exposed, then build the
              protection to close it. Below is how that works for a business, and how it works
              personally.
            </p>
          </div>

          <div className="track" id="business-owners">
            <div className="track-head">
              <img src="/assets/signing.jpg" alt="A professional signing planning documents" />
              <div>
                <h3>For the Business Owner</h3>
                <p>
                  Running a business creates risk in places most owners do not think to look until
                  something goes wrong. A key employee leaves. A partner becomes disabled. The
                  business is sold, or it is not, because there was never a plan for what happens if
                  a co-owner dies. Corporate Protection &amp; Benefits Planning identifies where a
                  business is exposed and builds the structure to protect it, while also solving for
                  taxes, retention, and retirement savings along the way.
                </p>
              </div>
            </div>

            <h4
              style={{
                fontSize: 12,
                letterSpacing: ".18em",
                textTransform: "uppercase",
                fontWeight: 700,
                color: "var(--stone)",
                fontFamily: "var(--body)",
                marginBottom: 16,
              }}
            >
              We Start With a Review Checklist
            </h4>
            <ul className="checklist">
              <li>Group 401(k)</li>
              <li>Group Life Insurance</li>
              <li>Group Health Insurance</li>
              <li>Group Accidental Death &amp; Dismemberment (AD&amp;D)</li>
              <li>Executive Bonus Plan</li>
              <li>Key Man Insurance</li>
              <li>Buy-Sell Agreement</li>
            </ul>

            <div className="svc-list">
              <AccordionItem id="grp401k" title="Group 401(k)">
                <div className="svc-inner">
                  <div>
                    <p>
                      <strong>Risk it addresses:</strong> without a retirement plan, owners lose
                      competitive standing in hiring and employees have no structured way to save,
                      which increases turnover risk. Owners without their own qualified plan are
                      also missing a legitimate tax-deferral vehicle.
                    </p>
                    <p>
                      <strong>Example:</strong> a 12-person medical practice adds a Group 401(k)
                      with a 3% match. The owner is now able to defer significantly more of her own
                      income than an IRA allowed, and two long-tenured staff who had been recruited
                      by a competitor stay.
                    </p>
                  </div>
                  <div>
                    <h4>How It Helps</h4>
                    <ul>
                      <li>Taxes: employer contributions are generally deductible, and the plan lets the owner defer more of her own income</li>
                      <li>Retention: matching and vesting give employees a financial reason to stay</li>
                      <li>Retirement savings: employees save automatically through payroll deduction</li>
                    </ul>
                  </div>
                </div>
              </AccordionItem>
              <AccordionItem id="grplife" title="Group Life Insurance">
                <div className="svc-inner">
                  <div>
                    <p>
                      <strong>Risk it addresses:</strong> if an employee dies, their family has no
                      employer-provided support, and remaining employees see the company offers no
                      protection for their families either, a retention and morale risk.
                    </p>
                    <p>
                      <strong>Example:</strong> a construction firm with physically demanding work
                      adds a $50,000 group life policy for all full-time employees at low cost per
                      employee, and it becomes one of the most mentioned benefits in employee
                      satisfaction surveys.
                    </p>
                  </div>
                  <div>
                    <h4>How It Helps</h4>
                    <ul>
                      <li>Low-cost, high-perceived-value benefit</li>
                      <li>Strengthens loyalty and morale relative to its cost</li>
                    </ul>
                  </div>
                </div>
              </AccordionItem>
              <AccordionItem id="grphealth" title="Group Health Insurance">
                <div className="svc-inner">
                  <div>
                    <p>
                      <strong>Risk it addresses:</strong> without coverage, employees carry personal
                      financial risk from medical events, and businesses lose nearly every hiring
                      competition against companies that do offer it.
                    </p>
                    <p>
                      <strong>Example:</strong> a growing marketing agency loses two job offers to
                      competitors before adding a group health plan. Offer-acceptance improves
                      within the next hiring cycle.
                    </p>
                  </div>
                  <div>
                    <h4>How It Helps</h4>
                    <ul>
                      <li>Often the single most-weighted factor in a hiring decision</li>
                      <li>Directly addresses hiring competitiveness</li>
                    </ul>
                  </div>
                </div>
              </AccordionItem>
              <AccordionItem id="grpadd" title="Group Accidental Death & Dismemberment">
                <div className="svc-inner">
                  <div>
                    <p>
                      <strong>Risk it addresses:</strong> standard life insurance does not always
                      account for the added financial impact of an accidental death or disabling
                      injury, particularly in physically active industries.
                    </p>
                    <p>
                      <strong>Example:</strong> a landscaping company adds AD&amp;D coverage after a
                      near-miss equipment accident makes the owner realize standard life insurance
                      would not have covered the added costs of a disabling injury.
                    </p>
                  </div>
                  <div>
                    <h4>How It Helps</h4>
                    <ul>
                      <li>Low-cost addition that closes a specific coverage gap</li>
                      <li>Often added alongside group life at minimal incremental cost</li>
                    </ul>
                  </div>
                </div>
              </AccordionItem>
              <AccordionItem id="execbonus" title="Executive Bonus Plan">
                <div className="svc-inner">
                  <div>
                    <p>
                      <strong>Risk it addresses:</strong> owners often want to reward a key executive
                      beyond salary in a way that is simple, tax-deductible to the business, and
                      does not require the complexity of a qualified retirement plan.
                    </p>
                    <p>
                      <strong>Example:</strong> a business owner wants to reward her CFO without
                      opening a new retirement plan to all employees. An executive bonus plan lets
                      her direct a specific, deductible benefit to just that one person.
                    </p>
                  </div>
                  <div>
                    <h4>How It Helps</h4>
                    <ul>
                      <li>Taxes: the bonus is generally deductible to the business as ordinary compensation</li>
                      <li>Retention: can be structured to vest over time so the benefit grows the longer the executive stays</li>
                    </ul>
                  </div>
                </div>
              </AccordionItem>
              <AccordionItem id="keyman" title="Key Man Insurance">
                <div className="svc-inner">
                  <div>
                    <p>
                      <strong>Risk it addresses:</strong> if a key person, an owner, a top
                      salesperson, a technical lead, dies unexpectedly, the business can lose
                      revenue, client relationships, or institutional knowledge that took years to
                      build, sometimes threatening the business&rsquo;s survival.
                    </p>
                    <p>
                      <strong>Example:</strong> a two-partner engineering firm carries a $1M key man
                      policy on each partner. When one partner passes away unexpectedly, the payout
                      covers 18 months of operating costs while the surviving partner restructures
                      the business.
                    </p>
                  </div>
                  <div>
                    <h4>How It Helps</h4>
                    <ul>
                      <li>Gives the business capital to cover lost revenue during a transition</li>
                      <li>Funds recruiting and training a replacement</li>
                      <li>Reassures lenders and partners the business can absorb the loss</li>
                    </ul>
                  </div>
                </div>
              </AccordionItem>
              <AccordionItem id="buysell" title="Buy-Sell Agreement">
                <div className="svc-inner">
                  <div>
                    <p>
                      <strong>Risk it addresses:</strong> without one, a deceased owner&rsquo;s share
                      can pass to their spouse or heirs, who may have no interest or ability to run
                      the business, and surviving partners may have no funded way to buy them out.
                    </p>
                    <p>
                      <strong>Example:</strong> three partners in a dental practice sign a buy-sell
                      agreement funded by life insurance on each of them. When one partner
                      unexpectedly passes away, the other two use the policy payout to buy his share
                      directly from his family at a pre-agreed valuation.
                    </p>
                  </div>
                  <div>
                    <h4>How It Helps</h4>
                    <ul>
                      <li>Provides a pre-agreed valuation for the business</li>
                      <li>Funds a clean transition instead of a forced sale or an unwanted new partner</li>
                    </ul>
                  </div>
                </div>
              </AccordionItem>
            </div>

            <div className="outcome-box">
              <h4>The Comprehensive Outcome</h4>
              <div className="outcome-grid">
                <div className="oi">
                  <div className="letter">A</div>
                  <p>
                    <strong style={{ color: "#fff" }}>Taxes.</strong> Deductible contributions and
                    structured compensation reduce the business&rsquo;s tax burden.
                  </p>
                </div>
                <div className="oi">
                  <div className="letter">B</div>
                  <p>
                    <strong style={{ color: "#fff" }}>Employee Retention.</strong> A real benefits
                    package gives employees a financial reason to stay.
                  </p>
                </div>
                <div className="oi">
                  <div className="letter">C</div>
                  <p>
                    <strong style={{ color: "#fff" }}>Retirement Savings.</strong> Employees and
                    owners both build long-term savings through the business.
                  </p>
                </div>
                <div className="oi">
                  <div className="letter">D</div>
                  <p>
                    <strong style={{ color: "#fff" }}>Business Continuity &amp; Sale Readiness.</strong>{" "}
                    Buy-sell and key man coverage protect the business&rsquo;s ability to survive a
                    transition, and a business with these structures already in place is more
                    attractive to a future buyer.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="track" id="individuals">
            <div className="track-head">
              <img src="/assets/family.jpg" alt="A family sharing a meal together at home" />
              <div>
                <h3>For the Individual</h3>
                <p>
                  The same principle applies personally. Wealth built without a protection plan
                  behind it is exposed, to an early death, a market downturn, a poorly drafted or
                  outdated estate document, or simply outliving retirement savings. We build
                  personal plans the same way we build business ones: identify the risk first, then
                  solve for it.
                </p>
              </div>
            </div>
            <ol className="process-list">
              {PROCESS_LIST.map((item) => (
                <li key={item.title}>
                  <div className="pl-body">
                    <h4>{item.title}</h4>
                    <p>{item.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div className="risk-section">
            <div className="section-head">
              <p className="eyebrow">Holistic Risk Review</p>
              <h2>Risk and protection, side by side.</h2>
              <p>
                The same lens applies whether the risk sits inside a business or inside a household:
                identify it, then close it.
              </p>
            </div>
            <div className="risk-table-wrap">
              <table className="risk-table">
                <thead>
                  <tr>
                    <th>Domain</th>
                    <th>Risk</th>
                    <th>Example</th>
                    <th>Protection Method</th>
                  </tr>
                </thead>
                <tbody>
                  {RISK_ROWS.map((row) => (
                    <tr key={row.risk}>
                      <td className="risk-domain">{row.domain}</td>
                      <td className="risk-type">{row.risk}</td>
                      <td>{row.example}</td>
                      <td>{row.protection}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
      <FinalCta />
    </>
  );
}
