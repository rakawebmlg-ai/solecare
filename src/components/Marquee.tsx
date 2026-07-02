"use client";

const treatments = [
  "QUICK CLEAN",
  "CASUAL CLEAN",
  "DEEP CLEAN",
  "LEATHER CARE",
  "WHITENING",
  "UNYELLOWING",
  "REGLUE",
  "REPAINT",
  "REPARASI",
];

export default function Marquee() {
  const items = [...treatments, ...treatments]; // duplicate for seamless loop

  return (
    <div className="relative overflow-hidden py-4 bg-primary-50/50 border-y border-primary-100/50">
      <div className="flex animate-marquee whitespace-nowrap">
        {items.map((item, i) => (
          <span
            key={i}
            className="mx-4 md:mx-6 text-sm md:text-base font-heading font-semibold text-primary/40 select-none"
          >
            {item}
            <span className="ml-4 md:ml-6 text-primary/20">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}
