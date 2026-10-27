"use client";

import { useEffect, useState, type FormEvent } from "react";
import Link from "next/link";
import { SCHEDULE_URL } from "@/lib/constants";
import { FUNNEL_QUESTIONS } from "@/lib/planFunnel";

type Stage = "contact" | "survey" | "done";

async function post(payload: Record<string, unknown>) {
  const res = await fetch("/api/plan-funnel", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(data?.error || "Something went wrong. Please try again.");
}

export default function PlanFunnel() {
  const [stage, setStage] = useState<Stage>("contact");
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [form, setForm] = useState({ firstName: "", lastName: "", phone: "", email: "", website: "" });
  const [source, setSource] = useState("direct");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");

  // Remember where the visitor came from (for example the Instagram bio link) so each lead
  // in HubSpot shows which campaign produced it.
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const parts = ["el", "utm_source", "utm_medium", "utm_campaign", "utm_content"]
      .map((key) => params.get(key))
      .filter(Boolean);
    if (parts.length) setSource(parts.join(" | ").slice(0, 200));
  }, []);

  const update = (field: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm((f) => ({ ...f, [field]: e.target.value }));

  async function submitContact(e: FormEvent) {
    e.preventDefault();
    setBusy(true);
    setError("");
    try {
      await post({ step: "contact", ...form, source });
      setStage("survey");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setBusy(false);
    }
  }

  async function choose(option: string) {
    const question = FUNNEL_QUESTIONS[step];
    const next = { ...answers, [question.key]: option };
    setAnswers(next);
    if (step < FUNNEL_QUESTIONS.length - 1) {
      setStep(step + 1);
      return;
    }
    setBusy(true);
    setError("");
    try {
      await post({
        step: "survey",
        email: form.email,
        firstName: form.firstName,
        lastName: form.lastName,
        phone: form.phone,
        source,
        answers: next,
      });
    } catch {
      // The contact is already saved. Do not block the booking if the answers could not be.
    } finally {
      setBusy(false);
      setStage("done");
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  const question = FUNNEL_QUESTIONS[step];

  return (
    <div className="funnel">
      <header className="funnel-top">
        <img src="/assets/logo.png" alt="" />
        <span>Essential Trust Financial</span>
      </header>

      <main className="funnel-main">
        {stage === "contact" && (
          <>
            <div className="funnel-hero">
              <p className="eyebrow">Complimentary Financial Plan Check-Up</p>
              <h1>Build Your Financial Plan.</h1>
              <p className="funnel-sub">
                Answer a few quick questions, then book a complimentary session to see where you
                stand and what to do next.
              </p>
              <p className="funnel-for">
                For professionals, business owners, and families who want a clear, written plan.
              </p>
            </div>
            <form className="funnel-card" onSubmit={submitContact}>
              <h2>Start your application</h2>
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
                Phone
                <input type="tel" required autoComplete="tel" value={form.phone} onChange={update("phone")} disabled={busy} />
              </label>
              <label>
                Email
                <input type="email" required autoComplete="email" value={form.email} onChange={update("email")} disabled={busy} />
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
                {busy ? "Saving…" : "Continue to questions"}
              </button>
              {error && <p className="newsletter-error">{error}</p>}
              <p className="funnel-fine">
                By continuing, you agree that Essential Trust Financial may contact you about your
                session by phone, email, or text. Message and data rates may apply. See our{" "}
                <Link href="/privacy-policy">Privacy Policy</Link>.
              </p>
            </form>
          </>
        )}

        {stage === "survey" && (
          <div className="quiz-wrap funnel-quiz">
            <div className="quiz-progress">
              <span style={{ width: `${(step / FUNNEL_QUESTIONS.length) * 100}%` }} />
            </div>
            <p className="quiz-count">
              Question {step + 1} of {FUNNEL_QUESTIONS.length}
            </p>
            <div className="quiz-q">
              <h3>{question.q}</h3>
              {question.opts.map((option) => (
                <button key={option} type="button" className="quiz-opt" disabled={busy} onClick={() => choose(option)}>
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
