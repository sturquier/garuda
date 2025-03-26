import { render } from '@testing-library/react-native';

import { configurationMock } from '@/mocks/configuration';
import { genresMock } from '@/mocks/genre';
import { moviesMock } from '@/mocks/movie';
import { tvSeriesMock } from '@/mocks/tvSerie';
import { GENRE_TYPE } from '@/types/genre';

import { MovieCard, TvSerieCard } from './Card';

describe('MovieCard', () => {
  it('renders well', () => {
    const movieMock = moviesMock[0];

    const { getByText } = render(
      <MovieCard
        movie={movieMock}
        configuration={configurationMock}
        genres={genresMock}
      />,
    );

    expect(getByText(movieMock.title)).toBeDefined();
    expect(getByText(movieMock.overview)).toBeDefined();

    movieMock.genre_ids.forEach((id) => {
      const genreName = genresMock[GENRE_TYPE.MOVIE].find(
        (genre) => genre.id === id,
      )!.name;
      expect(getByText(genreName)).toBeDefined();
    });
  });
});

describe('TvSerieCard', () => {
  it('renders well', () => {
    const tvSerieMock = tvSeriesMock[0];

    const { getByText } = render(
      <TvSerieCard
        tvSerie={tvSerieMock}
        configuration={configurationMock}
        genres={genresMock}
      />,
    );

    expect(getByText(tvSerieMock.name)).toBeDefined();
    expect(getByText(tvSerieMock.overview)).toBeDefined();

    tvSerieMock.genre_ids.forEach((id) => {
      const genreName = genresMock[GENRE_TYPE.TV].find(
        (genre) => genre.id === id,
      )!.name;
      expect(getByText(genreName)).toBeDefined();
    });
  });
});
