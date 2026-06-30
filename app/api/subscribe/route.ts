import { NextResponse } from "next/server";

// Edge-compatible: no Node-only APIs. Runs on Cloudflare Pages.
export const runtime = "edge";

/**
 * Placeholder newsletter handler for the Giver Army Dispatch.
 *
 * TODO (ops): wire this to MailerLite (or the chosen ESP). Right now it only
 * validates the email shape and returns 200 — it does NOT persist or send
 * anything. Do not treat a 200 here as a real subscription.
 */
export async function POST(request: Request) {
  let email = "";
  try {
    const body = (await request.json()) as { email?: string };
    email = (body.email ?? "").trim();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid body" }, { status: 400 });
  }

  const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!valid) {
    return NextResponse.json(
      { ok: false, error: "Invalid email" },
      { status: 400 },
    );
  }

  // TODO: forward `email` to MailerLite here.
  return NextResponse.json({ ok: true });
}
