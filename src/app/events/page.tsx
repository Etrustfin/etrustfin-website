import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import FinalCta from "@/components/FinalCta";
import AccordionItem from "@/components/AccordionItem";
import HubSpotForm from "@/components/HubSpotForm";

export const metadata: Metadata = {
  title: "Events",
  description:
    "Free 45-minute session on how the new federal Trump Account works, who qualifies for the $1,000 contribution, and how to open one. Newport Beach, CA and virtual.",
};

type EventItem = {
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
};

// TO ADD AN EVENT: add an entry to this array.
const EVENTS: EventItem[] = [
  {
    title: "Trump Accounts Explained: A Parent's Guide to the New $1,000 Child Savings Program",
    date: "September 16, 2026",
    time: "12:00 PM PT",
    location: "Virtual — link sent after registration",
    description:
      "A free, live session on how the new federal Trump Account works and whether your child qualifies for the $1,000 Treasury contribution.",
  },
  {
    title: "Understanding Trump Accounts: What Parents Need to Know Before the Deadline",
    date: "September 22, 2026",
    time: "6:00 PM PT",
    location: "Virtual — link sent after registration",
    description:
      "A free, live session on how the new federal Trump Account works and whether your child qualifies for the $1,000 Treasury contribution.",
  },
  {
    title: "Trump Accounts 101: A Free Educational Session for Parents",
    date: "September 24, 2026",
    time: "10:00 AM PT",
    location: "Virtual — link sent after registration",
    description:
      "A free, live session on how the new federal Trump Account works and whether your child qualifies for the $1,000 Treasury contribution.",
  },
];

const FAQS = [
  {
    q: "Is this really free?",
    a: "Yes, there is no cost to attend and no obligation to purchase anything or schedule a follow-up.",
  },
  {
    q: "Do I need to already have a Trump Account to attend?",
    a: "No, this session is designed for people who haven't opened one yet as well as those who have and want to understand it better.",
  },
  {
    q: "Will you ask about my personal finances?",
    a: "No, this is a general educational session. We won't ask about your income, savings, or assets.",
  },
  {
    q: "Is this affiliated with any government agency?",
    a: "No, we are an independent financial services firm providing general education. This is not a government-sponsored event.",
  },
  {
    q: "What if I have questions specific to my family's situation?",
    a: "You're welcome to ask general questions live. For anything personal, we offer an optional, no-cost follow-up conversation, entirely up to you.",
  },
];

export default function EventsPage() {
  return (
    <>
      <PageHero
        eyebrow="Workshops & Events"
        title="New Child Savings Accounts: What Every Parent Should Know"
        description="Free 45-minute sessions on how the new federal Trump Account works, who qualifies for the $1,000 contribution, and how to open one. Pick whichever time works for you."
        crumbLabel="Events"
      />

      <section className="section">
        <div className="wrap">
          <div className="section-head center">
            <p className="eyebrow">Same Session, Three Times</p>
            <h2>Choose the date that works for your family.</h2>
            <p>
              A new federal law created a new type of savings account for children called a
              &ldquo;Trump Account.&rdquo; If you have a child under 18, you may already be
              eligible to open one, and if your child was born between 2025 and 2028, you may
              qualify for a one-time $1,000 contribution from the U.S. Treasury. Each session
              below covers the same material — attend whichever time fits your schedule.
            </p>
          </div>
          <div className="blog-grid">
            {EVENTS.map((event) => (
              <div className="post" key={`${event.title}-${event.date}`}>
                <div className="post-band" />
                <div className="post-body">
                  <p className="cat">
                    {event.date} · {event.time}
                  </p>
                  <h3>{event.title}</h3>
                  <p>{event.description}</p>
                  <p style={{ fontSize: 13.5, color: "var(--stone)", marginBottom: 14 }}>
                    {event.location}
                  </p>
                  <a href="#register">Register</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--mist)" }}>
        <div className="wrap">
          <div className="section-head center">
            <p className="eyebrow">What You&rsquo;ll Learn</p>
            <h2>A plain-language walkthrough, not a sales pitch.</h2>
          </div>
          <div className="checklist" style={{ maxWidth: 820, margin: "0 auto" }}>
            <li>Who qualifies for a Trump Account, and who qualifies for the $1,000 federal contribution</li>
            <li>Annual contribution limits for individuals and employers</li>
            <li>How the money must be invested and when it can be withdrawn</li>
            <li>The exact steps and IRS form needed to open an account</li>
            <li>How a Trump Account compares to a 529 plan, custodial account, and Roth IRA for minors</li>
          </div>
          <p style={{ textAlign: "center", marginTop: 32, color: "var(--graphite)", maxWidth: 700, marginLeft: "auto", marginRight: "auto" }}>
            <strong>Intended for:</strong> parents, guardians, grandparents, and expecting parents.
            No financial background required. This is an educational session only — there is no
            cost to attend, no purchase required, and attending does not create any advisory
            relationship with our firm. We will not ask about your income, savings, or assets
            during this session.
          </p>
        </div>
      </section>

      <section className="section" id="register">
        <div className="wrap">
          <div className="section-head center">
            <p className="eyebrow">Reserve Your Spot</p>
            <h2>Register for a session.</h2>
            <p>Pick your preferred date and time below. We&rsquo;ll send reminders 24 hours and 1 hour before your session.</p>
          </div>
          <div style={{ maxWidth: 640, margin: "0 auto" }}>
            <HubSpotForm formId="668288fc-3730-4409-bf67-543d75545ca5" />
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--mist)" }}>
        <div className="wrap">
          <div className="section-head center">
            <p className="eyebrow">Common Questions</p>
            <h2>Event FAQ</h2>
          </div>
          <div className="con-grid">
            {FAQS.map((item) => (
              <AccordionItem key={item.q} title={item.q} variant="con">
                <p>{item.a}</p>
              </AccordionItem>
            ))}
          </div>
          <p style={{ fontSize: 12.5, color: "var(--stone)", maxWidth: 760, margin: "34px auto 0", textAlign: "center" }}>
            This presentation is for informational and educational purposes only and does not
            constitute tax, legal, or investment advice. Essential Trust Financial does not
            provide tax or legal advice. Please consult your own tax advisor or attorney.
            Information reflects IRS and Treasury guidance as of the date of this event and is
            subject to change.
          </p>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
