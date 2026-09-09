import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Essential Trust Financial collects, uses, and protects information from visitors to etrustfin.com.",
};

const LAST_UPDATED = "September 9, 2026";

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        description={`Last updated ${LAST_UPDATED}`}
        crumbLabel="Privacy Policy"
      />
      <section className="section">
        <div className="wrap">
          <div className="post-content" style={{ maxWidth: 780, margin: "0 auto" }}>
            <p>
              Essential Trust Financial (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;)
              respects your privacy. This policy explains what information we collect through{" "}
              {SITE_URL.replace("https://", "")} (the &ldquo;Site&rdquo;), how we use it, and the
              choices you have. It applies to this website only, not to any third-party site we may
              link to.
            </p>

            <h2>Information We Collect</h2>
            <p>We collect information in two ways:</p>
            <ul>
              <li>
                <strong>Information you provide directly.</strong> If you sign up for our
                newsletter, register for an event or workshop, or submit a form on this Site, we
                collect what you enter, such as your name, email address, and phone number.
              </li>
              <li>
                <strong>Information collected automatically.</strong> Like most websites, we may
                collect basic technical information, such as your browser type and general usage
                of the Site, and we use your browser&rsquo;s local storage to remember simple
                preferences (for example, whether you have already seen and closed our newsletter
                pop-up). If we add analytics or advertising tools in the future, such as Meta Pixel
                or Google Analytics, we will update this policy to describe what those tools
                collect.
              </li>
            </ul>
            <p>
              We do not knowingly collect information from children. Content on this Site regarding
              child-related savings or planning topics is intended for parents, guardians, and other
              adults, not for use by children.
            </p>

            <h2>How We Use Your Information</h2>
            <ul>
              <li>To respond to inquiries and provide the information you requested</li>
              <li>To send you newsletters, event details, and reminders you signed up for</li>
              <li>To improve this Site and the content we provide</li>
              <li>To comply with legal and regulatory obligations applicable to our firm</li>
            </ul>
            <p>We do not sell your personal information.</p>

            <h2>Third-Party Services We Use</h2>
            <p>
              We use the following third-party services to operate this Site and manage client and
              prospect communications. Each has its own privacy practices, which we encourage you to
              review:
            </p>
            <ul>
              <li>
                <strong>HubSpot</strong> &ndash; our customer relationship management (CRM) and
                marketing platform. Information submitted through our newsletter sign-up or event
                registration forms is stored in HubSpot.
              </li>
              <li>
                <strong>Vercel</strong> &ndash; our website hosting provider.
              </li>
            </ul>

            <h2>Cookies and Similar Technologies</h2>
            <p>
              This Site uses limited browser storage (such as local storage) for basic functionality,
              like remembering that you closed our newsletter pop-up so it does not reappear on every
              visit. We do not currently use third-party advertising cookies or tracking pixels on
              this Site. If that changes, for example if we begin running social media advertising
              that includes a tracking pixel on this Site, we will update this policy accordingly.
            </p>

            <h2>Your Choices and Rights</h2>
            <p>
              You may unsubscribe from our newsletter at any time using the unsubscribe link included
              in any email we send. California residents have additional rights under the California
              Consumer Privacy Act (CCPA), including the right to know what personal information we
              have collected about you, the right to request deletion of that information, and the
              right to opt out of the sale of personal information (which, again, we do not do). To
              exercise any of these rights, contact us using the information below.
            </p>

            <h2>Data Retention and Security</h2>
            <p>
              We retain the information you provide for as long as reasonably necessary for the
              purposes described in this policy, or as required by applicable recordkeeping
              obligations for financial services firms. We use reasonable administrative and
              technical safeguards to protect your information, but no method of transmission or
              storage over the internet is completely secure, and we cannot guarantee absolute
              security.
            </p>

            <h2>Changes to This Policy</h2>
            <p>
              We may update this policy from time to time. The &ldquo;Last updated&rdquo; date at the
              top of this page reflects the most recent revision. Continued use of the Site after any
              changes constitutes acceptance of the updated policy.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy or how we handle your information,
              contact us at{" "}
              <a href="mailto:Info@etrustfin.com">Info@etrustfin.com</a> or 895 Dove St, 3rd Floor,
              Newport Beach, CA 92660.
            </p>

            <p style={{ fontSize: 12.5, color: "var(--stone)", marginTop: 40 }}>
              This page is provided for general informational purposes and is not a substitute for
              legal advice. We recommend having this policy reviewed by an attorney to confirm it
              meets your specific legal and regulatory obligations.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
