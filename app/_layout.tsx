import * as Font from 'expo-font';
import * as NavigationBar from 'expo-navigation-bar';
import { Slot } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState } from 'react';

import { fonts } from '@/config/fonts';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [isAppReady, setIsAppReady] = useState(false);

  const prepareApp = async (): Promise<void> => {
    await Font.loadAsync(fonts);
    await Promise.all([
      NavigationBar.setVisibilityAsync('hidden'),
      NavigationBar.setBehaviorAsync('overlay-swipe'),
    ]);

    setIsAppReady(true);
  };

  useEffect(() => {
    prepareApp();
  }, []);

  useEffect(() => {
    if (isAppReady) {
      SplashScreen.hideAsync();
    }
  }, [isAppReady]);

  if (!isAppReady) {
    return null;
  }

  return <Slot />;
}
