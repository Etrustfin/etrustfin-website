"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { SCHEDULE_URL, TERM_QUOTE_URL } from "@/lib/constants";

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) => pathname === href;
  const close = () => setOpen(false);

  return (
    <nav>
      <div className="nav-wrap nav-inner">
        <Link className="brand" href="/" onClick={close}>
          <img src="/assets/logo.png" alt="Essential Trust Financial seal logo" />
          <span>
            <span className="brand-name">Essential Trust Financial</span>
            <br />
            <span className="brand-sub">Holistic Wealth Planning</span>
          </span>
        </Link>
        <button
          className="menu-toggle"
          aria-label="Open menu"
          onClick={() => setOpen((o) => !o)}
        >
          &#9776;
        </button>
        <div className={`nav-links${open ? " open" : ""}`} id="navlinks">
          <Link href="/about" className={isActive("/about") ? "active" : undefined} onClick={close}>
            About
          </Link>
          <Link
            href="/who-we-serve"
            className={isActive("/who-we-serve") ? "active" : undefined}
            onClick={close}
          >
            Who We Serve
          </Link>
          <div className="dropdown">
            <span>Services</span>
            <div className="dropdown-menu">
              <Link href="/services#holistic" onClick={close}>Holistic Financial Planning</Link>
              <Link href="/services#tax" onClick={close}>Tax-Efficient Strategies</Link>
              <Link href="/services#insurance" onClick={close}>Life Insurance Strategies</Link>
              <Link href="/services#estate" onClick={close}>Estate &amp; Legacy Support</Link>
              <Link href="/services#generational" onClick={close}>Generational Wealth</Link>
              <Link href="/services#women" onClick={close}>Wealth Planning for Women</Link>
            </div>
          </div>
          <Link
            href="/how-we-work"
            className={isActive("/how-we-work") ? "active" : undefined}
            onClick={close}
          >
            How We Work
          </Link>
          <Link href="/blog" className={isActive("/blog") ? "active" : undefined} onClick={close}>
            Blog
          </Link>
          <Link href="/events" className={isActive("/events") ? "active" : undefined} onClick={close}>
            Events
          </Link>
          <div className="dropdown">
            <span>Resources</span>
            <div className="dropdown-menu">
              <Link href="/concepts" onClick={close}>Concepts Library</Link>
              <Link href="/how-we-work#quiz" onClick={close}>Financial Quiz</Link>
              <Link href="/reviews" onClick={close}>Client Reviews</Link>
              <a href={TERM_QUOTE_URL} target="_blank" rel="noopener" onClick={close}>
                Get a Term Insurance Quote
              </a>
            </div>
          </div>
          <Link href="/contact" className={isActive("/contact") ? "active" : undefined} onClick={close}>
            Contact
          </Link>
          <a
            className="btn btn-dark nav-cta"
            href={SCHEDULE_URL}
            target="_blank"
            rel="noopener"
            onClick={close}
          >
            Schedule a Call
          </a>
        </div>
      </div>
    </nav>
  );
}
