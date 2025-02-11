import { Redirect } from 'expo-router';

import { APP_PATH } from '@/config/paths';

export default function RootIndex() {
  // TODO : handle auth redirection
  return <Redirect href={APP_PATH.HOMEPAGE} />;
}
