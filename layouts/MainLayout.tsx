import { StyleSheet, View, ViewProps } from 'react-native';

import { StatusBar } from '@/components';

export const MainLayout = ({ children, ...props }: ViewProps) => {
  return (
    <View style={styles.layout} {...props}>
      <StatusBar />
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  layout: {
    flex: 1,
  },
});
