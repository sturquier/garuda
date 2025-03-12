import { PickerItemProps } from '@react-native-picker/picker';
import { TFunction } from 'i18next';

import { MOVIE_CATEGORY } from '@/types/movie';

export const getMovieCategoryItem = (
  category: MOVIE_CATEGORY,
  t: TFunction<'translation'>,
): PickerItemProps => ({
  value: category,
  label: t(`movie_category.${category}`),
});

export const getMovieCategoriesItems = (
  t: TFunction<'translation'>,
): PickerItemProps[] =>
  Object.values(MOVIE_CATEGORY).map((category) =>
    getMovieCategoryItem(category, t),
  );
