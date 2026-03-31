import Link from "next/link";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/posts", label: "Posts" },
];

export function SiteHeader() {
  return (
    <header className="border-b-4 border-[#7a886c] bg-[#fcfef9]/94 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Link href="/" className="text-xl font-semibold tracking-[0.18em] text-ink">
          GBLOG
        </Link>
        <nav className="flex items-center gap-5 text-sm font-medium text-ink/75">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition hover:text-accent"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}



