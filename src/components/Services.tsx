import { site } from "@/content/site";
import { Reveal } from "./Reveal";
import { Section, SectionHead } from "./Section";

export function Services() {
  return (
    <Section id="services">
      <SectionHead
        kicker={site.services.kicker}
        title={<span className="font-display">{site.services.title}</span>}
        sub={site.services.sub}
      />

      <ul className="border-t border-line">
        {site.services.items.map((item, i) => (
          <Reveal
            as="li"
            key={item.title}
            delay={i * 0.06}
            className="group grid items-baseline gap-3 border-b border-line py-8 transition-colors hover:bg-white/[0.015] md:grid-cols-[3.5rem_14rem_1fr] md:gap-10"
          >
            <span className="font-display text-sm text-mute-dim transition-colors group-hover:text-red-bright">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="font-display text-[1.25rem] font-semibold">
              <span className="bg-gradient-to-l from-red to-red bg-[length:0%_1px] bg-right-bottom bg-no-repeat pb-1 transition-[background-size] duration-500 group-hover:bg-[length:100%_1px]">
                {item.title}
              </span>
            </h3>
            <p className="max-w-xl text-mute">{item.body}</p>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
