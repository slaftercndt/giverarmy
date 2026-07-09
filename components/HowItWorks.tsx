import { Heart, Eye, Share2 } from "lucide-react";

const steps = [
  {
    n: "01",
    title: "Join the Army",
    body: "Enlist for as little as $5 a month. Your gift joins thousands of others and flows to real need — to the people with no crowd of their own.",
    Icon: Heart,
  },
  {
    n: "02",
    title: "See the impact",
    body: "Follow the stories. Watch transparent grant tracking turn your generosity into roofs repaired, bills paid, and lives changed.",
    Icon: Eye,
  },
  {
    n: "03",
    title: "Multiply it",
    body: "Pray, share, and recruit. Every story you pass on draws another giver — and grows the crowd around the crowdless.",
    Icon: Share2,
  },
];

export function HowItWorks() {
  return (
    <ol className="grid gap-6 md:grid-cols-3">
      {steps.map((step) => (
        <li key={step.n} className="surface-card flex flex-col p-7">
          <div className="flex items-center justify-between">
            <span
              className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-gold-tint3 text-gold-deep"
              aria-hidden
            >
              <step.Icon size={20} />
            </span>
            <span className="display text-2xl text-cool-200">{step.n}</span>
          </div>
          <h3 className="heading mt-5 text-xl text-slate-ink">{step.title}</h3>
          <p className="mt-3 text-sm leading-body text-slate-400">
            {step.body}
          </p>
        </li>
      ))}
    </ol>
  );
}
