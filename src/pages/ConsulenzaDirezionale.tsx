import React from "react";
import { useTranslation } from "react-i18next";
import emiLogo from "../assets/ombrato_reduced.png";
import consulenzaDirezionaleImage1 from "../assets/consulenza-direzionale-1.png";
import consulenzaDirezionaleImage2 from "../assets/consulenza-direzionale-2.png";
import consulenzaDirezionaleImage3 from "../assets/consulenza-direzionale-3.png";
import { LazyLoadImage } from "react-lazy-load-image-component";

const ConsulenzaDirezionale = () => {
  const { t } = useTranslation();
  const modules = t("ConsulenzaDirezionale.modules", {
    returnObjects: true,
  }) as { line1: string; line2: string; image_alt: string }[];

  // High-quality Unsplash images (free to use under Unsplash License)
  const moduleImages = [
    consulenzaDirezionaleImage1, // Global/world image (1st card)
    consulenzaDirezionaleImage2, // Chart image (2nd card)
    consulenzaDirezionaleImage3, // New 3rd photo
  ];

  return (
    <section>
      {/* Top section: heading left, intro paragraph right (dark blue) */}
      <div className="max-w-7xl mx-auto py-10 pb-2 md:py-14 md:pb-10 lg:py-18 px-4 md:px-6">
        <div className="grid md:grid-cols-[1.65fr_2.5fr] gap-6 md:gap-1 items-start">
          <div className="flex flex-col justify-start space-y-6">
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-MN font-bold text-black leading-tight uppercase tracking-tight">
              {t("ConsulenzaDirezionale.title").split(" & ").map((part, i) => (
                <span key={i}>
                  {i === 0 ? part : `& ${part}`}
                  {i === 0 && <br />}
                </span>
              ))}
            </h1>
            <p className="text-lg md:text-xl font-MN font-bold text-gray-700 leading-tight">
              {t("ConsulenzaDirezionale.subtitle")}
            </p>
          </div>
          <div className="relative flex items-stretch py-4 md:py-6 lg:py-8 md:px-6 lg:px-8
                          bg-transparent backdrop-blur-md
                          rounded-xl">
            <p
              className="relative text-[#0b2a52] text-lg md:text-xl font-MN font-light leading-relaxed text-justify tracking-wide md:max-w-[90%]"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              {t("ConsulenzaDirezionale.intro")}
            </p>
          </div>
        </div>
      </div>

      {/* Bottom section: three modules with image + caption */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 pb-0">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {modules?.map((mod, index) => (
            <div key={index} className="flex flex-col">
              <div className="aspect-[4/3] w-full overflow-hidden rounded-t-lg bg-gray-200">
                <LazyLoadImage
                  src={moduleImages[index]}
                  alt={mod.image_alt}
                  className="w-full h-full object-cover"
                  onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                    e.currentTarget.style.display = "none";
                    const parent = e.currentTarget.parentElement;
                    if (parent && !parent.querySelector(".placeholder")) {
                      const div = document.createElement("div");
                      div.className =
                        "placeholder w-full h-full flex items-center justify-center bg-gray-300 text-gray-500 text-sm font-MN";
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

      {/* Content from former Software tab: outsourced management intro + digital management + team */}
      <div className="pt-4 md:pt-6 pb-10 md:pb-16 px-4 md:px-0 w-full flex items-center justify-center">
        <div className="w-full mx-auto px-4">
          <div className="mx-auto md:pt-4 md:pb-8 md:px-8 space-y-8 max-w-7xl md:px-6">
            <h3 className="font-MN text-blue-950 font-semibold tracking-tight text-2xl text-center md:text-left">
              {t("ConsulenzaDirezionale.outsourced_management_section_title")}
            </h3>
            <p className="text-lg md:text-xl font-MN font-light leading-relaxed text-justify text-gray-700">
              {t("servicesManagement.outsourced_management.intro1")}
            </p>
            <p className="text-lg md:text-xl font-MN font-light leading-relaxed text-justify text-gray-700">
              {t("servicesManagement.outsourced_management.intro")}
            </p>
            <h4 className="font-MN text-blue-950 font-semibold text-2xl tracking-tight mb-4 text-center md:text-left">
              {t("servicesManagement.outsourced_management.digital_management.title")}
            </h4>
            <p className="text-lg md:text-xl font-MN font-light leading-relaxed text-justify text-gray-700">
              {t("servicesManagement.outsourced_management.digital_management.intro")}
            </p>
          </div>
        </div>
      </div>

      {/* Footer - same as other pages */}
      <footer className="bg-[#071330] py-16 relative overflow-hidden">
        <div className="px-4 flex flex-col lg:flex-row justify-around items-center">
          <div className="w-full lg:w-auto mb-8 lg:mb-0 max-w-xl">
            <h2 className="text-3xl font-MN font-500 text-white mb-6 text-center lg:text-left">
              {t("ConsulenzaDirezionale.contact_title")}
            </h2>
            <p className="text-lg font-MN font-light text-white leading-relaxed max-w-md text-center lg:text-left mx-auto lg:mx-0">
              {t("ConsulenzaDirezionale.contact_text")}
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
                {t("ConsulenzaDirezionale.company.name1")}
                <br />
                {t("ConsulenzaDirezionale.company.name2")}
                <br />
                {t("ConsulenzaDirezionale.company.name3")}
              </p>
            </div>
            <div className="text-white text-[.59rem] text-center lg:text-right font-light">
              <p>{t("ConsulenzaDirezionale.copyright.text")}</p>
              <p className="mt-1">{t("ConsulenzaDirezionale.copyright.rights")}</p>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default ConsulenzaDirezionale;
