import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import {handlerOnClickAddPost, handlerOnClickRemovePost, state} from "./Redux/State";

test('renders learn react link', () => {
  render(<App
      appState={state}
      handlerOnClickAddPost={handlerOnClickAddPost}
      handlerOnClickRemovePost={handlerOnClickRemovePost}
  />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
