import { site } from "@/content/site";
import { Kicker, Section } from "./Section";
import { Reveal } from "./Reveal";
import { CountUp } from "./CountUp";

export function About() {
  return (
    <Section id="about">
      <div className="grid gap-12 md:grid-cols-[1.1fr_0.9fr] md:gap-16">
        <Reveal>
          <Kicker>{site.about.kicker}</Kicker>
          <h2 className="font-display text-[clamp(1.7rem,3.2vw,2.4rem)] font-semibold leading-tight">
            {site.about.title}
          </h2>
          {site.about.body.map((p) => (
            <p key={p} className="mt-5 text-mute md:text-[1.03rem]">
              {p}
            </p>
          ))}
        </Reveal>

        <Reveal
          delay={0.12}
          className="flex flex-col divide-y divide-line border-line md:border-r md:pr-8"
        >
          {site.about.stats.map((stat) => (
            <div key={stat.label} className="py-5 first:pt-0 last:pb-0">
              <b className="block font-display text-[1.9rem] leading-none text-red">
                {stat.value === null ? (
                  stat.display
                ) : (
                  <CountUp to={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                )}
              </b>
              <span className="mt-2 block text-[0.93rem] text-mute">{stat.label}</span>
            </div>
          ))}
        </Reveal>
      </div>
    </Section>
  );
}
