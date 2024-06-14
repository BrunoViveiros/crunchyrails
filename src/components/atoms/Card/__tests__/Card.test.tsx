import { render, screen } from '@testing-library/react';
import { ComponentProps } from 'react';
import { describe, expect, it } from 'vitest';
import { Card } from '../Card';

type Props = ComponentProps<typeof Card>;

describe('Card', () => {
  const defaultProps = {
    title: 'Shigatsu Wa Kimi No Uso',
    imageSrc: '/animes/shigatsu_wa_kimi_no_uso.png',
    alt: 'Shigatsu Wa Kimi No Uso',
  } as Props;

  const setup = (props?: Partial<Props>) =>
    render(<Card {...defaultProps} {...props} />);

  it('render', () => {
    setup();

    expect(screen.getByText(defaultProps.title)).toBeInTheDocument();
    expect(screen.getByAltText(defaultProps.alt)).toBeInTheDocument();
  });
});
