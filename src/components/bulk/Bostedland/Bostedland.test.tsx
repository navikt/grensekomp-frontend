import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Bostedland from './Bostedland';

describe('Bostedland', () => {
  it('should display a select box', () => {
    const mockFn = jest.fn();
    render(<Bostedland language='nb' label='label' onChange={mockFn} />);

    expect(screen.queryByText('Finland')).toBeInTheDocument();
    expect(screen.queryByText('Øvrige land')).toBeInTheDocument();
    expect(screen.queryByText('Island')).toBeInTheDocument();

    fireEvent.change(screen.getByLabelText('label'), { target: { value: 'ISL' } });
    expect(mockFn).toHaveBeenCalledWith('ISL');
  });
});
