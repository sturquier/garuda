import { View, ViewProps } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { StatusBar } from '@/components';
import { LAYOUT } from '@/theme/layout';

export const MainLayout = ({ children, ...props }: ViewProps) => {
  return (
    <View style={LAYOUT.flex} {...props}>
      <StatusBar />
      <SafeAreaView style={LAYOUT.flex}>{children}</SafeAreaView>
    </View>
  );
};
