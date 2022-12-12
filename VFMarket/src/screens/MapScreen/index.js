import React, {useState, useEffect} from 'react';
import {StyleSheet, Appearance, SafeAreaView, View} from 'react-native';

import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';

const MapScreen = () => {
  const [position, setPosition] = useState({});

  useEffect(() => {
    Geolocation.getCurrentPosition(pos => {
      // const crd = pos.coords;
      setPosition({
        // latitude: crd.latitude,
        // longitude: crd.longitude,
        latitude: 10,
        longitude: 106,
        latitudeDelta: 0.8567,
        longitudeDelta: 0.7727,
      });
    });
  });

  return (
    <SafeAreaView
      style={{
        backgroundColor:
          Appearance.getColorScheme() === 'dark' ? 'black' : 'white',
      }}>
      <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        // mapType="satellite"
        initialRegion={position}
        showsUserLocation={true}
        showsMyLocationButton={true}
        followsUserLocation={true}
        showsCompass={true}
        scrollEnabled={true}
        zoomEnabled={true}
        pitchEnabled={true}
        rotateEnabled={true}>
        <Marker title="Yor are here" coordinate={position} />
      </MapView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  map: {
    height: '100%',
    width: '100%',
  },
  line: {
    width: 75,
    height: 4,
    backgroundColor: 'grey',
    alignSelf: 'center',
    marginVertical: 15,
    borderRadius: 2,
  },
});

export default MapScreen;

// const styles = StyleSheet.create({
//   container: {
//     ...StyleSheet.absoluteFillObject,
//     height: 400,
//     width: 400,
//     justifyContent: 'flex-end',
//     alignItems: 'center',
//   },
//   map: {
//     ...StyleSheet.absoluteFillObject,
//   },
// });
