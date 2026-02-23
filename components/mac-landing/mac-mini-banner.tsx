import Image from "next/image";
import Link from "next/link";

export function MacMiniBanner() {
  return (
    <section className="w-full bg-[#0a0f0a] overflow-hidden">
      <Link
        href="/mac/mac-mini"
        className="block group"
        aria-label="Mac mini — Diseñado para Apple Intelligence"
      >
        
      </Link>
    </section>
  );
}
