import Link from "next/link";
import footerConfig from "@/config/footer";

export default function Footer() {
  return (
    <footer className="bg-muted w-full py-6">
      <div className="container max-w-7xl flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-xs text-muted-foreground">
          {footerConfig?.copyrightText}
        </p>
        <nav className="flex items-center gap-4 sm:gap-6">
          {footerConfig?.links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xs hover:underline underline-offset-4"
              prefetch={false}
            >
              {link.text}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
