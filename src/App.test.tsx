import React from 'react';
import { Application } from './App';
import { Router } from 'react-router-dom';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { createMemoryHistory } from 'history';

describe('App', () => {
  let container = document.createElement('div');
  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });
  afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
  });

  const mockHistory = (path: string) => {
    const history = createMemoryHistory();
    history.push(path);
    return history;
  };

  it('should render', () => {
    act(() => {
      render(makeRouter('/'), container);
    });
    expect(container).toContainHTML('grensekomp');
  });

  const makeRouter = (path: string) => {
    return (
      <Router history={mockHistory(path)}>
        <Application />
      </Router>
    );
  };
});
