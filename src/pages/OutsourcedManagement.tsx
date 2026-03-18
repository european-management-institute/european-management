import React from "react";
import { useTranslation } from "react-i18next";
import emiLogo from "../assets/ombrato_reduced.png";
import interestGroupsImg from "../assets/fe606492-66bd-4c15-a2e9-9715edc98576-220047bb-5fc8-4a6e-b70c-c99ad1476c05.png";
import { LazyLoadImage } from "react-lazy-load-image-component";

const OutsourcedManagement = () => {
  const { t } = useTranslation();
  const modules = t("servicesManagement.public_policy.modules", {
    returnObjects: true,
  }) as { line1: string; line2: string; image_alt: string }[];

  // Unsplash images – each matched to card text
  const moduleImages = [
    interestGroupsImg, // Interest groups and stakeholders mapping
    "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?w=900&q=85&fit=crop", // Monitoring screen – Quality monitor, automated user monitoring
    "https://images.unsplash.com/photo-1767424196045-030bbde122a4?w=900&q=85&fit=crop", // Tablet with charts – Indagini di mercato, digital & AI insights
  ];

  return (
    <section>
      {/* Hero: same design as Consulenza Direzionale – title + subtitle + button left, dark blue intro right */}
      <div className="max-w-7xl mx-auto py-10 md:py-14 lg:py-18 px-4 md:px-6">
        <div className="grid md:grid-cols-[1.65fr_2.5fr] gap-6 md:gap-1 items-stretch">
          <div className="flex flex-col justify-center space-y-6">
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-MN font-bold text-blue-950 leading-tight uppercase tracking-tight">
              {t("servicesManagement.public_policy.title")}
              <br />
              {t("servicesManagement.public_policy.title_line2")}
            </h1>
            <p className="text-lg md:text-xl font-MN font-bold text-gray-700 leading-tight">
              {t("servicesManagement.public_policy.subtitle")}
            </p>
          </div>
          <div className="relative flex items-center py-4 md:py-6 lg:py-8 px-4 md:px-6 lg:px-8
                          bg-transparent backdrop-blur-md
                          rounded-xl">
            <p
              className="text-[#0b2a52] text-lg md:text-xl font-MN font-light leading-relaxed text-justify tracking-wide max-w-[90%]"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              {t("servicesManagement.public_policy.description")}
            </p>
          </div>
        </div>
      </div>

      {/* Three cards: same layout as screenshot – image + two-line caption */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 pb-0">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {modules?.map((mod, index) => (
            <div key={index} className="flex flex-col rounded-lg overflow-hidden">
              <div className="aspect-[4/3] w-full overflow-hidden bg-gray-200">
                <LazyLoadImage
                  src={moduleImages[index]}
                  alt={mod.image_alt}
                  className="w-full h-full object-cover"
                  onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                    e.currentTarget.style.display = "none";
                    const parent = e.currentTarget.parentElement;
                    if (parent && !parent.querySelector(".placeholder")) {
                      const div = document.createElement("div");
                      div.className = "placeholder w-full h-full flex items-center justify-center bg-gray-300 text-gray-500 text-sm font-MN";
                      div.textContent = mod.image_alt;
                      parent.appendChild(div);
                    }
                  }}
                />
              </div>
              <div className="bg-transparent py-3 px-2 text-left">
                <p className="font-MN font-semibold text-gray-900 text-lg md:text-xl">
                  {mod.line1}
                </p>
                <p className="font-MN text-gray-700 text-lg md:text-xl mt-0.5">
                  {mod.line2}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modern Public Policy Section - Full Width */}
      <div className="pb-16 pt-6 px-4 md:px-0 w-full flex items-center justify-center">
        <div className="w-full mx-auto px-4 w-full">
          <div className="mx-auto md:pt-6 md:pb-8 md:px-8 space-y-8 max-w-7xl md:px-6">
            <p className="text-lg md:text-xl font-MN font-light leading-relaxed text-justify text-gray-700">
              {t("servicesManagement.public_policy.intro")}
            </p>
            <h4 className="font-MN text-blue-950 font-semibold text-2xl tracking-tight mb-4 text-center md:text-left">
              {t("servicesManagement.public_policy.digital_public_policy.citizen_satisfaction.title")}
            </h4>
            <p className="text-lg md:text-xl font-MN font-light text-gray-700 mb-4 text-justify">
              {t("servicesManagement.public_policy.digital_public_policy.citizen_satisfaction.intro")}
            </p>
            <h4 className="font-MN text-blue-950 font-semibold text-2xl tracking-tight mx-auto text-center md:text-left">
              {t("servicesManagement.public_policy.digital_public_policy.quality_monitor.title")}
            </h4>
            <p className="text-lg md:text-xl font-MN font-light text-gray-700 mb-4 text-justify">
              {t("servicesManagement.public_policy.digital_public_policy.quality_monitor.intro")}
            </p>
            <h4 className="font-MN text-blue-950 font-semibold text-2xl tracking-tight mb-4 text-center md:text-left">
              {t("servicesManagement.public_policy.digital_public_policy.microtargeting_ai.title")}
            </h4>
            <p className="text-lg md:text-xl font-MN font-light text-gray-700 mb-4 text-justify">
              {t("servicesManagement.public_policy.digital_public_policy.microtargeting_ai.intro")}
            </p>
            <p className="text-lg md:text-xl font-MN font-light leading-relaxed text-justify  text-gray-700">
              <ul className="list-disc font-MN pl-5 space-y-3 text-left">
                {(t("servicesManagement.public_policy.digital_public_policy.microtargeting_ai.list", { returnObjects: true }) as string[]).map((item, index) => (
                  <li key={index} className="text-lg font-normal text-gray-800">{item}</li>
                ))}
              </ul>
            </p>
            <p className="text-lg md:text-xl font-MN font-light text-gray-700 mb-4 text-justify">
              {t("servicesManagement.public_policy.digital_public_policy.microtargeting_ai.intro1")}
            </p>
            <p className="text-lg md:text-xl font-MN font-light leading-relaxed text-justify  text-gray-700">
              <ul className="list-disc font-MN pl-5 space-y-3 text-left">
                {(t("servicesManagement.public_policy.digital_public_policy.microtargeting_ai.list1", { returnObjects: true }) as string[]).map((item, index) => (
                  <li key={index} className="text-lg font-normal text-gray-800">{item}</li>
                ))}
              </ul>
            </p>
          </div>
        </div>
      </div>
      <footer className="bg-[#071330] py-16 overflow-hidden">
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
