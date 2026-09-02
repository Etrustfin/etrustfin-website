import { NextResponse } from "next/server";
import { upsertNewsletterContact } from "@/lib/hubspot";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let email: unknown;
  try {
    const body = await request.json();
    email = body?.email;
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  if (typeof email !== "string" || !EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  try {
    await upsertNewsletterContact(email);
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Newsletter signup failed:", err);
    return NextResponse.json(
      { error: "Something went wrong on our end. Please try again in a moment." },
      { status: 502 },
    );
  }
}
