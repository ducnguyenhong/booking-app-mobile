import { Suspense, useEffect } from 'react';
import { LogBox, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
// import SplashScreen from 'react-native-splash-screen';
import Toast from 'react-native-toast-message';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ApiProvider } from '@ultra-ui/api';
import dayjs from 'dayjs';
import 'dayjs/locale/vi';

import customParseFormat from 'dayjs/plugin/customParseFormat';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import relativeTime from 'dayjs/plugin/relativeTime';

import ENV from 'react-native-config';

import { RecoilRoot, useRecoilValue } from 'recoil';

import AppRoute from './src/routes';
import { tokenState } from './src/states/recoil';
import { toastConfig } from './src/utils/helper';

// Extend dayjs plugin
dayjs.extend(customParseFormat);
dayjs.extend(localizedFormat);
dayjs.extend(relativeTime);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

const Main = () => {
  const token = useRecoilValue(tokenState);

  return (
    <ApiProvider
      config={{
        token,
        baseURL: ENV.API_URL,
      }}>
      <SafeAreaProvider>
        <AppRoute />
        <Toast config={toastConfig} />
      </SafeAreaProvider>
    </ApiProvider>
  );
};

const App = () => {
  useEffect(() => {
    // SplashScreen.hide();
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  }, []);

  return (
    <Suspense fallback={<View />}>
      <RecoilRoot>
        <QueryClientProvider client={queryClient}>
          <Main />
        </QueryClientProvider>
      </RecoilRoot>
    </Suspense>
  );
};

export default App;
