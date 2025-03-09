import { ActivityIndicator, StyleSheet, View, ViewProps } from 'react-native';

import { COLORS } from '@/theme/colors';

export const Loader = ({ ...props }: ViewProps) => {
  return (
    <View style={styles.container} {...props}>
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
