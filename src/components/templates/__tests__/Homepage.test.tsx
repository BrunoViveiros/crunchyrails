import { render, screen, waitFor } from '@testing-library/react';
import { ComponentProps } from 'react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import Homepage from '../Homepage';
import { httpClient } from '@/infra/sdk/httpClient';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const RESPONSE = {
  status: 200,
  data: {
    data: [
      {
        mal_id: 1,
        name: 'Frieren',
        images: {
          jpg: {
            image_url:
              'https://cdn.myanimelist.net/images/anime/1015/138006.jpg',
            small_image_url:
              'https://cdn.myanimelist.net/images/anime/1015/138006.jpg',
          },
        },
      },
    ],
  },
};

vi.mock('@/infra/sdk/httpClient');

const wrapper = ({ children }) => (
  <QueryClientProvider client={new QueryClient()}>
    {children}
  </QueryClientProvider>
);

describe('Homepage', () => {
  beforeEach(() => {
    vi.mocked(httpClient.get).mockResolvedValue(RESPONSE);
  });

  const setup = () => render(<Homepage />, { wrapper });

  it('renders with loading state', () => {
    setup();

    expect(screen.getByText(/loading.../i)).toBeInTheDocument();
  });

  describe('when it resolves', () => {
    it('renders the animes', async () => {
      setup();

      await waitFor(() => {
        expect(screen.getByText(/top animes/i)).toBeInTheDocument();
      });
    });
  });
});
