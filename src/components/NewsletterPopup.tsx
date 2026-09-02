"use client";

import { useEffect, useState, type FormEvent } from "react";

const STORAGE_KEY = "etf-newsletter-interacted";
const SHOW_DELAY_MS = 8000;

export default function NewsletterPopup() {
  const [visible, setVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = useState("");

  useEffect(() => {
    let interacted = false;
    try {
      interacted = localStorage.getItem(STORAGE_KEY) === "1";
    } catch {
      // localStorage unavailable (private browsing, etc.) — just show the popup once.
    }
    if (interacted) return;

    const timer = setTimeout(() => setVisible(true), SHOW_DELAY_MS);
    return () => clearTimeout(timer);
  }, []);

  function markInteracted() {
    try {
      localStorage.setItem(STORAGE_KEY, "1");
    } catch {
      // ignore
    }
  }

  function close() {
    markInteracted();
    setVisible(false);
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setError("");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || "Something went wrong.");
      setStatus("success");
      markInteracted();
      setTimeout(() => setVisible(false), 3000);
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (!visible) return null;

  return (
    <div className="newsletter-overlay" role="dialog" aria-modal="true" aria-labelledby="newsletter-title">
      <div className="newsletter-modal">
        <button className="newsletter-close" aria-label="Close" onClick={close}>
          &times;
        </button>
        {status === "success" ? (
          <div className="newsletter-success">
            <p className="eyebrow">You&rsquo;re In</p>
            <h3>Thank you for subscribing.</h3>
            <p>Look out for planning insights and updates from Essential Trust Financial.</p>
          </div>
        ) : (
          <>
            <p className="eyebrow">Stay Informed</p>
            <h3 id="newsletter-title">Get planning insights in your inbox.</h3>
            <p>
              Occasional, practical updates on tax strategy, life insurance, and holistic planning.
              No spam, unsubscribe anytime.
            </p>
            <form className="newsletter-form" onSubmit={handleSubmit}>
              <input
                type="email"
                required
                placeholder="you@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={status === "loading"}
              />
              <button className="btn btn-dark" type="submit" disabled={status === "loading"}>
                {status === "loading" ? "Joining…" : "Subscribe"}
              </button>
            </form>
            {status === "error" && <p className="newsletter-error">{error}</p>}
          </>
        )}
      </div>
    </div>
  );
}
