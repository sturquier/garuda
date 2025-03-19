import { fireEvent, render } from '@testing-library/react-native';
import { Text, TouchableOpacityProps } from 'react-native';

import { Button } from './Button';

describe('Button', () => {
  it('renders well', () => {
    const text = 'BUTTON';
    const children = <Text>{text}</Text>;

    const { getByRole, getByText } = render(<Button>{children}</Button>);

    expect(getByRole('button')).toBeDefined();
    expect(getByText(text)).toBeDefined();
  });

  it('handles onPress()', () => {
    const text = 'PRESSABLE BUTTON';
    const children = <Text>{text}</Text>;

    const props: TouchableOpacityProps = {
      onPress: jest.fn(),
    };

    const { getByRole } = render(<Button {...props}>{children}</Button>);

    fireEvent.press(getByRole('button'));
    expect(props.onPress).toHaveBeenCalled();
  });
});
