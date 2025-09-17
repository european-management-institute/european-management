import React from "react";
import { useTranslation } from "react-i18next";
import imgUrl2 from "../assets/ombrato_reduced.png";
import imgUrl21 from "../assets/Untitledd.png";

const HomePageFooter = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-[#071330] py-16 relative overflow-hidden">
      <div className="px-4 flex flex-col lg:flex-row justify-around items-center">
        <div className="w-full lg:w-auto mb-8 lg:mb-0 max-w-xl">
          <h2 className="text-3xl font-MN font-500 text-white mb-6 text-center lg:text-left">
            {t("footer_contact_title")}
          </h2>
          <p className="text-lg font-MN font-light text-white leading-relaxed max-w-md text-center lg:text-left mx-auto lg:mx-0">
            {t("footer_contact_description")}
          </p>
        </div>

        <div className="w-full lg:w-auto relative mx-auto lg:mx-0">
          <img
            src={imgUrl2}
            alt="European Management Institute Logo"
            className="hidden lg:block w-40 h-40 object-contain opacity-30 mx-auto"
          />
        </div>

        <div className="w-full lg:w-auto text-center lg:text-right mt-8 lg:mt-0">
          <div className="flex flex-row items-center mb-4 justify-center lg:justify-end">
            <img
              src={imgUrl21}
              alt="EMI Logo"
              className="h-8 inline-block mr-2"
            />
            <p className="md:text-[.49rem] font-light text-left text-white leading-tight">
              {t("footer_company_line1")}
              <br />
              {t("footer_company_line2")}
              <br />
              {t("footer_company_line3")}
            </p>
          </div>

          <div className="text-white text-[.59rem] text-center lg:text-right font-light">
            <p>{t("footer_copyright_text")}</p>
            <p className="mt-1">{t("footer_copyright_rights")}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default HomePageFooter;
