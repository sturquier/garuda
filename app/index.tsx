import { Redirect } from 'expo-router';
import { useTranslation } from 'react-i18next';

import { Loader } from '@/components';
import { APP_PATH } from '@/config/paths';
import { useFetchConfiguration } from '@/services/configuration';
import { useFetchGenres } from '@/services/genres';
import { useConfigurationStore } from '@/store/configuration';
import { useGenreStore } from '@/store/genres';
import { GENRE_TYPE } from '@/types/genre';

export default function RootIndex() {
  const {
    i18n: { language },
  } = useTranslation();

  const setConfiguration = useConfigurationStore(
    (state) => state.setConfiguration,
  );
  const setGenres = useGenreStore((state) => state.setGenres);

  const { data: configuration, isFetching: isFetchingConfiguration } =
    useFetchConfiguration();
  const { data: moviesGenres, isFetching: isFetchingMoviesGenres } =
    useFetchGenres(GENRE_TYPE.MOVIE, language);
  const { data: tvGenres, isFetching: isFetchingTvGenres } = useFetchGenres(
    GENRE_TYPE.TV,
    language,
  );

  if (isFetchingConfiguration || isFetchingMoviesGenres || isFetchingTvGenres) {
    return <Loader />;
  }

  setConfiguration(configuration);
  setGenres({
    [GENRE_TYPE.MOVIE]: moviesGenres,
    [GENRE_TYPE.TV]: tvGenres,
  });

  return <Redirect href={APP_PATH.HOMEPAGE} />;
}
