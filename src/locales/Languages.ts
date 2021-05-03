import Key from './Key';
import Locale from './Locale';

const Languages: Record<Key, Locale> = {
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

    MAANEDSINNTEKTHJELPELABEL_INFO: {
      nb:
        '-## ' +
        '-- Tidspunktet for beregning er 29. januar 2021. Dette betyr at det er inntekter i månedene oktober, november, desember 2020 som skal legges til grunn når du gjør beregningen.\n' +
        '-- Ut over særtilfellet nevnt ovenfor gjelder [samme beregningsregler som for sykepenger.](https://www.nav.no/no/bedrift/tjenester-og-skjemaer/nav-og-altinn-tjenester/inntektsmelding/beregningsregler-for-sykepenger\)\n' +
        '-- Hvilke [inntekter som kan tas med i beregningen](https://www.nav.no/no/bedrift/oppfolging/sykmeldt-arbeidstaker/sykepenger/inntekter-som-innga%CC%8Ar-i-beregning-av-ma%CC%8Anedsinntekten\) er det også viktig å være klar over.'
    },


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

    BEREGNET_INNTEKT: {
      nb: 'Beregnet månedsinntekt'
    },

    BEREGNING_INNTEKT: {
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
  },

  BEREGNET_REFUSJON: {
    nb: 'Foreløpig beregnet refusjon'
  },

  FEILOPPSUMERING: {
    nb: 'For å gå videre må du rette opp følgende:'
  },

  INGEN_TILGANG: {
    nb: 'Du har ikke rettigheter til å søke om refusjon for noen bedrifter \nTildeling av roller foregår i Altinn'
  },

  ROLLER_OG_TILGANGER: {
    nb: 'Les mer om roller og tilganger.'
  },

  TIDLIGERE_SØKT: {
    nb: 'Har du tidligere søkt om refusjon for '
  },

  TABT_ARBEIDSINNTEKT: {
    nb: 'tapt arbeidsinntekt på grunn av innreiseforbudet'
  },

  FINN_NEDENFOR: {
    nb: ', kan du finne tilbake til dem nedenfor.'
  },

  REFUSJONSKRAV: {
    nb: 'Refusjonskrav ved innreiseforbud'
  },

  SLETT_KRAV_LABEL: {
    nb: 'Er du sikker på at du vil slette kravet?'
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

  KRAVET_ER_MOTTATT: {
    nb: 'Kravet er mottatt'
  },

  PERIODE: {
    nb: 'Periode'
  },

  KRAV_SLETTET: {
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

  KVITTERING_SENDT: {
    nb: 'En kvittering er sendt til meldingsboksen deres i '
  },

  KONTAKT: {
    nb: 'Trenger du å kontakte oss, er det tilstrekkelig å oppgi fødselsnummeret til den ansatte.'
  },

  LOGGET_UT: {
    nb: 'Du er blitt logget ut, følg instruksjonene for ikke å miste data'
  },

  IKKE_LUKK: {
    nb: 'Ikke lukk dette vinduet'
  },

  ID_PORTEN_ÅBNE: {
    nb: 'Åpne ID-Porten (innlogging) i nytt vindu ved å klikke på denne lenken.'
  },

  ID_PORTEN_LOGG_INN: {
    nb: 'Logg inn på nytt i ID-porten.'
  },

  RETURNER: {
    nb: 'Returner til dette vinduet.'
  },

  LUKK_OG_SEND: {
    nb: 'Lukk denne meldingen og klikk igjen på knappen “Send søknad om refusjon”'
  },

  LOGGET_INN: {
    nb: 'Jeg har logget inn på nytt - lukk dette vinduet'
  },

  BEREGNING_DATO: {
    nb:
      'Tidspunktet for beregning er 29. januar 2021. Dette betyr at det er inntekter i månedene oktober, november, desember 2020 som skal legges til grunn når du gjør beregningen.'
  },

  SAERTILFELLE: {
    nb: 'Ut over særtilfellet nevnt ovenfor gjelder '
  },

  SAMME_REGLER: {
    nb: 'samme beregningsregler som for sykepenger.'
  },
};

export default Languages;
