import LanguageKey from './LanguageKey';

const t = (key: LanguageKey, lang: string = 'no') => {
  return key[lang];
};
export default t;
