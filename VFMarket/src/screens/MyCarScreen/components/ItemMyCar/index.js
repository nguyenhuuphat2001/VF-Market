import React from 'react';

import {View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {COLORS, SPACING, OPENSANS_SEMIBOLD} from '@/theme/index';

import {SharedElement} from 'react-navigation-shared-element';

import Icon from 'react-native-vector-icons/MaterialIcons';
// arrow-drop-down

import Text from '@/components/Text';

import {MAIN_LOGO} from '@/assets/images';

const ItemMyCar = ({tokenId, name, image, price, currency}) => {
  return (
    <View style={styles.container}>
      <SharedElement id={`item.${tokenId}.photo`}>
        <View style={styles.containerImage}>
          <Image style={styles.image} resizeMode="cover" source={MAIN_LOGO} />
        </View>
      </SharedElement>
      <View style={styles.content}>
        <Text
          customStyle={{
            fontSize: 14,
            color: 'black',
            fontWeight: '500',
            padding: 5,
          }}>
          VF Nft #{tokenId}
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
    marginBottom: SPACING.medium,
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
    backgroundColor: 'silver',
  },
  content: {
    // marginLeft: 2,
    backgroundColor: COLORS.break_line,
    borderWidth: 1,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  image: {
    width: '100%',
    height: 100,
    maxHeight: 100,
    borderRadius: 10,
  },
});
