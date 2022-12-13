import React from 'react';

import {StyleSheet, TouchableOpacity} from 'react-native';
import {COLORS, MONT_REGULAR, FONT_SIZE, SPACING} from '@/theme/index';
import Text from '../Text';
import BackButton from './BackButton';
import FavoriteButton from './FavoriteButton';
import Icon from 'react-native-vector-icons/MaterialIcons';

export {BackButton, FavoriteButton};

const Button = ({
  content,
  containerStyle,
  onPress,
  textStyle,
  isOutline,
  disabled,
  isLoading = false,
  iconLeft,
  iconRight,
}) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={!disabled ? onPress : () => {}}
      style={[
        styles.container,
        styles.border,
        containerStyle,
        isOutline && {backgroundColor: 'transparent'},
        disabled ? {opacity: 0.6} : {},
      ]}>
      {iconLeft && (
        <Icon
          name={iconLeft}
          style={{fontSize: FONT_SIZE.large, marginRight: SPACING.xs}}
        />
      )}
      <Text
        customStyle={{
          ...styles.text,
          color: isOutline ? COLORS.primary : 'white',
        }}>
        {isLoading ? 'Processing...' : content}
      </Text>
      {iconRight && (
        <Icon
          name={iconRight}
          style={{fontSize: FONT_SIZE.large, marginLeft: SPACING.xs}}
        />
      )}
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    padding: 15,
    width: '100%',
    backgroundColor: COLORS.primary,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  border: {
    borderWidth: 0.5,
    borderColor: COLORS.border_input,
    borderRadius: 10,
  },
  text: {
    fontFamily: MONT_REGULAR,
    fontSize: 15,
    fontWeight: '600',
    color: 'white',
    textAlign: 'center',
  },
  icon: {
    width: 20,
    height: 20,
  },
});
