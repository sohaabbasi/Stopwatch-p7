import React from 'react';
import { render } from '@testing-library/react';
import Main from './components/main/Mains/main'


test('renders main heading', () => {
  const renderObj = render(<Main />);
  const linkElement = renderObj.getByText(/STOPWATCH/i);

  expect(linkElement).toBeInTheDocument();
});


test('renders timer component', () => {
  const renderObj = render(<Main />);
  const linkElement = renderObj.getAllByTestId(/stopwatch/i);

  expect(linkElement).toBeInTheDocument();
});

