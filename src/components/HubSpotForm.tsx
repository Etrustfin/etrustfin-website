"use client";

import { useEffect, useId } from "react";

const EMBED_SCRIPT_SRC = "https://js.hsforms.net/forms/v2.js";

declare global {
  interface Window {
    hbspt?: {
      forms: {
        create: (options: {
          region: string;
          portalId: string;
          formId: string;
          target: string;
        }) => void;
      };
    };
  }
}

export default function HubSpotForm({ formId, region = "na2" }: { formId: string; region?: string }) {
  const rawId = useId();
  const targetId = `hs-form-${rawId.replace(/[:]/g, "")}`;

  useEffect(() => {
    function createForm() {
      window.hbspt?.forms.create({
        region,
        portalId: "23953347",
        formId,
        target: `#${targetId}`,
      });
    }

    if (window.hbspt) {
      createForm();
      return;
    }

    const existing = document.querySelector<HTMLScriptElement>(`script[src="${EMBED_SCRIPT_SRC}"]`);
    if (existing) {
      existing.addEventListener("load", createForm, { once: true });
      return;
    }

    const script = document.createElement("script");
    script.src = EMBED_SCRIPT_SRC;
    script.addEventListener("load", createForm, { once: true });
    document.body.appendChild(script);
  }, [formId, region, targetId]);

  return <div id={targetId} className="hubspot-form-embed" />;
}
