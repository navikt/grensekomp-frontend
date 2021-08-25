import { RequestMock, Selector } from 'testcafe';
import { waitForReact, ReactSelector } from 'testcafe-react-selectors';
import { mockHeaders } from '@smartive/testcafe-utils';
import { screen } from '@testing-library/testcafe';

import arbeidsgiverRespons from './mocks/arbeidsgivere';

const arbeidsgiverAPI = new RegExp(/\/api\/v1\/arbeidsgivere/);
const cookiePlease = new RegExp(/\/local\/cookie-please/);
const loginExpiry = new RegExp(/\/api\/v1\/login-expiry/);
const navAuth = new RegExp(/\/person\/innloggingsstatus\/auth/);
const grunnBeloep = new RegExp(/\/api\/v1\/grunnbeloep/);
const innsendingAPI = new RegExp(/\/api\/v1\/refusjonskrav\/list/);

const headereJson = {
  'content-type': 'application/json; charset=UTF-8',
  'access-control-allow-origin': 'http://localhost:3000',
  'access-control-allow-credentials': 'true',
  'strict-transport-security': 'max-age=15724800; includeSubDomains'
};

const headereJsonUnauthorized = {
  'content-type': 'application/json; charset=UTF-8',
  'access-control-allow-origin': '*'
};

const headereText = Object.apply({}, headereJson);

headereText['content-type'] = 'text/html; charset=UTF-8';

const grunnBeloepVerdier = {
  dato: '2021-05-01',
  grunnbeloep: 106399,
  grunnbeloepPerMaaned: 8867,
  gjennomsnittPerAar: 104716,
  omregningsfaktor: 1.049807
};

const cookieMock = RequestMock()
  .onRequestTo(loginExpiry)
  .respond('"2025-08-02T10:51:34.000+00:00"', 200, headereJson)
  .onRequestTo(cookiePlease)
  .respond(
    "<script>window.location.href='http://localhost:3000/grensekomp/nb/innsending/?bedrift=810007842?loggedIn=true';</script>",
    200,
    headereText
  )
  .onRequestTo(arbeidsgiverAPI)
  .respond(arbeidsgiverRespons, 200, headereJson)
  .onRequestTo(navAuth)
  .respond(null, 200, headereJson)
  .onRequestTo(grunnBeloep)
  .respond(grunnBeloepVerdier, 200, mockHeaders)
  .onRequestTo(innsendingAPI)
  .respond(null, 201, mockHeaders);

fixture`Innsending`.page`http://localhost:3000/grensekomp/nb/innsending/?bedrift=810007842&TestCafe=running`
  .requestHooks(cookieMock)
  .beforeEach(async () => {
    await waitForReact();
  });

test('Klikk submit uten data, fjern feilmeldinger en etter en og send inn', async (t) => {
  await t
    // .click(ReactSelector('BekreftOpplysningerPanel').find('input'))
    .click(ReactSelector('Hovedknapp'))
    .expect(
      ReactSelector('Feiloppsummering')
        .withText('Rad 1: Mangler ID-nummer')
        .withText('Rad 1: Mangler land')
        .withText('Rad 1: Mangler fra dato')
        .withText('Rad 1: Mangler til dato')
        .withText('Rad 1: Mangler beløp')
        .withText('Bekreft at opplysningene er korrekt').visible
    )
    .ok()
    .expect(Selector('html').find('.bulk-innsending__rad').textContent)
    .contains('Mangler ID-nummer')
    .expect(Selector('html').find('.bulk-innsending__rad').textContent)
    .contains('Mangler land')
    .expect(Selector('html').find('.bulk-innsending__rad').textContent)
    .contains('Mangler fra dato')
    .expect(Selector('html').find('.bulk-innsending__rad').textContent)
    .contains('Mangler til dato')
    .expect(Selector('html').find('.bulk-innsending__rad').textContent)
    .contains('Mangler beløp')
    .expect(Selector('html').find('.bekreftCheckboksPanel--error').textContent)
    .contains('Bekreft at opplysningene er korrekt');

  await t
    .click(ReactSelector('BekreftOpplysningerPanel').find('input'))
    .expect(
      ReactSelector('Feiloppsummering')
        .withText('Rad 1: Mangler ID-nummer')
        .withText('Rad 1: Mangler land')
        .withText('Rad 1: Mangler fra dato')
        .withText('Rad 1: Mangler til dato')
        .withText('Rad 1: Mangler beløp').visible
    )
    .ok()
    .expect(ReactSelector('Feiloppsummering').withText('Bekreft at opplysningene er korrekt').visible)
    .notOk()
    .expect(Selector('html').find('.bulk-innsending__rad').textContent)
    .contains('Mangler ID-nummer')
    .expect(Selector('html').find('.bulk-innsending__rad').textContent)
    .contains('Mangler land')
    .expect(Selector('html').find('.bulk-innsending__rad').textContent)
    .contains('Mangler fra dato')
    .expect(Selector('html').find('.bulk-innsending__rad').textContent)
    .contains('Mangler til dato')
    .expect(Selector('html').find('.bulk-innsending__rad').textContent)
    .contains('Mangler beløp')
    .expect(Selector('html').find('.bekreftCheckboksPanel--error').exists)
    .notOk();

  const fnr = ReactSelector('Fnr');

  await t
    .typeText(fnr, '260')
    .expect(
      ReactSelector('Feiloppsummering')
        .withText('Rad 1: Ugyldig ID-nummer')
        .withText('Rad 1: Mangler land')
        .withText('Rad 1: Mangler fra dato')
        .withText('Rad 1: Mangler til dato')
        .withText('Rad 1: Mangler beløp').visible
    )
    .ok()
    .expect(Selector('html').textContent)
    .contains('Ugyldig ID-nummer')
    .expect(Selector('html').textContent)
    .notContains('Mangler ID-nummer');

  await t
    .click(fnr)
    .pressKey('ctrl+a delete')
    .typeText(fnr, '20125027610')
    .expect(Selector('html').find('.bulk-innsending__rad').textContent)
    .notContains('Ugyldig ID-nummer')
    .expect(Selector('html').find('.bulk-innsending__rad').textContent)
    .notContains('Mangler ID-nummer');

  const belop = screen.getByPlaceholderText('Beløp');
  await t
    .typeText(belop, '5000')
    .expect(Selector('html').textContent)
    .notContains('Mangler beløp')
    .expect(
      ReactSelector('Feiloppsummering')
        .withText('Rad 1: Mangler land')
        .withText('Rad 1: Mangler fra dato')
        .withText('Rad 1: Mangler til dato').visible
    )
    .ok()
    .expect(ReactSelector('Feiloppsummering').withText('Rad 1: Mangler beløp').visible)
    .notOk();

  const landVelger = ReactSelector('Bostedland');
  const landVelgerOption = landVelger.find('option');

  await t
    .click(landVelger)
    .click(landVelgerOption.withText('Italia'))
    .expect(Selector('html').textContent)
    .notContains('Mangler land');

  const fraDato = screen.getByLabelText(/Fra/);
  const valgtFraDato = Selector('.flatpickr-calendar.open .dayContainer .flatpickr-day:nth-child(3)');

  const tilDato = screen.getByLabelText(/Til/);
  const valgtTilDato = Selector('.flatpickr-calendar.open .dayContainer .flatpickr-day:nth-child(13)');

  await t
    .click(Selector('#fom_1'))
    .click(valgtFraDato)
    .expect(Selector('html').textContent)
    .notContains('Mangler fra dato');

  await t
    .click(Selector('#tom_1'))
    .click(valgtTilDato)
    .expect(Selector('html').textContent)
    .notContains('Mangler til dato')
    .expect(Selector('html').textContent)
    .contains('1296.00');

  await t.click(ReactSelector('Hovedknapp')).expect(Selector('html').textContent).contains('Kravet er mottatt');
});

test('Legg til og fjern perioder', async (t) => {
  await t.click(ReactSelector('LeggTilKnapp')).expect(ReactSelector('Bostedland').count).eql(2);

  await t.scrollBy(0, 200).click(ReactSelector('Slettknapp')).expect(ReactSelector('Bostedland').count).eql(1);
});
