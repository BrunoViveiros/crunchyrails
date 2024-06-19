import { describe, expect, it } from 'vitest';
import { CardCollection } from '../CardCollection';
import { ComponentProps } from 'react';
import { render, screen } from '@testing-library/react';

type Props = ComponentProps<typeof CardCollection>;

describe('CardCollection', () => {
  const defaultProps = {
    title: 'The title',
    cards: [
      {
        id: '1',
        name: 'card 1',
        image: 'https://testimage_.com',
        smallImage: 'https://testimage_small.com',
      },
      {
        id: '2',
        name: 'card 2',
        image: 'https://testimage_2.com',
        smallImage: 'https://testimage_small_2.com',
      },
      {
        id: '3',
        name: 'card 3',
        image: 'https://testimage_3.com',
        smallImage: 'https://testimage_small_3.com',
      },
    ] as Props['cards'],
  } as Props;

  const setup = () => render(<CardCollection {...defaultProps} />);

  it('renders', () => {
    setup();

    expect(screen.getByText(/the title/i)).toBeInTheDocument();
  });
  it('renders the images', () => {
    setup();

    expect(screen.getByRole('img', { name: /card 1/i })).toBeInTheDocument();
    expect(screen.getByRole('img', { name: /card 2/i })).toBeInTheDocument();
    expect(screen.getByRole('img', { name: /card 3/i })).toBeInTheDocument();
  });
});
