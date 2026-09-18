import { site } from "@/content/site";
import { Reveal } from "./Reveal";
import { Section, SectionHead } from "./Section";

export function Why() {
  return (
    <Section>
      <SectionHead kicker={site.why.kicker} title={site.why.title} align="center" />

      <ul className="grid gap-px overflow-hidden rounded-sm border border-line bg-line md:grid-cols-3">
        {site.why.cards.map((card, i) => (
          <Reveal
            as="li"
            key={card.title}
            delay={i * 0.08}
            className="group relative bg-ink px-8 py-9 transition-colors hover:bg-card"
          >
            <span aria-hidden className="absolute inset-x-0 top-0 h-px w-0 bg-red transition-all duration-500 group-hover:w-full" />
            <h3 className="font-display text-[1.1rem] font-semibold">{card.title}</h3>
            <p className="mt-3 text-[0.96rem] text-mute">{card.body}</p>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
