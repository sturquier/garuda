import { StyleSheet, View, ViewProps } from 'react-native';

import { COLORS } from '@/theme/colors';

export const Tag = ({ children, ...props }: ViewProps) => {
  return (
    <View style={styles.tag} {...props}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  tag: {
    backgroundColor: COLORS.brown,
    padding: 8,
    borderRadius: 8,
  },
});
