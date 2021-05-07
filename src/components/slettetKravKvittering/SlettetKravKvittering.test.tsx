import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { axe } from 'jest-axe';
import SlettetKravKvittering from './SlettetKravKvittering';
import { Router, MemoryRouter, Route } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import LangKey from '../../locale/LangKey';

describe('SlettetKravKvittering', () => {
  it('should have no a11y violations', async () => {
    const { container } = render(<SlettetKravKvittering />, { wrapper: MemoryRouter });
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('should click the link with the correct params', async () => {
    const history = createMemoryHistory({
      initialEntries: ['/nb/oversikt']
    });
    history.push = jest.fn();

    const expected = {
      pathname: '/nb/innsending',
      state: {
        beloep: 12345,
        identitetsnummer: '1234567890',
        isoLand: 'SWE'
      }
    };

    render(
      <Router history={history}>
        <Route path='/:language/oversikt'>
          <SlettetKravKvittering beloep={12345} land='SWE' identitetsnummer='1234567890' />
        </Route>
      </Router>
    );

    fireEvent.click(screen.getByText(LangKey.KRAV_NY));

    expect(history.push).toHaveBeenCalledWith(expected);
  });
});
