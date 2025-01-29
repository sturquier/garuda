import { ColorValue } from 'react-native';

const createColors = <Colors extends Record<string, ColorValue>>(
  colors: Colors,
) => colors;

export const COLORS = createColors({
  white: '#ffffff',
  black: '#000000',
  green: '#ccd5ae',
  greenLight: '#e9edc9',
  yellowLight: '#fefae0',
  brown: '#d4a373',
  brownLight: '#faedcd',
  pinkDark: '#9e7682',
});
