import { Router } from 'react-router-dom';
import { ApplicationRoutes } from './ApplicationRoutes';
import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import mockHistory from './mockData/mockHistory';
import { Organisasjon } from '@navikt/bedriftsmeny/lib/organisasjon';
import i18next from 'i18next';
import LanguageBundle from './config/LanguageBundle';
import { ArbeidsgiverProvider, ArbeidsgiverStatus, LanguageProvider } from '@navikt/helse-arbeidsgiver-felles-frontend';

describe('ApplicationRoutes', () => {
  let container = document.createElement('div');

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container);
    container.remove();
  });

  const makeRoute = (path: string, arbeidsgivere: Array<Organisasjon> = [{ Name: '' } as Organisasjon]) => (
    <Router history={mockHistory(path)}>
      <LanguageProvider i18n={i18next} bundle={LanguageBundle} languages={[]}>
        <ArbeidsgiverProvider arbeidsgivere={arbeidsgivere} status={ArbeidsgiverStatus.Successfully} baseUrl=''>
          <ApplicationRoutes />
        </ArbeidsgiverProvider>
      </LanguageProvider>
    </Router>
  );

  it('should show bulkinnsending', () => {
    act(() => {
      render(makeRoute('/nb/innsending'), container);
    });
    expect(container.textContent).toContain('Refusjon for kompensasjon ved innreiseforbud');
  });

  it('should show bulkinnsending when no arbeidsgivere', () => {
    act(() => {
      render(makeRoute('/nb/innsending', []), container);
    });
    expect(container.textContent).toContain('Refusjon for kompensasjon ved innreiseforbud');
  });
});
