import { ActivityIndicator, StyleSheet, View, ViewProps } from 'react-native';

import { COLORS } from '@/theme/colors';
import { LAYOUT } from '@/theme/layout';

export const Loader = ({ ...props }: ViewProps) => {
  return (
    <View style={styles.container} {...props}>
      <ActivityIndicator
        accessibilityLabel='Loader'
        color={COLORS.brown}
        size='large'
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...LAYOUT.flex,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
