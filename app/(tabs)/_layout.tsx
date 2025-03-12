import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import React from 'react';
import { ColorValue } from 'react-native';

import { Header } from '@/components';
import { COLORS } from '@/theme/colors';
import { LAYOUT } from '@/theme/layout';

export default function TabLayout() {
  const ICON_SIZE = 28;

  const iconColor = (focused: boolean): ColorValue =>
    focused ? COLORS.brown : COLORS.black;

  return (
    <Tabs
      screenOptions={{
        header: (props) => <Header {...props} />,
        tabBarShowLabel: false,
        sceneStyle: LAYOUT.page,
      }}
    >
      <Tabs.Screen
        name='index'
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name='home-outline'
              color={iconColor(focused)}
              size={ICON_SIZE}
            />
          ),
        }}
      />
      <Tabs.Screen
        name='search'
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name='search-outline'
              color={iconColor(focused)}
              size={ICON_SIZE}
            />
          ),
        }}
      />
      <Tabs.Screen
        name='profile'
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name='person-circle-outline'
              color={iconColor(focused)}
              size={ICON_SIZE}
            />
          ),
        }}
      />
    </Tabs>
  );
}
