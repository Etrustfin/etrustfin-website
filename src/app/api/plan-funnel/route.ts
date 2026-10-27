import { NextResponse } from "next/server";
import { upsertFunnelContact } from "@/lib/hubspot";
import { FUNNEL_QUESTIONS } from "@/lib/planFunnel";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// The HubSpot form that records a finished application and emails Samantha for each one.
const HUBSPOT_PORTAL_ID = "23953347";
const FUNNEL_FORM_ID = "fe14be78-46b6-408a-9fe9-0a5876b79518";

async function fileFormSubmission(fields: Record<string, string>) {
  const res = await fetch(
    `https://api.hsforms.com/submissions/v3/integration/submit/${HUBSPOT_PORTAL_ID}/${FUNNEL_FORM_ID}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        submittedAt: Date.now(),
        fields: Object.entries(fields).map(([name, value]) => ({ objectTypeId: "0-1", name, value })),
        context: { pageUri: "https://www.etrustfin.com/build-your-plan", pageName: "Build Your Financial Plan" },
      }),
    },
  );
  if (!res.ok) throw new Error(`HubSpot form submission failed ${res.status}: ${await res.text()}`);
}

const clean = (value: unknown, max: number) =>
  typeof value === "string" ? value.trim().slice(0, max) : "";

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Hidden field that real visitors never fill in. Bots usually do, so pretend it worked.
  if (clean(body.website, 100)) return NextResponse.json({ ok: true });

  const email = clean(body.email, 200).toLowerCase();
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  try {
    if (body.step === "contact") {
      const firstName = clean(body.firstName, 80);
      const lastName = clean(body.lastName, 80);
      const phone = clean(body.phone, 40);
      if (!firstName || !lastName) {
        return NextResponse.json({ error: "Please enter your first and last name." }, { status: 400 });
      }
      if (phone.replace(/\D/g, "").length < 10) {
        return NextResponse.json({ error: "Please enter a valid phone number." }, { status: 400 });
      }
      await upsertFunnelContact(email, {
        firstname: firstName,
        lastname: lastName,
        phone,
        plan_funnel_source: clean(body.source, 200) || "direct",
        plan_funnel_stage: "Contact info only",
      });
      return NextResponse.json({ ok: true });
    }

    if (body.step === "survey") {
      const answers = (body.answers ?? {}) as Record<string, unknown>;
      const properties: Record<string, string> = { plan_funnel_stage: "Survey complete" };
      for (const question of FUNNEL_QUESTIONS) {
        const answer = clean(answers[question.key], 200);
        // Only accept answers that were actually offered.
        if (answer && question.opts.includes(answer)) properties[question.property] = answer;
      }
      await upsertFunnelContact(email, properties);

      // Also record it as a HubSpot form submission, which sends the notification email.
      // The contact is already saved above, so a failure here must not block the visitor.
      try {
        await fileFormSubmission({
          email,
          firstname: clean(body.firstName, 80),
          lastname: clean(body.lastName, 80),
          phone: clean(body.phone, 40),
          plan_funnel_source: clean(body.source, 200) || "direct",
          ...properties,
        });
      } catch (err) {
        console.error("Plan funnel form submission failed:", err);
      }
      return NextResponse.json({ ok: true });
    }

    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  } catch (err) {
    console.error("Plan funnel submission failed:", err);
    return NextResponse.json(
      { error: "Something went wrong on our end. Please try again in a moment." },
      { status: 502 },
    );
  }
}
