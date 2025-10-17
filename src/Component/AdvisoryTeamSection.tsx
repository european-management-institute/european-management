import React from "react";
import srcc from "../assets/11.png";
import bt from "../assets/7.png";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
const AdvisoryTeamSection = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <div className="max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-12">
      <div className="space-y-6">
        <p className="text-xl leading-tight mt-4 font-MN font-light">
          {t("advisoryTeam.leftColumn_description1")}
        </p>
        <p className="text-xl leading-tight font-MN font-light">
          {t("advisoryTeam.leftColumn_description2")}
        </p>
        <div className="flex justify-center md:block">
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
            {t("advisoryTeam.leftColumn_button")}
          </button>
        </div>
      </div>

      <div className="space-y-6">
        <div className="space-y-2">
          <h2 className="md:text-3xl font-medium -tracking-tighter mb-6 font-MN">
            {t("advisoryTeam.rightColumn_title")}
          </h2>
        </div>

        <p className="text-xl leading-tight font-MN font-light">
          {t("advisoryTeam.rightColumn_description1")}
        </p>
        <div className="mt-8">
          <img
            src={srcc}
            alt="Luca Bazzanella signature"
            className="h-20 object-contain ml-auto mr-28"
          />
        </div>
      </div>
    </div>
  );
};

export default AdvisoryTeamSection;
