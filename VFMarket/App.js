import React from 'react';

import {NavigationContainer} from '@react-navigation/native';

import Navigator from '@/navigation/index';

const App = () => {
  console.disableYellowBox = true;

  if (!__DEV__) {
    console.log = () => {};
    console.warn = () => {};
    console.error = () => {};
  }
  return (
    <NavigationContainer>
      <Navigator />
    </NavigationContainer>
  );
};

export default App;
