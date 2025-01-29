import { StyleSheet, TextStyle } from 'react-native';

const createTexts = <Texts extends Record<string, TextStyle>>(texts: Texts) =>
  StyleSheet.create(texts);

export const TEXTS = createTexts({
  title: {
    fontFamily: 'Poppins-SemiBold',
    fontWeight: 600,
    fontSize: 32,
    lineHeight: 40,
  },
  body: {
    fontFamily: 'Poppins-Regular',
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 22,
  },
});
