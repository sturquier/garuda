import { StatusBar as ExpoStatusBar, StatusBarProps } from 'expo-status-bar';

import { COLORS } from '@/theme/colors';

export const StatusBar = ({ ...props }: StatusBarProps) => {
  return (
    <ExpoStatusBar
      translucent
      backgroundColor={COLORS.brown}
      style='light'
      {...props}
    />
  );
};
