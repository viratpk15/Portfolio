import Container from "@/components/ui/Container";
import { navigation } from "@/data/navigation";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--glass-stroke)] py-12">
      <Container>
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold tracking-tight text-[var(--color-text-primary)]">
              Virat<span className="text-[var(--color-primary)]">.</span>
            </span>
            <span className="text-sm text-[var(--color-text-muted)]">© 2026</span>
          </div>

          <ul className="flex flex-wrap items-center justify-center gap-6">
            {navigation.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="text-sm text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-text-primary)]"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
}