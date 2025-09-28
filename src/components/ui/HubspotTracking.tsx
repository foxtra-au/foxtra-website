'use client';

import Script from 'next/script';

export function HubspotTracking() {
  return (
    <Script
      id="hs-script-loader"
      src="//js-ap1.hs-scripts.com/442243679.js"
      strategy="afterInteractive"
      async
      defer
    />
  );
}
