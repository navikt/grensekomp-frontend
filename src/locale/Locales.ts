import LangKey from './LangKey';

interface Locale {
  // en: string,
  nb: string;
}

const Locales: Record<LangKey, Locale> = {
  SIDETITTEL: {
    nb: 'Refusjon for kompensasjon ved innreiseforbud'
  },
  BULKINNSENDING_INFO: {
    nb:
      'Arbeidsgivere er pålagt å utbetale kompensasjon til ansatte som taper inntekt fordi de ikke kan møte på arbeid ' +
      'som følge av innreiseforbudet under pandemien. Arbeidsgiveren forskutterer kompensasjonen og krever refusjon fra ' +
      'NAV.' +
      '\n\n' +
      'Alle felter må fylles ut. Du kan sende inntil _50 krav om gangen_. Søker du om _flere perioder_ for samme person, ' +
      'velg «Legg til enda en ansatt», bruk samme fnr/dnr, og skriv inn ny periode.' +
      '-##\n' +
      '-- Ordningen gjelder for arbeidstakere som var ansatt og hadde påbegynt arbeidet 29. januar da innreiseforbudet ble innført.\n' +
      '-- Den ansatte må ha vært i jobb i minst fire uker før det tidspunktet man krever refusjon fra.\n' +
      '-- Det gis bare kompensasjon for dager som den ansatte faktisk skulle ha jobbet.\n' +
      '-- Hvis arbeidsgiveren er kjent med at den ansatte har hatt inntekt fra en annen jobb, skal det ikke gis ' +
      'kompensasjon for dager som den ansatte har hatt annen inntekt. Det samme gjelder ytelser fra bostedslandet hvis ' +
      'arbeidsgiveren er kjent med det.\n' +
      '-- Avviklet ferie kan omgjøres til arbeidsdager som det gis refusjon for.\n' +
      '-- Kompensasjonen er 70 % av sykepengegrunnlaget, begrenset opp til 70 % av 6G, [folketrygdens grunnbeløp.](https://www.nav.no/no/nav-og-samfunn/kontakt-nav/utbetalinger/grunnbelopet-i-folketrygden)\n' +
      '-- [Søknaden blir behandlet automatisk.](https://www.nav.no/no/person/arbeid/sykmeldt-arbeidsavklaringspenger-og-yrkesskade/nyheter/kompensasjon-til-utestengte-eos-borgere/automatisert-saksbehandling-i-forbindelse-med-innreiseforbudet)\n' +
      '##-\n'
  },

  MAANEDSINNTEKT_HJELPELABEL_INFO: {
    nb:
      '-## ' +
      '-- Tidspunktet for beregning er 29. januar 2021. Dette betyr at det er inntekter i månedene oktober, november, ' +
      'desember 2020 som skal legges til grunn når du gjør beregningen.\n' +
      '-- Ut over særtilfellet nevnt ovenfor gjelder [samme beregningsregler som for sykepenger.](https://www.nav.no/no/bedrift/tjenester-og-skjemaer/nav-og-altinn-tjenester/inntektsmelding/beregningsregler-for-sykepenger)\n' +
      '-- Hvilke [inntekter som kan tas med i beregningen](https://www.nav.no/no/bedrift/oppfolging/sykmeldt-arbeidstaker/sykepenger/inntekter-som-innga%CC%8Ar-i-beregning-av-ma%CC%8Anedsinntekten) er det også viktig å være klar over.\n' +
      '##-\n'
  },

  LOGGETUTADVARSEL_INFO: {
    nb:
      '-## ' +
      '-- Ikke lukk dette vinduet\n' +
      '-- [Åpne ID-Porten (innlogging) i nytt vindu ved å klikke på denne lenken.]({{ innloggingUrl }})\n' +
      '-- Logg inn på nytt i ID-porten.\n' +
      '-- Returner til dette vinduet.\n' +
      '-- Lukk denne meldingen og klikk igjen på knappen "Send søknad om refusjon".\n' +
      '##-\n'
  },

  KRAVLISTE_INFO: {
    nb: `Har du tidligere søkt om refusjon for [tapt arbeidsinntekt på grunn av innreiseforbudet]({{ path }})
    kan du finne tilbake til dem nedenfor`
  },

  KRAVLISTE_TITLE: {
    nb: 'Oversikt over tidligere innsendte krav'
  },

  GRUNNBELOEP: { nb: 'folketrygdens grunnbeløp.' },
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

  BEREGNET_INNTEKT: {
    nb: 'Beregnet månedsinntekt'
  },

  BEREGNING_INNTEKT: {
    nb: 'Beregning av månedsinntekt'
  },

  BELOEP_HJELPE_INFO: {
    nb:
      '-## ' +
      '-- Legg alltid inntekten i månedene oktober, november, desember 2020 når du skal fastsette beregningsperioden. Dette er et unntak fra hovedregelen.\n' +
      '-- Ut over dette gjelder [samme beregningsregler som for sykepenger.](https://www.nav.no/no/bedrift/tjenester-og-skjemaer/nav-og-altinn-tjenester/inntektsmelding/beregningsregler-for-sykepenger)\n' +
      '-- Hvilke [inntekter som kan tas med i beregningen](https://www.nav.no/no/bedrift/oppfolging/sykmeldt-arbeidstaker/sykepenger/inntekter-som-innga%CC%8Ar-i-beregning-av-ma%CC%8Anedsinntekten) er det også viktig å være klar over.\n' +
      '##-\n'
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

  BEKREFT_OPPLYSNINGER: {
    nb:
      'Jeg har utbetalt lønn til de ansatte jeg søker om refusjon for ovenfor.' +
      '\nHver enkelt ansatt taper inntekt fordi de ikke kan møte på jobb på grunn av innreiseforbudet. ' +
      '[Reglene som gjelder for kompensasjon ved innreiseforbudet.](https://www.nav.no/no/bedrift/refusjon-ved-innreiseforbud-under-pandemien)'
  },

  SEND: {
    nb: 'Send krav om refusjon'
  },

  ORGNR_MISSSING: { nb: 'Mangler virksomhetsnummer' },
  ORGNR_INVALID: { nb: 'Ugyldig virksomhetsnummer' },
  AMOUNT_MISSING: { nb: 'Mangler beløp' },
  AMOUNT_NOT_NUMERIC: { nb: 'Oppgi beløp med kun tall med maks to tall etter komma' },
  AMOUNT_TOO_HIGH: { nb: 'For høyt beløp' },
  DAY_MISSING: { nb: 'Mangler antall' },
  DAY_DIGITS_ONLY: { nb: 'Bruk kun tall' },
  DAY_TOO_HIGH: { nb: 'For høy verdi' },
  DAY_INVALID: { nb: 'Antall refusjonsdager kan ikke være flere enn dagene i perioden' },
  FNR_MISSING: { nb: 'Mangler fødselsnummer' },
  FNR_INVALID: { nb: 'Ugyldig fødselsnummer' },
  FOM_MISSING: { nb: 'Mangler fra dato' },
  FOM_INVALID: { nb: 'Dato kan bare være fra og med $value' },
  FOM_ERROR: { nb: 'Feil dato' },
  TIL_MISSING: { nb: 'Mangler til dato' },
  TIL_INVALID: { nb: 'Dato kan bare være fra og med $value' },
  TIL_ERROR: { nb: 'Feil dato' },
  TIL_TOO_EARLY: { nb: 'Til dato kan ikke være før fra dato' },
  COUNTRY_MISSING: { nb: 'Mangler land' },
  COUNTRY_INVALID: { nb: 'Land ikke gyldig' },

  BEKREFT: { nb: 'Bekreft at opplysningene er korrekt' },

  BEREGNET_REFUSJON: {
    nb: 'Foreløpig beregnet refusjon'
  },

  BEREGNET_REFUSJON_INFO: {
    nb:
      'Denne beregningen tar _ikke_ høyde for andre utbetalinger den ansatte eventuelt får fra NAV, for eksempel ' +
      'graderte sykepenger. Utbetalinger du allerede får refusjon for, vil derfor bli trukket fra beløpet du nå søker om.'
  },

  FEILOPPSUMERING: {
    nb: 'For å gå videre må du rette opp følgende:'
  },

  REFUSJONSKRAV: {
    nb: 'Refusjonskrav ved innreiseforbud'
  },

  PAGE_NOT_FOUND_TITLE: {
    nb: 'Siden finnes ikke'
  },
  PAGE_NOT_FOUND_DESCRIPTION: {
    nb: 'Siden finnes ikke. [/nb/innsending](Gå til skjema for innsending)'
  },

  SLETT_KRAV_LABEL: {
    nb: 'Er du sikker på at du vil slette kravet?'
  },
  INGENTILGANGADVARSEL: {
    nb:
      'Du har ikke rettigheter til å søke om refusjon for noen bedrifter\n' +
      'Tildeling av roller foregår i Altinn\n' +
      '[https://arbeidsgiver.nav.no/min-side-arbeidsgiver/informasjon-om-tilgangsstyring](Les mer om roller og tilganger)'
  },

  ID_NUMBER: {
    nb: 'Fødsels-/D-nummer'
  },

  BOSTEDLAND: {
    nb: 'Bostedsland'
  },

  SLETT_KRAV_CONFIRM: {
    nb: 'Ja - slett kravet'
  },

  CANCEL: {
    nb: 'Avbryt'
  },

  TILBAKE: {
    nb: 'Tilbake til liste'
  },

  KRAV_MOTTATT: {
    nb: 'Krav mottatt'
  },

  KVITTERING_TITTEL: {
    nb: 'Kravet er mottatt'
  },

  PERIODE: {
    nb: 'Periode'
  },

  SLETTET_KRAV_KVITTERING_TITTEL: {
    nb: 'Kravet er slettet'
  },

  KRAV_NY: {
    nb: 'Her kan du sende inn nytt krav for denne arbeidstakeren om du vil.'
  },

  LOGG_UT: {
    nb: 'Logg ut'
  },

  MIN_SIDE: {
    nb: 'Min side arbeidsgiver'
  },

  KVITTERING_INFO: {
    nb:
      'En kvittering er sendt til meldingsboksen deres i [Altinn](https://www.altinn.no). ' +
      'Trenger du å kontakte oss, er det tilstrekkelig å oppgi fødselsnummeret til den ansatte.'
  },

  LOGGET_UT: {
    nb: 'Du er blitt logget ut, følg instruksjonene for ikke å miste data'
  },

  RETURNER: {
    nb: 'Returner til dette vinduet.'
  },

  LOGGET_INN: {
    nb: 'Jeg har logget inn på nytt - lukk dette vinduet'
  },

  SERVERFEILADVARSEL_INFO: {
    nb:
      '_Det har desverre oppstått en teknisk feil hos oss_\n\n' +
      'Prøv igjen litt senere, og [kontakt oss gjerne dersom det ikke ordner seg.](https://arbeidsgiver.nav.no/kontakt-oss/)'
  },

  SOEKNADSSKJEMA: {
    nb: 'SØKNADSSKJEMA'
  },

  ERROR_GENERIC: {
    nb: 'Det oppstod en feil'
  },

  ERROR_LOGIN: {
    nb: 'Vi klarte ikke logge deg inn. Vennligst prøv igjen senere.'
  },

  LOGIN: {
    nb: 'Innlogging'
  },

  LOGIN_RENEWED: {
    nb: 'Innloggingen er fornyet'
  },

  LOGIN_RENEWED_INFO: {
    nb: 'Du har nå fornyet innloggingen med en time.\n' + 'Dette vinduet kan nå lukkes.'
  },

  OVERSIKTKRAV_TITLE: {
    nb: 'Refusjon for kompensasjon ved innreiseforbud'
  },

  OVERSIKTKRAV_SUBTITLE: {
    nb: 'Refusjoner'
  },

  FEILOPPSUMMERING_ROW: {
    nb: 'Rad {{ index }}: {{ error }}'
  },

  KRAV_SAMMENDRAG_DELETE: {
    nb: 'Slett'
  },

  TILGANGSFEILSIDE: {
    nb: 'Du har ikke tilgang'
  },

  SERVER_FEIL_ADVARSEL_HIDE: {
    nb: 'Skjul denne meldingen.'
  },

  TOKEN_FORNYET: {
    nb: 'Token er fornyet'
  }
};

export default Locales;
