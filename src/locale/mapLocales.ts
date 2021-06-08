import LanguageBundle from '../config/LanguageBundle';

const mapLocales = (lang: string) => {
  let allTranslatedKeys = {};
  Object.keys(LanguageBundle).forEach((e) => (allTranslatedKeys[e] = LanguageBundle[e][lang]));
  return allTranslatedKeys;
};

export default mapLocales;
