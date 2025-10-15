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
              {t("servicesManagement.outsourced_management.intro2")}
              <span className="font-bold"> {t("servicesManagement.outsourced_management.introB")} </span>
              {t("servicesManagement.outsourced_management.introC")}
              <span className="font-bold"> {t("servicesManagement.outsourced_management.introD")} </span>
              {t("servicesManagement.outsourced_management.introX")}
            </p>

            {/* Two-column layout for Digital Management and Digital Resources */}
            <div className="flex flex-col md:flex-row gap-8 mt-8 pt-16">
              {/* Digital Management Section */}
              <div className="flex-1 bg-white rounded-xl shadow-md p-6 space-y-4 border border-gray-100">
                <h4 className="font-MN text-blue-950 font-semibold text-2xl tracking-tight mb-4 text-center md:text-left">
                  {t("servicesManagement.outsourced_management.digital_management.title")}
                </h4>
                <p className="text-base md:text-lg font-MN font-light leading-relaxed text-gray-700">
                  {t("servicesManagement.outsourced_management.digital_management.intro")}
                </p>
                <ul className="pl-6 space-y-2 text-left font-MN">
                  {(t("servicesManagement.outsourced_management.digital_management.list", {returnObjects: true}) as string[]).map((item, index) => (
                    <li key={index} className="flex items-start text-base md:text-lg font-light text-gray-700">
                      <span className="text-red-700 font-bold mr-2">–</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-base md:text-lg font-MN font-light leading-relaxed text-gray-700">
                  {t("servicesManagement.outsourced_management.digital_management.outro")}
                </p>
              </div>

              {/* Divider for desktop */}
              <div className="hidden md:flex items-center justify-center">
                <div className="w-px h-40 bg-gray-200"></div>
              </div>

              {/* Digital Resources Section */}
              <div className="flex-1 bg-white rounded-xl shadow-md p-6 space-y-4 border border-gray-100">
                <h4 className="font-MN text-blue-950 font-semibold text-2xl tracking-tight mb-4 text-center md:text-left">
                  {t("servicesManagement.outsourced_management.digital_resources.title")}
                </h4>
                <p className="text-base md:text-lg font-MN font-light leading-relaxed text-gray-700">
                  {t("servicesManagement.outsourced_management.digital_resources.intro")}
                </p>
                <ul className="pl-6 space-y-2 text-left font-MN">
                  {(t("servicesManagement.outsourced_management.digital_resources.list", {returnObjects: true}) as string[]).map((item, index) => (
                    <li key={index} className="flex items-start text-base md:text-lg font-light text-gray-700">
                      <span className="text-red-700 font-bold mr-2">–</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-base md:text-lg font-MN font-light leading-relaxed text-gray-700">
                  {t("servicesManagement.outsourced_management.digital_resources.outro")}
                  <span className="font-bold"> {t("servicesManagement.outsourced_management.digital_resources.outroB")}</span>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Modern Responsive Hero Section with ExpertiseGraph */}
      <div className="w-full min-h-[60vh] flex items-center justify-center px-4 md:px-0 pt-16 md:pt-24">
        <div className="max-w-7xl w-full flex flex-col md:flex-row items-start justify-center gap-8">
          {/* Left Column: Text */}
          <div className="flex-1 flex flex-col items-start justify-center md:px-8">
            <h1 className="font-MN font-extrabold mb-4 text-left">
              <span className="block text-red-700 drop-shadow-lg text-[4rem] md:text-[6rem] font-bold mb-2 leading-none">{t('digital.title.part1')}</span>
              <span className="block text-gray-900 text-[2.5rem] md:text-[4rem] font-semibold tracking-tight -mt-4 ml-8">{t('digital.title.part2')}</span>
            </h1>
            <p className="text-base text-justify tracking-tighter md:text-xl font-MN font-light text-gray-700 leading-relaxed max-w-xl mt-6 ml-20">
              {t('digital.hero.subtitle')}
            </p>
            <div className="mx-auto flex gap-6 pt-10 md:py-10 md:ml-32">
              <div className="bg-white p-4 rounded-xl shadow flex items-center justify-center">
                <Code className="w-10 h-10 text-red-700" />
              </div>
              <div className="bg-white p-4 rounded-xl shadow flex items-center justify-center">
                <Database className="w-10 h-10 text-red-700" />
              </div>
              <div className="bg-white p-4 rounded-xl shadow flex items-center justify-center">
                <Brain className="w-10 h-10 text-red-700" />
              </div>
              <div className="bg-white p-4 rounded-xl shadow flex items-center justify-center">
                <Cloud className="w-10 h-10 text-red-700" />
              </div>
            </div>
          </div>
          {/* Right Column: ExpertiseGraph */}
          <div className="flex-1 w-full md:w-auto flex items-center justify-center md:items-start md:justify-end md:-mt-32">
            <div className="w-full md:w-[600px]">
              <ExpertiseGraph />
            </div>
          </div>
        </div>
      </div>
            {/* Current Project Focus */}
      <div className="bg-gray-50 md:py-8">
        <div className="w-full px-0 md:px-0">
          <div className="text-center mb-4 ">
            <h2 className="text-4xl md:text-5xl font-Archivo font-regular text-gray-900 tracking-tight">
              <span className="text-red-700">{t('digital.innovation.title')}</span>
            </h2>
          </div>
          <div className="w-full max-w-7xl mx-auto px-4 md:px-6">
            <h3 className="text-4xl md:text-4xl font-Archivo font-regular text-gray-900 mb-4 tracking-tight md:px-8">
              {t('digital.innovation.latest_projects')}
            </h3>
            <div className="flex flex-col md:flex-row items-start justify-between gap-8 ">
              <div className="flex-1 md:px-8 pb-4 md:py-8 md:py-0 order-2 md:order-1">
                <div className="space-y-6">
                  <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
                    {t('digital.innovation.description_intro')}
                  </p>
                  <p className="text-xl text-gray-700 leading-relaxed font-MN text-justify tracking-tighter">
                    {t('digital.innovation.description1')}
                  </p>
                  <ul className="pl-6">
                    {(t('digital.innovation.description_list', { returnObjects: true }) as string[]).map((item, idx) => (
                      <li key={idx} className="flex items-start mb-2 text-base text-justify tracking-tighter md:text-xl font-MN font-light text-gray-700 leading-relaxed">
                        <span className="text-red-700 font-bold mr-2">–</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="flex-1 md-px-8 py-12 md:py-8 order-1 md:order-2 flex items-center justify-center">
                <div className="space-y-6 w-full">
                  <p className="text-lg md:text-xl text-gray-700 text-red-700 leading-relaxed font-MN text-justify">
                    {t('digital.innovation.description2')}
                  </p>
                  <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-MN text-justify">
                    {t('digital.innovation.description3')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full py-10">
        <h2 className="text-3xl md:text-4xl font-MN font-regular text-center mb-4">
          {t('digital.expertise_title.part1')}
          <span className="text-red-700">{t('digital.expertise_title.part2')}</span>
        </h2>
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
