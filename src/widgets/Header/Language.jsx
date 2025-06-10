import { useState } from "react";

import flagEn from "../../assets/icons/eng.png";
import flagRu from "../../assets/icons/rus.png";
import flagUz from "../../assets/icons/uzb.png";

import "./Language.css";

const languages = [
  { code: "en", label: "English", flag: flagEn },
  { code: "ru", label: "Русский", flag: flagRu },
  { code: "uz", label: "O‘zbek", flag: flagUz },
];

const Language = () => {
  const [selectedLang, setSelectedLang] = useState(languages[0]);
  const [open, setOpen] = useState(false);

  const toggleOpen = () => setOpen((prev) => !prev);

  const handleSelect = (lang) => {
    setSelectedLang(lang);
    setOpen(false);
  };

  return (
    <div
      className={`language-container ${open ? "open" : ""}`}
      onClick={toggleOpen}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && toggleOpen()}
    >
      <img
        src={selectedLang.flag}
        alt={selectedLang.label}
        className="language-flag selected"
      />

      <div className="language-dropdown">
        {languages
          .filter((lang) => lang.code !== selectedLang.code)
          .map((lang) => (
            <img
              key={lang.code}
              src={lang.flag}
              alt={lang.label}
              className="language-flag"
              onClick={(e) => {
                e.stopPropagation();
                handleSelect(lang);
              }}
            />
          ))}
      </div>
    </div>
  );
};

export default Language;
