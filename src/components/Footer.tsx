import { site } from "@/content/site";
import { Logo } from "./Logo";
import { FacebookIcon, InstagramIcon, WhatsappIcon } from "./SocialIcons";

export function Footer() {
  return (
    <footer className="border-t border-line py-10">
      <div className="wrap flex flex-wrap items-center justify-between gap-5 text-[0.85rem] text-mute-dim">
        <div className="flex items-center gap-2.5 text-mute">
          <Logo className="h-7 w-7 text-red" />
          <span>
            {site.brand.name} <span className="text-mute-dim">—</span> PC - East Cairo
          </span>
        </div>
        <div className="flex items-center gap-2">
          <a
            href={`tel:${site.brand.phoneIntl}`}
            dir="ltr"
            className="rounded-sm border border-line px-3 py-1.5 tabular-nums text-mute transition-colors hover:border-red hover:text-red-bright"
          >
            {site.brand.phoneDisplay}
          </a>
          <a
            href={`https://wa.me/${site.brand.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="واتساب"
            className="flex h-9 w-9 items-center justify-center rounded-sm border border-line text-mute transition-colors hover:border-red hover:text-red-bright"
          >
            <WhatsappIcon className="h-4 w-4" />
          </a>
          {site.socials.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${site.brand.name} على ${social.label}`}
              className="flex h-9 w-9 items-center justify-center rounded-sm border border-line text-mute transition-colors hover:border-red hover:text-red-bright"
            >
              {social.name === "Facebook" ? (
                <FacebookIcon className="h-4 w-4" />
              ) : (
                <InstagramIcon className="h-4 w-4" />
              )}
            </a>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
          <span className="tabular-nums">رقم التسجيل الضريبي {site.brand.taxId}</span>
          <span aria-hidden>|</span>
          <span className="tabular-nums">رقم البطاقة الضريبية {site.brand.taxCardNo}</span>
          <span aria-hidden>|</span>
          <span>جميع الحقوق محفوظة © {new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  );
}
