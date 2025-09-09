"use client";

import { useState } from "react";
import { Globe } from "lucide-react";

type Language = "fr" | "en";

export const LanguageSwitcher = () => {
  const [language, setLanguage] = useState<Language>("fr");
  const [isOpen, setIsOpen] = useState(false);

  const toggleLanguage = (lang: Language) => {
    setLanguage(lang);
    setIsOpen(false);
    // Dans une implémentation réelle, nous aurions ici la logique pour changer la langue dans toute l'application
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
        aria-label="Changer de langue"
      >
        <Globe className="h-5 w-5" />
        <span className="text-sm uppercase">{language}</span>
      </button>
      
      {isOpen && (
        <div className="absolute right-0 mt-2 w-24 bg-white dark:bg-gray-900 rounded-md shadow-lg py-1 z-10 border border-gray-200 dark:border-gray-700">
          <button
            onClick={() => toggleLanguage("fr")}
            className={`w-full text-left px-4 py-2 text-sm ${
              language === "fr" ? "bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400" : ""
            } hover:bg-gray-100 dark:hover:bg-gray-800`}
          >
            Français
          </button>
          <button
            onClick={() => toggleLanguage("en")}
            className={`w-full text-left px-4 py-2 text-sm ${
              language === "en" ? "bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400" : ""
            } hover:bg-gray-100 dark:hover:bg-gray-800`}
          >
            English
          </button>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
