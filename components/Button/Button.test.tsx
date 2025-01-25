import { render, screen } from '@testing-library/react-native';
import { Text } from 'react-native';

import { Button } from './Button';

describe('Button', () => {
  test('it renders well', () => {
    const text = 'BUTTON';
    const children = <Text>{text}</Text>;

    render(<Button>{children}</Button>);

    expect(screen.getByRole('button')).toBeDefined();
    expect(screen.getByText(text)).toBeDefined();
  });
});
