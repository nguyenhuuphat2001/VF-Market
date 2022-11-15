import React from 'react';

import {StyleSheet, TouchableOpacity} from 'react-native';
import {COLORS, MONT_REGULAR} from '@/theme/index';
import Text from '../Text';
import Icon from 'react-native-vector-icons/MaterialIcons';

const FavoriteButton = ({onPress, isFavorite = false}) => {
  return (
    <TouchableOpacity style={[styles.left, styles.btnCircle]} onPress={onPress}>
      {isFavorite ? (
        <Icon name="favorite" style={[styles.icon, {color: COLORS.favorite}]} />
      ) : (
        <Icon
          name="favorite-border"
          style={[styles.icon, {color: COLORS.sub_text}]}
        />
      )}
    </TouchableOpacity>
  );
};

export default FavoriteButton;

const styles = StyleSheet.create({
  btnCircle: {
    flex: 1,
    width: 40,
    height: 40,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    backgroundColor: COLORS.gray_light,
    flexDirection: 'row',
  },
  icon: {
    fontSize: 24,
  },
});
