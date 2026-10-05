import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import FinalCta from "@/components/FinalCta";
import EventCard, { type EventItem } from "@/components/EventCard";
import HubSpotForm from "@/components/HubSpotForm";
import { SCHEDULE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Events",
  description:
    "Workshops and events from Essential Trust Financial, in person and online. See what is coming up and where we have been.",
};

// Re-check hourly so events move from Upcoming to Past on their own.
export const revalidate = 3600;

const trumpAccountDetails = {
  whatYoullLearn: [
    "What this new child savings account is, explained in plain language",
    "Who can open one, and the basic steps to get started",
    "How it compares to a 529 plan and other ways families save for a child's future",
    "How it fits alongside college savings, tax planning, and your family's overall financial plan",
    "Where to go next if you'd like help putting a plan together",
  ],
  audienceNote:
    "Intended for parents, guardians, grandparents, and expecting parents. No financial background required. This is an educational session only. There is no cost to attend, no purchase required, and attending does not create any advisory relationship with our firm. We will not ask about your income, savings, or assets.",
  faqs: [
    {
      q: "Is this really complimentary?",
      a: "Yes, there is no cost to attend and no obligation to purchase anything or schedule a follow-up.",
    },
    {
      q: "Do I need to already have this account open to attend?",
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
    "This presentation is for informational and educational purposes only and does not constitute tax, legal, or investment advice. Essential Trust Financial does not provide tax or legal advice. Please consult your own tax advisor or attorney. Information is subject to change.",
};

const trumpAccountSummary =
  "A complimentary, easy-to-follow session on how this new child savings account works, explained simply, and how it fits alongside college savings, tax planning, and your family's overall financial plan.";

// Shared by the in-person women's money events (Atlanta and Charlotte). Each event adds
// its own audienceNote with the local schedule.
const womensMoneyEventDetails = {
  whatYoullLearn: [
    "How to make the most of company stock and equity compensation",
    "How to turn a strong income into lasting wealth",
    "How to protect what you have built",
    "An open Q&A where no question is too basic",
  ],
  faqs: [
    {
      q: "Is there a cost to attend?",
      a: "Tickets are sold through Eventbrite, and your first drink is included. Select Register to see current ticket details.",
    },
    {
      q: "Is this a sales pitch?",
      a: "No. This is an educational and social event. No pressure, no pitch, just good conversation with great women.",
    },
  ],
  disclaimer:
    "This event is for informational and educational purposes only and does not constitute tax, legal, or investment advice. Essential Trust Financial does not provide tax or legal advice. Please consult your own tax advisor or attorney. Information is subject to change.",
};

// TO ADD AN EVENT: add an entry to this array. Each event carries its own content
// (image, summary, details) so the page stays general-purpose as new, unrelated events
// are added over time. Give every event an `endsAt` (ISO date-time with timezone offset).
// Upcoming events are listed soonest first. Once `endsAt` passes, the event moves to
// "Past Events" automatically, without a Register button.
const EVENTS: EventItem[] = [
  {
    title: "Wealth & Wine: A Money Happy Hour for Women in Newport Beach",
    date: "October 14, 2026",
    time: "5:30 PM to 7:30 PM PT",
    location: "In person, CUCINA enoteca Newport Beach, 951 Newport Center Drive, Newport Beach, CA 92660",
    summary:
      "An evening for women who want to feel confident with their money. Real conversation, great women, and no jargon, no judgment. Your first glass of wine is included. Educational and social, with no pressure and no pitch.",
    image: "/assets/wealth-and-wine-newport-beach.webp",
    imageAlt:
      "Wealth & Wine: A Money Happy Hour for Women, Newport Beach, California. A glass of red wine on a marble table overlooking the harbor at sunset.",
    imageFull: true,
    registerHref:
      "https://www.eventbrite.com/e/wealth-wine-a-money-happy-hour-for-women-in-newport-beach-tickets-2002970821646",
    endsAt: "2026-10-14T19:30:00-07:00",
    details: {
      ...womensMoneyEventDetails,
      whatYoullLearn: [
        "How to get a clear picture of where you stand with your money",
        "How to build a plan that fits your life and goals",
        "How to protect your income, your family, and your future",
        "An open Q&A where no question is too basic",
      ],
      audienceNote:
        "For any woman who wants to manage her money with more confidence, whether you are just getting started or ready to level up. The evening starts at 5:30 PM with a glass of wine and time to meet the room, followed by a 20-minute conversation at 6:00 PM on taking control of your money, open Q&A at 6:20 PM, and time to mingle afterward. Hosted by Samantha Dalby of Essential Trust Financial.",
      faqs: [
        {
          q: "Is there a cost to attend?",
          a: "Yes, tickets are $30 and are sold through Eventbrite. Your first glass of wine is included, and Eventbrite shows your final total at checkout.",
        },
        womensMoneyEventDetails.faqs[1],
      ],
    },
  },
  {
    title: "Money & Matcha: A Morning for Women Who Mean Business",
    date: "October 20, 2026",
    time: "7:30 AM to 9:30 AM ET",
    location: "In person, Coco and the Director, 100 West Trade Street, Charlotte, NC 28202",
    summary:
      "A morning in Charlotte for driven women to connect over matcha or coffee and get smarter about their money, and still make it to work on time. Your first drink is included. Educational and social, with no pressure and no pitch.",
    image: "/assets/money-and-matcha.webp",
    imageAlt:
      "Money & Matcha: A Morning for Women Who Mean Business. A matcha latte in a ceramic cup on a marble table beside a notebook and fresh flowers.",
    imageFull: true,
    registerHref:
      "https://www.eventbrite.com/e/money-matcha-a-morning-for-women-who-mean-business-tickets-2002969992165",
    endsAt: "2026-10-20T09:30:00-04:00",
    details: {
      ...womensMoneyEventDetails,
      audienceNote:
        "For women professionals, executives, and business owners who are doing well and want to know they are doing it right. The morning starts at 7:30 AM with a drink and time to meet the room, followed by a 15-minute conversation at 7:50 AM on the money moves high-earning women often miss, open Q&A at 8:05 AM, and a wrap-up by 8:30 AM so you can head into your day. Hosted by Samantha Dalby of Essential Trust Financial.",
    },
  },
  {
    title: "Wealth & Wine: A Money Happy Hour for Women in Buckhead",
    date: "October 21, 2026",
    time: "5:30 PM to 7:30 PM ET",
    location: "In person, Amalfi Cucina + Mercato, 3242 Peachtree Road NE, Suite A, Atlanta, GA 30305",
    summary:
      "An evening in Buckhead for driven women to connect, sip, and get smarter about growing and protecting their wealth. Your first drink is included. Educational and social, with no pressure and no pitch.",
    image: "/assets/wealth-and-wine.webp",
    imageAlt:
      "Wealth & Wine: A Money Happy Hour for Women, Buckhead, Atlanta. A glass of red wine on a marble table with the Atlanta skyline at night.",
    imageFull: true,
    registerHref:
      "https://www.eventbrite.com/e/wealth-wine-a-money-happy-hour-for-women-in-buckhead-tickets-2002968109534",
    endsAt: "2026-10-21T19:30:00-04:00",
    details: {
      ...womensMoneyEventDetails,
      audienceNote:
        "For women professionals, executives, and business owners who are doing well and want to know they are doing it right. The evening starts at 5:30 PM with a drink and time to meet the room, followed by a 20-minute conversation at 6:00 PM on the money moves high-earning women often miss, open Q&A at 6:20 PM, and time to mingle afterward. Hosted by Samantha Dalby of Essential Trust Financial.",
    },
  },
  {
    title: "The Wealth Table: A Business Owner Conversation",
    date: "September 16, 2026",
    time: "3:00 PM PT",
    location: "Virtual, Google Meet",
    summary:
      "A complimentary, informal conversation for business owners and executives who want to think more intentionally about where their personal finances are headed. No sales pitch, no jargon.",
    image: "/assets/workspace.jpg",
    imageAlt: "Financial planning documents and laptops during a strategy session",
    registerHref: "https://luma.com/h388gwni",
    endsAt: "2026-09-16T23:59:00-07:00",
    details: {
      whatYoullLearn: [
        "How business owners are structuring retirement plans to maximize tax-advantaged savings in 2026",
        "What the most common wealth-building gaps look like for owners and executives at your stage",
        "How to think about personal financial planning when your income is tied to your business",
        "What questions you should be asking your current advisor, or asking yourself if you do not have one",
      ],
      audienceNote:
        "Hosted by Samantha Dalby of Spearhead Advisors, a registered investment advisory firm based in Newport Beach, California.",
    },
  },
  {
    title: "Trump Accounts Explained: A Parent's Guide to the New $1,000 Child Savings Program",
    date: "September 16, 2026",
    time: "12:00 PM PT",
    location: "Virtual, link sent after registration",
    summary: trumpAccountSummary,
    image: "/assets/family-newborn.jpg",
    imageAlt: "A couple looking down at their newborn baby by a window",
    imagePosition: "50% 58%",
    endsAt: "2026-09-16T23:59:00-07:00",
    details: trumpAccountDetails,
  },
  {
    title: "Understanding Trump Accounts: What Parents Need to Know Before the Deadline",
    date: "September 22, 2026",
    time: "6:00 PM PT",
    location: "Virtual, link sent after registration",
    summary: trumpAccountSummary,
    image: "/assets/savings-jar-growth.jpg",
    imageAlt: "A jar of coins with a small plant sprouting from the top",
    endsAt: "2026-09-22T23:59:00-07:00",
    details: trumpAccountDetails,
  },
  {
    title: "Trump Accounts 101: A Complimentary Educational Session for Parents",
    date: "September 24, 2026",
    time: "10:00 AM PT",
    location: "Virtual, link sent after registration",
    summary: trumpAccountSummary,
    image: "/assets/family-portrait.jpg",
    imageAlt: "A smiling family of three with their baby",
    imagePosition: "50% 28%",
    endsAt: "2026-09-24T23:59:00-07:00",
    details: trumpAccountDetails,
  },
];

const endMs = (event: EventItem) => (event.endsAt ? Date.parse(event.endsAt) : Infinity);
const compareByEnd = (a: EventItem, b: EventItem) =>
  endMs(a) < endMs(b) ? -1 : endMs(a) > endMs(b) ? 1 : 0;

export default function EventsPage() {
  const now = Date.now();
  const isPast = (event: EventItem) => endMs(event) < now;
  const upcoming = EVENTS.filter((event) => !isPast(event)).sort(compareByEnd);
  const past = EVENTS.filter(isPast).sort((a, b) => compareByEnd(b, a));
  // The shared sign-up form is only for sessions without their own registration link.
  const showRegistrationForm = upcoming.some((event) => !event.registerHref);

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
          {upcoming.length === 0 ? (
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
              {upcoming.map((event) => (
                <EventCard key={`${event.title}-${event.date}`} event={event} />
              ))}
            </div>
          )}
        </div>
      </section>

      {showRegistrationForm && (
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
      )}

      {past.length > 0 && (
        <section
          className="section"
          id="past-events"
          style={showRegistrationForm ? undefined : { background: "var(--mist)" }}
        >
          <div className="wrap">
            <div className="section-head center">
              <p className="eyebrow">Past Events</p>
              <h2>Where we have been.</h2>
              <p>A look back at recent sessions. Watch this page for what is next.</p>
            </div>
            <div className="blog-grid">
              {past.map((event) => (
                <EventCard key={`${event.title}-${event.date}`} event={event} past />
              ))}
            </div>
          </div>
        </section>
      )}

      <FinalCta />
    </>
  );
}
