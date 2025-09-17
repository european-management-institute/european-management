import React from "react";
import { ChevronRight } from "lucide-react";
import Tree from "./Tree";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useTranslation } from "react-i18next";
import yourImagePath from "../assets/2.png";
import { useNavigate } from "react-router-dom";
const ServicesLayout = () => {
  const { t } = useTranslation();
  return (
    <div className="relative min-h-80 pt-12 bg-primary-800 ">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0 w-screen  overflow-hidden">
        <LazyLoadImage
          src={yourImagePath}
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 ">
        {/* Main Title - Shown on all screens */}
        <h1 className="text-white text-center font-medium text-2xl tracking-[.125em] leading-2 font-MN p-2">
          {t("services.mainTitle")}
        </h1>
        <h2 className="text-center text-xl text-white  font-medium tracking-[.125em] leading-2  font-MN drop-shadow-[1px_0px_0px_rgba(0,0,0,0.6)]">
          {t("services.subTitle")}
        </h2>
        {/* <img src={imgUrl2} className="max-w-md mx-auto" /> */}
        {/* Mobile/Tablet View - Hidden on desktop */}
        <div className="lg:hidden mt-8">
          <div className="max-w-md mx-auto space-y-4 pb-2">
            <ServiceItem
              title="MANAGEMENT"
              description={t("services.management.description")}
              link="/management"
              icon="🎯"
            />
            <ServiceItem
              title="DIGITAL"
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
        <div className="hidden lg:block   p-8">
          <Tree />
        </div>
      </div>
    </div>
  );
};

const ServiceItem = ({ title, description, link }) => {
  const navigate = useNavigate();
  return (
    <div
      className="group relative bg-white/10 backdrop-blur-sm rounded-lg p-4 
                    hover:bg-white/20 transition-all duration-300 cursor-pointer"
    >
      <a
        className="flex items-center justify-between text-white"
        onClick={() => navigate(link)}
      >
        <div className="flex items-center gap-3">
          <div>
            <h3 className="text-lg font-semibold mb-1 group-hover:text-blue-200 transition-colors">
              {title}
            </h3>
            <p className="text-sm text-blue-100 opacity-80">{description}</p>
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
