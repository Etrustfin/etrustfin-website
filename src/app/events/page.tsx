import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import FinalCta from "@/components/FinalCta";
import EventCard, { type EventItem } from "@/components/EventCard";
import HubSpotForm from "@/components/HubSpotForm";
import { SCHEDULE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Events",
  description: "Upcoming workshops and events from Essential Trust Financial in Newport Beach, CA.",
};

const trumpAccountDetails = {
  whatYoullLearn: [
    "Who qualifies for a Trump Account, and who qualifies for the $1,000 federal contribution",
    "Annual contribution limits for individuals and employers",
    "How the money must be invested and when it can be withdrawn",
    "The exact steps and IRS form needed to open an account",
    "How a Trump Account compares to a 529 plan, custodial account, and Roth IRA for minors",
  ],
  audienceNote:
    "Intended for parents, guardians, grandparents, and expecting parents. No financial background required. This is an educational session only — no cost to attend, no purchase required, and attending does not create any advisory relationship with our firm. We will not ask about your income, savings, or assets.",
  faqs: [
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
  ],
  disclaimer:
    "This presentation is for informational and educational purposes only and does not constitute tax, legal, or investment advice. Essential Trust Financial does not provide tax or legal advice. Please consult your own tax advisor or attorney. Information reflects IRS and Treasury guidance as of the date of this event and is subject to change.",
};

const trumpAccountSummary =
  "A free, live 45-minute session on how the new federal Trump Account works and whether your child qualifies for the $1,000 Treasury contribution.";

// TO ADD AN EVENT: add an entry to this array. Each event carries its own
// content (image, summary, details) so the page stays general-purpose as
// new, unrelated events are added over time.
const EVENTS: EventItem[] = [
  {
    title: "Trump Accounts Explained: A Parent's Guide to the New $1,000 Child Savings Program",
    date: "September 16, 2026",
    time: "12:00 PM PT",
    location: "Virtual — link sent after registration",
    summary: trumpAccountSummary,
    image: "/assets/trump-official-portrait.jpg",
    imageAlt: "Official portrait of President Donald J. Trump",
    details: trumpAccountDetails,
  },
  {
    title: "Understanding Trump Accounts: What Parents Need to Know Before the Deadline",
    date: "September 22, 2026",
    time: "6:00 PM PT",
    location: "Virtual — link sent after registration",
    summary: trumpAccountSummary,
    image: "/assets/trump-official-portrait.jpg",
    imageAlt: "Official portrait of President Donald J. Trump",
    details: trumpAccountDetails,
  },
  {
    title: "Trump Accounts 101: A Free Educational Session for Parents",
    date: "September 24, 2026",
    time: "10:00 AM PT",
    location: "Virtual — link sent after registration",
    summary: trumpAccountSummary,
    image: "/assets/trump-official-portrait.jpg",
    imageAlt: "Official portrait of President Donald J. Trump",
    details: trumpAccountDetails,
  },
];

export default function EventsPage() {
  return (
    <>
      <PageHero
        eyebrow="Workshops & Events"
        title="Learn with us, in person and online."
        description="Financial education events hosted by Essential Trust Financial. Check back for upcoming dates."
        crumbLabel="Events"
      />
      <section className="section">
        <div className="wrap">
          {EVENTS.length === 0 ? (
            <div className="section-head center">
              <p className="eyebrow">Check Back Soon</p>
              <h2>No upcoming events scheduled right now.</h2>
              <p>
                New workshops are added regularly. In the meantime, schedule a one-on-one planning
                review.
              </p>
              <div style={{ marginTop: 28 }}>
                <a className="btn btn-dark" href={SCHEDULE_URL} target="_blank" rel="noopener">
                  Schedule a Call
                </a>
              </div>
            </div>
          ) : (
            <div className="blog-grid">
              {EVENTS.map((event) => (
                <EventCard key={`${event.title}-${event.date}`} event={event} />
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="section" id="register" style={{ background: "var(--mist)" }}>
        <div className="wrap">
          <div className="section-head center">
            <p className="eyebrow">Reserve Your Spot</p>
            <h2>Register for a session.</h2>
            <p>
              Pick your preferred event and time using the dropdown below. We&rsquo;ll send
              reminders before your session.
            </p>
          </div>
          <div style={{ maxWidth: 640, margin: "0 auto" }}>
            <HubSpotForm formId="668288fc-3730-4409-bf67-543d75545ca5" />
          </div>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
