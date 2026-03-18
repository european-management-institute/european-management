import React, { useRef, useEffect, useState } from "react";
import { ChevronRight } from "lucide-react";
import Tree from "./Tree";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const lerpColor = (t: number) => {
  // Interpolate from dark (25) to light (255)
  const r = Math.round(25 + (255 - 25) * t);
  const g = Math.round(25 + (255 - 25) * t);
  const b = Math.round(25 + (255 - 25) * t);
  return `rgb(${r},${g},${b})`;
};

// Start transition after this fraction of the video
// (higher = transition happens over fewer seconds, so it feels quicker)
const TRANSITION_START = 0.7;

const ServicesLayout = () => {
  const { t } = useTranslation();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [textColor, setTextColor] = useState(() => lerpColor(0));
  const [borderIsDark, setBorderIsDark] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.playbackRate = 0.65;

    const updateProgress = () => {
      const d = video.duration;
      if (!d || !Number.isFinite(d)) return;
      const progress = Math.min(1, video.currentTime / d);
      setBorderIsDark(progress <= TRANSITION_START);
      const t =
        progress <= TRANSITION_START
          ? 0
          : (progress - TRANSITION_START) / (1 - TRANSITION_START);
      setTextColor(lerpColor(t));
    };

    video.addEventListener("timeupdate", updateProgress);
    video.addEventListener("loadedmetadata", updateProgress);
    return () => {
      video.removeEventListener("timeupdate", updateProgress);
      video.removeEventListener("loadedmetadata", updateProgress);
    };
  }, []);

  return (
    <div className="relative min-h-80 pt-12 bg-primary-800 ">
      {/* Hero background video (loop, muted for autoplay) */}
      <div className="absolute inset-0 z-0 w-screen overflow-hidden">
        <video
          ref={videoRef}
          src="/20260318_213550613.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          aria-hidden
        />
      </div>
      {/* Content Container */}
      <div className="relative z-10">
        {/* Main Title - Shown on all screens */}
        <h1
          className="text-center font-medium text-2xl tracking-[.125em] leading-2 font-MN p-2"
          style={{ color: textColor }}
        >
          {t("services.mainTitle")}
        </h1>
        <h2
          className="text-center text-xl font-medium tracking-[.125em] leading-2 font-MN drop-shadow-[1px_0px_0px_rgba(0,0,0,0.6)]"
          style={{ color: textColor }}
        >
          {t("services.subTitle")}
        </h2>
        {/* <img src={imgUrl2} className="max-w-md mx-auto" /> */}
        {/* Mobile/Tablet View - Hidden on desktop */}
        <div className="lg:hidden mt-8">
          <div className="max-w-md mx-auto space-y-4 pb-2">
            <ServiceItem
              title={t("navigation.consulenza_direzionale")}
              description={t("services.management.description")}
              link="/consulenza-direzionale"
              icon="📋"
            />
            <ServiceItem
              title="PUBLIC POLICY"
              link="/digital"
              description={t("services.digital.description")}
              icon="💻"
            />
            <ServiceItem
              title="INSTITUTE"
              link="/e-learning"
              description={t("services.institute.description")}
              icon="🎓"
            />
          </div>
        </div>

        {/* Desktop View - Hidden on mobile/tablet */}
        <div className="hidden lg:block p-8" style={{ color: textColor }}>
          <Tree borderIsDark={borderIsDark} />
        </div>
      </div>
    </div>
  );
};

const ServiceItem = ({ title, description, link, icon }) => {
  const navigate = useNavigate();
  return (
    <div
      className="group relative bg-white/10 backdrop-blur-sm rounded-lg p-4 
                    hover:bg-white/20 transition-all duration-300 cursor-pointer"
    >
      <a
        className="flex items-center justify-between text-[#191919]"
        onClick={() => navigate(link)}
      >
        <div className="flex items-center gap-3">
          <div>
            <h3 className="text-lg font-semibold mb-1 transition-colors">
              {title}
            </h3>
            <p className="text-sm opacity-80">{description}</p>
          </div>
        </div>
        <ChevronRight
          className="text-blue-200 transform group-hover:translate-x-1 transition-transform"
          size={20}
        />
      </a>
    </div>
  );
};

export default ServicesLayout;
