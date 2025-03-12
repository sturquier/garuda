import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import * as Font from 'expo-font';
import * as NavigationBar from 'expo-navigation-bar';
import { Slot } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import * as StatusBar from 'expo-status-bar';
import { useEffect, useState } from 'react';

import { fonts } from '@/config/fonts';
import { initI18n } from '@/config/i18n';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [isAppReady, setIsAppReady] = useState(false);
  const [queryClient] = useState(() => new QueryClient());

  const prepareApp = async (): Promise<void> => {
    await initI18n();
    await Font.loadAsync(fonts);

    StatusBar.setStatusBarTranslucent(true);
    StatusBar.setStatusBarBackgroundColor('transparent');
    StatusBar.setStatusBarStyle('dark');

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

  return (
    <QueryClientProvider client={queryClient}>
      <Slot />
    </QueryClientProvider>
  );
}
