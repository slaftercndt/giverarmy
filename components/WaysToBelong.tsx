import { HandHeart, Church, Share2, Users } from "lucide-react";
import { links } from "@/lib/links";

/**
 * Ways to belong. Give is the direct CTA (dominant gold card). Pray / Share /
 * Recruit are the transitional CTAs ("Multiply") — visibly alongside Give.
 */
export function WaysToBelong() {
  return (
    <div className="grid gap-5 lg:grid-cols-2">
      {/* Give — dominant gold card */}
      <a
        href={links.give}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex flex-col justify-between overflow-hidden rounded-card bg-gold-base p-8 text-slate-ink shadow-gold transition hover:bg-gold-bright lg:row-span-2 lg:p-10"
      >
        <div>
          <span
            className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-slate-ink/10"
            aria-hidden
          >
            <HandHeart size={24} />
          </span>
          <h3 className="heading mt-6 text-2xl sm:text-3xl">Give</h3>
          <p className="mt-3 max-w-sm text-[0.95rem] leading-body text-slate-ink/80">
            The direct way in. Fund the crowdless with a monthly gift — or give
            once. This is where generosity becomes real for someone with no one
            else behind them.
          </p>
        </div>
        <span className="mt-8 inline-flex items-center gap-2 text-sm font-bold">
          Start giving
          <span className="transition-transform group-hover:translate-x-1" aria-hidden>
            →
          </span>
        </span>
      </a>

      {/* Multiply trio — white cards */}
      <MultiplyCard
        Icon={Church}
        title="Pray"
        body="Lift up the people behind the stories. Generosity starts on your knees before it shows up in a bank account."
      />
      <MultiplyCard
        Icon={Share2}
        title="Share"
        body="Pass a story along. Every share pulls another person into the crowd around someone who had none."
      />
      <MultiplyCard
        Icon={Users}
        title="Recruit"
        body="Invite a friend to enlist. Two givers become four; four become a movement that reshapes culture."
        className="lg:col-span-2"
      />
    </div>
  );
}

function MultiplyCard({
  Icon,
  title,
  body,
  className = "",
}: {
  Icon: typeof Church;
  title: string;
  body: string;
  className?: string;
}) {
  return (
    <div className={`surface-card flex flex-col p-7 ${className}`}>
      <span
        className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-gold-tint3 text-gold-deep"
        aria-hidden
      >
        <Icon size={20} />
      </span>
      <h3 className="heading mt-5 text-xl text-slate-ink">{title}</h3>
      <p className="mt-2 text-sm leading-body text-slate-400">{body}</p>
    </div>
  );
}
