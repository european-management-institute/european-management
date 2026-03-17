import React from "react";
import { useTranslation } from "react-i18next";

const AdvisoryTeamSection = () => {
  const { t } = useTranslation();

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 md:py-16 grid md:grid-cols-2 gap-8 md:gap-12 items-start">
      {/* Left: heading + paragraph (as in screenshot) */}
      <div className="space-y-6">
        <h2 className="text-xl md:text-2xl font-MN font-semibold text-gray-900 uppercase tracking-tight">
          {t("advisoryTeam.rightColumn_title")}
        </h2>
        <p className="text-lg md:text-xl leading-relaxed font-MN font-light text-gray-700">
          {t("advisoryTeam.belowHero_paragraph")}
        </p>
      </div>

      {/* Right: site visit video */}
      <div className="w-full aspect-video md:aspect-[4/3] rounded-lg overflow-hidden min-h-[200px]">
        <video
          src="/site-visit.mp4"
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          controls
        />
      </div>
    </div>
  );
};

export default AdvisoryTeamSection;
