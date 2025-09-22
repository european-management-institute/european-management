import React from "react";
import { useTranslation } from "react-i18next";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useNavigate } from "react-router-dom";
import { Github, Linkedin, ExternalLink, Code, Database, Brain, Cloud, Users, Award } from "lucide-react";
import ExpertiseGraph from "@/Component/ExpertiseGraph";

const Digital = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  
  return (
    <section>
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
            <div className="flex gap-6 pt-10 md:py-10 md:ml-32">
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
                <div className="flex items-center h-full md:px-8">
                  <span className="inline-block text-base md:text-lg text-white font-bold bg-red-700 px-4 py-2 rounded-full shadow">
                    {t('digital.innovation.date')}
                  </span>
                </div>
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
                <div className="mt-8">
                  <h4 className="font-Archivo font-bold text-gray-900 mb-4 text-xl">Core Technologies</h4>
                  <div className="flex flex-wrap gap-3">
                    {(t('digital.innovation.core_technologies', { returnObjects: true }) as string[]).map((tech) => (
                      <span key={tech} className="px-4 py-2 bg-red-100 text-red-700 rounded-full text-base font-semibold shadow">
                        {tech}
                      </span>
                    ))}
                  </div>
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
          <div className="w-full bg-[#071330] py-10">
            <h2 className="text-3xl md:text-4xl font-MN font-regular text-white text-center mb-4">
              {t('digital.expertise_title.part1')}
              <span className="text-red-700">{t('digital.expertise_title.part2')}</span>
            </h2>
          </div>
      {/* Team Member - Sintija Birgele */}
      <div className="bg-gray-50 md:py-24">
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
                  href="https://github.com/sintijab" 
                  className="flex items-center space-x-2 text-gray-600 hover:text-red-700 transition-colors py-2"
                >
                  <Github className="w-5 h-5" />
                  <span>{t('digital.team.links.github')}</span>
                </a>
                <a 
                  href="https://de.linkedin.com/in/sintija-birgele" 
                  className="flex items-center space-x-2 text-gray-600 hover:text-red-700 transition-colors py-2"
                >
                  <Linkedin className="w-5 h-5" />
                  <span>{t('digital.team.links.linkedin')}</span>
                </a>
                <a 
                  href="https://gitnation.com/contents/internationalization-i18n-with-ai-powered-language-model" 
                  className="flex items-center space-x-2 text-gray-600 hover:text-red-700 transition-colors py-2"
                >
                  <ExternalLink className="w-5 h-5" />
                  <span>{t('digital.team.links.conferences')}</span>
                </a>
                <a 
                  href={t('digital.team.links.website_link')} 
                  className="flex items-center space-x-2 text-gray-600 hover:text-red-700 transition-colors py-2"
                  target="_blank" rel="noopener noreferrer"
                >
                  <ExternalLink className="w-5 h-5" />
                  <span>{t('digital.team.links.website')}</span>
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
