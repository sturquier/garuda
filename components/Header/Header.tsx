import { BottomTabHeaderProps } from '@react-navigation/bottom-tabs';
import { Image } from 'expo-image';
import { useTranslation } from 'react-i18next';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { COLORS } from '@/theme/colors';
import { TEXTS } from '@/theme/texts';

export const Header = ({ ...props }: BottomTabHeaderProps) => {
  const { t } = useTranslation();

  return (
    <View style={styles.header}>
      <Text style={TEXTS.title}>{t(`routes.${props.route.name}`)}</Text>
      <TouchableOpacity onPress={(): void => console.log('TODO')}>
        <Image
          source={{
            uri: `${process.env.EXPO_PUBLIC_FLAG_CDN_URL}/fr.svg`,
          }}
          style={styles.flag}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: COLORS.brown,
  },
  flag: {
    width: 24,
    height: 24,
  },
});
