"use client";

import { useState } from "react";

export type EventDetails = {
  whatYoullLearn?: string[];
  audienceNote?: string;
  faqs?: { q: string; a: string }[];
  disclaimer?: string;
};

export type EventItem = {
  title: string;
  date: string;
  time: string;
  location: string;
  summary: string;
  image?: string;
  imageAlt?: string;
  registerHref?: string;
  details?: EventDetails;
};

export default function EventCard({ event }: { event: EventItem }) {
  const [open, setOpen] = useState(false);
  const hasDetails = !!event.details;

  return (
    <div className="post event-card">
      {event.image ? (
        <img className="event-card-photo" src={event.image} alt={event.imageAlt || event.title} />
      ) : (
        <div className="post-band" />
      )}
      <div className="post-body">
        <p className="cat">
          {event.date} · {event.time}
        </p>
        <h3>{event.title}</h3>
        <p>{event.summary}</p>
        <p style={{ fontSize: 13.5, color: "var(--stone)", marginBottom: 14 }}>{event.location}</p>
        <div style={{ display: "flex", gap: 18, flexWrap: "wrap", alignItems: "center" }}>
          <a href={event.registerHref || "#register"}>Register</a>
          {hasDetails && (
            <button
              type="button"
              onClick={() => setOpen((o) => !o)}
              style={{
                background: "none",
                border: "none",
                padding: 0,
                font: "inherit",
                fontSize: 13,
                fontWeight: 700,
                letterSpacing: ".08em",
                textTransform: "uppercase",
                color: "var(--graphite)",
                cursor: "pointer",
                borderBottom: "1px solid var(--line)",
              }}
            >
              {open ? "Hide Details" : "Learn More"}
            </button>
          )}
        </div>

        {hasDetails && open && (
          <div style={{ marginTop: 24, paddingTop: 24, borderTop: "1px solid var(--line)" }}>
            {event.details?.whatYoullLearn && (
              <>
                <h4
                  style={{
                    fontSize: 12,
                    letterSpacing: ".14em",
                    textTransform: "uppercase",
                    fontWeight: 700,
                    color: "var(--stone)",
                    fontFamily: "var(--body)",
                    marginBottom: 12,
                  }}
                >
                  What You&rsquo;ll Learn
                </h4>
                <ul style={{ listStyle: "none", marginBottom: 20 }}>
                  {event.details.whatYoullLearn.map((item) => (
                    <li
                      key={item}
                      style={{
                        fontSize: 14,
                        color: "var(--graphite)",
                        padding: "6px 0 6px 20px",
                        position: "relative",
                      }}
                    >
                      <span
                        style={{
                          position: "absolute",
                          left: 0,
                          top: 14,
                          width: 10,
                          height: 1,
                          background: "var(--ink)",
                        }}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </>
            )}
            {event.details?.audienceNote && (
              <p style={{ fontSize: 13.5, color: "var(--graphite)", marginBottom: 20 }}>
                {event.details.audienceNote}
              </p>
            )}
            {event.details?.faqs && (
              <div style={{ marginBottom: 20 }}>
                {event.details.faqs.map((f) => (
                  <div key={f.q} style={{ marginBottom: 14 }}>
                    <p style={{ fontSize: 14, fontWeight: 700, color: "var(--ink)", marginBottom: 4 }}>
                      {f.q}
                    </p>
                    <p style={{ fontSize: 13.5, color: "var(--graphite)" }}>{f.a}</p>
                  </div>
                ))}
              </div>
            )}
            {event.details?.disclaimer && (
              <p style={{ fontSize: 11.5, color: "var(--stone)", lineHeight: 1.6 }}>
                {event.details.disclaimer}
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
