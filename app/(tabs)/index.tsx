import { useState } from 'react';
import { ScrollView, Text, View } from 'react-native';

import { Card, Loader, Pager, Select } from '@/components';
import { useFetchMovies } from '@/services/movies';
import { useConfigurationStore } from '@/store/configuration';
import { useGenreStore } from '@/store/genres';
import { LAYOUT } from '@/theme/layout';
import { TEXTS } from '@/theme/texts';
import { MOVIE_CATEGORY } from '@/types/movie';

export default function HomeScreen() {
  const configuration = useConfigurationStore((state) => state.configuration);
  const genres = useGenreStore((state) => state.genres);

  const [category, setCategory] = useState<MOVIE_CATEGORY>(
    MOVIE_CATEGORY.UPCOMING,
  );

  const { data: movies, isFetching: isFetchingMovies } =
    useFetchMovies(category);

  return (
    <ScrollView contentContainerStyle={LAYOUT.pageContent}>
      <Text style={TEXTS.title}>HOME</Text>
      {isFetchingMovies || !movies?.results.length ? (
        <Loader />
      ) : (
        <View style={LAYOUT.pageContent}>
          <Select
            items={Object.values(MOVIE_CATEGORY).map((category) => ({
              label: category.toString(),
              value: category.toString(),
            }))}
            selectedValue={category}
            onValueChange={(newCategory): void => setCategory(newCategory)}
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
