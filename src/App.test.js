import { render, screen } from '@testing-library/react';
import App from './App';

test('renders OvulMap brand', () => {
  render(<App />);
  const brandElement = screen.getByText(/OvulMap/i);
  expect(brandElement).toBeInTheDocument();
});

test('renders Next Period card', () => {
  render(<App />);
  const nextPeriodElement = screen.getByText(/Next Period/i);
  expect(nextPeriodElement).toBeInTheDocument();
});

test('renders Approximate Ovulation Day card', () => {
  render(<App />);
  const ovulationDayElement = screen.getByText(/Approximate Ovulation Day/i);
  expect(ovulationDayElement).toBeInTheDocument();
});
