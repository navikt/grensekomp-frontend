import { Language } from '@navikt/helse-arbeidsgiver-felles-frontend';

enum lenker {
  Home = '/',
  TokenFornyet = '/:language/token-fornyet',
  Innsending = '/:language/innsending',
  InnsendingLegacy = '/batchinnsending/krav',
  Oversikt = '/:language/oversikt',
  OversiktKrav = '/oversikt/krav',
  OversiktLegacy = '/oversikt'
}

export const buildLenke = (lenke: lenker, lang: Language) => lenke.replace(':language', lang);

export default lenker;
