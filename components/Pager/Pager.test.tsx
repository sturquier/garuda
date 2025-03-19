import { render } from '@testing-library/react-native';
import { Text } from 'react-native';

import { Pager } from './Pager';

describe('Pager', () => {
  it('renders well', () => {
    const text = 'PAGE 1';
    const children = <Text>{text}</Text>;

    const { getByText } = render(<Pager>{children}</Pager>);

    expect(getByText(text)).toBeDefined();
  });

  // TODO : test onPageSelected
});
