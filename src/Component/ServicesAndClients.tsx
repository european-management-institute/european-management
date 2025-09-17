import React from "react";
import { useTranslation } from "react-i18next";

const ServicesAndClients = () => {
  const { t } = useTranslation();

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      {/* Services Section */}
      <h2 className="text-3xl font-MN font-medium text-center mb-16">
        {t("servicesAndClients.services.title.part1")}{" "}
        <span className="text-red-800">
          {t("servicesAndClients.services.title.part2")}
        </span>
      </h2>

      <div className="grid md:grid-cols-4 gap-8 mb-24 text-center">
        {t("servicesAndClients.services.items", { returnObjects: true }).map(
          (service, index) => (
            <div key={index} className="space-y-4">
              <h3 className="font-MN font-semibold text-lg tracking-wide text-red-900">
                {service.title}
              </h3>
              <p className="text-base font-light leading-6 max-w-md mx-auto md:mx-0">
                {service.description}
              </p>
            </div>
          )
        )}
      </div>

      {/* Clients Section */}
      <div className="text-center space-y-12">
        <h2 className="text-3xl font-MN font-medium">
          {t("servicesAndClients.clients.title.part1")}{" "}
          <span className="text-red-800">
            {t("servicesAndClients.clients.title.part2")}
          </span>
        </h2>

        <div className="flex flex-wrap justify-center gap-8 text-sm font-MN font-semibold uppercase max-w-6xl mx-auto">
          {t("servicesAndClients.clients.list", { returnObjects: true }).map(
            (client, index) => (
              <span
                key={index}
                className="font-MN text-xs font-semibold whitespace-nowrap hover:text-red-800 transition-colors duration-300"
              >
                {client}
              </span>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default ServicesAndClients;
