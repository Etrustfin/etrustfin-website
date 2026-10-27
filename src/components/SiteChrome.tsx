"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

// Landing pages that should show no site menu, footer, or newsletter pop-up, so the visitor
// has one thing to do. Add a path prefix here to give another page the same treatment.
const FOCUSED_PAGES = ["/build-your-plan"];

export default function SiteChrome({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  if (FOCUSED_PAGES.some((prefix) => pathname.startsWith(prefix))) return null;
  return <>{children}</>;
}
