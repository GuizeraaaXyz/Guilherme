"use client";

import { useEffect } from "react";
import Script from "next/script";

declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
    gtag?: (...args: unknown[]) => void;
  }
}

const gaId = process.env.NEXT_PUBLIC_GA_ID?.trim();
const adsId = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID?.trim();
const adsConversionLabel = process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL?.trim();
const gtmId = process.env.NEXT_PUBLIC_GTM_ID?.trim();

export function trackLead(source: string) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];

  if (window.gtag) {
    window.gtag("event", "generate_lead", { lead_source: source, transport_type: "beacon" });
    if (adsId && adsConversionLabel) {
      window.gtag("event", "conversion", {
        send_to: `${adsId}/${adsConversionLabel}`,
        transport_type: "beacon",
      });
    }
  } else {
    window.dataLayer.push({ event: "generate_lead", lead_source: source });
  }
}

export function Analytics() {
  const googleTagId = gaId || adsId;

  useEffect(() => {
    function trackWhatsAppClick(event: MouseEvent) {
      const element = event.target as Element | null;
      const link = element?.closest<HTMLAnchorElement>('a[href*="wa.me/"]');
      if (link) trackLead(link.dataset.analyticsSource || "whatsapp_link");
    }
    document.addEventListener("click", trackWhatsAppClick);
    return () => document.removeEventListener("click", trackWhatsAppClick);
  }, []);

  return (
    <>
      {gtmId && (
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${gtmId}');`}
        </Script>
      )}
      {googleTagId && (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${googleTagId}`} strategy="afterInteractive" />
          <Script id="google-tag" strategy="afterInteractive">
            {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}window.gtag=gtag;gtag('js',new Date());${gaId ? `gtag('config','${gaId}');` : ""}${adsId ? `gtag('config','${adsId}');` : ""}`}
          </Script>
        </>
      )}
    </>
  );
}
