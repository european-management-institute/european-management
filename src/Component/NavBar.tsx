import React, { useState } from "react";
import { Menu, X, Globe } from "lucide-react";
import { useTranslation } from "react-i18next";
import imgUrl2 from "../assets/ombrato_reduced.png";
import { useNavigate } from "react-router-dom";

const NavLink = ({ href, children }) => (
  <a
    onClick={href}
    className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-bold uppercase cursor-pointer	"
  >
    {children}
  </a>
);

const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: "it", name: "ITALIC" },
    { code: "en", name: "ENGLISH" },
    { code: "fr", name: "FRENCH" },
    { code: "es", name: "SPANISH" },
  ];
  const handleLanguageChange = (event) => {
    localStorage.setItem("selectedLanguage", event);

    i18n.changeLanguage(event);
  };
  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-1 px-3 py-2"
      >
        <Globe size={20} />
        <span className="text-sm font-medium">{/* {i18n.language} */}</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 py-2 w-24 bg-white rounded-md shadow-lg ">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                handleLanguageChange(lang.code);
                setIsOpen(false);
              }}
              className={`block w-full text-left cursor-pointer	 px-4 py-2 text-sm ${
                i18n.language === lang.code
                  ? "bg-gray-100 text-gray-900"
                  : "text-gray-700"
              } hover:bg-gray-100`}
            >
              {lang.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleNavigation = (path) => {
    setIsMenuOpen(false);
    if (path === "bottom") {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      });
    } else {
      navigate(path);
      window.scrollTo(0, 0);
    }
  };

  const MobileNavLink = ({ path, children }) => (
    <button
      onClick={() => handleNavigation(path)}
      className="block w-full text-left px-3 py-2 text-gray-700 hover:text-gray-900 text-base font-bold uppercase"
    >
      {children}
    </button>
  );

  return (
    <nav className="sticky top-0 bg-white shadow-md z-50 pb-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <a href="/" className="flex flex-row flex-shrink-0 items-center">
            <img src={imgUrl2} alt="EMI" className="h-10 w-auto mr-4" />
            <p className="text-sm md:text-[.12em] font-light leading-tight">
              {t("company.european")}
              <br />
              {t("company.management")}
              <br />
              {t("company.institute")}
            </p>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <NavLink href={() => handleNavigation("/chi-siamo")}>
              {t("navigation.about")}
            </NavLink>
            <NavLink href={() => handleNavigation("/management")}>
              {t("navigation.management")}
            </NavLink>
            <NavLink href={() => handleNavigation("/marketing")}>
              {t("navigation.marketing")}
            </NavLink>
            <NavLink href={() => handleNavigation("/digital")}>
              {t("navigation.digital")}
            </NavLink>
            <NavLink href={() => handleNavigation("/e-learning")}>
              {t("navigation.institute")}
            </NavLink>
            <NavLink href={() => handleNavigation("bottom")}>
              {t("navigation.contacts")}
            </NavLink>
            <LanguageSelector />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <LanguageSelector />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-gray-700 hover:text-gray-900"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white">
            <MobileNavLink path="/chi-siamo">
              {t("navigation.about")}
            </MobileNavLink>
            <MobileNavLink path="/management">
              {t("navigation.management")}
            </MobileNavLink>
            <MobileNavLink path="/marketing">
              {t("navigation.marketing")}
            </MobileNavLink>
            <MobileNavLink path="/digital">
              {t("navigation.digital")}
            </MobileNavLink>
            <MobileNavLink path="/e-learning">
              {t("navigation.institute")}
            </MobileNavLink>
            <MobileNavLink path="bottom">
              {t("navigation.contacts")}
            </MobileNavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
