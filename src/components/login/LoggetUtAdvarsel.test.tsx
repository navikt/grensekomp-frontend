import '@testing-library/jest-dom';
import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';

import LoggetUtAdvarsel from './LoggetUtAdvarsel';
import { Router } from 'react-router-dom';
import mockHistory from '../../mockData/mockHistory';
import LangKey from '../../language/LangKey';

describe('LoggetUtAdvarsel', () => {
  it('should display the modal if the token is invalid', () => {
    render(
      <Router history={mockHistory('/')}>
        <LoggetUtAdvarsel onClose={jest.fn()} />
      </Router>
    );

    expect(screen.getByText(LangKey.LOGGET_UT)).toBeInTheDocument();
  });

  it('should display the modal if the token is invalid and close it when close is clicked', () => {
    const mockCallback = jest.fn();
    render(
      <Router history={mockHistory('/')}>
        <LoggetUtAdvarsel onClose={mockCallback} />
      </Router>
    );

    const closeLink = screen.getByText(LangKey.LOGGET_INN);
    expect(screen.getByText(LangKey.LOGGET_UT)).toBeInTheDocument();

    fireEvent.click(closeLink);

    expect(mockCallback).toHaveBeenCalled();
  });
});
