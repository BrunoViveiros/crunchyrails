import { describe, it } from 'vitest';
import { CardCollection } from '../CardCollection';
import { ComponentProps } from 'react';
import { render } from '@testing-library/react';

type Props = ComponentProps<typeof CardCollection>;

describe('CardCollection', () => {
  const defaultProps = {} as Props;

  const setup = () => render(<CardCollection {...defaultProps} />);

  it('renders', () => {
    setup();
  });
});
