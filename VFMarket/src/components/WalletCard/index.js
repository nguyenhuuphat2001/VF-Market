import React from 'react';

import {View, StyleSheet} from 'react-native';

import {MONT_REGULAR, MONT_BOLD, COLORS} from '@/theme/index';
import Text from '@/components/Text';
import Button from '@/components/Button';

export default () => {
  return (
    <View
      style={{
        width: '100%',
        height: 200,
        backgroundColor: 'black',
        position: 'relative',
        marginTop: 20,
        marginBottom: 20,
        borderRadius: 10,
      }}>
      <View style={styles.circleTop} />
      <View style={styles.circleTop2} />
      <View style={styles.circleBottom} />
      <View style={styles.circleBottom2} />
      <View style={styles.circleBottom3} />
      {/* <Text
        customStyle={{
          fontFamily: MONT_BOLD,
          fontSize: 20,
          fontWeight: '500',
          color: 'white',
          marginTop: 10,
          marginLeft: 10,
        }}>
        Wallet
      </Text> */}
      <View
        style={{
          marginTop: 80,
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Button
          containerStyle={{
            right: 10,
            width: 200,
            borderRadius: 10,
          }}
          content={'Kết nối ví'}
          // onPress={() => navigate(screen.ORDER_PACKAGE, {gymId: data?._id})}
        />
      </View>

      {/* <View style={styles.conse} /> */}
      {/* <View style={{position: 'absolute', top: -5}}>
        <Text customStyle={{fontSize: 18, fontWeight: '200', color: 'ư'}}>
          Wallet
        </Text>
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  circleTop: {
    position: 'absolute',
    width: 20,
    height: 70,
    left: 310,
    top: 10,
    backgroundColor: COLORS.primary,
    borderRadius: 4,
    zIndex: 1,
    opacity: 0.9,
  },
  circleTop2: {
    position: 'absolute',
    width: 20,
    height: 75,
    left: 300,
    top: 40,
    backgroundColor: COLORS.primary,
    borderRadius: 4,
    zIndex: 1,
    opacity: 0.8,
  },
  circleBottom: {
    position: 'absolute',
    width: 60,
    height: 60,
    left: 12,
    top: 125,
    backgroundColor: COLORS.primary,
    borderRadius: 100,
    zIndex: -1,
    opacity: 0.9,
  },
  circleBottom2: {
    position: 'absolute',
    width: 35,
    height: 35,
    left: 5,
    top: 160,
    backgroundColor: COLORS.primary,
    borderRadius: 100,
    zIndex: -2,
    opacity: 0.8,
  },
  circleBottom3: {
    position: 'absolute',
    width: 20,
    height: 20,
    left: 0,
    top: 180,
    backgroundColor: COLORS.primary,
    borderRadius: 100,
    zIndex: -3,
    opacity: 0.7,
  },
});
