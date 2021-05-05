import Languages from './Languages';

const mapLanguages = (lang: string) => {
  let allTranslatedKeys = {};
  Object.keys(Languages).forEach((e) => (allTranslatedKeys[e] = Languages[e][lang]));
  return allTranslatedKeys;
};

export default mapLanguages;
