import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import FinalCta from "@/components/FinalCta";

export const metadata: Metadata = {
  title: "About Samantha Dalby",
  description:
    "The story behind Essential Trust Financial: founder Samantha Dalby, a Certified Financial Fiduciary in Newport Beach, CA, and her mission for transparent, purposeful planning.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Samantha"
        title="A mission born from experience."
        description="Essential Trust Financial was founded to be the advisor one family never had. Here is that story."
        crumbLabel="About"
      />
      <section className="section">
        <div className="wrap story-grid">
          <div className="story-photo">
            <img src="/assets/headshot.jpg" alt="Samantha Dalby, Founder and CEO of Essential Trust Financial" />
            <p className="caption">Samantha Dalby &middot; Founder &amp; CEO, Certified Financial Fiduciary</p>
          </div>
          <div className="story-copy">
            <p className="eyebrow">Our Story</p>
            <p>
              My journey in financial planning began by circumstance, not design. My father passed
              away unexpectedly in December 2003. He was our family&rsquo;s sole provider, but
              without life insurance or a financial plan, his absence left us not only grieving, but
              financially vulnerable.
            </p>
            <p>
              In the aftermath, my mother sought help, and was defrauded by a $61 million Ponzi
              scheme, <strong>losing over $1.7 million</strong>.
            </p>
            <div className="pull">
              I founded Essential Trust Financial to be the advisor my family never had: one
              committed to transparency, integrity, and purposeful planning.
            </div>
            <p>
              I witnessed firsthand what happens when families lack protection, guidance, and a
              trusted advocate. That experience did not just shape me. It defined my mission.
            </p>
            <p>
              Today, as a Certified Financial Fiduciary and the Founder and CEO of Essential Trust
              Financial, I guide high-income professionals, business owners, and families through
              strategic financial planning with a focus on tax efficiency, wealth protection, and
              legacy clarity. I bring 13+ years of professional experience, and a lifetime of
              perspective.
            </p>
            <p>
              My goal is simple: to lead a new standard in financial advising, one rooted in
              empathy, strategy, and empowerment.
            </p>
            <div className="awards">
              <div className="award">
                <div className="serif">Young Professional of the Year</div>
                <p>2023 &middot; Newport Beach Chamber of Commerce</p>
              </div>
              <div className="award">
                <div className="serif">Female Business Owner of the Year</div>
                <p>2024 &middot; National Association of Women Business Owners, selected by Bank of America</p>
              </div>
            </div>
            <div className="giving" id="giving">
              <p className="eyebrow">Giving Back</p>
              <h3>Community is part of the mission.</h3>
              <p>
                Giving back is not an afterthought here, it is part of why the firm exists. Samantha
                has served on the Alzheimer&rsquo;s Association committee and with the Newport Beach
                Chamber of Commerce, where she previously chaired the Young Professionals group.
                Purposeful planning and a purposeful community go hand in hand.
              </p>
            </div>
            <div className="community-grid">
              <figure>
                <img className="env-photo" src="/assets/workshop1.jpg" alt="Samantha Dalby leading a financial and estate planning workshop" />
                <figcaption>Leading a holistic planning workshop for local professionals.</figcaption>
              </figure>
              <figure>
                <img className="env-photo" src="/assets/workshop2.jpg" alt="Samantha Dalby presenting to a room during a planning workshop" />
                <figcaption>Teaching the same framework behind every client plan.</figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>
      <FinalCta />
    </>
  );
}
