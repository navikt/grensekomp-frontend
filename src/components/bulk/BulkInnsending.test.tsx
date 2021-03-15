import React from 'react';
import { render, cleanup, screen } from '@testing-library/react';
import { axe } from 'jest-axe';
import userEvent from '@testing-library/user-event';

import { MemoryRouter } from 'react-router-dom';
import { ArbeidsgiverProvider } from '../../context/arbeidsgiver/ArbeidsgiverContext';
import { Organisasjon } from '@navikt/bedriftsmeny/lib/organisasjon';
import testFnr from '../../mockData/testFnr';
import testOrganisasjon from '../../mockData/testOrganisasjoner';
import BulkInnsending from './BulkInnsending';

const arbeidsgivere: Organisasjon[] = testOrganisasjon;

describe('BulkInnsending', () => {
  it('should have no a11y violations', async () => {
    const { container } = render(
      <MemoryRouter>
        <ArbeidsgiverProvider baseUrl='/base/url'>
          <BulkInnsending />
        </ArbeidsgiverProvider>
      </MemoryRouter>
    );
    const results = await axe(container);

    expect(results).toHaveNoViolations();

    cleanup();
  });

  it('should show warnings when input is missing', () => {
    render(
      <MemoryRouter>
        <ArbeidsgiverProvider arbeidsgivere={arbeidsgivere} status={200} arbeidsgiverId='810007842' baseUrl='/base/url'>
          <BulkInnsending />
        </ArbeidsgiverProvider>
      </MemoryRouter>
    );
    const submitButton = screen.getByText(/Send krav om refusjon/);

    submitButton.click();

    expect(screen.getByText(/Mangler fødselsnummer/)).toBeInTheDocument();
    expect(screen.getByText(/Mangler fra dato/)).toBeInTheDocument();
    expect(screen.getByText(/Mangler til dato/)).toBeInTheDocument();
    expect(screen.getByText(/Mangler beløp/)).toBeInTheDocument();
    expect(screen.getByText(/Mangler dager/)).toBeInTheDocument();
    expect(screen.getAllByText(/Bekreft at opplysningene er korrekt/).length).toBe(2);

    expect(screen.getByText(/Fødselsnummer må fylles ut/)).toBeInTheDocument();
    expect(screen.getByText(/Fra dato må fylles ut/)).toBeInTheDocument();
    expect(screen.getByText(/Til dato må fylles ut/)).toBeInTheDocument();
    expect(screen.getByText(/Beløp må fylles ut/)).toBeInTheDocument();
    expect(screen.getByText(/Antall dager må fylles ut/)).toBeInTheDocument();
  });

  it('should show warnings when input is missing, and the warning should dissapear when fixed', () => {
    render(
      <MemoryRouter>
        <ArbeidsgiverProvider arbeidsgivere={arbeidsgivere} status={200} arbeidsgiverId='810007842' baseUrl='/base/url'>
          <BulkInnsending />
        </ArbeidsgiverProvider>
      </MemoryRouter>
    );
    const submitButton = screen.getByText(/Send krav om refusjon/);
    const fnrInput = screen.getByLabelText(/Fødselsnummer/);
    const selectDager = screen.queryAllByLabelText(/Antall dager/)[1];
    const BelopInput = screen.queryAllByLabelText(/Beløp/)[1];
    const bekreftCheckbox = screen.getByText(/Jeg bekrefter følgende:/);

    submitButton.click();

    expect(screen.getByText(/Mangler fødselsnummer/)).toBeInTheDocument();
    expect(screen.getByText(/Mangler fra dato/)).toBeInTheDocument();
    expect(screen.getByText(/Mangler til dato/)).toBeInTheDocument();
    expect(screen.getByText(/Mangler beløp/)).toBeInTheDocument();
    expect(screen.getByText(/Mangler dager/)).toBeInTheDocument();
    expect(screen.getAllByText(/Bekreft at opplysningene er korrekt/).length).toBe(2);

    expect(screen.getByText(/Fødselsnummer må fylles ut/)).toBeInTheDocument();
    expect(screen.getByText(/Fra dato må fylles ut/)).toBeInTheDocument();
    expect(screen.getByText(/Til dato må fylles ut/)).toBeInTheDocument();
    expect(screen.getByText(/Beløp må fylles ut/)).toBeInTheDocument();
    expect(screen.getByText(/Antall dager må fylles ut/)).toBeInTheDocument();

    userEvent.type(fnrInput, testFnr.GyldigeFraDolly.TestPerson1);
    expect(screen.queryByText(/Mangler fødselsnummer/)).not.toBeInTheDocument();
    expect(screen.queryByText(/Fødselsnummer må fylles ut/)).not.toBeInTheDocument();

    userEvent.type(selectDager, '3');
    expect(screen.queryByText(/Mangler dager/)).not.toBeInTheDocument();
    expect(screen.queryByText(/Dager må fylles ut/)).not.toBeInTheDocument();

    userEvent.type(BelopInput, '123');
    expect(screen.queryByText(/Mangler beløp/)).not.toBeInTheDocument();
    expect(screen.queryByText(/Beløp må fylles ut/)).not.toBeInTheDocument();

    userEvent.click(bekreftCheckbox);
    expect(screen.queryByText(/Bekreft at opplysningene er korrekt/)).not.toBeInTheDocument();
  });
});
