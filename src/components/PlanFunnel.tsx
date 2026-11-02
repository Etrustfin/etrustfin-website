"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { SCHEDULE_URL } from "@/lib/constants";
import { FUNNEL_QUESTIONS } from "@/lib/planFunnel";
import { trackMetaEvent } from "@/components/MetaPixel";

// Questions come first and contact details last: visitors from ads will answer a few easy
// questions before they are willing to share their name and email.
type Stage = "survey" | "contact" | "done";

async function post(payload: Record<string, unknown>) {
  const res = await fetch("/api/plan-funnel", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(data?.error || "Something went wrong. Please try again.");
}

// Where the visitor came from (for example the Instagram bio link or a Facebook ad), so each
// lead in HubSpot shows which campaign produced it.
function visitSource() {
  const params = new URLSearchParams(window.location.search);
  const parts = ["el", "utm_source", "utm_medium", "utm_campaign", "utm_content"]
    .map((key) => params.get(key))
    .filter(Boolean);
  return parts.length ? parts.join(" | ").slice(0, 200) : "direct";
}

export default function PlanFunnel() {
  const [stage, setStage] = useState<Stage>("survey");
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [form, setForm] = useState({ firstName: "", lastName: "", phone: "", email: "", website: "" });
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");

  const update = (field: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm((f) => ({ ...f, [field]: e.target.value }));

  function choose(option: string) {
    const question = FUNNEL_QUESTIONS[step];
    setAnswers((a) => ({ ...a, [question.key]: option }));
    if (step < FUNNEL_QUESTIONS.length - 1) {
      setStep(step + 1);
    } else {
      setStage("contact");
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  async function submitContact(e: FormEvent) {
    e.preventDefault();
    setBusy(true);
    setError("");
    const source = visitSource();
    try {
      await post({ step: "contact", ...form, source });
      // Count the lead in Meta once the contact is saved. No personal details are sent.
      trackMetaEvent("Lead");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
      setBusy(false);
      return;
    }
    try {
      await post({
        step: "survey",
        email: form.email,
        firstName: form.firstName,
        lastName: form.lastName,
        phone: form.phone,
        source,
        answers,
      });
    } catch {
      // The contact is already saved. Do not block the booking if the answers could not be.
    }
    setBusy(false);
    setStage("done");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  const question = FUNNEL_QUESTIONS[step];

  return (
    <div className="funnel">
      <header className="funnel-top">
        <img src="/assets/logo.png" alt="" />
        <span>Essential Trust Financial</span>
      </header>

      <main className="funnel-main">
        {stage === "survey" && (
          <>
            {step === 0 && (
              <div className="funnel-hero">
                <p className="eyebrow">Complimentary Financial Plan Check-Up</p>
                <h1>Build Your Financial Plan.</h1>
                <p className="funnel-sub">
                  Answer {FUNNEL_QUESTIONS.length} quick questions (about a minute), then book a
                  complimentary session to see where you stand and what to do next.
                </p>
                <div className="funnel-advisor">
                  <img src="/assets/headshot.jpg" alt="Samantha Dalby" />
                  <p>
                    <strong>Samantha Dalby</strong>
                    Certified Financial Fiduciary &middot; 13+ years helping professionals,
                    business owners, and families
                  </p>
                </div>
              </div>
            )}
            <div className="quiz-wrap funnel-quiz">
              <div className="quiz-progress">
                <span style={{ width: `${(step / (FUNNEL_QUESTIONS.length + 1)) * 100}%` }} />
              </div>
              <p className="quiz-count">
                Question {step + 1} of {FUNNEL_QUESTIONS.length}
              </p>
              <div className="quiz-q">
                <h3>{question.q}</h3>
                {question.opts.map((option) => (
                  <button key={option} type="button" className="quiz-opt" onClick={() => choose(option)}>
                    {option}
                  </button>
                ))}
              </div>
              {step > 0 && (
                <button type="button" className="quiz-restart" onClick={() => setStep(step - 1)}>
                  Back
                </button>
              )}
            </div>
          </>
        )}

        {stage === "contact" && (
          <form className="funnel-card" onSubmit={submitContact}>
            <div className="quiz-progress">
              <span style={{ width: `${(FUNNEL_QUESTIONS.length / (FUNNEL_QUESTIONS.length + 1)) * 100}%` }} />
            </div>
            <h2>Last step: where should we reach you?</h2>
            <p className="funnel-card-sub">
              We&rsquo;ll use your answers to prepare for your complimentary session.
            </p>
            <div className="funnel-row">
              <label>
                First name
                <input type="text" required autoComplete="given-name" value={form.firstName} onChange={update("firstName")} disabled={busy} />
              </label>
              <label>
                Last name
                <input type="text" required autoComplete="family-name" value={form.lastName} onChange={update("lastName")} disabled={busy} />
              </label>
            </div>
            <label>
              Email
              <input type="email" required autoComplete="email" value={form.email} onChange={update("email")} disabled={busy} />
            </label>
            <label>
              <span>
                Phone <span className="funnel-optional">(optional)</span>
              </span>
              <input type="tel" autoComplete="tel" value={form.phone} onChange={update("phone")} disabled={busy} />
            </label>
            {/* Honeypot: hidden from people, tempting to bots. */}
            <input
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              className="funnel-hp"
              value={form.website}
              onChange={update("website")}
            />
            <button className="btn btn-dark" type="submit" disabled={busy}>
              {busy ? "Saving…" : "See available times"}
            </button>
            {error && <p className="newsletter-error">{error}</p>}
            <p className="funnel-fine">
              By continuing, you agree that Essential Trust Financial may contact you about your
              session by email, or by phone or text if you share a number. Message and data rates
              may apply. See our <Link href="/privacy-policy">Privacy Policy</Link>.
            </p>
            <button type="button" className="quiz-restart" onClick={() => setStage("survey")} disabled={busy}>
              Back
            </button>
          </form>
        )}

        {stage === "done" && (
          <div className="quiz-wrap funnel-quiz funnel-done">
            <p className="eyebrow">You&rsquo;re all set, {form.firstName}</p>
            <h2>Choose a time for your complimentary Financial Plan Check-Up.</h2>
            <p>
              Pick a time that works for you. We will use your answers to make the session about
              your situation, not a generic presentation.
            </p>
            <a className="btn btn-dark" href={SCHEDULE_URL} target="_blank" rel="noopener">
              Book your session
            </a>
          </div>
        )}
      </main>

      <div className="funnel-disclosure">
        <p>Essential Trust Financial, Newport Beach, California.</p>
        <p>
          The Financial Plan Check-Up is a complimentary educational session. It is not tax, legal,
          or investment advice, and it does not guarantee any outcome or create an advisory
          relationship. Insurance products, when recommended and chosen, are compensated by the
          insurance carrier. Essential Trust Financial is not affiliated with Instagram or Meta.
        </p>
      </div>
    </div>
  );
}
