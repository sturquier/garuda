import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  ColorValue,
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
} from 'react-native';

import { Header } from '@/components';
import { COLORS } from '@/theme/colors';

export default function TabLayout() {
  const ICON_SIZE = 28;

  const { t } = useTranslation();

  const iconName = (routeName: string): keyof typeof Ionicons.glyphMap => {
    if (routeName === 'search') return 'search-outline';
    if (routeName === 'profile') return 'person-circle-outline';

    return 'home-outline';
  };

  const iconColor = (focused: boolean): ColorValue =>
    focused ? COLORS.brown : COLORS.black;

  const labelColor = (focused: boolean): ColorValue =>
    focused ? COLORS.brown : COLORS.black;

  const labelStyle = (focused: boolean): StyleProp<TextStyle> => ({
    color: labelColor(focused),
  });

  return (
    <Tabs
      screenOptions={({ route }) => ({
        tabBarStyle: styles.tabBar,
        header: (props) => <Header {...props} />,
        tabBarButton: (props) => <Pressable {...props} />,
        tabBarIcon: ({ focused }) => (
          <Ionicons
            name={iconName(route.name)}
            color={iconColor(focused)}
            size={ICON_SIZE}
          />
        ),
        tabBarLabel: ({ focused }) => (
          <Text style={labelStyle(focused)}>{t(`routes.${route.name}`)}</Text>
        ),
      })}
    >
      <Tabs.Screen name='index' />
      <Tabs.Screen name='search' />
      <Tabs.Screen name='profile' />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    position: 'absolute',
    height: 60,
    marginHorizontal: 12,
    marginBottom: 16,
    borderRadius: 20,
  },
});
