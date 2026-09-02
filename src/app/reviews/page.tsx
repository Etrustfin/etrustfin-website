import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import FinalCta from "@/components/FinalCta";
import { GOOGLE_REVIEW_URL, LINKEDIN_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Client Reviews",
  description: "Read what clients say about working with Essential Trust Financial, and leave your own Google review.",
};

const REVIEWS = [
  {
    text: "Samantha has been my advisor for a little over a year now. Amazing person and amazing team. They have exceeded my expectations and constantly impress me with their knowledge, especially Samantha. She has been extremely transparent with everything and helped tremendously, financially and health insurance wise. Would recommend 10/10 times.",
    who: "Andre",
  },
  {
    text: "Referred to me by a trusted source, Samantha reviewed my life insurance and financial health in a way that did not feel overwhelming. She helped me develop a plan for my savings, investment, and financial protection goals that made sense and did not leave me questioning whether I would reach them. Highly recommend this incredible advisor!",
    who: "Daniel Gonzales",
  },
  {
    text: "Sam is excellent. Informative, communicative, and detail oriented. She helped us fill the gap in our knowledge on life insurance, and we are going to utilize her for financial management in the new year as well.",
    who: "Jonathan Y.",
  },
  {
    text: "I got a late start planning for retirement and was concerned it may have been too late. Samantha helped me navigate some very safe but impactful options that have laid a great pathway toward my retirement. She is also very responsive and answers calls and emails promptly. Highly recommended!",
    who: "India Kinchelow",
  },
];

export default function ReviewsPage() {
  return (
    <>
      <PageHero
        eyebrow="Client Experiences"
        title="What clients say."
        description="Real words from the people we serve. If we have worked together, we would be grateful for yours."
        crumbLabel="Client Reviews"
      />
      <section className="section">
        <div className="wrap">
          {/* TO ADD A REVIEW: add an entry to the REVIEWS array above. */}
          <div className="reviews-grid">
            {REVIEWS.map((r) => (
              <div className="review" key={r.who}>
                <div className="stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
                <p>&ldquo;{r.text}&rdquo;</p>
                <p className="who">{r.who}</p>
              </div>
            ))}
          </div>
          <div className="reviews-cta">
            <a className="btn btn-dark" href={GOOGLE_REVIEW_URL} target="_blank" rel="noopener">
              Leave Us a Google Review
            </a>
            <a className="btn btn-light" href={LINKEDIN_URL} target="_blank" rel="noopener">
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </section>
      <FinalCta />
    </>
  );
}
