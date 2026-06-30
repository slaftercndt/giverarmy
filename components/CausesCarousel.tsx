"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { causes } from "@/lib/causes";

/**
 * The 12 Causes — horizontal scroll-snap carousel.
 *
 * 3 cards on desktop, 2 on tablet, ~1 (peeking) on mobile. Prev/Next are real
 * <button>s with aria-labels and disabled at the ends. Native scroll gives
 * drag/swipe on touch for free; the scrollbar is hidden via .no-scrollbar.
 */
export function CausesCarousel() {
  const trackRef = useRef<HTMLUListElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const updateEdges = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const maxScroll = el.scrollWidth - el.clientWidth;
    setAtStart(el.scrollLeft <= 1);
    setAtEnd(el.scrollLeft >= maxScroll - 1);
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    updateEdges();
    el.addEventListener("scroll", updateEdges, { passive: true });
    window.addEventListener("resize", updateEdges);
    return () => {
      el.removeEventListener("scroll", updateEdges);
      window.removeEventListener("resize", updateEdges);
    };
  }, [updateEdges]);

  const scrollByCard = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const firstCard = el.querySelector<HTMLElement>("[data-card]");
    const gap = 16;
    const amount = firstCard ? firstCard.offsetWidth + gap : el.clientWidth * 0.8;
    el.scrollBy({ left: dir * amount, behavior: "smooth" });
  };

  return (
    <div>
      <ul
        ref={trackRef}
        className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-2"
        // 1 peeking on mobile, 2 on sm, 3 on lg — via per-item basis below.
      >
        {causes.map((cause) => (
          <li
            key={cause.name}
            data-card
            className="snap-start shrink-0 basis-[82%] sm:basis-[46%] lg:basis-[31.5%]"
          >
            <a
              href={cause.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-full flex-col rounded-card border border-white/10 bg-slate-deep p-6 transition duration-200 hover:-translate-y-1 hover:border-gold-base hover:shadow-lift focus-visible:-translate-y-1 focus-visible:border-gold-base"
            >
              <h3 className="heading text-xl text-white">{cause.name}</h3>
              <p className="mt-3 flex-1 text-sm leading-body text-cool-400">
                {cause.description}
              </p>
              <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-gold-bright">
                Fuel this
                <ArrowRight
                  size={16}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                  aria-hidden
                />
              </span>
            </a>
          </li>
        ))}
      </ul>

      <div className="mt-6 flex items-center justify-end gap-3">
        <CarouselButton
          label="Previous causes"
          disabled={atStart}
          onClick={() => scrollByCard(-1)}
        >
          <ChevronLeft size={20} aria-hidden />
        </CarouselButton>
        <CarouselButton
          label="Next causes"
          disabled={atEnd}
          onClick={() => scrollByCard(1)}
        >
          <ChevronRight size={20} aria-hidden />
        </CarouselButton>
      </div>
    </div>
  );
}

function CarouselButton({
  label,
  disabled,
  onClick,
  children,
}: {
  label: string;
  disabled: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      disabled={disabled}
      onClick={onClick}
      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-slate-base text-white transition hover:border-gold-base hover:text-gold-bright disabled:cursor-not-allowed disabled:opacity-35 disabled:hover:border-white/20 disabled:hover:text-white"
    >
      {children}
    </button>
  );
}
