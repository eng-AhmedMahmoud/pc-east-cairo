"use client";

import { motion, useReducedMotion } from "framer-motion";
import { site } from "@/content/site";
import { Logo } from "./Logo";

const ease = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  const reduced = useReducedMotion();
  const rise = (delay: number) => ({
    initial: reduced ? false : { opacity: 0, y: 22 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay, ease },
  });

  return (
    <section id="top" className="relative overflow-hidden border-b border-line pt-36 pb-24 md:pt-44 md:pb-32">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="grid-veil absolute inset-0 opacity-60" />
        <div className="absolute -top-40 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-red/12 blur-[130px]" />
        <div className="noise absolute inset-0 opacity-[0.035] mix-blend-overlay" />
        <svg
          viewBox="0 0 1200 500"
          preserveAspectRatio="none"
          className="absolute inset-x-0 bottom-0 h-[70%] w-full"
        >
          <motion.polyline
            points="-50,420 250,180 550,420"
            fill="none"
            stroke="#e5083a"
            strokeWidth="1"
            opacity="0.16"
            initial={reduced ? false : { pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.8, ease }}
          />
          <motion.polyline
            points="650,460 950,220 1250,460"
            fill="none"
            stroke="#ffffff"
            strokeWidth="1"
            opacity="0.06"
            initial={reduced ? false : { pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.8, delay: 0.25, ease }}
          />
        </svg>
      </div>

      <div className="wrap relative z-10 flex flex-col items-center text-center">
        <motion.div {...rise(0)}>
          <Logo className="h-28 w-28 text-bone md:h-32 md:w-32" />
        </motion.div>

        <motion.h1
          {...rise(0.1)}
          className="mt-8 font-display text-[clamp(2rem,5.4vw,3.7rem)] font-bold uppercase leading-[1.15] tracking-[0.02em]"
        >
          {site.hero.titleTop}
          <br />
          {site.hero.titleBottom} <em className="not-italic text-red">{site.hero.accent}</em>
        </motion.h1>

        <motion.div {...rise(0.18)} className="relative mt-7 h-px w-28 bg-line">
          <span className="absolute -top-[3px] left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-red" />
        </motion.div>

        <motion.p {...rise(0.24)} className="mt-7 max-w-xl text-[1.05rem] text-mute md:text-[1.1rem]">
          {site.hero.sub}
        </motion.p>

        <motion.ul {...rise(0.3)} className="mt-8 flex flex-wrap justify-center gap-2.5">
          {site.hero.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-sm border border-line px-4 py-1.5 text-[0.85rem] text-mute transition-colors hover:border-line-strong hover:text-bone"
            >
              {tag}
            </li>
          ))}
        </motion.ul>

        <motion.div {...rise(0.36)} className="mt-10 flex flex-wrap justify-center gap-3.5">
          <a
            href="#contact"
            className="rounded-sm bg-red px-8 py-3.5 text-[0.95rem] font-bold text-white transition-transform hover:-translate-y-0.5"
          >
            تواصل معنا الآن
          </a>
          <a
            href="#services"
            className="rounded-sm border border-line px-8 py-3.5 text-[0.95rem] font-bold text-bone transition-colors hover:border-red hover:text-red"
          >
            خدماتنا
          </a>
        </motion.div>
      </div>
    </section>
  );
}
