import { render } from '@testing-library/react-native';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';

import { StatusBar } from './StatusBar';

describe('StatusBar', () => {
  it('renders well', () => {
    render(<StatusBar />);

    expect(ExpoStatusBar).toBeDefined();
  });
});
