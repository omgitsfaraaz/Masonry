import React from 'react';
import RootNavigator from './src/navigator/RootNavigator';
import { NativeBaseProvider } from 'native-base';

const AppRoot = () => {
  return <RootNavigator />;
};

export const App = () => (
  <NativeBaseProvider>
    <AppRoot />
  </NativeBaseProvider>
)