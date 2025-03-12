import * as Localization from 'expo-localization';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationEn from '@/locales/en/en.json';
import translationFr from '@/locales/fr/fr.json';

const resources = {
  en: { translation: translationEn },
  fr: { translation: translationFr },
};

const DEFAULT_LOCALE_FALLBACK = 'fr';

const getDefaultLocale = (): string => {
  const locales = Localization.getLocales();

  if (!locales.length) {
    return DEFAULT_LOCALE_FALLBACK;
  }

  return locales[0].languageCode ?? DEFAULT_LOCALE_FALLBACK;
};

export const initI18n = async (): Promise<void> => {
  i18n.use(initReactI18next).init({
    resources,
    lng: getDefaultLocale(),
    interpolation: {
      escapeValue: false,
    },
  });
};
