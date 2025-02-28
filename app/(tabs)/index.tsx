import { Image } from 'expo-image';
import { ScrollView, Text, View } from 'react-native';

import { Loader } from '@/components';
import { useFetchMovies } from '@/services/movies';
import { useConfigurationStore } from '@/store/configuration';
import { useGenreStore } from '@/store/genres';
import { LAYOUT } from '@/theme/layout';
import { TEXTS } from '@/theme/texts';
import { GENRE_TYPE } from '@/types/genre';

export default function HomeScreen() {
  const configuration = useConfigurationStore((state) => state.configuration);
  const genres = useGenreStore((state) => state.genres);

  const { data: movies, isFetching: isFetchingMovies } = useFetchMovies();

  return (
    <ScrollView contentContainerStyle={LAYOUT.pageContent}>
      <Text style={TEXTS.title}>HOME</Text>
      <View>
        <Text style={TEXTS.body}>MOVIES</Text>
        {isFetchingMovies || !movies?.results.length ? (
          <Loader />
        ) : (
          <View>
            <Text>{movies.results[0].title}</Text>
            <Text>{movies.results[0].overview}</Text>
            <Image
              source={{
                uri: `${configuration.images?.secure_base_url}original${movies.results[0].poster_path}`,
              }}
              style={{ height: '100%' }}
            />
            {movies.results[0].genre_ids.map((id) => (
              <Text key={id}>
                {
                  genres[GENRE_TYPE.MOVIE].find((genre) => genre.id === id)
                    ?.name
                }
              </Text>
            ))}
          </View>
        )}
      </View>
    </ScrollView>
  );
}
