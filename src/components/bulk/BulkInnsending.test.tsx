import React from 'react';
import { render, cleanup, screen, waitFor } from '@testing-library/react';
import { axe } from 'jest-axe';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import { ArbeidsgiverProvider } from '../../context/arbeidsgiver/ArbeidsgiverContext';
import { Organisasjon } from '@navikt/bedriftsmeny/lib/organisasjon';
import testFnr from '../../mockData/testFnr';
import testOrganisasjon from '../../mockData/testOrganisasjoner';
import BulkInnsending from './BulkInnsending';
import mockFetch from '../../mockData/mockFetch';
import LocaleProvider from '../../locale/LocaleProvider';

const arbeidsgivere: Organisasjon[] = testOrganisasjon;

describe('BulkInnsending', () => {
  beforeEach(() => {
    mockFetch(200, {});
  });

  const buildBulkInnsending = (baseUrl: string, status: number, arbeidsgivere: any, arbeidsgiverId: string) => (
    <MemoryRouter>
      <LocaleProvider>
        <ArbeidsgiverProvider
          arbeidsgivere={arbeidsgivere}
          status={status}
          arbeidsgiverId={arbeidsgiverId}
          baseUrl={baseUrl}
        >
          <BulkInnsending />
        </ArbeidsgiverProvider>
      </LocaleProvider>
    </MemoryRouter>
  );

  it('should have no a11y violations', async () => {
    jest.setTimeout(30000);
    const { container } = render(buildBulkInnsending('/base/url', 200, arbeidsgivere, '810007842'));
    const results = await axe(container);
    expect(results).toHaveNoViolations();
    cleanup();
  });

  it('should show warnings when input is missing', () => {
    render(buildBulkInnsending('/base/url', 200, arbeidsgivere, '810007842'));
    const submitButton = screen.getByText(/Send krav om refusjon/);

    submitButton.click();

    expect(screen.getAllByText(/Mangler fødselsnummer/).length).toBe(2);
    expect(screen.getAllByText(/Mangler fra dato/).length).toBe(2);
    expect(screen.getAllByText(/Mangler til dato/).length).toBe(2);
    expect(screen.getAllByText(/Mangler beløp/).length).toBe(2);
    expect(screen.getAllByText(/Bekreft at opplysningene er korrekt/).length).toBe(2);

    waitFor(() => {
      expect(screen.getByText(/Rad 1: Mangler fødselsnummer/)).toBeInTheDocument();
    });
    expect(screen.getByText(/Rad 1: Mangler fra dato/)).toBeInTheDocument();
    expect(screen.getByText(/Rad 1: Mangler til dato/)).toBeInTheDocument();
    expect(screen.getByText(/Rad 1: Mangler beløp/)).toBeInTheDocument();
  });

  it('should show warnings when input is missing, and the warning should dissapear when fixed', () => {
    render(buildBulkInnsending('/base/url', 200, arbeidsgivere, '810007842'));
    const submitButton = screen.getByText(/Send krav om refusjon/);
    const fnrInput = screen.getByLabelText(/Fødsel/);
    const BelopInput = screen.getAllByLabelText(/Beregnet månedsinntekt/);
    const bekreftCheckbox = screen.getByText(/Jeg bekrefter at jeg har satt meg inn i reglene/);

    submitButton.click();

    expect(screen.getAllByText(/Mangler fødselsnummer/).length).toBe(2);
    expect(screen.getAllByText(/Mangler fra dato/).length).toBe(2);
    expect(screen.getAllByText(/Mangler til dato/).length).toBe(2);
    expect(screen.getAllByText(/Mangler beløp/).length).toBe(2);
    expect(screen.getAllByText(/Bekreft at opplysningene er korrekt/).length).toBe(2);

    expect(screen.getByText(/Rad 1: Mangler fødselsnummer/)).toBeInTheDocument();
    expect(screen.getByText(/Rad 1: Mangler fra dato/)).toBeInTheDocument();
    expect(screen.getByText(/Rad 1: Mangler til dato/)).toBeInTheDocument();
    expect(screen.getByText(/Rad 1: Mangler beløp/)).toBeInTheDocument();

    userEvent.type(fnrInput, testFnr.GyldigeFraDolly.TestPerson1);
    expect(screen.queryByText(/Mangler fødselsnummer/)).not.toBeInTheDocument();
    expect(screen.queryByText(/Fødselsnummer må fylles ut/)).not.toBeInTheDocument();

    userEvent.type(BelopInput[1], '123');
    expect(screen.queryByText(/Mangler beløp/)).not.toBeInTheDocument();
    expect(screen.queryByText(/Beløp må fylles ut/)).not.toBeInTheDocument();

    userEvent.click(bekreftCheckbox);
    expect(screen.queryByText(/Bekreft at opplysningene er korrekt/)).not.toBeInTheDocument();
  });
});
