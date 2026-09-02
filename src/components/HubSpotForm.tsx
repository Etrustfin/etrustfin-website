"use client";

import { useEffect, useRef } from "react";

const EMBED_SCRIPT_SRC = "https://js.hsforms.net/forms/embed/23953347.js";

declare global {
  interface Window {
    __hsFormsEmbedLoaded?: boolean;
  }
}

export default function HubSpotForm({ formId, region = "na2" }: { formId: string; region?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function loadScript() {
      if (document.querySelector(`script[src="${EMBED_SCRIPT_SRC}"]`)) return;
      const script = document.createElement("script");
      script.src = EMBED_SCRIPT_SRC;
      script.defer = true;
      document.body.appendChild(script);
    }
    loadScript();
  }, []);

  return (
    <div
      ref={containerRef}
      className="hs-form-frame"
      data-region={region}
      data-form-id={formId}
      data-portal-id="23953347"
    />
  );
}
