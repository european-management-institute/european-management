import React from "react";
import emiLogo from "../assets/Untitledd.png"; // Update path as needed
import { useTranslation } from "react-i18next";

const ServicesSection = () => {
  const { t } = useTranslation();
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      {/* Services Header */}
      <h2 className="text-3xl font-MN text-blue-950 font-medium text-center mb-16">
        {t("servicesManagement.main_title")}
      </h2>

      {/* Services Grid */}
      <div className="grid md:grid-cols-2 gap-16 mb-24">
        {/* Outsourced Management */}
        <div className="space-y-6 text-center md:text-left">
          <h3 className="font-MN font-semibold text-blue-950 text-lg tracking-wide">
            {t("servicesManagement.outsourced_management.title")}
          </h3>
          <p className="text-base font-MN font-light leading-6 max-w-md mx-auto md:mx-0">
            {t("servicesManagement.outsourced_management.intro1")}
          </p>
          <p className="text-base  font-MN  font-light leading-6 max-w-md mx-auto md:mx-0">
            {t("servicesManagement.outsourced_management.intro2")}{" "}
            <span className="font-bold">
              {" "}
              {t("servicesManagement.outsourced_management.introB")}
            </span>{" "}
            {t("servicesManagement.outsourced_management.introC")}{" "}
            <span className="font-bold">
              {t("servicesManagement.outsourced_management.introD")}{" "}
            </span>
            {t("servicesManagement.outsourced_management.introX")}
          </p>

          <div className="space-y-6">
            <h4 className="font-MN text-blue-950 font-semibold tracking-tight">
              {t(
                "servicesManagement.outsourced_management.digital_management.title"
              )}
            </h4>
            <p className="text-base  font-MN  font-light leading-6 max-w-md mx-auto md:mx-0">
              {t(
                "servicesManagement.outsourced_management.digital_management.intro"
              )}
            </p>
            <ul className="list-disc pl-5 space-y-2 max-w-md mx-auto md:mx-0 text-left  font-MN ">
              {(t(
                "servicesManagement.outsourced_management.digital_management.list",
                {
                  returnObjects: true,
                }
              ) as string[]).map((item, index) => (
                <li key={index} className="text-md font-light">
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-base  font-MN  font-light leading-6 max-w-md mx-auto md:mx-0">
              {t(
                "servicesManagement.outsourced_management.digital_management.outro"
              )}
            </p>
          </div>

          <div className="space-y-6">
            <h4 className="font-MN text-blue-950 font-semibold tracking-tight">
              {t(
                "servicesManagement.outsourced_management.digital_resources.title"
              )}
            </h4>
            <p className="text-base  font-MN  font-light leading-6 max-w-md mx-auto md:mx-0">
              {t(
                "servicesManagement.outsourced_management.digital_resources.intro"
              )}
            </p>
            <ul className="list-disc  font-MN  pl-5 space-y-2 max-w-md mx-auto md:mx-0 text-left">
              {(t(
                "servicesManagement.outsourced_management.digital_resources.list",
                { returnObjects: true }
              ) as string[]).map((item, index) => (
                <li key={index} className="text-md font-light">
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-base  font-MN  font-light leading-6 max-w-md mx-auto md:mx-0">
              {t(
                "servicesManagement.outsourced_management.digital_resources.outro"
              )}
              <span className="font-bold">
                {t(
                  "servicesManagement.outsourced_management.digital_resources.outroB"
                )}
              </span>
              .
            </p>
          </div>
        </div>

        {/* Public Policy */}
        <div className="space-y-6 text-center md:text-left">
          <h3 className="font-MN text-blue-950 font-semibold text-lg tracking-wide">
            {t("servicesManagement.public_policy.title")}
          </h3>
          <p className="text-base  font-MN  font-light leading-6 max-w-md mx-auto md:mx-0">
            {t("servicesManagement.public_policy.intro")}{" "}
            <span className="font-bold">
              {t("servicesManagement.public_policy.intro1")}
            </span>{" "}
            {t("servicesManagement.public_policy.intro2")}
          </p>
          <ul className="list-disc  font-MN  pl-5 space-y-2 max-w-md mx-auto md:mx-0 text-left">
            {(t("servicesManagement.public_policy.list", {
              returnObjects: true,
            }) as string[]).map((item, index) => (
              <li key={index} className="text-md font-light">
                {item}
              </li>
            ))}
          </ul>
          <p className="text-base  font-MN  font-light leading-6 max-w-md mx-auto md:mx-0">
            {t("servicesManagement.public_policy.data_driven_intro")}
          </p>

          <h4 className="font-MN text-blue-950 font-semibold tracking-tight">
            {t("servicesManagement.public_policy.citizen_satisfaction.title")}
          </h4>

          <ul className="list-disc  font-MN  pl-5 space-y-2 max-w-md mx-auto md:mx-0 text-left">
            {(t("servicesManagement.public_policy.citizen_satisfaction.list", {
              returnObjects: true,
            }) as string[]).map((item, index) => (
              <li key={index} className="text-md font-light">
                {item}
              </li>
            ))}
          </ul>

          <h4 className="font-MN text-blue-950 font-semibold tracking-tight">
            {t("servicesManagement.public_policy.quality_monitor.title")}
          </h4>
          <p className="text-base  font-MN  font-light leading-6 max-w-md mx-auto md:mx-0">
            {t("servicesManagement.public_policy.quality_monitor.intro")}
          </p>
          <ul className="list-disc  font-MN  pl-5 space-y-2 max-w-md mx-auto md:mx-0 text-left">
            {(t("servicesManagement.public_policy.quality_monitor.list", {
              returnObjects: true,
            }) as string[]).map((item, index) => (
              <li key={index} className="text-md font-light">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Clients Section */}
      <div className="text-center space-y-12">
        <h2 className="text-3xl text-blue-950 font-MN font-medium">
          {t("servicesManagement.clients.title")}
        </h2>

        <div className="flex flex-wrap justify-center gap-8 text-sm font-MN font-semibold uppercase max-w-3xl mx-auto">
          {(t("servicesManagement.clients.sectors", {
            returnObjects: true,
          }) as string[]).map((item, index) => (
            <span key={index} className="whitespace-nowrap">
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Contact Section */}
    </div>
  );
};

export default ServicesSection;
