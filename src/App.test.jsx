import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from './App';

describe('App', () => {
  it('renders the header logo link', () => {
    render(<App />);
    // The Header renders a link back to the home page.
    expect(screen.getAllByRole('link').length).toBeGreaterThan(0);
  });
});
