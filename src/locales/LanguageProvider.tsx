import i18n from 'i18next';
import mapLanguages from './mapLanguages';
import { I18nextProvider } from 'react-i18next';
import React from 'react';
import { useLocation } from 'react-router-dom';
import findLangByUrl from './findLangByUrl';
import Lang from './Lang';
import { setAvailableLanguages, setParams } from '@navikt/nav-dekoratoren-moduler';

interface LanguageProviderProps {
  lang?: Lang;
  children: any;
}

export const languageInit = (lang: Lang) => {
  i18n.init({
    resources: {
      nb: {
        translations: mapLanguages(Lang.nb)
      },
      en: {
        translations: mapLanguages(Lang.en)
      }
    },
    fallbackLng: Lang.nb,
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

const LanguageProvider = ({ children, lang = Lang.nb }: LanguageProviderProps) => {
  let location = useLocation();
  const newLocationNO = '/grensekomp/nb/batchinnsending/krav' + location.search;
  const newLocationEN = '/grensekomp/en/batchinnsending/krav' + location.search;
  const useLang = findLangByUrl(location.pathname, lang);
  setAvailableLanguages([
    { locale: Lang.nb, url: newLocationNO },
    { locale: Lang.en, url: newLocationEN }
  ]);
  setParams({
    language: useLang
  });
  languageInit(useLang);
  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
};

export default LanguageProvider;
