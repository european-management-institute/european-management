import React from "react";
import { useTranslation } from "react-i18next";
import imgUrl2 from "../assets/ombrato_reduced.png";

const AboutTeamSection = () => {
  const { t } = useTranslation();

  return (
    <div className="mx-auto">
      {/* About Section */}
      <div className="p-12 max-w-7xl mx-auto">
        <h2 className="text-2xl font-MN font-medium mb-12">
          {t("AboutTeamSection.about_section_title")}
        </h2>

        <div className="space-y-8 text-lg max-w-5xl leading-tight font-MN pb-8">
          <p className="font-MN">{t("AboutTeamSection.about_paragraph1")}</p>

          <p className="font-MN">{t("AboutTeamSection.about_paragraph2")}</p>

          <p className="font-MN">{t("AboutTeamSection.about_paragraph3")}</p>

          <div>
            <p className="font-bold mb-2 font-MN">
              {t("AboutTeamSection.about_modus_title")}
            </p>
            <p className="italic mb-2 font-MN">
              {t("AboutTeamSection.about_modus_subtitle")}
            </p>
            <p className="font-MN">
              {t("AboutTeamSection.about_modus_description")}
            </p>
          </div>
        </div>
      </div>

      <footer className="bg-[#071330] relative overflow-hidden min-w-full">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 items-center bg-[#001428] p-8 rounded-lg">
            {/* Management Team */}
            <div className="flex flex-col">
              <h3 className="text-white text-md font-MN font-medium mb-8">
                {t("AboutTeamSection.team_management_title")}
              </h3>
              <div className="space-y-4 text-gray-300">
                <TeamMember
                  name={t("AboutTeamSection.team_member_1_name")}
                  role={t("AboutTeamSection.team_member_1_role")}
                />

                <TeamMember
                  name={t("AboutTeamSection.team_member_3_name")}
                  role={t("AboutTeamSection.team_member_3_role")}
                />
              </div>
            </div>

            {/* Digital Team */}
            <div className="flex flex-col">
              <h3 className="text-white text-md font-MN font-medium mb-8">
                {t("team_digital_title")}
              </h3>
              <div className="space-y-4 text-gray-300">
                <TeamMember
                  name={t("AboutTeamSection.team_member_4_name")}
                  role={t("AboutTeamSection.team_member_4_role")}
                />
                <TeamMember
                  name={t("AboutTeamSection.team_member_5_name")}
                  role={t("AboutTeamSection.team_member_5_role")}
                />
                <TeamMember
                  name={t("AboutTeamSection.team_member_6_name")}
                  role={t("AboutTeamSection.team_member_6_role")}
                />
              </div>
            </div>

            {/* Logo Column */}
            <div className="flex justify-center items-center">
              <img src={imgUrl2} alt="EMI" className="h-48 w-auto opacity-30" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

const TeamMember = ({ name, role }) => (
  <div className="font-MN">
    <p className="text-sm font-light text-white">
      {name} | {role}
    </p>
  </div>
);

export default AboutTeamSection;
