"use client";

import { useState } from "react";
import { site } from "@/content/site";
import { Reveal } from "./Reveal";
import { Kicker, Section } from "./Section";
import { FacebookIcon, InstagramIcon, WhatsappIcon } from "./SocialIcons";

type Fields = { name: string; phone: string; area: string; message: string };
type Errors = Partial<Record<keyof Fields, string>>;

const initial: Fields = { name: "", phone: "", area: "", message: "" };

function validate(values: Fields): Errors {
  const errors: Errors = {};
  if (values.name.trim().length < 3) errors.name = "من فضلك اكتب اسمك بالكامل.";

  const digits = values.phone.replace(/[\s()+-]/g, "");
  if (!/^(?:2)?0?1[0125]\d{8}$|^\d{10,15}$/.test(digits)) {
    errors.phone = "أدخل رقم هاتف صحيح (مثال: 01012345678).";
  }

  if (values.message.trim().length < 10) errors.message = "اكتب تفاصيل طلبك في ١٠ حروف على الأقل.";
  return errors;
}

function buildMailto(values: Fields) {
  const subject = `طلب استشارة عقارية — ${values.name}`;
  const body = [
    `الاسم: ${values.name}`,
    `الهاتف / واتساب: ${values.phone}`,
    values.area ? `المنطقة المهتم بها: ${values.area}` : null,
    "",
    "الطلب:",
    values.message,
  ]
    .filter(Boolean)
    .join("\n");

  return `mailto:${site.brand.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export function Contact() {
  const [values, setValues] = useState<Fields>(initial);
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);
  const [copied, setCopied] = useState(false);

  const update = (key: keyof Fields) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    setValues((v) => ({ ...v, [key]: e.target.value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length > 0) return;
    window.location.href = buildMailto(values);
    setSent(true);
  };

  const copySummary = async () => {
    const text = decodeURIComponent(buildMailto(values).split("&body=")[1] ?? "");
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopied(false);
    }
  };

  const field =
    "w-full rounded-sm border border-line bg-card px-4 py-3.5 text-[0.95rem] text-bone placeholder:text-mute-dim transition-colors focus:border-red/60 focus:outline-none focus-visible:outline-none";

  return (
    <Section id="contact" bordered={false}>
      <div className="grid gap-12 md:grid-cols-2 md:gap-16">
        <Reveal>
          <Kicker>{site.contact.kicker}</Kicker>
          <h2 className="font-display text-[clamp(1.6rem,3vw,2.1rem)] font-semibold leading-tight">
            {site.contact.title}
          </h2>
          <p className="mt-4 max-w-md text-mute">{site.contact.sub}</p>

          <dl className="mt-10 space-y-7">
            <div>
              <dt className="text-[0.85rem] text-mute">الهاتف / واتساب</dt>
              <dd className="mt-1 flex flex-wrap items-center gap-3">
                <a
                  href={`tel:${site.brand.phoneIntl}`}
                  dir="ltr"
                  className="text-[1.12rem] font-medium tabular-nums transition-colors hover:text-red-bright"
                >
                  {site.brand.phoneDisplay}
                </a>
                <a
                  href={`https://wa.me/${site.brand.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-sm border border-line px-3 py-1.5 text-[0.85rem] font-bold transition-colors hover:border-red hover:text-red-bright"
                >
                  <WhatsappIcon className="h-4 w-4" />
                  واتساب
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-[0.85rem] text-mute">البريد الإلكتروني</dt>
              <dd className="mt-1 text-[1.12rem] font-medium">
                <a href={`mailto:${site.brand.email}`} className="transition-colors hover:text-red-bright">
                  {site.brand.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-[0.85rem] text-mute">الاسم التجاري</dt>
              <dd className="mt-1 text-[1.12rem] font-medium">{site.brand.name}</dd>
            </div>
            <div>
              <dt className="text-[0.85rem] text-mute">رقم التسجيل الضريبي</dt>
              <dd className="mt-1 text-[1.12rem] font-medium tabular-nums">{site.brand.taxId}</dd>
            </div>
            <div>
              <dt className="text-[0.85rem] text-mute">تابعنا</dt>
              <dd className="mt-2 flex flex-wrap gap-3">
                {site.socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${site.brand.name} على ${social.label}`}
                    className="inline-flex items-center gap-2 rounded-sm border border-line px-4 py-2 text-[0.9rem] transition-colors hover:border-red hover:text-red-bright"
                  >
                    {social.name === "Facebook" ? (
                      <FacebookIcon className="h-4 w-4" />
                    ) : (
                      <InstagramIcon className="h-4 w-4" />
                    )}
                    {social.label}
                  </a>
                ))}
              </dd>
            </div>
          </dl>
        </Reveal>

        <Reveal delay={0.12}>
          {sent ? (
            <div className="rounded-sm border border-line bg-card p-8">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-red/15">
                <svg viewBox="0 0 24 24" className="h-5 w-5 text-red-bright" fill="none" stroke="currentColor" strokeWidth="2.4">
                  <path d="m5 13 4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="mt-5 font-display text-[1.25rem] font-semibold">رسالتك جاهزة للإرسال</h3>
              <p className="mt-3 text-mute">
                فتحنا برنامج البريد لديك ومعه تفاصيل طلبك. لو لم يفتح تلقائيًا، انسخ الرسالة وأرسلها إلى{" "}
                <a href={`mailto:${site.brand.email}`} className="text-bone underline-offset-4 hover:text-red-bright hover:underline">
                  {site.brand.email}
                </a>
                .
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={copySummary}
                  className="rounded-sm border border-line px-5 py-2.5 text-[0.9rem] font-bold transition-colors hover:border-red hover:text-red-bright"
                >
                  {copied ? "تم النسخ ✓" : "انسخ الرسالة"}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setSent(false);
                    setValues(initial);
                  }}
                  className="rounded-sm bg-red px-5 py-2.5 text-[0.9rem] font-bold text-white"
                >
                  إرسال طلب آخر
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={onSubmit} noValidate className="flex flex-col gap-4">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-[0.85rem] text-mute">
                  الاسم بالكامل
                </label>
                <input
                  id="name"
                  name="name"
                  value={values.name}
                  onChange={update("name")}
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? "name-error" : undefined}
                  className={field}
                  placeholder="محمد أحمد"
                />
                {errors.name ? (
                  <p id="name-error" role="alert" className="mt-1.5 text-[0.82rem] text-red-bright">
                    {errors.name}
                  </p>
                ) : null}
              </div>

              <div>
                <label htmlFor="phone" className="mb-1.5 block text-[0.85rem] text-mute">
                  رقم الهاتف / واتساب
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  dir="ltr"
                  inputMode="tel"
                  value={values.phone}
                  onChange={update("phone")}
                  aria-invalid={Boolean(errors.phone)}
                  aria-describedby={errors.phone ? "phone-error" : undefined}
                  className={`${field} text-right`}
                  placeholder="01012345678"
                />
                {errors.phone ? (
                  <p id="phone-error" role="alert" className="mt-1.5 text-[0.82rem] text-red-bright">
                    {errors.phone}
                  </p>
                ) : null}
              </div>

              <div>
                <label htmlFor="area" className="mb-1.5 block text-[0.85rem] text-mute">
                  المنطقة المهتم بها <span className="text-mute-dim">(اختياري)</span>
                </label>
                <select id="area" name="area" value={values.area} onChange={update("area")} className={field}>
                  <option value="">اختر المنطقة</option>
                  {site.coverage.areas.map((area) => (
                    <option key={area} value={area}>
                      {area}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="message" className="mb-1.5 block text-[0.85rem] text-mute">
                  طلبك أو استفسارك
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={values.message}
                  onChange={update("message")}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? "message-error" : undefined}
                  className={`${field} min-h-32 resize-y`}
                  placeholder="أبحث عن شقة ١٥٠ متر في التجمع الخامس بميزانية..."
                />
                {errors.message ? (
                  <p id="message-error" role="alert" className="mt-1.5 text-[0.82rem] text-red-bright">
                    {errors.message}
                  </p>
                ) : null}
              </div>

              <button
                type="submit"
                className="mt-1 rounded-sm bg-red px-6 py-3.5 font-bold text-white transition-transform hover:-translate-y-0.5"
              >
                إرسال الطلب
              </button>
              <p className="text-[0.8rem] text-mute-dim">
                بالضغط على إرسال سيفتح برنامج البريد لديك برسالة جاهزة موجهة إلى {site.brand.email}
              </p>
            </form>
          )}
        </Reveal>
      </div>
    </Section>
  );
}
