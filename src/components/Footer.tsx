import { site } from "@/content/site";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="border-t border-line py-10">
      <div className="wrap flex flex-wrap items-center justify-between gap-5 text-[0.85rem] text-mute-dim">
        <div className="flex items-center gap-2.5 text-mute">
          <Logo className="h-7 w-7 text-mute" />
          <span>
            {site.brand.name} <span className="text-mute-dim">—</span> PC - East Cairo
          </span>
        </div>
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
          <span className="tabular-nums">رقم التسجيل الضريبي {site.brand.taxId}</span>
          <span aria-hidden>|</span>
          <span>جميع الحقوق محفوظة © {new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  );
}
