import { Router } from 'react-router-dom';
import { ApplicationRoutes } from './ApplicationRoutes';
import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import mockHistory from './mockData/mockHistory';
import { ArbeidsgiverProvider } from './context/arbeidsgiver/ArbeidsgiverContext';
import ArbeidsgiverStatus from './context/arbeidsgiver/ArbeidsgiverStatus';
import { Organisasjon } from '@navikt/bedriftsmeny/lib/organisasjon';
import LanguageProvider from './locales/LanguageProvider';

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
      <LanguageProvider>
        <ArbeidsgiverProvider arbeidsgivere={arbeidsgivere} status={ArbeidsgiverStatus.Successfully} baseUrl=''>
          <ApplicationRoutes />
        </ArbeidsgiverProvider>
      </LanguageProvider>
    </Router>
  );

  it('should show bulkinnsending', () => {
    act(() => {
      render(makeRoute('/nb/batchinnsending/krav'), container);
    });
    expect(container.textContent).toContain('Refusjon for kompensasjon ved innreiseforbud');
  });

  it('should show bulkinnsending when no arbeidsgivere', () => {
    act(() => {
      render(makeRoute('/nb/batchinnsending/krav', []), container);
    });
    expect(container.textContent).toContain('Refusjon for kompensasjon ved innreiseforbud');
  });
});
