import { Languages } from './utils';

enum BulkKeys {
  SIDETITTEL = 'SIDETITTEL',
  SUBTITLE = 'SUBTITLE',
  HEADER_1 = 'HEADER_1',
  HEADER_2 = 'HEADER_2',
  HEADER_3 = 'HEADER_3',
  HEADER_4 = 'HEADER_4',
  HEADER_5 = 'HEADER_5',
  HEADER_6 = 'HEADER_6',
  INFO_1 = 'INFO_1',
  INFO_2 = 'INFO_2',
  INFO_3 = 'INFO_3',
  INFO_4 = 'INFO_4',
  INFO_5 = 'INFO_5',
  INFO_6 = 'INFO_6',
  GRUNNBELOEP = 'GRUNNBELOEP',
  INFO_7 = 'INFO_7',
  AUTOMATISERT_BEHANDLING = 'AUTOMATISERT_BEHANDLING',
  SKJEMA_LEGEND = 'SKJEMA_LEGEND'
}

export const translatedBulkKeys: IncludedBulkKeys = {
  [BulkKeys.SIDETITTEL]: {
    nb: 'Refusjon for kompensasjon ved innreiseforbud'
  },

  [BulkKeys.SUBTITLE]: {
    nb: 'Bulkinnsending'
  },

  [BulkKeys.HEADER_1]: {
    nb:
      'Arbeidsgivere er pålagt å utbetale kompensasjon til ansatte som taper inntekt fordi de ikke kan møte på arbeid som ' +
      'følge av innreiseforbudet under pandemien. Arbeidsgiveren forskutterer kompensasjonen og krever refusjon fra NAV.'
  },

  [BulkKeys.HEADER_2]: {
    nb: 'Alle felter må fylles ut. Du kan sende inntil '
  },

  [BulkKeys.HEADER_3]: {
    nb: '50 krav om gangen'
  },

  [BulkKeys.HEADER_4]: {
    nb: '. Søker du om '
  },

  [BulkKeys.HEADER_5]: {
    nb: 'flere perioder'
  },

  [BulkKeys.HEADER_6]: {
    nb: ' for samme person, velg «Legg til enda en ansatt», bruk samme fnr/dnr, og skriv inn ny periode.'
  },

  [BulkKeys.INFO_1]: {
    nb:
      'Ordningen gjelder for arbeidstakere som var ansatt og hadde påbegynt arbeidet 29. januar da innreiseforbudet ble innført.'
  },

  [BulkKeys.INFO_2]: {
    nb: 'Den ansatte må ha vært i jobb i minst fire uker før det tidspunktet man krever refusjon fra.'
  },

  [BulkKeys.INFO_3]: {
    nb: 'Det gis bare kompensasjon for dager som den ansatte faktisk skulle ha jobbet.'
  },

  [BulkKeys.INFO_4]: {
    nb:
      'Hvis arbeidsgiveren er kjent med at den ansatte har hatt inntekt fra en annen jobb, skal det ikke gis kompensasjon ' +
      'for dager som den ansatte har hatt annen inntekt. Det samme gjelder ytelser fra bostedslandet hvis arbeidsgiveren ' +
      'er kjent med det.'
  },

  [BulkKeys.INFO_5]: {
    nb: 'Avviklet ferie kan omgjøres til arbeidsdager som det gis refusjon for.'
  },

  [BulkKeys.INFO_6]: {
    nb: 'Kompensasjonen er 70 % av sykepengegrunnlaget, begrenset opp til 70 % av 6G, '
  },

  [BulkKeys.GRUNNBELOEP]: {
    nb: 'folketrygdens grunnbeløp.'
  },

  [BulkKeys.INFO_7]: {
    nb: 'Søknaden blir behandlet automatisk.'
  },

  [BulkKeys.AUTOMATISERT_BEHANDLING]: {
    nb: 'Les om den automatiserte saksbehandlingen.'
  },

  [BulkKeys.SKJEMA_LEGEND]: {
    nb: 'Oppgi ansatte, fraværsperiode og beløp'
  }
};

export type IncludedBulkKeys = {
  [P in BulkKeys]: {
    [L in Languages]: string;
  };
};

export default BulkKeys;
