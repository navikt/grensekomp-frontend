import Key from './Key';
import Locale from './Locale';

const Languages: Record<Key, Locale> = {
  SIDETITTEL: {
    nb: 'Refusjon for kompensasjon ved innreiseforbud'
  },
  HEADER_1: {
    nb:
      'Arbeidsgivere er pålagt å utbetale kompensasjon til ansatte som taper inntekt fordi de ikke kan møte på arbeid som ' +
      'følge av innreiseforbudet under pandemien. Arbeidsgiveren forskutterer kompensasjonen og krever refusjon fra NAV.'
  },
  HEADER_2: { nb: 'Alle felter må fylles ut. Du kan sende inntil' },
  HEADER_3: { nb: '50 krav om gangen' },
  HEADER_4: { nb: '. Søker du om ' },
  HEADER_5: { nb: 'flere perioder' },
  HEADER_6: { nb: ' for samme person, velg «Legg til enda en ansatt», bruk samme fnr/dnr, og skriv inn ny periode.' },
  INFO_1: {
    nb:
      'Ordningen gjelder for arbeidstakere som var ansatt og hadde påbegynt arbeidet 29. januar da innreiseforbudet ble innført.'
  },
  INFO_2: { nb: 'Den ansatte må ha vært i jobb i minst fire uker før det tidspunktet man krever refusjon fra.' },
  INFO_3: { nb: 'Det gis bare kompensasjon for dager som den ansatte faktisk skulle ha jobbet.' },
  INFO_4: {
    nb:
      'Hvis arbeidsgiveren er kjent med at den ansatte har hatt inntekt fra en annen jobb, skal det ikke gis kompensasjon ' +
      'for dager som den ansatte har hatt annen inntekt. Det samme gjelder ytelser fra bostedslandet hvis arbeidsgiveren ' +
      'er kjent med det.'
  },
  INFO_5: { nb: 'Avviklet ferie kan omgjøres til arbeidsdager som det gis refusjon for.' },
  INFO_6: { nb: 'Kompensasjonen er 70 % av sykepengegrunnlaget, begrenset opp til 70 % av 6G, ' },
  INFO_7: { nb: 'Søknaden blir behandlet automatisk.' },
  GRUNNBELOEP: { nb: 'folketrygdens grunnbeløp.' },
  AUTOMATISERT_BEHANDLING: { nb: 'Les om den automatiserte saksbehandlingen.' },
  SKJEMA_LEGEND: { nb: 'Oppgi ansatte, fraværsperiode og beløp' },

  NUMBER: {
    nb: 'Nr.'
  },
  FNR_LABEL: {
    nb: 'Fødsels-/D-nummer'
  },
  FNR_PLACEHOLDER: {
    nb: '11 siffer'
  },

  LAND_LABEL: {
    nb: 'Bostedsland'
  },

  SLETT_LABEL: {
    nb: 'Slett'
  },

  DATO_PLACEHOLDER: {
    nb: 'dd.mm.åå'
  },

  FRA_HJELPE_LABEL: {
    nb: 'Fra'
  },

  FRA_HJELPE_CONTENT: {
    nb: 'Velg første dag arbeidstakeren din var forhindret fra å møte på jobb på grunn av innreiseforbudet'
  },

  TIL_HJELPE_LABEL: {
    nb: 'Til'
  },

  TIL_HJELPE_CONTENT: {
    nb: 'Siste dag i den perioden du krever refusjon for.'
  },

  BELOEP_PLACEHOLDER: {
    nb: 'Beløp'
  },

  BELOEP_HJELPE_TITLE: {
    nb: 'Beregnet månedsinntekt'
  },

  BELOEP_HJELPE_SUBTITLE: {
    nb: 'Beregning av månedsinntekt'
  },

  BELOEP_HJELPE_INFO_1: {
    nb:
      'Legg alltid inntekten i månedene oktober, november, desember 2020 når du skal fastsette beregningsperioden. Dette er et unntak fra hovedregelen.'
  },

  BELOEP_HJELPE_INFO_2: {
    nb: 'Ut over dette gjelder '
  },

  BELOEP_HJELPE_INFO_3: {
    nb: 'samme beregningsregler som for sykepenger.'
  },

  BELOEP_HJELPE_INFO_4: {
    nb: 'Hvilke '
  },

  BELOEP_HJELPE_INFO_5: {
    nb: 'inntekter som kan tas med i beregningen'
  },

  BELOEP_HJELPE_INFO_6: {
    nb: ' er det også viktig å være klar over.'
  },

  CLOSE: {
    nb: 'Lukk dette vinduet'
  },

  HELP: {
    nb: 'Hjelp'
  },

  ADD: {
    nb: 'Legg til enda en ansatt'
  },

  BEKREFT_LABEL: {
    nb:
      'Jeg bekrefter at jeg har satt meg inn i reglene, og at opplysningene jeg har gitt, er riktige og fullstendige. ' +
      'Jeg vet at NAV kan trekke tilbake retten til å få dekket lønnsutgiftene ved feil eller mangelfulle opplysninger, ' +
      'og at NAV kan gjøre kontroller i ettertid for å hindre misbruk av ordningen.'
  },

  BEKREFT_CONTENT_1: {
    nb:
      'Jeg har utbetalt lønn til de ansatte jeg søker om refusjon for ovenfor.' +
      '\nHver enkelt ansatt taper inntekt fordi de ikke kan møte på jobb på grunn av innreiseforbudet.'
  },

  BEKREFT_CONTENT_2: {
    nb: 'Reglene som gjelder for kompensasjon ved innreiseforbudet.'
  },

  SEND: {
    nb: 'Send krav om refusjon'
  }
};

export default Languages;
