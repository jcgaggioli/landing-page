import React from 'react';
import './Language.scss';

const Language = ({ language, setLanguage }) => {
  const toggleLanguage = lang => {
    setLanguage(lang);
  };

  return (
    <div className="lang__butiton">
      <button
        className={`lang__option ${language === 'en' ? 'active' : ''}`}
        onClick={() => {
          toggleLanguage('en');
        }}
      >
        EN
      </button>
      <button
        className={`lang__option ${language === 'es' ? 'active' : ''}`}
        onClick={() => {
          toggleLanguage('es');
        }}
      >
        ES
      </button>
    </div>
  );
};

export default Language;
