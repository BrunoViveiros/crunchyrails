import { describe, expect, it } from 'vitest';
import { Navbar } from '../Navbar';
import { render, screen } from '@testing-library/react';

describe('Navbar', () => {
  const setup = () => render(<Navbar />);

  it('renders', () => {
    setup();

    expect(
      screen.getByRole('img', {
        name: /logo/i,
      })
    ).toBeInTheDocument();

    expect(
      screen.getByRole('button', {
        name: /login/i,
      })
    ).toBeInTheDocument();

    expect(
      screen.getByRole('button', {
        name: /sign up/i,
      })
    ).toBeInTheDocument();
  });
});
