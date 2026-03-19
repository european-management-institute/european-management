import React, { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

const AdvisoryTeamSection = () => {
  const { t } = useTranslation();
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // On first load, start the landing page "second video" at 9s.
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const setToNineSeconds = () => {
      try {
        // Ensure we always start at 7.7 seconds when the metadata is available.
        video.currentTime = 7.7;
      } catch {
        // Some browsers may throw if seeking isn't allowed yet.
      }
    };

    if (video.readyState >= 1) {
      setToNineSeconds();
      return;
    }

    video.addEventListener("loadedmetadata", setToNineSeconds, { once: true });
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 md:py-16 grid md:grid-cols-2 gap-8 md:gap-12 items-start">
      {/* Left: heading + paragraph (as in screenshot) */}
      <div className="space-y-6">
        <h2 className="text-xl md:text-2xl font-MN font-semibold text-gray-900 uppercase tracking-tight">
          {t("advisoryTeam.rightColumn_title")}
        </h2>
        <p className="text-lg md:text-xl leading-relaxed font-MN font-light text-gray-700 text-justify">
          {t("advisoryTeam.belowHero_paragraph")}
        </p>
      </div>

      {/* Right: site visit video */}
      <div className="w-full aspect-video md:aspect-[4/3] rounded-lg overflow-hidden min-h-[200px]">
        <video
          ref={videoRef}
          src="/site-visit.mp4"
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        />
      </div>
    </div>
  );
};

export default AdvisoryTeamSection;
