import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import FinalCta from "@/components/FinalCta";
import AccordionItem from "@/components/AccordionItem";
import InsuranceCalculator from "@/components/InsuranceCalculator";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Holistic financial planning, tax-efficient strategies, life insurance, estate and legacy support, generational wealth, and wealth planning for women in Newport Beach, CA.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="What We Do"
        title="Six areas, one connected plan."
        description="Every engagement is explained in plain language, with no obligation at any step. Select an area to see what it includes."
        crumbLabel="Services"
      />

      <section className="section">
        <div className="wrap">
          <div className="svc-list">
            <AccordionItem id="holistic" title="Holistic Financial Planning" defaultOpen>
              <div className="svc-inner">
                <div>
                  <p>
                    Most people do not have a financial plan. They have a collection of accounts: a
                    401(k) here, an insurance policy there, a will that has not been reviewed in
                    years. Holistic planning connects every piece so each decision is made based on
                    how it affects everything else.
                  </p>
                  <p>
                    You receive one written plan covering your income, savings, protection, taxes,
                    investments, and estate readiness, with a clear order of operations: what to do
                    first, what to do next, and why.
                  </p>
                </div>
                <div>
                  <h4>Includes</h4>
                  <ul>
                    <li>Full financial inventory and goal mapping</li>
                    <li>Cash flow and savings strategy</li>
                    <li>Coverage and risk review</li>
                    <li>Written plan with prioritized action steps</li>
                  </ul>
                </div>
              </div>
            </AccordionItem>

            <AccordionItem id="tax" title="Tax-Efficient Wealth Strategies">
              <div className="svc-inner">
                <div>
                  <p>
                    Taxes are most families&rsquo; single largest lifetime expense, and most of the
                    savings do not happen in April. They happen in the planning you do the other
                    eleven months: which accounts you fund, when you convert, how you draw income,
                    and how your investments are located.
                  </p>
                  <p>
                    We coordinate your saving, investing, and income decisions to reduce what you
                    lose to taxes over a lifetime, working alongside your CPA where needed. We do
                    not prepare returns or give tax advice; we build the strategy your tax
                    professional executes against.
                  </p>
                </div>
                <div>
                  <h4>Includes</h4>
                  <ul>
                    <li>Tax bucket analysis: taxable, tax-deferred, tax-free</li>
                    <li>Roth conversion evaluation</li>
                    <li>Account funding order of operations</li>
                    <li>Coordination with your CPA</li>
                  </ul>
                </div>
              </div>
            </AccordionItem>

            <AccordionItem id="insurance" title="Advanced Life Insurance Strategies">
              <div className="svc-inner">
                <div>
                  <p>
                    Life insurance exists to answer one question: if your income disappeared
                    tomorrow, would the people who depend on you be okay? Our founder lived the
                    answer when the answer was no. That is why coverage here is calculated, never
                    guessed.
                  </p>
                  <p>
                    We design term, whole life, and indexed universal life (IUL) strategies around
                    what your family would actually need: income replacement, debt, education, and
                    final expenses. Term for pure protection, whole life where a guaranteed,
                    permanent benefit matters most, and IUL where permanent coverage with
                    tax-advantaged accumulation genuinely fits the plan. If a product does not serve
                    the plan, it is not recommended. Period.{" "}
                    <a href="#insurance-types">
                      See the full comparison, a live needs calculator, and answers to common
                      questions below.
                    </a>
                  </p>
                </div>
                <div>
                  <h4>Includes</h4>
                  <ul>
                    <li>Needs-based coverage calculation</li>
                    <li>Term life insurance design</li>
                    <li>Whole life insurance evaluation</li>
                    <li>Indexed universal life (IUL) evaluation</li>
                    <li>Existing policy review and audit</li>
                  </ul>
                </div>
              </div>
            </AccordionItem>

            <AccordionItem id="estate" title="Estate & Legacy Planning Support">
              <div className="svc-inner">
                <div>
                  <p>
                    Estate planning is deciding, in advance and in writing, what happens to
                    everything you own and everyone you love if you cannot decide. Without it, the
                    state of California decides for you, through a public probate process that costs
                    your family time, money, and stress at the worst possible moment.
                  </p>
                  <p>
                    We help you organize beneficiaries, documents, and intentions, identify what is
                    missing, and prepare you to work efficiently with an estate attorney. We do not
                    draft legal documents; we make sure you walk into that attorney&rsquo;s office
                    knowing exactly what you need.
                  </p>
                </div>
                <div>
                  <h4>Includes</h4>
                  <ul>
                    <li>Estate readiness review</li>
                    <li>Beneficiary audit across every account and policy</li>
                    <li>Will and trust preparation checklist</li>
                    <li>Family organization: where everything is, who to call</li>
                  </ul>
                </div>
              </div>
            </AccordionItem>

            <AccordionItem id="generational" title="Generational & Inherited Wealth">
              <div className="svc-inner">
                <div>
                  <p>
                    Receiving wealth is a responsibility most people are never taught to carry.
                    Studies consistently show the majority of inherited wealth is gone by the second
                    generation, usually not from bad markets, but from no plan and no preparation.
                  </p>
                  <p>
                    Whether you are receiving an inheritance or planning to leave one, we help you
                    structure it with intention: protecting it from avoidable taxes and avoidable
                    mistakes, and preparing the next generation to manage it responsibly.
                  </p>
                </div>
                <div>
                  <h4>Includes</h4>
                  <ul>
                    <li>Inheritance planning and integration</li>
                    <li>Inherited account rules and timelines, explained simply</li>
                    <li>Multigenerational wealth strategy</li>
                    <li>Family financial education</li>
                  </ul>
                </div>
              </div>
            </AccordionItem>

            <AccordionItem id="women" title="Wealth Planning for Women">
              <div className="svc-inner">
                <div>
                  <p>
                    Women control a rapidly growing share of wealth, live longer on average, and are
                    statistically more likely to manage money alone at some point in life. The
                    industry has been slow to plan for any of that.
                  </p>
                  <p>
                    Founded by a woman who built her firm from a hard lesson about financial
                    vulnerability, Essential Trust Financial offers dedicated planning for female
                    entrepreneurs and professionals: clarity over jargon, structure over sales, and
                    confidence built through understanding, not dependence.
                  </p>
                </div>
                <div>
                  <h4>Includes</h4>
                  <ul>
                    <li>Planning for longer life expectancy</li>
                    <li>Business and personal wealth structure</li>
                    <li>Independence planning: divorce, widowhood, single by choice</li>
                    <li>Education-first advising, every meeting</li>
                  </ul>
                </div>
              </div>
            </AccordionItem>
          </div>
          <div style={{ marginTop: 44 }}>
            <Link className="btn btn-light" href="/concepts">Explore the Concepts Library</Link>
          </div>
        </div>
      </section>

      <section className="section" id="insurance-types" style={{ background: "var(--mist)" }}>
        <div className="wrap">
          <div className="jump-links" style={{ justifyContent: "center" }}>
            <a href="#insurance-types">Term vs. Whole Life vs. IUL</a>
            <a href="#insurance-calculator">Needs Calculator</a>
            <a href="#premium-financing">Premium Financing</a>
            <a href="#insurance-faq">FAQ</a>
          </div>
          <div className="section-head center">
            <p className="eyebrow">Life Insurance in Plain Language</p>
            <h2>Term, whole life, and IUL: what each one actually does.</h2>
            <p>
              No product is better than another in the abstract. Each one is a tool for a specific
              job. Here is what each does, the best-case situation for using it, and two real-world
              examples.
            </p>
          </div>
          <div className="tiers">
            <div className="tier">
              <h3>Term Life</h3>
              <p className="tag">Pure Protection, Lowest Cost</p>
              <p>
                A level death benefit for a set period, typically 10, 15, 20, or 30 years, with a
                level premium for that same period. There is no cash value. If you outlive the term,
                the coverage ends unless you renew or convert it, usually at a higher cost.
              </p>
              <p>
                <strong>Best-case scenario:</strong> your need is large but temporary, tied to a
                specific window of time such as raising children, paying off a mortgage, or
                replacing income until retirement savings can stand on their own.
              </p>
              <ul>
                <li>
                  Example: a 35-year-old parent buys a $1,000,000, 20-year term policy so that if
                  something happens before the kids are grown and the mortgage is mostly paid down,
                  the family&rsquo;s income and home are protected without a large premium.
                </li>
                <li>
                  Example: a business owner buys a $500,000, 10-year term policy as key-person
                  coverage, bridging the years until the business has built enough reserves to
                  self-insure that risk.
                </li>
              </ul>
            </div>
            <div className="tier">
              <h3>Whole Life</h3>
              <p className="tag">Guaranteed, Permanent Coverage</p>
              <p>
                Permanent coverage with a level, guaranteed premium, a guaranteed minimum cash value
                that grows on a contractual schedule, and a guaranteed death benefit that does not
                expire as long as premiums are paid. Some policies pay dividends, which are not
                guaranteed.
              </p>
              <p>
                <strong>Best-case scenario:</strong> the need is genuinely permanent, and you want
                contractual guarantees rather than market-linked upside. This is often the right fit
                for final expenses, estate liquidity, or a dependent who will need support for life.
              </p>
              <ul>
                <li>
                  Example: a client with a special needs adult child uses whole life to guarantee a
                  death benefit that will exist no matter how long the client lives, funding a
                  special needs trust regardless of market conditions.
                </li>
                <li>
                  Example: a business owner uses whole life cash value as a stable, guaranteed-growth
                  reserve to borrow against for opportunities, while keeping a permanent death
                  benefit in place for estate tax liquidity.
                </li>
              </ul>
            </div>
            <div className="tier">
              <h3>Indexed Universal Life</h3>
              <p className="tag">Permanent, With Tax-Advantaged Upside</p>
              <p>
                Permanent coverage with flexible premiums. Cash value is credited based partly on
                the performance of a market index, subject to a cap and a floor (often 0%), so it is
                not directly invested in the market and cannot lose value to a market downturn.
                Caps, costs, and other policy charges are not guaranteed and can change over time.
              </p>
              <p>
                <strong>Best-case scenario:</strong> the need is permanent, you want tax-advantaged
                accumulation with some upside participation, no downside market risk, and you are
                prepared to fund the policy properly rather than underfund it.
              </p>
              <ul>
                <li>
                  Example: a business owner overfunds an IUL for two decades to build cash value,
                  then takes policy loans in retirement as a supplemental, tax-advantaged income
                  stream alongside a 401(k) and Roth accounts.
                </li>
                <li>
                  Example: a parent funds an IUL for a child from birth, using decades of
                  tax-advantaged growth to help fund a future goal such as a home down payment,
                  while the child also gains lifetime insurability regardless of future health
                  changes.
                </li>
              </ul>
            </div>
          </div>
          <p className="tiers-note">
            This is educational information, not a recommendation of any specific product.
            Illustrated values for whole life and IUL policies include non-guaranteed elements such
            as dividends, index credits, and current cost of insurance charges, which can change.
            Which structure, if any, fits your situation depends on your full financial picture.
          </p>
        </div>
      </section>

      <section className="section" id="insurance-calculator">
        <div className="wrap">
          <div className="section-head center">
            <p className="eyebrow">Live Tool</p>
            <h2>How much life insurance do you actually need?</h2>
            <p>
              This uses an income-replacement method: what it would take to replace your income for
              a set number of years, plus your debts and future obligations, minus what you already
              have in place. Adjust the numbers to see your estimate update instantly.
            </p>
          </div>
          <InsuranceCalculator />
        </div>
      </section>

      <section className="section" id="premium-financing" style={{ background: "var(--mist)" }}>
        <div className="wrap">
          <div className="section-head center">
            <p className="eyebrow">Advanced Strategy</p>
            <h2>Premium financing, explained.</h2>
            <p>
              Premium financing is a strategy for large, permanent life insurance needs. Instead of
              paying premiums out of pocket, you borrow the premium from a third-party lender,
              using the policy and other pledged assets as collateral, and pay loan interest
              instead.
            </p>
          </div>
          <p style={{ maxWidth: 820, margin: "0 auto 8px", color: "var(--graphite)", fontSize: 15.5 }}>
            The appeal is straightforward: it can preserve your liquidity and keep your capital
            invested elsewhere, rather than tied up in premium payments. It is generally considered
            for individuals or business owners who need a large permanent death benefit, often
            $5,000,000 or more, have strong cash flow and creditworthiness, and have assets
            available to pledge as collateral.
          </p>
          <div className="pf-grid" style={{ maxWidth: 900, marginLeft: "auto", marginRight: "auto" }}>
            <div className="pf-example">
              <p className="tag">Example: Buy-Sell Funding</p>
              <p>
                A 50-year-old business owner needs $10,000,000 of permanent coverage to fund a
                buy-sell agreement with a partner. Rather than pay a large annual premium out of
                pocket, the owner finances it through a bank, pledging marketable securities as
                collateral and paying interest on the loan, which preserves capital to keep
                reinvesting in the business.
              </p>
            </div>
            <div className="pf-example">
              <p className="tag">Example: Estate Tax Liquidity</p>
              <p>
                A high-net-worth individual with a taxable estate needs $8,000,000 of death benefit
                so heirs are not forced to sell real estate or a family business to pay estate
                taxes. Premium financing funds the policy without liquidating investment accounts,
                using the policy&rsquo;s projected cash value plus posted collateral to secure the
                loan.
              </p>
            </div>
          </div>
          <div className="note-box" style={{ maxWidth: 900, marginLeft: "auto", marginRight: "auto" }}>
            <h4>What Has to Go Right</h4>
            <p>
              Premium financing is a sophisticated strategy, not a shortcut, and it is not right for
              most people. Loan interest rates on these arrangements are usually variable. If rates
              rise faster than the policy&rsquo;s cash value grows, you can be required to post
              additional collateral or pay down the loan, and if the policy underperforms its
              illustration, that gap can widen. It is generally appropriate for individuals with
              significant net worth, strong and stable cash flow, collateral available to pledge,
              and a clearly defined exit strategy agreed upon before the loan is taken out. This is
              never recommended without a full financial review, lender terms in hand, and
              stress-testing the plan against higher interest rates.
            </p>
          </div>
        </div>
      </section>

      <section className="section" id="insurance-faq">
        <div className="wrap">
          <div className="section-head center">
            <p className="eyebrow">Common Questions</p>
            <h2>Life insurance FAQ</h2>
          </div>
          <div className="con-grid">
            <AccordionItem
              variant="con"
              title="If I have group life insurance through work, do I need additional coverage?"
            >
              <p>
                Often, yes. Two things are worth understanding. First, group coverage is usually not
                portable: it is tied to your employment, so if you leave the company, voluntarily or
                not, that coverage typically ends or you are offered a conversion option, often at a
                much higher, age-rated premium and without the same health class you might qualify
                for today. Second, group insurance is guaranteed issue. It does not require
                individual medical underwriting because the risk is pooled across everyone at the
                company; the carrier is pricing the group as a whole, not you personally. Individual
                life insurance is priced differently. The carrier evaluates your specific risk,
                which typically includes a review of your driving history (a motor vehicle report),
                your prescription history, and records held by the Medical Information Bureau, along
                with your application and, in many cases, a medical exam. Buying your own individual
                policy while you are young and healthy locks in your own rate and coverage,
                independent of where you work.
              </p>
            </AccordionItem>
            <AccordionItem variant="con" title="Is life insurance harder to get as you get older?">
              <p>
                Not necessarily harder, but the underwriting math changes. At 21, with limited
                health history and few years on record, you are a smaller, more predictable risk to
                price. Later in life, there is simply more data for the carrier to weigh: more years
                of medical history, more opportunity for something to show up in a prescription or
                driving record, and more actuarial mortality risk built into age itself. More data
                does not automatically mean more problems, but it usually means underwriting has
                more to review, which can take longer and can affect which rate class you land in.
                This is exactly why we ask clients to be patient during underwriting. The carrier is
                not being difficult; it is doing its homework, and rushing that process rarely works
                in your favor.
              </p>
            </AccordionItem>
            <AccordionItem
              variant="con"
              title="I saw an ad for no medical exam life insurance. Why do I have to do an exam with you?"
            >
              <p>
                Some carriers offer accelerated or simplified underwriting, which can approve
                coverage without a paramedical exam by using electronic data instead: prescription
                history, Medical Information Bureau records, motor vehicle records, and sometimes a
                credit-based mortality score. For eligible applicants with a clean profile across
                those sources, a decision can come back quickly, often within days rather than the
                several weeks a fully underwritten policy can take. That said, it is not a blanket
                guarantee. It is typically limited to certain age ranges and coverage amounts, and
                the carrier can still require a traditional exam if anything in the data needs a
                closer look. Whether you qualify for a no-exam offer depends on your specific case,
                including your age, health history, and the amount of coverage you are applying for,
                not a one-size-fits-all rule. We will always tell you honestly whether you are
                likely to qualify before you apply.
              </p>
            </AccordionItem>
            <AccordionItem variant="con" title="How do I determine how much life insurance I need?">
              <p>
                The short answer: your income, your debts, your family&rsquo;s future costs, and
                what you already have in place, weighed against each other. The most reliable way to
                get a real number is to walk through it with a full picture of your finances, but
                you do not have to start there. Use the{" "}
                <a href="#insurance-calculator">live needs calculator above</a> to get an
                educational, ballpark estimate in under a minute, then bring that number to a call
                so we can refine it against your actual situation.
              </p>
            </AccordionItem>
          </div>
        </div>
      </section>
      <FinalCta />
    </>
  );
}
