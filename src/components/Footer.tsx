import Link from "next/link";
import { GOOGLE_REVIEW_URL, LINKEDIN_URL, SCHEDULE_URL } from "@/lib/constants";

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot-grid">
          <div>
            <div className="foot-brand">
              <img src="/assets/logo.png" alt="Essential Trust Financial logo" />
              <span style={{ fontFamily: "var(--display)", color: "#fff", fontSize: 18 }}>
                Essential Trust Financial
              </span>
            </div>
            <p>
              895 Dove St, 3rd Floor
              <br />
              Newport Beach, CA 92660
            </p>
            <p style={{ marginTop: 14 }}>
              <a href="tel:949-502-0898">949-502-0898</a>
              <a href="mailto:Info@etrustfin.com">Info@etrustfin.com</a>
            </p>
          </div>
          <div>
            <h4>Explore</h4>
            <Link href="/about">About Samantha</Link>
            <Link href="/who-we-serve">Who We Serve</Link>
            <Link href="/services">Services</Link>
            <Link href="/how-we-work">How We Work</Link>
          </div>
          <div>
            <h4>Resources</h4>
            <Link href="/blog">Blog</Link>
            <Link href="/concepts">Concepts Library</Link>
            <Link href="/how-we-work#quiz">Financial Quiz</Link>
            <Link href="/reviews">Client Reviews</Link>
            <Link href="/contact">Contact</Link>
          </div>
          <div>
            <h4>Connect</h4>
            <a href={SCHEDULE_URL} target="_blank" rel="noopener">Schedule a Call</a>
            <a href={LINKEDIN_URL} target="_blank" rel="noopener">LinkedIn</a>
            <a href={GOOGLE_REVIEW_URL} target="_blank" rel="noopener">Review Us on Google</a>
          </div>
        </div>
        <div className="disclosure">
          <p>Essential Trust Financial, Newport Beach, California. CA Insurance License #0M51649.</p>
          <p>
            This website has been prepared by Essential Trust Financial for informational and
            educational purposes only. The information contained herein should not be construed as
            legal advice or tax advice. Essential Trust Financial does not provide tax or legal
            advice. Clients should consult their personal tax advisor for tax-related matters and
            their attorney for legal matters. Insurance products and services are offered through
            Essential Trust Financial. Guarantees associated with insurance products are backed by
            the financial strength and claims-paying ability of the issuing insurance carrier.
            Investment advisory services, where applicable, are offered only through appropriately
            licensed and registered individuals and firms; registration does not imply a certain
            level of skill or training. All investments involve potential risks, including loss of
            principal. Diversification does not assure a profit or protect against loss, and past
            performance may not be indicative of future results.
          </p>
          <p>
            This website expresses the views of the author as of the date indicated, and such views
            are subject to change without notice. Essential Trust Financial has no duty or
            obligation to update the information contained herein. Certain information concerning
            economic trends and performance may be based on or derived from information provided by
            independent third-party sources. Essential Trust Financial believes such sources are
            reliable; however, it cannot guarantee the accuracy of such information and has not
            independently verified the accuracy or completeness of such information. Nothing on this
            website constitutes an offer to sell or a solicitation to buy any security or insurance
            product in any jurisdiction where such an offer would be unlawful. The financial
            readiness quiz and Concepts Library on this website are for educational purposes only
            and do not constitute personalized financial advice. Client reviews reflect individual
            experiences and may not be representative of all clients; no compensation was provided
            for reviews.
          </p>
          <p>&copy; 2026 Essential Trust Financial. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
