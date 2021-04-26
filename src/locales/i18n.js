import i18n from 'i18next';
import Languages from './Languages';
import mapLanguages from './mapLanguages';

i18n.init({
  resources: {
    nb: {
      translations: mapLanguages('nb')
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

export default i18n;
