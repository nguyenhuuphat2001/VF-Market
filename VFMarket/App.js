import React, {useEffect} from 'react';

import {NavigationContainer} from '@react-navigation/native';

import Navigator from '@/navigation/index';

import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {isMountedRef, navigationRef} from '@/navigation/navigationUtils';
import {store, persistor} from '@/store/index';
import Toast, {BaseToast, ErrorToast} from 'react-native-toast-message';
import {OPENSANS_SEMIBOLD} from './assets/FontConfig';

const App = () => {
  console.disableYellowBox = true;

  if (!__DEV__) {
    console.log = () => {};
    console.warn = () => {};
    console.error = () => {};
  }

  useEffect(() => {
    isMountedRef.current = true;

    return () => (isMountedRef.current = false);
  }, []);

  const toastConfig = {
    /*
      Overwrite 'success' type,
      by modifying the existing `BaseToast` component
    */
    success: props => (
      <BaseToast
        {...props}
        style={{borderLeftWidth: 0, borderRadius: 30}}
        contentContainerStyle={{
          borderColor: 'green',
          borderWidth: 2,
          borderRadius: 30,
          overflow: 'hidden',
          alignItems: 'center',
        }}
        text1Style={{
          fontSize: 15,
          fontWeight: '400',
        }}
      />
    ),
    /*
      Overwrite 'error' type,
      by modifying the existing `ErrorToast` component
    */
    error: props => (
      <ErrorToast
        {...props}
        style={{
          borderLeftWidth: 0,
          borderRadius: 10,
          width: '90%',
          maxHeight: 40,
          marginTop: 10,
        }}
        contentContainerStyle={{
          borderRadius: 10,
          overflow: 'hidden',
          alignItems: 'center',
          width: '100%',
        }}
        text1Style={{
          fontSize: 17,
          textAlign: 'center',
          color: 'red',
          fontWeight: '400',
          fontFamily: OPENSANS_SEMIBOLD,
        }}
        text2Style={{
          fontSize: 15,
          textAlign: 'center',
        }}
      />
    ),
    /*
      Or create a completely new type - `tomatoToast`,
      building the layout from scratch.
  
      I can consume any custom `props` I want.
      They will be passed when calling the `show` method (see below)
    */
    tomatoToast: ({text1, props}) => (
      <View style={{height: 10, width: '100%', backgroundColor: 'tomato'}}>
        <Text>{text1}</Text>
        <Text>{props.uuid}</Text>
      </View>
    ),
  };

  return (
    <>
      <Provider store={store}>
        {/* <PersistGate persistor={persistor}> */}

        <NavigationContainer ref={navigationRef}>
          {/* <ToastManager /> */}

          <Navigator />
        </NavigationContainer>
        {/* </PersistGate > */}
      </Provider>
      <Toast config={toastConfig} position="top" />
    </>
  );
};

export default App;
