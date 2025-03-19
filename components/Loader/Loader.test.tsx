import { render } from '@testing-library/react-native';

import { Loader } from './Loader';

describe('Loader', () => {
  it('renders well', () => {
    const { getByLabelText } = render(<Loader />);

    expect(getByLabelText('Loader')).toBeDefined();
  });
});
