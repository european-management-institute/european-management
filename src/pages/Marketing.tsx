import React from "react";
import { useTranslation } from "react-i18next";
import lucaImg from "../assets/IMG_7691 2.webp";
import srcc from "../assets/12.png";
import bt from "../assets/9.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
import emiLogo from "../assets/ombrato_reduced.png";
import ServicesAndClients from "../Component/ServicesAndClients";
import ImageGrid from "../Component/ImageGrid";
import { useNavigate } from "react-router-dom";

const Digital = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <section>
      <div className="max-w-7xl mx-auto py-8 md:py-12 lg:py-16 px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-8 text-center md:text-left px-4 md:px-6">
            <h2 className="text-3xl md:text-5xl font-MN font-semibold leading-tight">
              {t("digital.title.part1")}
              <span className="text-red-700">{t("digital.title.part2")}</span>
              {t("digital.title.part3")}
              <br />
              {t("digital.title.subtitle")}
            </h2>

            <p className="text-xl font-MN font-bold text-gray-700 leading-tight">
              {t("digital.description")}
            </p>

            <button
              className="bg-cover bg-center text-white px-8 py-3 rounded-full font-MN
             font-semibold text-xl hover:opacity-90 
             transition-all duration-300 min-w-[200px]"
              style={{
                backgroundImage: `url(${bt})`,
                backgroundSize: "120% 140%",
              }}
              onClick={() => navigate("/chi-siamo")}
            >
              {t("digital.button")}
            </button>
          </div>

          <div className="relative -mb-24 items-center">
            <LazyLoadImage
              src={lucaImg}
              alt="Isabel"
              effect="blur"
              className="w-5/6 h-2/6 mx-auto object-cover rounded-sm shadow-xl transition-all duration-300 group-hover:scale-105"
            />
          </div>
        </div>
      </div>

      <footer className="bg-[black] relative overflow-hidden min-w-full">
        <div className="max-w-7xl mx-auto">
          <div className="py-6 flex justify-end">
            <div className="max-w-2xl space-y-8 text-white">
              <p className="text-lg md:text-xl lg:text-2xl font-MN font-medium leading-tight text-center md:text-left p-4 max-w-lg md:mr-16">
                {t("digital.quote")}
              </p>
              <div className="flex justify-center">
                <img
                  src={srcc}
                  alt="Luca Bazzanella signature"
                  className="h-20 object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </footer>

      <ServicesAndClients />
      <ImageGrid />

      <footer className="bg-[black] py-16 relative overflow-hidden">
        <div className="px-4 flex flex-col lg:flex-row justify-around items-center">
          <div className="w-full lg:w-auto mb-8 lg:mb-0 max-w-xl">
            <h2 className="text-3xl font-MN font-500 text-white mb-6 text-center lg:text-left">
              {t("digital.contact.title")}
            </h2>
            <p className="text-lg font-MN font-light text-white leading-relaxed max-w-md text-center lg:text-left mx-auto lg:mx-0">
              {t("digital.contact.description")}
            </p>
          </div>

          <div className="w-full lg:w-auto relative mx-auto lg:mx-0">
            <img
              src={emiLogo}
              alt="European Management Institute Logo"
              className="hidden lg:block w-40 h-40 object-contain opacity-30 mx-auto"
            />
          </div>

          <div className="w-full lg:w-auto text-center lg:text-right mt-8 lg:mt-0">
            <div className="flex flex-row items-center mb-4 justify-center lg:justify-end">
              <img
                src={emiLogo}
                alt="EMI Logo"
                className="h-8 inline-block mr-2"
              />
              <p className="md:text-[.49rem] font-light text-left text-white leading-tight">
                {t("digital.company.name1")}
                <br />
                {t("digital.company.name2")}
                <br />
                {t("digital.company.name3")}
              </p>
            </div>

            <div className="text-white text-[.59rem] text-center lg:text-right font-light">
              <p>{t("digital.copyright.text")}</p>
              <p className="mt-1">{t("digital.copyright.rights")}</p>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Digital;
