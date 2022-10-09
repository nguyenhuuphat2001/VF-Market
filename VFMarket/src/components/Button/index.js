import React from 'react';

import {StyleSheet, TouchableOpacity} from 'react-native';
import {COLORS, MONT_REGULAR} from '@/theme/index';
import Text from '../Text';
const Button = ({content, containerStyle, onPress, textStyle, isOutline}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.container,
        styles.border,
        containerStyle,
        isOutline && {backgroundColor: 'transparent'},
      ]}>
      <Text
        customStyle={{
          ...styles.text,
          color: isOutline ? COLORS.primary : 'white',
        }}>
        {content}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    padding: 15,
    width: '100%',
    backgroundColor: COLORS.primary,
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
});
