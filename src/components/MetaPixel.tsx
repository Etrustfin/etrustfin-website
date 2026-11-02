"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Script from "next/script";

// Meta (Facebook) Pixel. Tells Meta when someone views a page or finishes the Build Your Plan
// application, so ads can be measured by real leads. Set NEXT_PUBLIC_META_PIXEL_ID in Vercel;
// without it, nothing loads.
const PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID;

type Fbq = (command: string, event: string, params?: Record<string, unknown>) => void;

// Report a standard event such as "Lead". Never pass personal details (name, email, phone,
// or survey answers) here.
export function trackMetaEvent(event: string) {
  const fbq = (window as unknown as { fbq?: Fbq }).fbq;
  if (PIXEL_ID && fbq) fbq("track", event);
}

export default function MetaPixel() {
  const pathname = usePathname();
  const firstLoad = useRef(true);

  // The snippet below records the first page view. Record later in-app page changes here.
  useEffect(() => {
    if (firstLoad.current) {
      firstLoad.current = false;
      return;
    }
    trackMetaEvent("PageView");
  }, [pathname]);

  if (!PIXEL_ID) return null;

  return (
    <Script id="meta-pixel" strategy="afterInteractive">
      {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
document,'script','https://connect.facebook.net/en_US/fbevents.js');
fbq('init','${PIXEL_ID}');fbq('track','PageView');`}
    </Script>
  );
}
