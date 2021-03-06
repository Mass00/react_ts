import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import {store} from "./Redux/State";

test('renders learn react link', () => {
  render(                <App
      appState={store.getState()}
      dispatch={store.dispatch.bind(store)}
  />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
