import { ScrollView, Text, View } from 'react-native';

import { Loader } from '@/components';
import { useFetchMovies } from '@/services/movies';
import { LAYOUT } from '@/theme/layout';
import { TEXTS } from '@/theme/texts';

export default function HomeScreen() {
  const { data: movies, isLoading } = useFetchMovies();

  return (
    <ScrollView contentContainerStyle={LAYOUT.pageContent}>
      <Text style={TEXTS.title}>HOME</Text>
      <View>
        <Text style={TEXTS.body}>MOVIES</Text>
        {isLoading || !movies?.results.length ? (
          <Loader />
        ) : (
          <View>
            <Text>{movies.results[0].title}</Text>
            <Text>{movies.results[0].overview}</Text>
          </View>
        )}
      </View>
    </ScrollView>
  );
}
