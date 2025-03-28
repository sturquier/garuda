import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ScrollView, View } from 'react-native';

import { Loader, MovieCard, Pager, Select, TvSerieCard } from '@/components';
import { useFetchMovies } from '@/services/movies';
import { useFetchTvSeries } from '@/services/tvSeries';
import { useConfigurationStore } from '@/store/configuration';
import { useGenreStore } from '@/store/genres';
import { LAYOUT } from '@/theme/layout';
import { MOVIE_CATEGORY } from '@/types/movie';
import { TV_SERIE_CATEGORY } from '@/types/tvSerie';
import {
  getMovieCategoriesItems,
  getTvSerieCategoriesItems,
} from '@/utils/select';

export default function HomeScreen() {
  const {
    t,
    i18n: { language },
  } = useTranslation();

  const configuration = useConfigurationStore((state) => state.configuration);
  const genres = useGenreStore((state) => state.genres);

  const [movieCategory, setMovieCategory] = useState<MOVIE_CATEGORY>(
    MOVIE_CATEGORY.UPCOMING,
  );
  const [tvSerieCategory, setTvSerieCategory] = useState<TV_SERIE_CATEGORY>(
    TV_SERIE_CATEGORY.ON_THE_AIR,
  );

  const { data: movies, isFetching: isFetchingMovies } = useFetchMovies(
    movieCategory,
    language,
  );
  const { data: tvSeries, isFetching: isFetchingTvSeries } = useFetchTvSeries(
    tvSerieCategory,
    language,
  );

  return (
    <ScrollView style={LAYOUT.page} showsVerticalScrollIndicator={false}>
      <View style={LAYOUT.flex}>
        <Select
          items={getMovieCategoriesItems(t)}
          selectedValue={movieCategory}
          onValueChange={(newCategory): void =>
            setMovieCategory(newCategory as MOVIE_CATEGORY)
          }
        />
        {isFetchingMovies || !movies.results.length ? (
          <Loader />
        ) : (
          <Pager>
            {movies.results.map((movie) => (
              <MovieCard
                key={movie.id}
                movie={movie}
                configuration={configuration}
                genres={genres}
              />
            ))}
          </Pager>
        )}
        <Select
          items={getTvSerieCategoriesItems(t)}
          selectedValue={tvSerieCategory}
          onValueChange={(newCategory): void =>
            setTvSerieCategory(newCategory as TV_SERIE_CATEGORY)
          }
        />
        {isFetchingTvSeries || !tvSeries.results.length ? (
          <Loader />
        ) : (
          <Pager>
            {tvSeries.results.map((tvSerie) => (
              <TvSerieCard
                key={tvSerie.id}
                tvSerie={tvSerie}
                configuration={configuration}
                genres={genres}
              />
            ))}
          </Pager>
        )}
      </View>
    </ScrollView>
  );
}
