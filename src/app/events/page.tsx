import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import FinalCta from "@/components/FinalCta";
import { SCHEDULE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Events",
  description: "Upcoming workshops and events from Essential Trust Financial in Newport Beach, CA.",
};

type EventItem = {
  title: string;
  date: string;
  time?: string;
  location: string;
  description: string;
  url?: string;
};

// TO ADD AN EVENT: add an entry to this array.
const EVENTS: EventItem[] = [];

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
                <div className="post" key={`${event.title}-${event.date}`}>
                  <div className="post-band" />
                  <div className="post-body">
                    <p className="cat">
                      {event.date}
                      {event.time ? ` · ${event.time}` : ""}
                    </p>
                    <h3>{event.title}</h3>
                    <p>{event.description}</p>
                    <p style={{ fontSize: 13.5, color: "var(--stone)", marginBottom: 14 }}>
                      {event.location}
                    </p>
                    {event.url && (
                      <a href={event.url} target="_blank" rel="noopener">
                        Register
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
      <FinalCta />
    </>
  );
}
