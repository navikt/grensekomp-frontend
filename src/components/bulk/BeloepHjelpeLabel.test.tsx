import '@testing-library/jest-dom';
import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

import BeloepHjelpeLabel from './BeloepHjelpeLabel';

describe('BeloepHjelpeLabel', () => {
  it('should display the component with a warning', () => {
    const component = render(<BeloepHjelpeLabel />);
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
