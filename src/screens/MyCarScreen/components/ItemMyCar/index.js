import React from 'react';

import {View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {COLORS, SPACING, OPENSANS_SEMIBOLD} from '@/theme/index';

import {SharedElement} from 'react-navigation-shared-element';

import Icon from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';
// arrow-drop-down

import Text from '@/components/Text';

import {MAIN_LOGO} from '@/assets/images';

const ItemMyCar = ({tokenId, name, image, price, currency}) => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#000066', '#990033']}
        style={styles.linearGradient}
        start={{x: 0.5, y: 0.5}}>
        <Image style={styles.image} resizeMode="cover" source={MAIN_LOGO} />
      </LinearGradient>
      <View style={styles.content}>
        <Text
          customStyle={{
            fontSize: 14,
            color: 'black',
            fontWeight: '500',
            padding: 5,
            marginLeft: 5,
          }}>
          ID #{tokenId}
        </Text>
        {/* <Text
          customStyle={{
            fontSize: 12,
            color: 'black',
            fontWeight: '500',
            padding: 5,
          }}>
          VinFast VF8
        </Text> */}
      </View>
    </View>
  );
};

export default ItemMyCar;

const styles = StyleSheet.create({
  container: {
    alignContent: 'flex-start',
    maxHeight: 280,
    marginBottom: SPACING.large,
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    // borderRadius: 10,
  },
  containerImage: {
    borderWidth: 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    // borderRadius: 10,
    // marginBottom: 5,
    borderColor: COLORS.border_input,
    // backgroundColor: linear - gradient(blue, red),
  },
  content: {
    // marginLeft: 2,
    width: 120,
    backgroundColor: COLORS.break_line,
    borderWidth: 1,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  image: {
    width: '100%',
    height: 110,
    maxHeight: 110,
    borderRadius: 10,
    marginLeft: 4,
  },
  linearGradient: {
    // alignContent: 'flex-start',
    borderWidth: 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    // borderRadius: 10,
    // marginBottom: 5,
    borderColor: COLORS.border_input,
    height: 120,
    width: 120,
  },
});
