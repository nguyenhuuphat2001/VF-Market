import React, {StyleSheet} from 'react';
import {View, Text} from 'react-native';

// import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';

const MapScreen = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      {/* <MapView
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        style={styles.map}
        region={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}></MapView> */}
    </View>
  );
};

export default MapScreen;
