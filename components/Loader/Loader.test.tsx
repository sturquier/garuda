import { render, screen } from '@testing-library/react-native';

import { Loader } from './Loader';

describe('Loader', () => {
  test('it renders well', () => {
    render(<Loader />);

    expect(screen.getByTestId('loader')).toBeDefined();
  });
});
