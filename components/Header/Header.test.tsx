import { BottomTabHeaderProps } from '@react-navigation/bottom-tabs';
import { render } from '@testing-library/react-native';

import { Header } from './Header';

describe('Header', () => {
  const props = {
    route: {
      key: 'index',
      name: 'Home',
    },
  } as BottomTabHeaderProps;

  it('renders well', () => {
    const { getByText } = render(<Header {...props} />);

    expect(getByText('routes.Home')).toBeDefined();
  });

  // TODO : test lang update
});
