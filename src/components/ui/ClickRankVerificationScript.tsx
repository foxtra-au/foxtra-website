'use client';

import { useEffect } from 'react';

export function ClickRankVerificationScript() {
  useEffect(() => {
    const clickRankAi = document.createElement("script");
    clickRankAi.src = "https://js.clickrank.ai/seo/31536edb-1bde-478d-a683-ec5e8d440659/script?" + new Date().getTime();
    clickRankAi.async = true;
    document.head.appendChild(clickRankAi);

    // Cleanup function to remove the script when component unmounts
    return () => {
      if (document.head.contains(clickRankAi)) {
        document.head.removeChild(clickRankAi);
      }
    };
  }, []);

  return null; // This component doesn't render anything
}
