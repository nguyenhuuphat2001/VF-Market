import React from 'react';

import {StyleSheet, TouchableOpacity} from 'react-native';
import {COLORS, MONT_REGULAR} from '@/theme/index';
import Text from '../Text';
import Icon from 'react-native-vector-icons/MaterialIcons';

const BackButton = ({onPress, isDark = false}) => {
  return (
    <TouchableOpacity
      style={[styles.left, styles.btn]}
      onPress={onPress}
      activeOpacity={0.5}>
      <Icon
        name="keyboard-backspace"
        style={[styles.icon, isDark && {color: 'white'}]}
      />
    </TouchableOpacity>
  );
};

export default BackButton;

const styles = StyleSheet.create({
  btn: {
    flex: 1,
    width: 100,
    padding: 5,
  },
  left: {
    alignItems: 'flex-start',
  },
  icon: {
    fontSize: 30,
  },
});
