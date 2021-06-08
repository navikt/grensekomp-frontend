import Locale from '../../../helse-arbeidsgiver-felles-frontend/dist/locale/Locale';

const LanguageBundle: Record<string, Locale> = {
  SIDETITTEL: {
    en: 'Refusjon',
    nb: 'Refusjon for kompensasjon ved innreiseforbud'
  },
  BULKINNSENDING_INFO: {
    en: 'Her kommer engelsk',
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
    en: '',
    nb:
      '-## ' +
      '-- Tidspunktet for beregning er 29. januar 2021. Dette betyr at det er inntekter i månedene oktober, november, ' +
      'desember 2020 som skal legges til grunn når du gjør beregningen.\n' +
      '-- Ut over særtilfellet nevnt ovenfor gjelder [samme beregningsregler som for sykepenger.](https://www.nav.no/no/bedrift/tjenester-og-skjemaer/nav-og-altinn-tjenester/inntektsmelding/beregningsregler-for-sykepenger)\n' +
      '-- Hvilke [inntekter som kan tas med i beregningen](https://www.nav.no/no/bedrift/oppfolging/sykmeldt-arbeidstaker/sykepenger/inntekter-som-innga%CC%8Ar-i-beregning-av-ma%CC%8Anedsinntekten) er det også viktig å være klar over.\n' +
      '##-\n'
  },

  LOGGETUTADVARSEL_INFO: {
    en: '',
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
    en: '',
    nb: `Har du tidligere søkt om refusjon for [tapt arbeidsinntekt på grunn av innreiseforbudet]({{ path }})
    kan du finne tilbake til dem nedenfor`
  },

  KRAVLISTE_TITLE: {
    en: '',
    nb: 'Oversikt over tidligere innsendte krav'
  },

  GRUNNBELOEP: { en: '', nb: 'folketrygdens grunnbeløp.' },
  SKJEMA_LEGEND: { en: '', nb: 'Oppgi ansatte, fraværsperiode og beløp' },

  NUMBER: {
    en: '',
    nb: 'Nr.'
  },
  FNR_LABEL: {
    en: '',
    nb: 'Fødsels-/D-nummer'
  },
  FNR_PLACEHOLDER: {
    en: '',
    nb: '11 siffer'
  },

  LAND_LABEL: {
    en: '',
    nb: 'Bostedsland'
  },

  SLETT_LABEL: {
    en: '',
    nb: 'Slett'
  },

  DATO_PLACEHOLDER: {
    en: '',
    nb: 'dd.mm.åå'
  },

  FRA_HJELPE_LABEL: {
    en: '',
    nb: 'Fra'
  },

  FRA_HJELPE_CONTENT: {
    en: '',
    nb: 'Velg første dag arbeidstakeren din var forhindret fra å møte på jobb på grunn av innreiseforbudet'
  },

  TIL_HJELPE_LABEL: {
    en: '',
    nb: 'Til'
  },

  TIL_HJELPE_CONTENT: {
    en: '',
    nb: 'Siste dag i den perioden du krever refusjon for.'
  },

  BELOEP_PLACEHOLDER: {
    en: '',
    nb: 'Beløp'
  },

  BEREGNET_INNTEKT: {
    en: '',
    nb: 'Beregnet månedsinntekt'
  },

  BEREGNING_INNTEKT: {
    en: '',
    nb: 'Beregning av månedsinntekt'
  },

  BELOEP_HJELPE_INFO: {
    en: '',
    nb:
      '-## ' +
      '-- Legg alltid inntekten i månedene oktober, november, desember 2020 når du skal fastsette beregningsperioden. Dette er et unntak fra hovedregelen.\n' +
      '-- Ut over dette gjelder [samme beregningsregler som for sykepenger.](https://www.nav.no/no/bedrift/tjenester-og-skjemaer/nav-og-altinn-tjenester/inntektsmelding/beregningsregler-for-sykepenger)\n' +
      '-- Hvilke [inntekter som kan tas med i beregningen](https://www.nav.no/no/bedrift/oppfolging/sykmeldt-arbeidstaker/sykepenger/inntekter-som-innga%CC%8Ar-i-beregning-av-ma%CC%8Anedsinntekten) er det også viktig å være klar over.\n' +
      '##-\n'
  },

  CLOSE: {
    en: '',
    nb: 'Lukk dette vinduet'
  },

  HELP: {
    en: '',
    nb: 'Hjelp'
  },

  ADD: {
    en: '',
    nb: 'Legg til enda en ansatt'
  },

  BEKREFT_LABEL: {
    en: '',
    nb:
      'Jeg bekrefter at jeg har satt meg inn i reglene, og at opplysningene jeg har gitt, er riktige og fullstendige. ' +
      'Jeg vet at NAV kan trekke tilbake retten til å få dekket lønnsutgiftene ved feil eller mangelfulle opplysninger, ' +
      'og at NAV kan gjøre kontroller i ettertid for å hindre misbruk av ordningen.'
  },

  BEKREFT_OPPLYSNINGER: {
    en: '',
    nb:
      'Jeg har utbetalt lønn til de ansatte jeg søker om refusjon for ovenfor.' +
      '\nHver enkelt ansatt taper inntekt fordi de ikke kan møte på jobb på grunn av innreiseforbudet. ' +
      '[Reglene som gjelder for kompensasjon ved innreiseforbudet.](https://www.nav.no/no/bedrift/refusjon-ved-innreiseforbud-under-pandemien)'
  },

  SEND: {
    en: '',
    nb: 'Send krav om refusjon'
  },

  ORGNR_MISSSING: { en: '', nb: 'Mangler virksomhetsnummer' },
  ORGNR_INVALID: { en: '', nb: 'Ugyldig virksomhetsnummer' },
  AMOUNT_MISSING: { en: '', nb: 'Mangler beløp' },
  AMOUNT_NOT_NUMERIC: { en: '', nb: 'Oppgi beløp med kun tall med maks to tall etter komma' },
  AMOUNT_TOO_HIGH: { en: '', nb: 'For høyt beløp' },
  DAY_MISSING: { en: '', nb: 'Mangler antall' },
  DAY_DIGITS_ONLY: { en: '', nb: 'Bruk kun tall' },
  DAY_TOO_HIGH: { en: '', nb: 'For høy verdi' },
  DAY_INVALID: { en: '', nb: 'Antall refusjonsdager kan ikke være flere enn dagene i perioden' },
  FNR_MISSING: { en: '', nb: 'Mangler fødselsnummer' },
  FNR_INVALID: { en: '', nb: 'Ugyldig fødselsnummer' },
  FOM_MISSING: { en: '', nb: 'Mangler fra dato' },
  FOM_INVALID: { en: '', nb: 'Dato kan bare være fra og med $value' },
  FOM_ERROR: { en: '', nb: 'Feil dato' },
  TIL_MISSING: { en: '', nb: 'Mangler til dato' },
  TIL_INVALID: { en: '', nb: 'Dato kan bare være fra og med $value' },
  TIL_ERROR: { en: '', nb: 'Feil dato' },
  TIL_TOO_EARLY: { en: '', nb: 'Til dato kan ikke være før fra dato' },
  COUNTRY_MISSING: { en: '', nb: 'Mangler land' },
  COUNTRY_INVALID: { en: '', nb: 'Land ikke gyldig' },

  BEKREFT: { en: '', nb: 'Bekreft at opplysningene er korrekt' },

  BEREGNET_REFUSJON: {
    en: '',
    nb: 'Foreløpig beregnet refusjon'
  },

  BEREGNET_REFUSJON_INFO: {
    en: '',
    nb:
      'Denne beregningen tar _ikke_ høyde for andre utbetalinger den ansatte eventuelt får fra NAV, for eksempel ' +
      'graderte sykepenger. Utbetalinger du allerede får refusjon for, vil derfor bli trukket fra beløpet du nå søker om.'
  },

  FEILOPPSUMERING: {
    en: '',
    nb: 'For å gå videre må du rette opp følgende:'
  },

  REFUSJONSKRAV: {
    en: '',
    nb: 'Refusjonskrav ved innreiseforbud'
  },

  PAGE_NOT_FOUND_TITLE: {
    en: '',
    nb: 'Siden finnes ikke'
  },
  PAGE_NOT_FOUND_DESCRIPTION: {
    en: '',
    nb: 'Siden finnes ikke. [/nb/innsending](Gå til skjema for innsending)'
  },

  SLETT_KRAV_LABEL: {
    en: '',
    nb: 'Er du sikker på at du vil slette kravet?'
  },
  INGENTILGANGADVARSEL: {
    en: '',
    nb:
      'Du har ikke rettigheter til å søke om refusjon for noen bedrifter\n' +
      'Tildeling av roller foregår i Altinn\n' +
      '[https://arbeidsgiver.nav.no/min-side-arbeidsgiver/informasjon-om-tilgangsstyring](Les mer om roller og tilganger)'
  },

  ID_NUMBER: {
    en: '',
    nb: 'Fødsels-/D-nummer'
  },

  BOSTEDLAND: {
    en: '',
    nb: 'Bostedsland'
  },

  SLETT_KRAV_CONFIRM: {
    en: '',
    nb: 'Ja - slett kravet'
  },

  CANCEL: {
    en: '',
    nb: 'Avbryt'
  },

  TILBAKE: {
    en: '',
    nb: 'Tilbake til liste'
  },

  KRAV_MOTTATT: {
    en: '',
    nb: 'Krav mottatt'
  },

  KVITTERING_TITTEL: {
    en: '',
    nb: 'Kravet er mottatt'
  },

  PERIODE: {
    en: '',
    nb: 'Periode'
  },

  SLETTET_KRAV_KVITTERING_TITTEL: {
    en: '',
    nb: 'Kravet er slettet'
  },

  KRAV_NY: {
    en: '',
    nb: 'Her kan du sende inn nytt krav for denne arbeidstakeren om du vil.'
  },

  LOGG_UT: {
    en: '',
    nb: 'Logg ut'
  },

  MIN_SIDE: {
    en: '',
    nb: 'Min side arbeidsgiver'
  },

  KVITTERING_INFO: {
    en: '',
    nb:
      'En kvittering er sendt til meldingsboksen deres i [Altinn](https://www.altinn.no). ' +
      'Trenger du å kontakte oss, er det tilstrekkelig å oppgi fødselsnummeret til den ansatte.'
  },

  LOGGET_UT: {
    en: '',
    nb: 'Du er blitt logget ut, følg instruksjonene for ikke å miste data'
  },

  RETURNER: {
    en: '',
    nb: 'Returner til dette vinduet.'
  },

  LOGGET_INN: {
    en: '',
    nb: 'Jeg har logget inn på nytt - lukk dette vinduet'
  },

  SERVER_FEIL_ADVARSEL_TEXT: {
    en: '',
    nb:
      '_Det har desverre oppstått en teknisk feil hos oss_\n\n' +
      'Prøv igjen litt senere, og [kontakt oss gjerne dersom det ikke ordner seg.](https://arbeidsgiver.nav.no/kontakt-oss/)'
  },

  SOEKNADSSKJEMA: {
    en: '',
    nb: 'SØKNADSSKJEMA'
  },

  ERROR_GENERIC: {
    en: '',
    nb: 'Det oppstod en feil'
  },

  ERROR_LOGIN: {
    en: '',
    nb: 'Vi klarte ikke logge deg inn. Vennligst prøv igjen senere.'
  },

  LOGIN: {
    en: '',
    nb: 'Innlogging'
  },

  LOGIN_RENEWED: {
    en: '',
    nb: 'Innloggingen er fornyet'
  },

  LOGIN_RENEWED_INFO: {
    en: '',
    nb: 'Du har nå fornyet innloggingen med en time.\n' + 'Dette vinduet kan nå lukkes.'
  },

  OVERSIKTKRAV_TITLE: {
    en: '',
    nb: 'Refusjon for kompensasjon ved innreiseforbud'
  },

  OVERSIKTKRAV_SUBTITLE: {
    en: '',
    nb: 'Refusjoner'
  },

  FEILOPPSUMMERING_ROW: {
    en: '',
    nb: 'Rad {{ index }}: {{ error }}'
  },

  KRAV_SAMMENDRAG_DELETE: {
    en: '',
    nb: 'Slett'
  },

  TILGANGSFEILSIDE: {
    en: '',
    nb: 'Du har ikke tilgang'
  },

  SERVER_FEIL_ADVARSEL_HIDE: {
    en: '',
    nb: 'Skjul denne meldingen.'
  },

  TOKEN_FORNYET: {
    en: '',
    nb: 'Token er fornyet'
  }
};

export default LanguageBundle;
