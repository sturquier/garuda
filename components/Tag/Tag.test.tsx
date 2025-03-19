import { render } from '@testing-library/react-native';
import { Text } from 'react-native';

import { Tag } from './Tag';

describe('Tag', () => {
  it('renders well', () => {
    const text = 'TAG TEXT';
    const children = <Text>{text}</Text>;

    const { getByText } = render(<Tag>{children}</Tag>);

    expect(getByText(text)).toBeDefined();
  });
});
