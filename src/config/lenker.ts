import Language from '../locale/Language';

enum lenker {
  Home = '/',
  TokenFornyet = '/:language/token-fornyet',
  TokenFornyetGammel = '/token-fornyet',
  Innsending = '/:language/innsending',
  Oversikt = '/:language/oversikt'
}

export const buildLenke = (lenke: lenker, lang: Language) => lenke.replace(':language', lang);

export default lenker;
