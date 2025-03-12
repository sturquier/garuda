import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ScrollView, View } from 'react-native';

import { Card, Loader, Pager, Select } from '@/components';
import { useFetchMovies } from '@/services/movies';
import { useConfigurationStore } from '@/store/configuration';
import { useGenreStore } from '@/store/genres';
import { LAYOUT } from '@/theme/layout';
import { MOVIE_CATEGORY } from '@/types/movie';
import { getMovieCategoriesItems } from '@/utils/select';

export default function HomeScreen() {
  const { t } = useTranslation();

  const configuration = useConfigurationStore((state) => state.configuration);
  const genres = useGenreStore((state) => state.genres);

  const [category, setCategory] = useState<MOVIE_CATEGORY>(
    MOVIE_CATEGORY.UPCOMING,
  );

  const { data: movies, isFetching: isFetchingMovies } =
    useFetchMovies(category);

  return (
    <ScrollView contentContainerStyle={LAYOUT.pageContent}>
      {isFetchingMovies || !movies?.results.length ? (
        <Loader />
      ) : (
        <View style={LAYOUT.pageContent}>
          <Select
            items={getMovieCategoriesItems(t)}
            selectedValue={category}
            onValueChange={(newCategory): void =>
              setCategory(newCategory as MOVIE_CATEGORY)
            }
          />
          <Pager>
            {movies.results.map((movie) => (
              <Card
                key={movie.id}
                movie={movie}
                configuration={configuration}
                genres={genres}
              />
            ))}
          </Pager>
        </View>
      )}
    </ScrollView>
  );
}
