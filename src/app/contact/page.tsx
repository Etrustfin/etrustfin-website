import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { LINKEDIN_URL, GOOGLE_REVIEW_URL, SCHEDULE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Essential Trust Financial in Newport Beach, CA. Schedule a complimentary planning review, call 949-502-0898, or email Info@etrustfin.com.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's start the conversation."
        description="Schedule a complimentary call, or reach out directly. No pressure, no obligation."
        crumbLabel="Contact"
      />
      <section className="section">
        <div className="wrap contact-grid">
          <div className="contact-info">
            <h3>Reach Essential Trust Financial</h3>
            <div className="contact-row">
              <div className="lab">Office</div>
              <div className="val">
                895 Dove St, 3rd Floor
                <br />
                Newport Beach, CA 92660
              </div>
            </div>
            <div className="contact-row">
              <div className="lab">Phone</div>
              <div className="val"><a href="tel:949-502-0898">949-502-0898</a></div>
            </div>
            <div className="contact-row">
              <div className="lab">Email</div>
              <div className="val"><a href="mailto:Info@etrustfin.com">Info@etrustfin.com</a></div>
            </div>
            <div className="contact-row">
              <div className="lab">LinkedIn</div>
              <div className="val">
                <a href={LINKEDIN_URL} target="_blank" rel="noopener">linkedin.com/in/samantha-dalby</a>
              </div>
            </div>
            <div className="contact-row">
              <div className="lab">Reviews</div>
              <div className="val">
                <a href={GOOGLE_REVIEW_URL} target="_blank" rel="noopener">Leave a Google review</a>
              </div>
            </div>
            <div className="map-embed">
              <iframe
                title="Essential Trust Financial office location"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps?q=895+Dove+St+3rd+Floor+Newport+Beach+CA+92660&output=embed"
              />
            </div>
          </div>
          <div className="contact-card">
            <h3>Schedule a Complimentary Call</h3>
            <p>
              The fastest way to begin. Pick a time that works for you and we will send a short set
              of questions beforehand so our conversation is focused on your goals.
            </p>
            <a className="btn btn-dark btn-on-dark" href={SCHEDULE_URL} target="_blank" rel="noopener">
              Open the Scheduler
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
