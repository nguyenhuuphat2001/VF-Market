import {COLORS} from '@/theme/index';
import React from 'react';
import {View} from 'react-native';
import {SvgUri} from 'react-native-svg';

const AVATAR = 'https://avatars.dicebear.com/api/croodles/patrick.svg';
const Avatar = ({
  url = AVATAR,
  width = 30,
  height = 30,
  borderColor = COLORS.text,
  backgroundColor = COLORS.background,
}) => (
  <View
    // eslint-disable-next-line react-native/no-inline-styles
    style={{
      width: width,
      height: height,
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: 2,
      borderRadius: width / 2,
      borderColor: borderColor,
      backgroundColor,
    }}>
    <SvgUri width={width} height={height} uri={url} />
  </View>
);

export default Avatar;
