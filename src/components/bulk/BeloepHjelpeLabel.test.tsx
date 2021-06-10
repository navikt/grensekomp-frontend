import '@testing-library/jest-dom';
import React from 'react';
import { cleanup, fireEvent, render } from '@testing-library/react';
import { axe } from 'jest-axe';
import BeloepHjelpeLabel from './BeloepHjelpeLabel';
import { Router } from 'react-router-dom';
import mockHistory from '../../mockData/mockHistory';
import i18next from 'i18next';
import LanguageBundle from '../../config/LanguageBundle';
import { LanguageProvider } from '@navikt/helse-arbeidsgiver-felles-frontend';

describe('BeloepHjelpeLabel', () => {
  it('should display the component with a warning', () => {
    const component = render(
      <Router history={mockHistory('/')}>
        <LanguageProvider i18n={i18next} bundle={LanguageBundle} languages={[]}>
          <BeloepHjelpeLabel />
        </LanguageProvider>
      </Router>
    );
    expect(component.queryAllByText(/Slik regner du ut den ansattes daglige lønn/).length).toEqual(0);

    const knappen = component.getByText(/Hjelp/);

    fireEvent.click(knappen);

    expect(
      component.queryAllByText(/Legg alltid inntekten i månedene oktober, november, desember 2020 når du skal/).length
    ).toEqual(1);

    const lukkKnappen = component.getByText(/Lukk dette vinduet/);

    fireEvent.click(lukkKnappen);

    expect(component.queryAllByText(/Slik regner du ut den ansattes daglige lønn/).length).toEqual(0);
  });

  it('should have no a11y violations', async () => {
    const { container } = render(<BeloepHjelpeLabel />);
    const results = await axe(container);

    expect(results).toHaveNoViolations();

    cleanup();
  });
});
