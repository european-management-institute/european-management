import React, { useState } from "react";
import { Eye, Check } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function RegistrationForm() {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    jobTitle: "",
    company: "",
    linkedIn: "",
    password: "",
    terms: false,
  });
  const { t } = useTranslation();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Required fields array (excluding optional fields like LinkedIn)
    const requiredFields = [
      "firstName",
      "lastName",
      "email",
      "phone",
      "jobTitle",
      "company",
      "password",
      "terms",
    ];

    // Check if all required fields are filled
    const isFormValid = requiredFields.every((field) => {
      if (field === "terms") {
        return formData[field] === true; // Checkbox must be checked
      }
      return formData[field] && formData[field].trim() !== "";
    });

    // Email validation
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email);

    // Phone validation (basic)
    const isPhoneValid = /^\+?[\d\s-]{8,}$/.test(formData.phone);

    console.log(isFormValid);
    if (!isFormValid) {
      alert("Please fill in all required fields");
      return;
    }

    if (!isEmailValid) {
      alert("Please enter a valid email address");
      return;
    }

    if (!isPhoneValid) {
      alert("Please enter a valid phone number");
      return;
    }

    // If all validations pass
    console.log(formData);
    setShowModal(true);
  };
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };
  const navigate = useNavigate();

  return (
    <div className="bg-[#071330] flex items-center justify-center min-h-screen">
      <div className="w-full bg-[#071330] overflow-hidden flex flex-col md:flex-row">
        {/* Left Section */}
        <div className="w-full md:w-1/3 relative bg-[#071330] p-4 md:p-8">
          <div className="absolute top-8 left-8 flex flex-row justify-center">
            <p className="hidden md:block md:text-[.49rem] font-MN font-light text-left text-white leading-tight">
              {t("digital.footer.company.line1")}
              <br />
              {t("digital.footer.company.line2")}
              <br />
              {t("digital.footer.company.line3")}
            </p>
          </div>

          <div className="h-1/2 flex flex-col justify-end pb-16 font-MN">
            <h2 className="text-4xl font-bold text-white leading-tight">
              {t("hero.title")}
              <br />
              {t("hero.subtitle")}
            </h2>
            <div className="flex gap-2 mt-8">
              <div className="w-12 h-1 bg-white/30 rounded-full"></div>
              <div className="w-12 h-1 bg-white/30 rounded-full"></div>
              <div className="w-12 h-1 bg-white rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-2/3 p-4 md:p-12 font-MN">
          <div className="max-w-md mx-auto">
            <h1 className="text-2xl font-bold text-white mb-2">
              {t("form.title")}
            </h1>
            <p className="text-slate-400 mb-8">
              {t("form.login_prompt")}{" "}
              <a
                onClick={() => navigate("/e-learning")}
                className="text-white hover:text-purple-300 cursor-pointer"
              >
                {t("form.login_link")}
              </a>
            </p>

            <form onSubmit={handleSubmit} className="space-y-3 md:space-y-4">
              <div className="flex flex-col md:flex-row gap-3 md:gap-4">
                <input
                  type="text"
                  name="firstName"
                  placeholder={t("form.fields.firstName")}
                  onChange={handleChange}
                  className="w-full md:w-1/2 bg-slate-800/50 rounded-lg p-2.5 font-MN md:p-3 text-xs md:text-base text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-white"
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder={t("form.fields.lastName")}
                  onChange={handleChange}
                  className="w-full md:w-1/2 bg-slate-800/50 rounded-lg p-2.5 font-MN md:p-3 text-xs md:text-base text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-white"
                />
              </div>

              {[
                {
                  type: "email",
                  name: "email",
                  placeholder: t("form.fields.email"),
                },
                {
                  type: "tel",
                  name: "phone",
                  placeholder: t("form.fields.phone"),
                },
                {
                  type: "text",
                  name: "jobTitle",
                  placeholder: t("form.fields.jobTitle"),
                },
                {
                  type: "text",
                  name: "company",
                  placeholder: t("form.fields.company"),
                },
                {
                  type: "url",
                  name: "linkedIn",
                  placeholder: t("form.fields.linkedIn"),
                },
              ].map((field) => (
                <input
                  key={field.name}
                  type={field.type}
                  name={field.name}
                  placeholder={field.placeholder}
                  onChange={handleChange}
                  className="w-full bg-slate-800/50 rounded-lg font-MN p-2.5 md:p-3 text-xs md:text-base text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-white"
                />
              ))}

              <div className="relative">
                <input
                  type="password"
                  name="password"
                  placeholder={t("form.fields.password")}
                  onChange={handleChange}
                  className="w-full bg-slate-800/50 rounded-lg p-2.5 font-MN md:p-3 text-xs md:text-base text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-white"
                />
                <Eye className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4 md:w-5 md:h-5" />
              </div>

              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="terms"
                  onChange={handleChange}
                  className="rounded border-slate-600 text-purple-500 font-MN focus:ring-purple-500"
                />
                <span className="text-slate-400 text-xs font-MN md:text-sm">
                  {t("form.terms.text")}{" "}
                  <a href="#" className="text-white hover:text-purple-400">
                    {t("form.terms.link")}
                  </a>
                </span>
              </div>

              <button
                type="submit"
                className="w-full bg-white font-MN text-blue-950 rounded-lg p-2.5 md:p-3 text-sm md:text-base hover:bg-gray-500 transition"
              >
                {t("form.submit")}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Success Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
          <div className="bg-[#071330] p-8 rounded-2xl max-w-md w-full mx-4">
            <div className="mb-4 flex items-center justify-center">
              <div className="bg-green-500/10 p-3 rounded-full">
                <Check className="w-8 h-8 text-green-500" />
              </div>
            </div>
            <h3 className="text-2xl font-MN font-bold text-white text-center mb-2">
              {t("modal.title")}
            </h3>
            <p className="text-slate-400 font-MN text-center mb-6">
              {t("modal.message")}
            </p>
            <button
              onClick={() => setShowModal(false)}
              className="w-full bg-blue-950 text-white rounded-lg p-3 hover:bg-gray-600 transition font-MN"
            >
              {t("modal.button")}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
