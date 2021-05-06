import Language from '../locale/Language';

enum lenker {
  Home = '/',
  TokenFornyet = '/token-fornyet',
  Innsending = '/:language/innsending',
  Oversikt = '/:language/oversikt'
}

export const buildLenke = (lenke: lenker, lang: Language) => lenke.replace(':language', lang);

export default lenker;
