import Link from "next/link";
import type { ReactNode } from "react";

export default function PageHero({
  eyebrow,
  title,
  description,
  crumbLabel,
}: {
  eyebrow: string;
  title: string;
  description: ReactNode;
  crumbLabel: string;
}) {
  return (
    <section className="page-hero">
      <div className="wrap">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p>{description}</p>
        <p className="crumb">
          <Link href="/">Home</Link> &nbsp;/&nbsp; {crumbLabel}
        </p>
      </div>
    </section>
  );
}
