import {
  COLORS,
  SPACING,
  OPENSANS_BOLD,
  FONT_SIZE,
  OPENSANS_SEMIBOLD_ITALIC,
} from '@/theme/index';
import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Text from '../Text';

import Icon from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';

//keyboard-backspace
const Header = ({
  renderIconLeft,
  onPressLeft,
  renderIconRight,
  noActionRight,
  title,
  isDark,
  noActionLeft,
  fontSizeTitle = FONT_SIZE.medium,
}) => {
  const navigation = useNavigation();

  const goBack = () => navigation.pop();

  return (
    <>
      <SafeAreaView
        edges={['top']}
        mode="padding"
        style={[styles.safeArea, isDark && {backgroundColor: 'black'}]}
      />
      <View style={[styles.header, isDark && {backgroundColor: 'black'}]}>
        <TouchableOpacity
          style={[styles.left, styles.btn]}
          onPress={onPressLeft || goBack}>
          {!noActionLeft &&
            (renderIconLeft ? (
              renderIconLeft()
            ) : (
              <Icon
                name="keyboard-backspace"
                style={[styles.icon, isDark && {color: 'white'}]}
              />
            ))}
        </TouchableOpacity>
        <Text
          customStyle={{
            ...styles.txtBold,
            ...styles.center,
            fontSize: fontSizeTitle,
          }}>
          {title}
        </Text>

        <TouchableOpacity style={[styles.right, styles.btn]}>
          {renderIconRight && renderIconRight()}
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  center: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  icon: {
    fontSize: 30,
  },
  btn: {
    flex: 1,
    width: 100,
    padding: 5,
  },
  safeArea: {},
  flexRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: SPACING.medium,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: SPACING.small,
    alignItems: 'center',
  },
  txtBold: {
    fontFamily: OPENSANS_BOLD,
    fontSize: FONT_SIZE.large,
  },
  txtItalic: {
    fontFamily: OPENSANS_SEMIBOLD_ITALIC,
    fontSize: FONT_SIZE.small,
    color: COLORS.text_secondary,
  },
  left: {
    alignItems: 'flex-start',
  },
  right: {
    alignItems: 'flex-end',
    textAlign: 'right',
  },
});

export default Header;
