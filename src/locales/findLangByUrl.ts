import Lang from './Lang';

const findLangByUrl = (path: string, defaultLang: Lang): Lang.nb | Lang.en => {
  if (path.startsWith('/en/')) {
    return Lang.en;
  }
  if (path.startsWith('/nb/')) {
    return Lang.nb;
  }
  return defaultLang;
};

export default findLangByUrl;
