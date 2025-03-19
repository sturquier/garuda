import { fireEvent, render } from '@testing-library/react-native';

import { MOVIE_CATEGORY } from '@/types/movie';

import { Select } from './Select';

describe('Select', () => {
  const itemsMock = Object.values(MOVIE_CATEGORY).map((category) => ({
    value: category,
    label: category,
  }));

  it('renders well', () => {
    const { getByLabelText } = render(
      <Select selectedValue={MOVIE_CATEGORY.NOW_PLAYING} items={itemsMock} />,
    );

    expect(getByLabelText('Select picker')).toBeDefined();
  });

  it('handles onValueChange()', () => {
    const onValueChangeMock = jest.fn();

    const { getByLabelText } = render(
      <Select
        selectedValue={MOVIE_CATEGORY.POPULAR}
        onValueChange={onValueChangeMock}
        items={itemsMock}
      />,
    );

    fireEvent(
      getByLabelText('Select picker'),
      'onValueChange',
      MOVIE_CATEGORY.TOP_RATED,
    );
    expect(onValueChangeMock).toHaveBeenCalledWith(MOVIE_CATEGORY.TOP_RATED);
  });
});
