import Link from "next/link";
import FinalCta from "@/components/FinalCta";
import { GOOGLE_REVIEW_URL, SCHEDULE_URL } from "@/lib/constants";

export default function Home() {
  return (
    <>
      <header className="hero">
        <div className="wrap hero-grid">
          <div>
            <p className="eyebrow">Holistic Wealth Planning &middot; Newport Beach, CA</p>
            <h1>Plan with purpose. Protect what matters. Pass it on with clarity.</h1>
            <p className="lede">
              Essential Trust Financial helps professionals, business owners, and families connect
              every piece of their financial life into one strategy: income, taxes, protection,
              investments, and legacy.
            </p>
            <div className="hero-ctas">
              <a className="btn btn-dark" href={SCHEDULE_URL} target="_blank" rel="noopener">
                Complimentary Planning Review
              </a>
              <Link className="btn btn-light" href="/how-we-work">How We Work</Link>
            </div>
            <p className="hero-note">
              The first conversation is complimentary. It is a needs and goals conversation, not a
              sales meeting.
            </p>
          </div>
          <div className="holo-stage">
            <svg
              className="holo"
              viewBox="0 0 600 600"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="Diagram of holistic planning with you and your family at the center surrounded by income, taxes, protection, investing, estate, and legacy"
            >
              <defs>
                <path
                  id="orbit-text"
                  d="M 300,300 m -262,0 a 262,262 0 1,1 524,0 a 262,262 0 1,1 -524,0"
                />
              </defs>
              <g className="ring-rotor">
                <text
                  style={{
                    fontFamily: "'Mulish',sans-serif",
                    fontSize: 13,
                    letterSpacing: ".42em",
                    textTransform: "uppercase",
                    fontWeight: 700,
                    fill: "#9a9a94",
                  }}
                >
                  <textPath href="#orbit-text">
                    Transparency &middot; Integrity &middot; Purposeful Planning &middot;
                    Transparency &middot; Integrity &middot; Purposeful Planning &middot;&nbsp;
                  </textPath>
                </text>
              </g>
              <circle cx="300" cy="300" r="236" fill="none" stroke="#dcdcd8" strokeWidth="1" />
              <circle
                cx="300"
                cy="300"
                r="172"
                fill="none"
                stroke="#dcdcd8"
                strokeWidth="1"
                strokeDasharray="3 6"
              />
              <circle cx="300" cy="300" r="92" fill="#141414" />
              <text x="300" y="292" textAnchor="middle" style={{ fontFamily: "'Marcellus',serif", fontSize: 21, fill: "#fff" }}>
                You &amp; Your
              </text>
              <text x="300" y="320" textAnchor="middle" style={{ fontFamily: "'Marcellus',serif", fontSize: 21, fill: "#fff" }}>
                Family
              </text>
              <g style={{ fontFamily: "'Mulish',sans-serif", fontSize: 13, fontWeight: 700, letterSpacing: ".08em" }}>
                <line x1="300" y1="208" x2="300" y2="92" stroke="#dcdcd8" />
                <circle cx="300" cy="64" r="40" fill="#fafaf8" stroke="#141414" />
                <text x="300" y="69" textAnchor="middle" fill="#141414">Income</text>
                <line x1="380" y1="254" x2="480" y2="196" stroke="#dcdcd8" />
                <circle cx="504" cy="182" r="40" fill="#fafaf8" stroke="#141414" />
                <text x="504" y="187" textAnchor="middle" fill="#141414">Taxes</text>
                <line x1="380" y1="346" x2="480" y2="404" stroke="#dcdcd8" />
                <circle cx="504" cy="418" r="40" fill="#141414" />
                <text x="504" y="423" textAnchor="middle" fill="#fff">Protection</text>
                <line x1="300" y1="392" x2="300" y2="508" stroke="#dcdcd8" />
                <circle cx="300" cy="536" r="40" fill="#fafaf8" stroke="#141414" />
                <text x="300" y="541" textAnchor="middle" fill="#141414">Estate</text>
                <line x1="220" y1="346" x2="120" y2="404" stroke="#dcdcd8" />
                <circle cx="96" cy="418" r="40" fill="#fafaf8" stroke="#141414" />
                <text x="96" y="423" textAnchor="middle" fill="#141414">Investing</text>
                <line x1="220" y1="254" x2="120" y2="196" stroke="#dcdcd8" />
                <circle cx="96" cy="182" r="40" fill="#141414" />
                <text x="96" y="187" textAnchor="middle" fill="#fff">Legacy</text>
              </g>
            </svg>
          </div>
        </div>
      </header>

      <section className="trust">
        <div className="wrap trust-grid">
          <div className="trust-item">
            <div className="serif">Certified Financial Fiduciary</div>
            <p>Held to a fiduciary standard of care. Your interests come first, in writing.</p>
          </div>
          <div className="trust-item">
            <div className="serif">13+ Years of Experience</div>
            <p>Professional experience guiding individuals, families, and business owners.</p>
          </div>
          <div className="trust-item">
            <div className="serif">Young Professional of the Year</div>
            <p>2023, Newport Beach Chamber of Commerce.</p>
          </div>
          <div className="trust-item">
            <div className="serif">Female Business Owner of the Year</div>
            <p>2024, National Association of Women Business Owners, selected by Bank of America.</p>
          </div>
        </div>
      </section>

      <section className="photo-band" aria-label="Newport Beach, California">
        <img src="/assets/newport.jpg" alt="The Newport Beach, California coastline and harbor at golden hour" />
        <div className="overlay" />
        <div className="pb-content">
          <div className="wrap">
            <p className="eyebrow">Rooted in Newport Beach</p>
            <h2>Local roots. A standard worth traveling for.</h2>
            <p>
              Based on the California coast and serving families and professionals who expect more
              from the people they trust with their future.
            </p>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--white)" }}>
        <div className="wrap">
          <div className="section-head center">
            <p className="eyebrow">Turning Intentions Into Strategy</p>
            <h2>One plan. Every piece working together.</h2>
          </div>
          <div className="pillars-grid">
            <div className="pillar">
              <div className="p-icon">
                <svg viewBox="0 0 48 48" aria-hidden="true">
                  <rect x="7" y="10" width="34" height="30" rx="3" />
                  <line x1="7" y1="19" x2="41" y2="19" />
                  <line x1="16" y1="6" x2="16" y2="13" />
                  <line x1="32" y1="6" x2="32" y2="13" />
                  <circle cx="24" cy="29" r="5" />
                  <path d="M24 26v3l2 2" />
                </svg>
              </div>
              <p className="num">01</p>
              <h3>Schedule Your Planning Review</h3>
              <p>
                We start with a no-pressure conversation to understand your goals, timeline, and
                concerns. You receive a short set of questions by email beforehand, so our time is
                spent on you, not paperwork.
              </p>
              <a href={SCHEDULE_URL} target="_blank" rel="noopener">Schedule Now</a>
            </div>
            <div className="pillar">
              <div className="p-icon">
                <svg viewBox="0 0 48 48" aria-hidden="true">
                  <circle cx="24" cy="24" r="18" />
                  <circle cx="24" cy="24" r="11" strokeDasharray="2 4" />
                  <circle cx="24" cy="24" r="4" />
                  <line x1="24" y1="6" x2="24" y2="13" />
                  <line x1="24" y1="35" x2="24" y2="42" />
                  <line x1="6" y1="24" x2="13" y2="24" />
                  <line x1="35" y1="24" x2="42" y2="24" />
                </svg>
              </div>
              <p className="num">02</p>
              <h3>Holistic Wealth Planning</h3>
              <p>
                We design a custom strategy built around your life and goals: income, tax
                efficiency, life insurance, investments, and estate readiness, connected into one
                written plan in plain language.
              </p>
              <Link href="/services">Explore Services</Link>
            </div>
            <div className="pillar">
              <div className="p-icon">
                <svg viewBox="0 0 48 48" aria-hidden="true">
                  <path d="M6 38 C 14 38, 16 24, 24 24 S 34 10, 42 10" />
                  <circle cx="6" cy="38" r="3" />
                  <circle cx="24" cy="24" r="3" />
                  <circle cx="42" cy="10" r="3" />
                </svg>
              </div>
              <p className="num">03</p>
              <h3>With You Every Step</h3>
              <p>
                A plan is not a document, it is a relationship. As your life evolves, your plan
                evolves with it. We are here for the decisions that matter, year after year.
              </p>
              <Link href="/about">About the Firm</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="journey" aria-label="The planning journey">
        <div className="wrap">
          <h2>Plan. Protect. Grow. Pass it on.</h2>
          <svg
            viewBox="0 0 1200 270"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="An ascending path with four milestones: plan, protect, grow, pass it on"
          >
            <path
              d="M 30,210 C 250,205 360,170 580,140 S 950,75 1170,55"
              fill="none"
              stroke="#dcdcd8"
              strokeWidth="1.5"
            />
            <path d="M 30,210 C 250,205 360,170 580,140" fill="none" stroke="#141414" strokeWidth="1.5" />
            <circle cx="110" cy="205" r="7" fill="#141414" />
            <text x="110" y="237" textAnchor="middle" className="j-label">PLAN</text>
            <text x="110" y="256" textAnchor="middle" className="j-sub">Know where you stand</text>
            <circle cx="430" cy="172" r="7" fill="#141414" />
            <text x="430" y="204" textAnchor="middle" className="j-label">PROTECT</text>
            <text x="430" y="223" textAnchor="middle" className="j-sub">Cover what cannot be replaced</text>
            <circle cx="780" cy="113" r="7" fill="#fafaf8" stroke="#141414" strokeWidth="1.5" />
            <text x="780" y="145" textAnchor="middle" className="j-label">GROW</text>
            <text x="780" y="164" textAnchor="middle" className="j-sub">Build with intention</text>
            <circle cx="1130" cy="59" r="7" fill="#fafaf8" stroke="#141414" strokeWidth="1.5" />
            <text x="1130" y="91" textAnchor="middle" className="j-label">PASS IT ON</text>
            <text x="1130" y="110" textAnchor="middle" className="j-sub">Leave clarity, not chaos</text>
          </svg>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <p className="eyebrow">Who We Serve</p>
            <h2>Built for people with real complexity and real goals.</h2>
            <p>
              Great planning starts with understanding who you are and what you are facing. These
              are the people we know best.
            </p>
          </div>
          <div className="teaser-grid">
            <Link className="teaser" href="/who-we-serve#professionals" style={{ textDecoration: "none" }}>
              <h3>Affluent Professionals</h3>
              <p>
                Tech, legal, and medical professionals with strong incomes and no time to manage the
                complexity that comes with them.
              </p>
            </Link>
            <Link className="teaser" href="/who-we-serve#women" style={{ textDecoration: "none" }}>
              <h3>Female Entrepreneurs</h3>
              <p>
                Business owners who want clarity, structure, and an advisor who listens before
                recommending.
              </p>
            </Link>
            <Link className="teaser" href="/who-we-serve#earners" style={{ textDecoration: "none" }}>
              <h3>Six-Figure Earners</h3>
              <p>High earners ready to move from earning well to building real, protected wealth.</p>
            </Link>
            <Link className="teaser" href="/who-we-serve#families" style={{ textDecoration: "none" }}>
              <h3>Families in Transition</h3>
              <p>
                Households preparing for major moments: homeownership, inheritance, a growing
                family, or early retirement.
              </p>
            </Link>
          </div>
          <div style={{ marginTop: 40 }}>
            <Link className="btn btn-light" href="/who-we-serve">See How We Help Each</Link>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--mist)" }}>
        <div className="wrap">
          <div className="section-head">
            <p className="eyebrow">Client Experiences</p>
            <h2>What clients say.</h2>
          </div>
          <div className="reviews-grid">
            <div className="review">
              <div className="stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
              <p>
                &ldquo;Samantha has been my advisor for a little over a year now. Amazing person and
                amazing team. They have exceeded my expectations and constantly impress me with
                their knowledge, especially Samantha. She has been extremely transparent with
                everything and helped tremendously, financially and health insurance wise. Would
                recommend 10/10 times.&rdquo;
              </p>
              <p className="who">Andre</p>
            </div>
            <div className="review">
              <div className="stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
              <p>
                &ldquo;Referred to me by a trusted source, Samantha reviewed my life insurance and
                financial health in a way that did not feel overwhelming. She helped me develop a
                plan for my savings, investment, and financial protection goals that made sense and
                did not leave me questioning whether I would reach them. Highly recommend this
                incredible advisor!&rdquo;
              </p>
              <p className="who">Daniel Gonzales</p>
            </div>
            <div className="review">
              <div className="stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
              <p>
                &ldquo;Sam is excellent. Informative, communicative, and detail oriented. She helped
                us fill the gap in our knowledge on life insurance, and we are going to utilize her
                for financial management in the new year as well.&rdquo;
              </p>
              <p className="who">Jonathan Y.</p>
            </div>
          </div>
          <div className="reviews-cta">
            <a className="btn btn-dark" href={GOOGLE_REVIEW_URL} target="_blank" rel="noopener">
              Leave Us a Google Review
            </a>
            <Link className="btn btn-light" href="/reviews">See All Reviews</Link>
          </div>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
