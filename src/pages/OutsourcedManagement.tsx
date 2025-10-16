import React from "react";
import { useTranslation } from "react-i18next";
import lucaImg from "../assets/luca.jpeg";
import srcc from "../assets/11_white.png";
import bt from "../assets/7.png";
import ServicesSection from "../Component/ServicesSection";
import emiLogo from "../assets/ombrato_reduced.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useNavigate } from "react-router-dom";

const OutsourcedManagement = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <section>
      <div className="max-w-7xl mx-auto py-8 md:py-12 lg:py-16 px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-8 text-center md:text-left px-4 md:px-6">
            <h2 className="text-2xl text-blue-950 md:text-4xl lg:text-5xl font-MN font-medium leading-tight">
              {t("servicesManagement.public_policy.title")}
            </h2>
            <p className="text-lg md:text-xl font-MN font-bold text-gray-700 leading-tight">
              {t("servicesManagement.public_policy.subtitle")}
            </p>
            <div className="hidden md:flex justify-center md:justify-start">
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
              src='./public_policy.jpg'
              alt="Business consultant on phone"
              className="w-screen rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
      <footer className="bg-[#071330] relative overflow-hidden min-w-full">
        <div className="max-w-7xl mx-auto">
          <div className="py-6 px-2 flex justify-end">
            <div className=" space-y-8 text-white">
              <div className="w-full text-center md:text-left md:pl-4 mb-8">
                <p className="text-lg md:text-xl lg:text-lg font-MN font-medium leading-tight text-left p-8 max-w-2xl -mr-6 ">
                  {t("servicesManagement.public_policy.description")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* Modern Public Policy Section - Full Width */}
      <div className="bg-gray-50 py-16 px-4 md:px-0 w-full flex items-center justify-center">
        <div className="w-full mx-auto px-4 w-full">
          <div className="bg-gray-50 mx-auto md:p-8 space-y-8 max-w-7xl md:px-6">
            <p className="text-lg md:text-xl font-MN font-light leading-relaxed text-justify max-w-4xl mx-auto text-gray-700">
              {t("servicesManagement.public_policy.intro")}
            </p>
            <h4 className="font-MN text-blue-950 font-semibold text-2xl tracking-tight mb-4 max-w-4xl mx-auto text-center md:text-left">
              {t("servicesManagement.public_policy.digital_public_policy.citizen_satisfaction.title")}
            </h4>
            <p className="text-lg md:text-xl font-MN font-light leading-relaxed text-justify max-w-4xl mx-auto text-gray-700">
              <ul className="list-disc font-MN pl-5 space-y-3 text-left">
                {(t("servicesManagement.public_policy.digital_public_policy.citizen_satisfaction.list", { returnObjects: true }) as string[]).map((item, index) => (
                  <li key={index} className="text-lg font-normal text-gray-800">{item}</li>
                ))}
              </ul>
            </p>
            <h4 className="font-MN text-blue-950 font-semibold text-2xl tracking-tight mb-4 max-w-4xl mx-auto text-center md:text-left">
              {t("servicesManagement.public_policy.digital_public_policy.quality_monitor.title")}
            </h4>
            <p className="text-lg md:text-xl font-MN font-light text-gray-700 mb-4 max-w-4xl mx-auto">
              {t("servicesManagement.public_policy.digital_public_policy.quality_monitor.intro")}
            </p>
            <p className="text-lg md:text-xl font-MN font-light leading-relaxed text-justify max-w-4xl mx-auto text-gray-700">
              <ul className="list-disc font-MN pl-5 space-y-3 text-left">
                {(t("servicesManagement.public_policy.digital_public_policy.quality_monitor.list", { returnObjects: true }) as string[]).map((item, index) => (
                  <li key={index} className="text-lg font-normal text-gray-800">{item}</li>
                ))}
              </ul>
            </p>
            <h4 className="font-MN text-blue-950 font-semibold text-2xl tracking-tight mb-4 max-w-4xl mx-auto text-center md:text-left">
              {t("servicesManagement.public_policy.digital_public_policy.microtargeting_ai.title")}
            </h4>
            <p className="text-lg md:text-xl font-MN font-light text-gray-700 mb-4 max-w-4xl mx-auto">
              {t("servicesManagement.public_policy.digital_public_policy.microtargeting_ai.intro")}
            </p>
            <p className="text-lg md:text-xl font-MN font-light leading-relaxed text-justify max-w-4xl mx-auto text-gray-700">
              <ul className="list-disc font-MN pl-5 space-y-3 text-left">
                {(t("servicesManagement.public_policy.digital_public_policy.microtargeting_ai.list", { returnObjects: true }) as string[]).map((item, index) => (
                  <li key={index} className="text-lg font-normal text-gray-800">{item}</li>
                ))}
              </ul>
            </p>
          </div>
        </div>
      </div>
      <footer className="bg-[#071330] py-16 relative overflow-hidden">
        <div className="px-4 flex flex-col lg:flex-row justify-around items-center">
          <div className="w-full lg:w-auto mb-8 lg:mb-0 max-w-xl">
            <h2 className="text-3xl font-MN font-500 text-white mb-6 text-center lg:text-left">
              {t("OutsourcedManagement.contact_title")}
            </h2>
            <p className="text-lg font-MN font-light text-white leading-relaxed max-w-md text-center lg:text-left mx-auto lg:mx-0">
              {t("OutsourcedManagement.contact_text")}
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
                {t("OutsourcedManagement.company.name1")}
                <br />
                {t("OutsourcedManagement.company.name2")}
                <br />
                {t("OutsourcedManagement.company.name3")}
              </p>
            </div>

            <div className="text-white text-[.59rem] text-center lg:text-right font-light">
              <p>{t("OutsourcedManagement.copyright.text")}</p>
              <p className="mt-1">
                {t("OutsourcedManagement.copyright.rights")}
              </p>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default OutsourcedManagement;
