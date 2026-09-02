"use client";

import { useState, type ReactNode } from "react";

export default function AccordionItem({
  id,
  title,
  defaultOpen = false,
  variant = "svc",
  children,
}: {
  id?: string;
  title: ReactNode;
  defaultOpen?: boolean;
  variant?: "svc" | "con";
  children: ReactNode;
}) {
  const [open, setOpen] = useState(defaultOpen);
  const headClass = variant === "svc" ? "svc-head" : "con-head";
  const bodyClass = variant === "svc" ? "svc-body" : "con-body";

  return (
    <div id={id} className={`${variant}${open ? " open" : ""}`}>
      <button className={headClass} onClick={() => setOpen((o) => !o)}>
        {title}
        <span className="plus">+</span>
      </button>
      <div className={bodyClass}>{children}</div>
    </div>
  );
}
