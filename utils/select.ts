import { PickerItemProps } from '@react-native-picker/picker';
import { TFunction } from 'i18next';

import { MOVIE_CATEGORY } from '@/types/movie';
import { TV_SERIE_CATEGORY } from '@/types/tvSerie';

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

export const getTvSerieCategoryItem = (
  category: TV_SERIE_CATEGORY,
  t: TFunction<'translation'>,
): PickerItemProps => ({
  value: category,
  label: t(`tv_serie_category.${category}`),
});

export const getTvSerieCategoriesItems = (
  t: TFunction<'translation'>,
): PickerItemProps[] =>
  Object.values(TV_SERIE_CATEGORY).map((category) =>
    getTvSerieCategoryItem(category, t),
  );
