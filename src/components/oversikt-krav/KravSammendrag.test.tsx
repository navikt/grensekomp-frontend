import React from 'react';
import { render, cleanup, screen } from '@testing-library/react';
import { axe } from 'jest-axe';
import KravSammendrag from './KravSammendrag';
import mockKravSammendragItems from '../../mockData/mockKravSammendragItems';
import LangKey from '../../locale/LangKey';

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

    expect(screen.queryByText(/Er du sikker på at du vil slette kravet/)).not.toBeInTheDocument();

    const sletteknapper = screen.getAllByText(/Slett/);

    sletteknapper[2].click();

    expect(screen.getByText(LangKey.SLETT_KRAV_LABEL)).toBeInTheDocument();

    const avbryt = screen.getByText(LangKey.CANCEL);
    avbryt.click();

    expect(screen.queryByText(/Er du sikker på at du vil slette kravet/)).not.toBeInTheDocument();
  });
});
