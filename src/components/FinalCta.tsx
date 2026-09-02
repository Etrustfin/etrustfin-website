import { SCHEDULE_URL } from "@/lib/constants";

export default function FinalCta() {
  return (
    <section className="section final">
      <div className="wrap">
        <p className="eyebrow">No Pressure. No Obligation.</p>
        <h2>Your plan starts with one conversation.</h2>
        <p>
          Schedule a complimentary call. We will talk about your goals, your questions, and whether
          we are the right fit. That is it.
        </p>
        <a className="btn btn-dark btn-on-dark" href={SCHEDULE_URL} target="_blank" rel="noopener">
          Schedule Your Complimentary Call
        </a>
      </div>
    </section>
  );
}
