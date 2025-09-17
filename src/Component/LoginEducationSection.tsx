import React from "react";
import { useTranslation } from "react-i18next";
import im4 from "../assets/3.png";
import im3 from "../assets/4.png";
import im2 from "../assets/6.png";
import im1 from "../assets/5.png";
import emiLogo from "../assets/ombrato_reduced.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useNavigate } from "react-router-dom";

const LoginEducationSection = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8 mb-20 items-center">
          <div className="space-y-6 w-full px-8">
            <div className="space-y-4">
              <div className="relative">
                <input
                  type="text"
                  className="w-full px-4 py-3 border rounded-md text-lg"
                  placeholder={t("login.username_placeholder")}
                />
                <div className="absolute right-3 top-3.5">
                  <svg
                    className="w-5 h-5 text-gray-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" />
                  </svg>
                </div>
              </div>
              <div className="relative">
                <input
                  type="password"
                  className="w-full px-4 py-3 border rounded-md text-lg"
                  placeholder={t("login.password_placeholder")}
                />
                <div className="absolute right-3 top-3.5">
                  <svg
                    className="w-5 h-5 text-gray-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                    <path
                      fillRule="evenodd"
                      d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
              <a href="#" className="text-blue-600 text-sm hover:underline">
                {t("login.forgot_password")}
              </a>
              <button className="w-full bg-[#071330] text-white py-3 rounded-md hover:bg-[#132347] transition-colors text-lg">
                {t("login.button")}
              </button>
              <p className="text-center text-sm text-gray-600">OR</p>
              <button
                type="button"
                onClick={() => navigate("/signup")}
                class="text-[#071330] hover:text-white border border-gray-800 hover:bg-[#071330] focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-md  text-lg px-5 py-2.5 text-center w-full"
              >
                REGISTER
              </button>
            </div>
          </div>

          <div className="hidden md:block">
            <LazyLoadImage
              src={im4}
              alt={t("images.woman_working")}
              className="rounded-lg object-cover w-full h-full"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className=" text-center md:text-left">
            <h2 className="font-MN text-blue-950 font-semibold text-md tracking-wide h-20 text-center">
              {t("education.executive.title")}
            </h2>
            <p className="text-gray-700 text-md font-light text-center">
              {t("education.executive.description")}
            </p>
          </div>

          <div className="text-center md:text-left">
            <h2 className="font-MN text-blue-950 font-semibold text-md tracking-wide h-20 text-center">
              {t("education.future_leaders.title")}
            </h2>
            <p className="text-gray-700 text-md font-light text-center">
              {t("education.future_leaders.description1")}
            </p>
            <p className="text-gray-700 text-md font-light text-center">
              {t("education.future_leaders.description2")}
            </p>
          </div>

          <div className=" text-center md:text-left">
            <h2 className="font-MN text-blue-950 font-semibold text-md tracking-wide h-20 text-center">
              {t("education.professional.title")}
            </h2>
            <p className="text-gray-700 text-md font-light text-center">
              {t("education.professional.description")}
            </p>
          </div>
        </div>
      </div>

      <div className="bg-[#071330] text-white">
        <div className="grid md:grid-cols-3 justify-between items-center">
          <LazyLoadImage
            src={im1}
            alt={t("images.executive_education")}
            className="w-full"
          />
          <LazyLoadImage
            src={im3}
            alt={t("images.professional_training")}
            className="w-full"
          />
          <LazyLoadImage
            src={im2}
            alt={t("images.future_leaders")}
            className="w-full"
          />
        </div>
      </div>

      <footer className="bg-[black] py-16 relative overflow-hidden">
        <div className="px-4 flex flex-col lg:flex-row justify-around items-center">
          <div className="w-full lg:w-auto mb-8 lg:mb-0 max-w-xl">
            <h2 className="text-3xl font-MN font-500 text-white mb-6 text-center lg:text-left">
              {t("footer.contact.title")}
            </h2>
            <p className="text-lg font-MN font-light text-white leading-relaxed max-w-md text-center lg:text-left mx-auto lg:mx-0">
              {t("footer.contact.description")}
            </p>
          </div>

          <div className="w-full lg:w-auto relative mx-auto lg:mx-0">
            <img
              src={emiLogo}
              alt={t("images.emi_logo")}
              className="hidden lg:block w-40 h-40 object-contain opacity-30 mx-auto"
            />
          </div>

          <div className="w-full lg:w-auto text-center lg:text-right mt-8 lg:mt-0">
            <div className="flex flex-row items-center mb-4 justify-center lg:justify-end">
              <img
                src={emiLogo}
                alt={t("images.emi_logo")}
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

            <div className="text-white text-[.59rem] text-center lg:text-left font-light">
              <p>{t("footer.copyright.text")}</p>
              <p className="mt-1">{t("footer.copyright.rights")}</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LoginEducationSection;
