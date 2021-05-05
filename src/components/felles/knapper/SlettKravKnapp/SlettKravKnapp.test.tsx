import '@testing-library/jest-dom';
import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

import SlettKravKnapp from './SlettKravKnapp';

describe('SlettKravKnapp', () => {
  it('should display the component and handle a button click', () => {
    const mockKnapp = jest.fn();
    const component = render(<SlettKravKnapp onClick={mockKnapp}>Slett</SlettKravKnapp>);

    const knappen = component.getByText(/Slett/);

    fireEvent.click(knappen);

    expect(mockKnapp).toHaveBeenCalled();
  });

  it('should have no a11y violations', async () => {
    const mockKnapp = jest.fn();
    const { container } = render(<SlettKravKnapp onClick={mockKnapp}>Slett</SlettKravKnapp>);
    const results = await axe(container);

    expect(results).toHaveNoViolations();

    cleanup();
  });
});
