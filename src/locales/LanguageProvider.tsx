import i18n from 'i18next';
import mapLanguages from './mapLanguages';
import { I18nextProvider } from 'react-i18next';
import React from 'react';

interface LanguageProviderProps {
  lang?: string;
  children: any;
}

export const languageInit = (lang: string) => {
  i18n.init({
    resources: {
      nb: {
        translations: mapLanguages('nb')
      },
      en: {
        translations: mapLanguages('en')
      }
    },
    fallbackLng: 'nb',
    ns: ['translations'],
    defaultNS: 'translations',
    keySeparator: false,
    interpolation: {
      escapeValue: false,
      formatSeparator: ','
    },
    react: {
      wait: true
    }
  });
  i18n.changeLanguage(lang);
  return i18n;
};

const LanguageProvider = ({ children, lang = 'nb' }: LanguageProviderProps) => {
  languageInit(lang);
  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
};

export default LanguageProvider;
