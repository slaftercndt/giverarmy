"use client";

import { useState } from "react";
import { Check, Loader2 } from "lucide-react";

/**
 * Giver Army Dispatch signup.
 *
 * TODO (ops): wire to the real MailerLite endpoint. For now this POSTs to a
 * placeholder API route that does not persist anything. No localStorage is used.
 */
export function NewsletterForm({ tone = "dark" }: { tone?: "dark" | "light" }) {
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">(
    "idle",
  );
  const [email, setEmail] = useState("");

  const onLight = tone === "light";

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "loading") return;
    setStatus("loading");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) throw new Error("Subscribe failed");
      setStatus("done");
      setEmail("");
    } catch {
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <p
        className={`inline-flex items-center gap-2 text-sm font-semibold ${
          onLight ? "text-slate-ink" : "text-gold-bright"
        }`}
      >
        <Check size={18} aria-hidden />
        You&apos;re on the Dispatch. Watch your inbox.
      </p>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full flex-col gap-3 sm:flex-row"
      noValidate
    >
      <label htmlFor="dispatch-email" className="sr-only">
        Email address
      </label>
      <input
        id="dispatch-email"
        type="email"
        required
        autoComplete="email"
        placeholder="you@email.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className={`w-full flex-1 rounded-pill border px-5 py-3 text-sm outline-none transition focus-visible:border-gold-base ${
          onLight
            ? "border-cool-200 bg-white text-slate-ink placeholder:text-cool-400"
            : "border-white/20 bg-white/5 text-white placeholder:text-cool-400"
        }`}
      />
      <button
        type="submit"
        disabled={status === "loading"}
        className="btn-gold w-full shrink-0 sm:w-auto"
      >
        {status === "loading" ? (
          <>
            <Loader2 size={16} className="animate-spin" aria-hidden />
            Joining…
          </>
        ) : (
          "Get the Dispatch"
        )}
      </button>
      {status === "error" ? (
        <p
          role="alert"
          className="text-sm text-gold-bright sm:absolute sm:mt-14"
        >
          Something went wrong. Please try again.
        </p>
      ) : null}
    </form>
  );
}
