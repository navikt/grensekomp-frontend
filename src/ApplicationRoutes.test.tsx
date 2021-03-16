import { Router } from 'react-router-dom';
import { ApplicationRoutes } from './ApplicationRoutes';
import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import mockHistory from './mockData/mockHistory';
import { ArbeidsgiverProvider } from './context/arbeidsgiver/ArbeidsgiverContext';
import ArbeidsgiverStatus from './context/arbeidsgiver/ArbeidsgiverStatus';
import { Organisasjon } from '@navikt/bedriftsmeny/lib/organisasjon';

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
      <ArbeidsgiverProvider arbeidsgivere={arbeidsgivere} status={ArbeidsgiverStatus.Successfully} baseUrl=''>
        <ApplicationRoutes />
      </ArbeidsgiverProvider>
    </Router>
  );

  it('should show default', () => {
    act(() => {
      render(makeRoute('/'), container);
    });
    expect(container.textContent).toContain('Skjema for arbeidstakere bosatt i utlandet');
  });

  it('should show token fornyet', () => {
    act(() => {
      render(makeRoute('/token-fornyet'), container);
    });
    expect(container.textContent).toContain('TokenFornyet');
  });

  it('should show bulkinnsending', () => {
    act(() => {
      render(makeRoute('/batchinnsending/krav'), container);
    });
    expect(container.textContent).toContain('Refusjon for lønn ved innreiseforbud');
  });

  it('should show bulkinnsending when no arbeidsgivere', () => {
    act(() => {
      render(makeRoute('/batchinnsending/krav', []), container);
    });
    expect(container.textContent).toContain('Refusjon for lønn ved innreiseforbud');
  });

  it('should show bulkinnsending kvittering', () => {
    act(() => {
      render(makeRoute('/batchinnsending/kvittering'), container);
    });
    expect(container.textContent).toContain('Kravet er mottatt');
  });
});
