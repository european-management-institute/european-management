import React from "react";
import { useTranslation } from "react-i18next";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useNavigate } from "react-router-dom";
import { Github, Linkedin, ExternalLink, Code, Database, Brain, Cloud, Users, Award } from "lucide-react";
import ExpertiseGraph from "@/Component/ExpertiseGraph";
import srcc from "../assets/11_white.png";
import bt from "../assets/7.png";
import lucaImg from "../assets/luca.jpeg";

const Digital = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <section>
      <div className="max-w-7xl mx-auto py-8 md:py-12 lg:py-16 px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-8 text-center md:text-left px-4 md:px-6">
            <h2 className="text-2xl text-blue-950 md:text-4xl lg:text-5xl font-MN font-medium leading-tight">
              {t("OutsourcedManagement.title")}
            </h2>

            <p className="text-lg md:text-xl font-MN font-bold text-gray-700 leading-tight">
              {t("OutsourcedManagement.subtitle")}
            </p>

            <div className="flex justify-center md:justify-start">
              <button
                className="bg-cover bg-center text-white px-6 md:px-8 py-2 md:py-3 rounded-full font-MN
                   font-semibold text-lg md:text-xl hover:opacity-90 
                   transition-all duration-300 min-w-[200px]"
                style={{
                  backgroundImage: `url(${bt})`,
                  backgroundSize: "120% 140%",
                }}
                onClick={() => navigate("/chi-siamo")}
              >
                {t("OutsourcedManagement.button")}
              </button>
            </div>
          </div>

          <div className="relative -mb-24 lg:block">
            <LazyLoadImage
              src={lucaImg}
              alt="Business consultant on phone"
              className="w-screen rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
      <footer className="bg-[#071330] relative overflow-hidden min-w-full">
        <div className="max-w-7xl mx-auto">
          <div className="py-6 flex justify-end">
            <div className=" space-y-8 text-white">
              <p className="text-lg md:text-xl lg:text-lg font-MN font-medium leading-tight text-left p-8 max-w-2xl -mr-6 ">
                {t("OutsourcedManagement.description")}
              </p>

              <div className="flex justify-end">
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
      {/* Modern Services Section - Outsourced Management */}
      <div className="bg-gray-50 py-16 px-4 md:px-0 w-full flex items-center justify-center">
        <div className="w-full mx-auto px-4 w-full">
          <div className="bg-gray-50 mx-auto md:p-8 space-y-8 max-w-7xl md:px-6">
            <p className="text-lg md:text-xl font-MN font-light leading-relaxed text-justify max-w-4xl mx-auto text-gray-700">
              {t("servicesManagement.outsourced_management.intro1")}
            </p>

            <p className="text-lg md:text-xl font-MN font-light leading-relaxed text-justify max-w-4xl mx-auto text-gray-700">
              {t("servicesManagement.outsourced_management.intro")}
            </p>
                <h4 className="font-MN text-blue-950 font-semibold text-2xl tracking-tight mb-4 max-w-4xl mx-auto text-center md:text-left">
                  {t("servicesManagement.outsourced_management.digital_management.title")}
                </h4>
                <p className="text-base md:text-xl font-MN font-light leading-relaxed text-gray-700 max-w-4xl mx-auto">
                  {t("servicesManagement.outsourced_management.digital_management.intro")}
                </p>
          </div>
        </div>
      </div>
      {/* Team Member - Sintija Birgele */}
      <div className="md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6">

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <LazyLoadImage
                src="./sintija.jpg"
                alt="Sintija Birgele"
                effect="blur"
                className="w-full max-w-md mx-auto object-cover rounded-lg shadow-xl"
              />
            </div>

            <div className="order-1 md:order-2 space-y-6">
              <div>
                <h3 className="text-2xl md:text-3xl font-MN font-semibold text-gray-900">
                  {t('digital.team.title')}
                </h3>
                <p className="text-xl text-red-700 font-MN font-medium mt-2">
                  {t('digital.team.role')}
                </p>
              </div>

              <p className="text-lg text-justify text-gray-700 leading-relaxed font-MN">
                {t('digital.team.description')}
              </p>
              <div className="flex space-x-4 pt-4 flex-wrap">
                <a
                  href="https://de.linkedin.com/in/sintija-birgele"
                  className="flex items-center space-x-2 text-gray-600 hover:text-red-700 transition-colors py-2"
                >
                  <Linkedin className="w-5 h-5" />
                  <span>{t('digital.team.links.linkedin')}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[black] py-16 relative overflow-hidden">
        <div className="px-4 flex flex-col lg:flex-row justify-around items-center">
          <div className="w-full lg:w-auto mb-8 lg:mb-0 max-w-xl">
            <h2 className="text-3xl font-MN font-500 text-white mb-6 text-center lg:text-left">
              {t('digital.footer.contact.title')}
            </h2>
            <p className="text-lg font-MN font-light text-white leading-relaxed max-w-md text-center lg:text-left mx-auto lg:mx-0">
              {t('digital.footer.contact.description')}
            </p>
          </div>

          <div className="w-full lg:w-auto text-center lg:text-right mt-8 lg:mt-0">
            <div className="flex flex-row items-center mb-4 justify-center lg:justify-end">
              <p className="md:text-[.49rem] font-light text-left text-white leading-tight">
                {t('digital.footer.company.line1')}
                <br />
                {t('digital.footer.company.line2')}
                <br />
                {t('digital.footer.company.line3')}
              </p>
            </div>

            <div className="text-white text-[.59rem] text-center lg:text-right font-light">
              <p>{t('digital.footer.copyright.text')}</p>
              <p className="mt-1">{t('digital.footer.copyright.rights')}</p>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Digital;
