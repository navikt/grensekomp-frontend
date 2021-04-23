import { Languages } from './utils';

enum CommonKeys {
  NUMBER = 'NUMBER',
  FNR_LABEL = 'FNR_LABEL',
  FNR_PLACEHOLDER = 'FNR_PLACEHOLDER',
  LAND_LABEL = 'LAND_LABEL',
  SLETT_LABEL = 'SLETT_LABEL',
  DATO_PLACEHOLDER = 'DATO_PLACEHOLDER',
  FRA_HJELPE_LABEL = 'FRA_HJELPE_LABEL',
  FRA_HJELPE_CONTENT = 'FRA_HJELPE_CONTENT',
  TIL_HJELPE_LABEL = 'TIL_HJELPE_LABEL',
  TIL_HJELPE_CONTENT = 'TIL_HJELPE_CONTENT',
  BELOEP_PLACEHOLDER = 'BELOEP_PLACEHOLDER',
  BELOEP_HJELPE_TITLE = 'BELOEP_HJELPE_TITLE',
  BELOEP_HJELPE_SUBTITLE = 'BELOEP_HJELPE_SUBTITLE',
  BELOEP_HJELPE_INFO_1 = 'BELOEP_HJELPE_INFO_1',
  BELOEP_HJELPE_INFO_2 = 'BELOEP_HJELPE_INFO_2',
  BELOEP_HJELPE_INFO_3 = 'BELOEP_HJELPE_INFO_3',
  BELOEP_HJELPE_INFO_4 = 'BELOEP_HJELPE_INFO_4',
  BELOEP_HJELPE_INFO_5 = 'BELOEP_HJELPE_INFO_5',
  BELOEP_HJELPE_INFO_6 = 'BELOEP_HJELPE_INFO_6',
  CLOSE = 'CLOSE',
  HELP = 'HELP',
  ADD = 'ADD',
  BEKREFT_LABEL = 'BEKREFT_LABEL',
  BEKREFT_CONTENT_1 = 'BEKREFT_CONTENT_1',
  BEKREFT_CONTENT_2 = 'BEKREFT_CONTENT_2',
  SEND = 'SEND'
}

export const translatedCommonKeys: IncludedCommonKeys = {
  [CommonKeys.NUMBER]: {
    nb: 'Nr.'
  },

  [CommonKeys.FNR_LABEL]: {
    nb: 'Fødsels-/D-nummer'
  },

  [CommonKeys.FNR_PLACEHOLDER]: {
    nb: '11 siffer'
  },

  [CommonKeys.LAND_LABEL]: {
    nb: 'Bostedsland'
  },

  [CommonKeys.SLETT_LABEL]: {
    nb: 'Slett'
  },

  [CommonKeys.DATO_PLACEHOLDER]: {
    nb: 'dd.mm.åå'
  },

  [CommonKeys.FRA_HJELPE_LABEL]: {
    nb: 'Fra'
  },

  [CommonKeys.FRA_HJELPE_CONTENT]: {
    nb: 'Velg første dag arbeidstakeren din var forhindret fra å møte på jobb på grunn av innreiseforbudet'
  },

  [CommonKeys.TIL_HJELPE_LABEL]: {
    nb: 'Til'
  },

  [CommonKeys.TIL_HJELPE_CONTENT]: {
    nb: 'Siste dag i den perioden du krever refusjon for.'
  },

  [CommonKeys.BELOEP_PLACEHOLDER]: {
    nb: 'Beløp'
  },

  [CommonKeys.BELOEP_HJELPE_TITLE]: {
    nb: 'Beregnet månedsinntekt'
  },

  [CommonKeys.BELOEP_HJELPE_SUBTITLE]: {
    nb: 'Beregning av månedsinntekt'
  },

  [CommonKeys.BELOEP_HJELPE_INFO_1]: {
    nb:
      'Legg alltid inntekten i månedene oktober, november, desember 2020 når du skal fastsette beregningsperioden. Dette er et unntak fra hovedregelen.'
  },

  [CommonKeys.BELOEP_HJELPE_INFO_2]: {
    nb: 'Ut over dette gjelder '
  },

  [CommonKeys.BELOEP_HJELPE_INFO_3]: {
    nb: 'samme beregningsregler som for sykepenger.'
  },

  [CommonKeys.BELOEP_HJELPE_INFO_4]: {
    nb: 'Hvilke '
  },

  [CommonKeys.BELOEP_HJELPE_INFO_5]: {
    nb: 'inntekter som kan tas med i beregningen'
  },

  [CommonKeys.BELOEP_HJELPE_INFO_6]: {
    nb: ' er det også viktig å være klar over.'
  },

  [CommonKeys.CLOSE]: {
    nb: 'Lukk dette vinduet'
  },

  [CommonKeys.HELP]: {
    nb: 'Hjelp'
  },

  [CommonKeys.ADD]: {
    nb: 'Legg til enda en ansatt'
  },

  [CommonKeys.BEKREFT_LABEL]: {
    nb:
      'Jeg bekrefter at jeg har satt meg inn i reglene, og at opplysningene jeg har gitt, er riktige og fullstendige. ' +
      'Jeg vet at NAV kan trekke tilbake retten til å få dekket lønnsutgiftene ved feil eller mangelfulle opplysninger, ' +
      'og at NAV kan gjøre kontroller i ettertid for å hindre misbruk av ordningen.'
  },

  [CommonKeys.BEKREFT_CONTENT_1]: {
    nb:
      'Jeg har utbetalt lønn til de ansatte jeg søker om refusjon for ovenfor.' +
      '\nHver enkelt ansatt taper inntekt fordi de ikke kan møte på jobb på grunn av innreiseforbudet.'
  },

  [CommonKeys.BEKREFT_CONTENT_2]: {
    nb: 'Reglene som gjelder for kompensasjon ved innreiseforbudet.'
  },

  [CommonKeys.SEND]: {
    nb: 'Send krav om refusjon'
  }
};

export type IncludedCommonKeys = {
  [P in CommonKeys]: {
    [L in Languages]: string;
  };
};

export default CommonKeys;
