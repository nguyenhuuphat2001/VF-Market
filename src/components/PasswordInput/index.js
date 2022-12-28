import React, {useCallback, useRef, useMemo, useState} from 'react';

import {View, StyleSheet, TextInput, Pressable} from 'react-native';
import {COLORS, SPACING} from '@/theme/index';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const PasswordInput = ({
  label = 'label',
  value = 'value',
  placeholder = 'Password',
  onChangeText,
}) => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleTogglePassword = () => setShowPassword(!showPassword);
  return (
    <View style={[styles.container]}>
      <View style={styles.horizontal}>
        <TextInput
          secureTextEntry={!showPassword}
          placeholder={placeholder}
          onChangeText={onChangeText}
          placeholderTextColor={COLORS.border_input}
        />
      </View>

      <Pressable onPress={handleTogglePassword}>
        {showPassword ? (
          <Icon name="eye" style={[styles.icon]} />
        ) : (
          <Icon name="eye-off" style={[styles.icon]} />
        )}
      </Pressable>
    </View>
  );
};

export default PasswordInput;

const styles = StyleSheet.create({
  container: {
    padding: 15,
    width: '100%',
    borderWidth: 0.5,
    borderColor: COLORS.border_input,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  horizontal: {
    width: '80%',
  },
  icon: {
    fontSize: 25,
    top: 2,
  },
});
