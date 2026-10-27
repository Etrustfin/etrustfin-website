import { NextResponse } from "next/server";
import { upsertFunnelContact } from "@/lib/hubspot";
import { FUNNEL_QUESTIONS } from "@/lib/planFunnel";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

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
