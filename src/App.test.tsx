import React from 'react';
import { render } from '@testing-library/react';
import App from './App';



test('renders main heading', () => {
  const renderObj = render(<App />);
  const linkElement = renderObj.getByText(/Timer Application/i);

  expect(linkElement).toBeInTheDocument();
});


test('renders timer component', () => {
  const renderObj = render(<App />);
  const linkElement = renderObj.getByTestId(/timer/i);

  expect(linkElement).toBeInTheDocument();
});

