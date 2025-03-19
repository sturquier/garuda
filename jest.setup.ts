jest.mock('expo-image', () => ({
  Image: () => 'Image',
}));

jest.mock('expo-status-bar', () => ({
  StatusBar: jest.fn().mockReturnValue(null),
}));

jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (value: string) => value,
  }),
}));
