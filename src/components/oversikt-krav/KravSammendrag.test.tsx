import React from 'react';
import { render, cleanup, screen } from '@testing-library/react';
import { axe } from 'jest-axe';
import KravSammendrag from './KravSammendrag';
import mockKravSammendragItems from '../../mockData/mockKravSammendragItems';
import LangKey from '../../language/LangKey';

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

  it('should show warning dialog when delete is clicked', () => {
    render(<KravSammendrag innsending={innsending} items={mockKravSammendragItems} dispatch={jest.fn()} />);

    expect(screen.queryByText(LangKey.SLETT_KRAV_LABEL)).not.toBeInTheDocument();

    const sletteknapper = screen.getAllByText(LangKey.KRAV_SAMMENDRAG_DELETE);

    sletteknapper[2].click();

    expect(screen.getByText(LangKey.SLETT_KRAV_LABEL)).toBeInTheDocument();

    const avbryt = screen.getByText(LangKey.CANCEL);
    avbryt.click();

    expect(screen.queryByText(LangKey.SLETT_KRAV_LABEL)).not.toBeInTheDocument();
  });
});
