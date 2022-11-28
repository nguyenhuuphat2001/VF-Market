import React, {useCallback, useRef, useMemo, useState} from 'react';

import {View, StyleSheet, TextInput, Pressable} from 'react-native';
import {COLORS, SPACING} from '@/theme/index';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const PasswordInput = ({
  label = 'label',
  value = 'value',
  placeholder = 'Mật khẩu',
  onChangeText,
}) => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleTogglePassword = () => setShowPassword(!showPassword);
  return (
    <View style={[styles.container, styles.border]}>
      <View style={styles.horizontal}>
        <TextInput
          secureTextEntry={!showPassword}
          placeholder={placeholder}
          onChangeText={onChangeText}
          placeholderTextColor={COLORS.border_input}
        />
        <Pressable onPress={handleTogglePassword}>
          {showPassword ? (
            <Icon name="eye" style={[styles.icon]} />
          ) : (
            <Icon name="eye-off" style={[styles.icon]} />
          )}
        </Pressable>
      </View>
    </View>
  );
};

export default PasswordInput;

const styles = StyleSheet.create({
  container: {
    padding: 15,
    width: '100%',
  },
  border: {
    borderWidth: 0.5,
    borderColor: COLORS.border_input,
    borderRadius: 10,
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
  },
  icon: {
    fontSize: 25,
    top: 2,
  },
});
