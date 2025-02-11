import { ActivityIndicator, StyleSheet, View } from 'react-native';

import { COLORS } from '@/theme/colors';

export const Loader = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator color={COLORS.brown} size='large' />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
