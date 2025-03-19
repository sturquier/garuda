import { Image } from 'expo-image';
import { StyleSheet, Text, View } from 'react-native';

import { Tag } from '@/components';
import { COLORS } from '@/theme/colors';
import { TEXTS } from '@/theme/texts';
import { IConfiguration } from '@/types/configuration';
import { GENRE_TYPE, TGenres } from '@/types/genre';
import { IMovie } from '@/types/movie';

interface ICard {
  movie: IMovie;
  configuration: IConfiguration;
  genres: TGenres;
}

// TODO : card for both movie & TV serie
export const Card = ({ movie, configuration, genres }: ICard) => {
  return (
    <View style={styles.card}>
      <Text style={TEXTS.title}>{movie.title}</Text>
      <Image
        source={{
          uri: `${configuration.images?.secure_base_url}original${movie.poster_path}`,
        }}
        style={styles.image}
      />
      <Text style={TEXTS.body}>{movie.overview}</Text>
      <View style={styles.tags}>
        {movie.genre_ids.map((id) => (
          <Tag key={id}>
            <Text>
              {genres[GENRE_TYPE.MOVIE].find((genre) => genre.id === id)?.name}
            </Text>
          </Tag>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: COLORS.brown,
  },
  image: {
    width: 200,
    height: 200,
  },
  tags: {
    flexDirection: 'row',
    gap: 8,
  },
});
