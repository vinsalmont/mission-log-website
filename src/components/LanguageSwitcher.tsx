import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';

const languages = [
  { code: 'en', name: 'English' },
  { code: 'es', name: 'Español' },
  { code: 'fr', name: 'Français' },
  { code: 'it', name: 'Italiano' },
  { code: 'pt', name: 'Português' }
];

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);
  const closeDropdown = () => setIsOpen(false);

  const changeLanguage = (code: string) => {
    i18n.changeLanguage(code);
    closeDropdown();
  };

  return (
    <div className="relative">
      <button 
        onClick={toggleDropdown}
        className="flex items-center space-x-2 text-white/80 hover:text-white transition-colors px-3 py-2 rounded-lg hover:bg-space-violet/20"
      >
        <Globe className="w-5 h-5" />
        <span className="uppercase">{i18n.language}</span>
      </button>
      
      {isOpen && (
        <>
          <div 
            className="fixed inset-0 z-40"
            onClick={closeDropdown}
          />
          <div className="absolute right-0 mt-2 w-48 bg-space-blue/95 backdrop-blur-lg rounded-lg shadow-xl z-50 py-2">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => changeLanguage(lang.code)}
                className={`w-full px-4 py-2 text-left hover:bg-space-violet/20 transition-colors ${
                  i18n.language === lang.code ? 'text-space-violet' : 'text-white/80'
                }`}
              >
                {lang.name}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default LanguageSwitcher;