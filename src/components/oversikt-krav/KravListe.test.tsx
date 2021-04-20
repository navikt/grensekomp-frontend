import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { axe } from 'jest-axe';
import KravListe from './KravListe';
import { MemoryRouter } from 'react-router-dom';

const innsendinger = [
  '2021-03-08T16:53:34.054712',
  '2021-04-08T16:53:34.054712',
  '2021-05-08T16:53:34.054712',
  '2021-06-08T16:53:34.054712',
  '2021-07-08T16:53:34.054712'
];

describe('KravListe', () => {
  it('should have no a11y violations', async () => {
    const { container } = render(
      <MemoryRouter>
        <KravListe innsendinger={innsendinger} onKravClick={jest.fn()} />
      </MemoryRouter>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
    cleanup();
  });
});
