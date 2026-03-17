import React from "react";
import { useTranslation } from "react-i18next";
import { Github, Linkedin } from "lucide-react";
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

        <div className="space-y-8 text-lg max-w-5xl leading-7 leading-tight text-justify font-MN pb-8">
          <p className="font-MN leading-7">{t("AboutTeamSection.about_paragraph1")}</p>
          <p className="font-MN leading-7">{t("AboutTeamSection.about_paragraph2")}</p>
          <p className="font-MN leading-7">{t("AboutTeamSection.about_paragraph3")}</p>
          <p className="font-MN leading-7">{t("AboutTeamSection.about_paragraph4")}</p>
          <p className="font-MN leading-7">
            {t("AboutTeamSection.about_paragraph5")
              .split(/(\d{4})/)
              .map((part, idx) =>
                /^\d{4}$/.test(part) ? (
                  <span key={idx} className="font-bold">{part}</span>
                ) : (
                  part
                )
              )}
          </p>
          <p className="font-MN leading-7">
            {t("AboutTeamSection.about_paragraph6")
              .split(/(\d{4})/)
              .map((part, idx) =>
                /^\d{4}$/.test(part) ? (
                  <span key={idx} className="font-bold">{part}</span>
                ) : (
                  part
                )
              )}
          </p>
          <div>
            <p className="font-bold mb-2 font-MN">
              {t("AboutTeamSection.about_thinktank_title")}
            </p>
            <p className="font-MN leading-7">
              {t("AboutTeamSection.about_paragraph7")}
            </p>
          </div>
        </div>
      </div>

      {/* Team Members Section */}
      <div className="pt-4 md:pt-6 pb-12">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row gap-y-12 md:gap-y-0 md:gap-x-8 items-stretch justify-between">
            {(() => {
              const team = t("digital.team", { returnObjects: true }) as any[];
              return (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 md:gap-x-8 items-stretch justify-between w-full">
                  {team.map((member, idx) => {
                    const isThirdOfThree = team.length === 3 && idx === 2;
                    return (
                      <div
                        key={idx}
                        className={
                          `flex flex-col bg-transparent rounded-lg overflow-hidden p-6 md:p-8 ` +
                          (isThirdOfThree ? "md:col-span-1 md:mx-auto w-full" : "")
                        }
                      >
                        <div className="order-1 md:order-2 space-y-6 flex-1 flex flex-col">
                          <div>
                            <h3 className="text-2xl md:text-3xl font-MN font-semibold text-gray-900">
                              {member.title}
                            </h3>
                            <p className="text-xl text-red-700 font-MN font-medium mt-2 whitespace-pre-line">
                              {member.role}
                            </p>
                          </div>
                          <p className="text-lg text-justify text-gray-700 leading-relaxed font-MN flex-1">
                            {member.description}
                          </p>
                          <div className="flex space-x-4 pt-4 flex-wrap">
                            {member.links && (
                              <>
                                {member.links.linkedin_link && (
                                  <a
                                    href={member.links.linkedin_link}
                                    className="flex items-center space-x-2 text-gray-600 hover:text-red-700 transition-colors py-2"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >
                                    <Linkedin className="w-5 h-5" />
                                    <span>{member.links.linkedin}</span>
                                  </a>
                                )}
                                {member.links.github && member.links.github_link && (
                                  <a
                                    href={member.links.github_link}
                                    className="flex items-center space-x-2 text-gray-600 hover:text-red-700 transition-colors py-2"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >
                                    <Github className="w-5 h-5" />
                                    <span>{member.links.github}</span>
                                  </a>
                                )}
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              );
            })()}
          </div>
        </div>
      </div>

      <footer className="bg-[#071330] relative overflow-hidden min-w-full">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 items-start bg-[#001428] p-8 rounded-lg">
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
                <TeamMember
                  name={t("AboutTeamSection.team_member_7_name")}
                  role={t("AboutTeamSection.team_member_7_role")}
                />
                <TeamMember
                  name={t("AboutTeamSection.team_member_8_name")}
                  role={t("AboutTeamSection.team_member_8_role")}
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
