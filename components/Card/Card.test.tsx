import { render } from '@testing-library/react-native';

import { configurationMock } from '@/mocks/configuration';
import { genresMock } from '@/mocks/genre';
import { moviesMock } from '@/mocks/movie';
import { GENRE_TYPE } from '@/types/genre';

import { Card } from './Card';

describe('Card', () => {
  it('renders well', () => {
    const movieMock = moviesMock[0];

    const { getByText } = render(
      <Card
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
