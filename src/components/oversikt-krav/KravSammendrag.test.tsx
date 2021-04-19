import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { axe } from 'jest-axe';
import KravSammendrag from './KravSammendrag';
import mockKravSammendragItems from '../../mockData/mockKravSammendragItems';

const innsending = '2021-03-08T16:53:34.054712';

describe('KravSammendrag', () => {
  it('should have no a11y violations', async () => {
    const { container } = render(
      <KravSammendrag innsending={innsending} items={mockKravSammendragItems} dispatch={jest.fn()} />
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
    cleanup();
  });
});
