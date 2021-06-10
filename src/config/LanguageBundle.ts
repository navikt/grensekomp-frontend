import { Locale } from '@navikt/helse-arbeidsgiver-felles-frontend';
import LangKey from '../language/LangKey';

const LanguageBundle: Record<LangKey, Locale> = {
  SIDETITTEL: {
    nb: 'Refusjon for kompensasjon ved innreiseforbud',
    en: 'Entry ban - reimbursement for compensation'
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
      '##-\n',
    en:
      'Employers are required to pay compensation to employees who are losing income because they cannot get to work as a ' +
      'result of the current restrictions on entry into Norway in connection with the pandemic. The employer must pay this ' +
      'compensation in advance and then claim reimbursement from NAV.' +
      '\n\n' +
      'All fields must be completed. You can submit up to _50 claims at a time_. If you are applying for _several periods_ for ' +
      'the same person, select «Add another employee», use the same fnr/dnr, and enter a new period.' +
      '-##\n' +
      '-- The scheme applies to employees who were employed and had started work at 29 January when the ban on entry into Norway was introduced.\n' +
      '-- The employee must have been working for at least four weeks before the day from which you are claiming reimbursement.\n' +
      '-- Compensation is only given for days that the employee ought actually to have worked.\n' +
      '-- If the employer is aware that the employee has had income from another job, no compensation shall be given for days ' +
      'on which the employee has had other income. The same applies to benefits from the country of residence if the employer ' +
      'is aware of it.\n' +
      '-- Holiday days that were taken can be converted into working days for which reimbursement will be granted.\n' +
      '-- The compensation amounts to 70% of the basis for calculation of sickness benefit, limited upwards to 70% of 6 x [the National Insurance basic amount (“G”).](https://www.nav.no/no/nav-og-samfunn/kontakt-nav/utbetalinger/grunnbelopet-i-folketrygden)\n' +
      '-- [The application will be processed automatically.](https://www.nav.no/en/home/employers/automated-case-processing-in-connection-with-entry-ban)\n' +
      '##-\n'
  },

  LOGGETUTADVARSEL_INFO: {
    nb:
      '-## ' +
      '-- Ikke lukk dette vinduet\n' +
      '-- [Åpne ID-Porten (innlogging) i nytt vindu ved å klikke på denne lenken.]({{ innloggingUrl }})\n' +
      '-- Logg inn på nytt i ID-porten.\n' +
      '-- Returner til dette vinduet.\n' +
      '-- Lukk denne meldingen og klikk igjen på knappen "Send krav om refusjon".\n' +
      '##-\n',
    en:
      '-## ' +
      "-- Don't close this window\n" +
      '-- [Open ID-Porten (to log in) in a new window by clicking this link.]({{ innloggingUrl }})\n' +
      '-- Log in again in ID-porten.\n' +
      '-- Return to this window.\n' +
      '-- Close this message and click again on the button "Submit claim for reimbursement".\n' +
      '##-\n'
  },

  KRAVLISTE_INFO: {
    nb:
      'Har du tidligere søkt om refusjon for [tapt arbeidsinntekt på grunn av innreiseforbudet]({{ path }}) ' +
      'kan du finne tilbake til dem nedenfor',
    en:
      'If you previously applied for [lost earnings due to the entry ban]({{ path }}) ' + 'you can return to them below'
  },

  KRAVLISTE_TITLE: {
    nb: 'Oversikt over tidligere innsendte krav',
    en: 'Overview of previously submitted claims'
  },

  BULKINNSENDING_SKJEMA_OVERSKRIFT: {
    nb: 'Oppgi ansatte, fraværsperiode og beløp',
    en: 'Enter employees, period of absence and amount'
  },

  BULKINNSENDING_SKJEMA_OVERSKRIFT_REINNSENDING: {
    nb: 'Send inn nytt krav',
    en: 'Submit new claim'
  },

  BULKINNSENDING_INFO_REINNSENDING: {
    nb:
      'Arbeidsgivere er pålagt å utbetale kompensasjon til ansatte som taper inntekt fordi de ikke kan møte på arbeid ' +
      'som følge av innreiseforbudet under pandemien. Arbeidsgiveren forskutterer kompensasjonen og krever refusjon fra ' +
      'NAV.' +
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
      '##-\n',
    en:
      'Employers are required to pay compensation to employees who are losing income because they cannot get to work as a ' +
      'result of the current restrictions on entry into Norway in connection with the pandemic. The employer must pay this ' +
      'compensation in advance and then claim reimbursement from NAV.' +
      '-##\n' +
      '-- The scheme applies to employees who were employed and had started work at 29 January when the ban on entry into Norway was introduced.\n' +
      '-- The employee must have been working for at least four weeks before the day from which you are claiming reimbursement.\n' +
      '-- Compensation is only given for days that the employee ought actually to have worked.\n' +
      '-- If the employer is aware that the employee has had income from another job, no compensation shall be given for days ' +
      'on which the employee has had other income. The same applies to benefits from the country of residence if the employer ' +
      'is aware of it.\n' +
      '-- Holiday days that were taken can be converted into working days for which reimbursement will be granted.\n' +
      '-- The compensation amounts to 70% of the basis for calculation of sickness benefit, limited upwards to 70% of 6 x [the National Insurance basic amount (“G”).](https://www.nav.no/no/nav-og-samfunn/kontakt-nav/utbetalinger/grunnbelopet-i-folketrygden)\n' +
      '-- [The application will be processed automatically.](https://www.nav.no/no/person/arbeid/sykmeldt-arbeidsavklaringspenger-og-yrkesskade/nyheter/kompensasjon-til-utestengte-eos-borgere/automatisert-saksbehandling-i-forbindelse-med-innreiseforbudet)\n' +
      '##-\n'
  },

  NUMBER: {
    nb: 'Nr.',
    en: 'No.'
  },

  FNR_LABEL: {
    nb: 'Fødsels-/D-nummer',
    en: 'National identity number/D-number'
  },

  FNR_PLACEHOLDER: {
    nb: '11 siffer',
    en: '11 numbers'
  },

  LAND_LABEL: {
    nb: 'Bostedsland',
    en: 'Country of residence'
  },

  SLETT_LABEL: {
    nb: 'Slett',
    en: 'Delete'
  },

  DATO_PLACEHOLDER: {
    nb: 'dd.mm.åå',
    en: 'dd.mm.yy'
  },

  FRA_HJELPE_LABEL: {
    nb: 'Fra',
    en: 'From'
  },

  FRA_HJELPE_CONTENT: {
    nb: 'Velg første dag arbeidstakeren din var forhindret fra å møte på jobb på grunn av innreiseforbudet ',
    en: 'Select the first day your employee was prevented from coming to work due to the entry ban'
  },

  TIL_HJELPE_LABEL: {
    nb: 'Til',
    en: 'To'
  },

  TIL_HJELPE_CONTENT: {
    nb: 'Siste dag i den perioden du krever refusjon for.',
    en: 'Last day of the period for which you are claiming reimbursement.'
  },

  BELOEP_PLACEHOLDER: {
    nb: 'Beløp',
    en: 'Amount'
  },

  BEREGNET_INNTEKT: {
    nb: 'Beregnet månedsinntekt',
    en: 'Calculated monthly income'
  },

  BEREGNING_INNTEKT: {
    nb: 'Beregning av månedsinntekt',
    en: 'Calculation of monthly income'
  },

  BELOEP_HJELPE_INFO: {
    nb:
      '-## ' +
      '-- Legg alltid inntekten i månedene oktober, november, desember 2020 når du skal fastsette beregningsperioden. Dette er et unntak fra hovedregelen.\n' +
      '-- Ut over dette gjelder [samme beregningsregler som for sykepenger](https://www.nav.no/no/bedrift/tjenester-og-skjemaer/nav-og-altinn-tjenester/inntektsmelding/beregningsregler-for-sykepenger).\n' +
      '-- Hvilke [inntekter som kan tas med i beregningen](https://www.nav.no/no/bedrift/oppfolging/sykmeldt-arbeidstaker/sykepenger/inntekter-som-innga%CC%8Ar-i-beregning-av-ma%CC%8Anedsinntekten) er det også viktig å være klar over.\n' +
      '##-\n',
    en:
      '-## ' +
      '-- Always use the income in the months October, November, December 2020 as a basis when you make the calculation. When you are going to determine ' +
      'the calculation period. This is an exception to the main rule.\n' +
      '-- Apart from this, the [same calculation rules apply as for calculation of sickness benefit](https://www.nav.no/no/bedrift/tjenester-og-skjemaer/nav-og-altinn-tjenester/inntektsmelding/beregningsregler-for-sykepenger).\n' +
      '-- It is also important to be aware of which [income to include in the calculation](https://www.nav.no/no/bedrift/oppfolging/sykmeldt-arbeidstaker/sykepenger/inntekter-som-innga%CC%8Ar-i-beregning-av-ma%CC%8Anedsinntekten).\n' +
      '##-\n'
  },

  CLOSE: {
    nb: 'Lukk dette vinduet',
    en: 'Close this window'
  },

  HELP: {
    nb: 'Hjelp',
    en: 'Help'
  },

  ADD: {
    nb: 'Legg til enda en ansatt',
    en: 'Add another employee'
  },

  BEKREFTOPPLYSNINGER_BEKREFT_LABEL: {
    nb:
      'Jeg bekrefter at jeg har satt meg inn i reglene, og at opplysningene jeg har gitt, er riktige og fullstendige. ' +
      'Jeg vet at NAV kan trekke tilbake retten til å få dekket lønnsutgiftene ved feil eller mangelfulle opplysninger, ' +
      'og at NAV kan gjøre kontroller i ettertid for å hindre misbruk av ordningen.',
    en:
      'I hereby confirm that I have read and understood the rules and that the information I have provided is correct ' +
      'and complete. I know that NAV can withdraw my right to have my payroll expenses reimbursed in the event of incorrect ' +
      'or incomplete information, and that NAV may verify the information afterwards to prevent misuse of the scheme.'
  },

  BEKREFTOPPLYSNINGER_BEKREFT_OPPLYSNINGER: {
    nb:
      'Jeg har utbetalt lønn til de ansatte jeg søker om refusjon for ovenfor.\n' +
      'Hver enkelt ansatt taper inntekt fordi de ikke kan møte på jobb på grunn av innreiseforbudet. ' +
      '[Reglene som gjelder for kompensasjon ved innreiseforbudet.](https://www.nav.no/no/bedrift/refusjon-ved-innreiseforbud-under-pandemien)',
    en:
      'I have paid the employees listed above for whom I am applying for reimbursement.\n' +
      'Each individual employee is losing money because they cannot show up for work due to the entry ban.' +
      '[The rules for compensation in connection with the entry ban.](https://www.nav.no/en/home/benefits-and-services/entry-ban-during-the-pandemic--compensation-for-lost-income/entry-ban-during-the-pandemic-reimbursement-for-compensation)'
  },

  SEND: {
    nb: 'Send krav om refusjon',
    en: 'Submit claim for reimbursement'
  },

  ORGNR_MISSSING: {
    nb: 'Mangler virksomhetsnummer',
    en: 'Missing business number'
  },

  ORGNR_INVALID: {
    nb: 'Ugyldig virksomhetsnummer',
    en: 'Invalid business number'
  },

  AMOUNT_MISSING: {
    nb: 'Mangler beløp',
    en: 'Missing amount'
  },

  AMOUNT_NOT_NUMERIC: {
    nb: 'Oppgi beløp med kun tall med maks to tall etter komma',
    en: 'Enter amounts with only numbers with a maximum of two numbers after the comma'
  },

  AMOUNT_TOO_HIGH: {
    nb: 'For høyt beløp',
    en: 'Amount too high'
  },

  DAY_MISSING: {
    nb: 'Mangler antall',
    en: 'Missing number'
  },

  DAY_DIGITS_ONLY: {
    nb: 'Bruk kun tall',
    en: 'Only use numbers'
  },

  DAY_TOO_HIGH: {
    nb: 'For høy verdi',
    en: 'Value too high'
  },

  DAY_INVALID: {
    nb: 'Antall refusjonsdager kan ikke være flere enn dagene i perioden',
    en: 'The number of refund days can not be more than the days in the period'
  },

  FNR_MISSING: {
    nb: 'Mangler ID-nummer',
    en: 'Missing ID-number'
  },

  FNR_INVALID: {
    nb: 'Ugyldig ID-nummer',
    en: 'Invalid ID-number'
  },

  FOM_MISSING: {
    nb: 'Mangler fra dato',
    en: 'Missing from date'
  },

  FOM_INVALID: {
    nb: 'Dato kan bare være fra og med $value',
    en: 'Date can only be from $value'
  },

  FOM_ERROR: {
    nb: 'Feil dato',
    en: 'Incorrect date'
  },

  TIL_MISSING: {
    nb: 'Mangler til dato',
    en: 'Missing to date'
  },

  TIL_INVALID: {
    nb: 'Dato kan bare være fra og med $value',
    en: 'Date can only be from $value'
  },

  TIL_ERROR: {
    nb: 'Feil dato',
    en: 'Incorrect date'
  },

  TIL_TOO_EARLY: {
    nb: 'Til dato kan ikke være før fra dato',
    en: 'To date can not be before from date'
  },

  COUNTRY_MISSING: {
    nb: 'Mangler land',
    en: 'Missing country'
  },

  COUNTRY_INVALID: {
    nb: 'Land ikke gyldig',
    en: 'Country not valid'
  },

  BEKREFT: {
    nb: 'Bekreft at opplysningene er korrekt',
    en: 'Confirm that the information is correct'
  },

  BEREGNET_REFUSJON: {
    nb: 'Foreløpig beregnet refusjon',
    en: 'Preliminary estimated refund'
  },

  BEREGNET_REFUSJON_INFO: {
    nb:
      'Denne beregningen tar _ikke_ høyde for andre utbetalinger den ansatte eventuelt får fra NAV, for eksempel ' +
      'graderte sykepenger. Utbetalinger du allerede får refusjon for, vil derfor bli trukket fra beløpet du nå søker om.',
    en:
      'This calculation _does not_ take into account other payments the employee may receive from NAV, such as graded ' +
      'sickness benefits. Payments for which you are already reimbursed will therefore be deducted from the amount you are currently applying for.'
  },

  FEILOPPSUMERING: {
    nb: 'For å gå videre må du rette opp følgende:',
    en: 'To proceed, you must correct the following:'
  },

  REFUSJONSKRAV: {
    nb: 'Refusjonskrav ved innreiseforbud',
    en: 'Reimbursement claim in case of entry ban'
  },

  PAGE_NOT_FOUND_TITLE: {
    nb: 'Siden finnes ikke',
    en: 'Page not found'
  },
  PAGE_NOT_FOUND_DESCRIPTION: {
    nb: 'Siden finnes ikke. [/nb/innsending](Gå til skjema for innsending)',
    en: 'Page not found. [/en/innsending](Go back to form for submitting)'
  },

  SLETT_KRAV_LABEL: {
    nb: 'Er du sikker på at du vil slette kravet?',
    en: 'Are you sure you want to delete the claim?'
  },
  INGENTILGANGADVARSEL: {
    nb:
      'Du har ikke rettigheter til å søke om refusjon for noen bedrifter\n' +
      'Tildeling av roller foregår i Altinn\n' +
      '[Les mer om roller og tilganger](https://arbeidsgiver.nav.no/min-side-arbeidsgiver/informasjon-om-tilgangsstyring)',
    en:
      'You do not have the rights to apply for reimbursement for any companies\n' +
      'Assignment of roles takes place in Altinn\n' +
      '[Read more about roles and accesses](https://arbeidsgiver.nav.no/min-side-arbeidsgiver/informasjon-om-tilgangsstyring)'
  },

  ID_NUMBER: {
    nb: 'Fødsels-/D-nummer',
    en: 'National identity number/D-number'
  },

  BOSTEDLAND: {
    nb: 'Bostedsland',
    en: 'Country of residence'
  },

  SLETT_KRAV_CONFIRM: {
    nb: 'Ja - slett kravet',
    en: 'Yes - delete claim'
  },

  CANCEL: {
    nb: 'Avbryt',
    en: 'Cancel'
  },

  TILBAKE: {
    nb: 'Tilbake til liste',
    en: 'Back to list'
  },

  KRAV_MOTTATT: {
    nb: 'Krav mottatt',
    en: 'Claim received'
  },

  KVITTERING_TITTEL: {
    nb: 'Kravet er mottatt',
    en: 'The claim has been received'
  },

  PERIODE: {
    nb: 'Periode',
    en: 'Period'
  },

  SLETTET_KRAV_KVITTERING_TITTEL: {
    nb: 'Kravet er slettet',
    en: 'The claim has been deleted'
  },

  KRAV_NY: {
    nb: 'Her kan du sende inn nytt krav for denne arbeidstakeren om du vil.',
    en: 'Here you can submit a new claim for this employee if you wish.'
  },

  LOGG_UT: {
    nb: 'Logg ut',
    en: 'Logout'
  },

  MIN_SIDE: {
    nb: 'Min side arbeidsgiver',
    en: 'My page employer'
  },

  KVITTERING_INFO: {
    nb:
      'En kvittering er sendt til meldingsboksen deres i [Altinn](https://www.altinn.no). ' +
      'Trenger du å kontakte oss, er det tilstrekkelig å oppgi fødselsnummeret til den ansatte.',
    en:
      'A receipt has been sent to your message box in [Altinn](https://www.altinn.no). ' +
      "If you need to contact us, it is sufficient to provide the employee's identification number."
  },

  LOGGET_UT: {
    nb: 'Du er blitt logget ut, følg instruksjonene for ikke å miste data',
    en: 'You have been logged out, follow the instructions to not lose data'
  },

  LOGGET_INN: {
    nb: 'Jeg har logget inn på nytt - lukk dette vinduet',
    en: 'I logged in again - close this window'
  },

  SERVER_FEIL_ADVARSEL_TEXT: {
    nb:
      '_Det har desverre oppstått en teknisk feil hos oss_\n\n' +
      'Prøv igjen litt senere, og [kontakt oss gjerne dersom det ikke ordner seg.](https://arbeidsgiver.nav.no/kontakt-oss/)',
    en:
      '_Unfortunately, a technical error has occurred_\n\n' +
      'Please try again later and [feel free to contact us if it does not work out.](https://arbeidsgiver.nav.no/kontakt-oss/)'
  },

  SOEKNADSSKJEMA: {
    nb: 'SØKNADSSKJEMA',
    en: 'APPLICATION FORM'
  },

  ERROR_GENERIC: {
    nb: 'Det oppstod en feil',
    en: 'An error occurred'
  },

  ERROR_LOGIN: {
    nb: 'Vi klarte ikke logge deg inn. Vennligst prøv igjen senere.',
    en: 'We were unable to log you in. Please try again later.'
  },

  LOGIN: {
    nb: 'Innlogging',
    en: 'Login'
  },

  LOGIN_RENEWED: {
    nb: 'Innloggingen er fornyet',
    en: 'Login renewed'
  },

  LOGIN_RENEWED_INFO: {
    nb: 'Du har nå fornyet innloggingen med en time.\n' + 'Dette vinduet kan nå lukkes.',
    en: 'You have now renewed your login by one hour.\n' + 'This window can now be closed.'
  },

  OVERSIKTKRAV_TITLE: {
    nb: 'Refusjon for kompensasjon ved innreiseforbud',
    en: 'Entry ban - reimbursement for compensation'
  },

  OVERSIKTKRAV_SUBTITLE: {
    nb: 'Refusjoner',
    en: 'Reimbursements'
  },

  FEILOPPSUMMERING_ROW: {
    nb: 'Rad {{ index }}: {{ error }}',
    en: 'Row {{ index }}: {{ error }}'
  },

  KRAV_SAMMENDRAG_DELETE: {
    nb: 'Slett',
    en: 'Delete'
  },

  TILGANGSFEILSIDE: {
    nb: 'Du har ikke tilgang',
    en: 'No access'
  },

  SERVER_FEIL_ADVARSEL_HIDE: {
    nb: 'Skjul denne meldingen.',
    en: 'Hide this message.'
  },

  TOKEN_FORNYET: {
    nb: 'Token er fornyet',
    en: 'Token is renewed'
  }
};

export default LanguageBundle;
