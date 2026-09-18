import { site } from "@/content/site";
import { Reveal } from "./Reveal";
import { Section, SectionHead } from "./Section";
import { ProjectVisual } from "./ProjectVisual";

export function Projects() {
  const p = site.projects.item;

  return (
    <Section id="projects">
      <SectionHead kicker={site.projects.kicker} title={site.projects.title} sub={site.projects.sub} />

      <article className="grid items-center gap-10 md:grid-cols-[0.85fr_1.15fr] md:gap-14">
        <Reveal className="group relative overflow-hidden rounded-sm border border-line">
          <ProjectVisual className="h-full w-full transition-transform duration-700 group-hover:scale-[1.03]" />
          <span className="absolute top-4 right-4 rounded-sm bg-red px-3 py-1 text-[0.72rem] font-bold text-white">
            متاح الآن
          </span>
        </Reveal>

        <Reveal delay={0.12}>
          <h3 className="font-display text-[1.9rem] font-semibold tracking-[0.02em]">{p.name}</h3>
          <div className="mt-2 text-[0.95rem] font-bold text-red">{p.location}</div>
          <p className="mt-5 max-w-xl text-mute">{p.body}</p>

          <div className="my-7 border-y border-line py-5">
            <div className="text-[0.9rem] text-mute">{p.priceLabel}</div>
            <div className="font-display text-[2.6rem] leading-tight">
              {p.price}
              <small className="mr-2 font-sans text-[0.95rem] text-mute">{p.priceUnit}</small>
            </div>
          </div>

          <ul className="grid gap-px overflow-hidden rounded-sm border border-line bg-line sm:grid-cols-3">
            {p.plans.map((plan) => (
              <li key={plan.down} className="bg-ink px-4 py-5 text-center transition-colors hover:bg-card">
                <b className="block font-display text-[1.6rem] text-red">{plan.down}</b>
                <span className="text-[0.88rem] text-mute">{plan.term}</span>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="mt-7 inline-block rounded-sm bg-red px-8 py-3.5 text-[0.95rem] font-bold text-white transition-transform hover:-translate-y-0.5"
          >
            اطلب تفاصيل المشروع
          </a>
        </Reveal>
      </article>
    </Section>
  );
}
