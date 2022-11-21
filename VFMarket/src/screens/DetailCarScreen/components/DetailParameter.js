import {View} from 'react-native';
import React from 'react';
import Text from '@/components/Text';
import {
  COLORS,
  SPACING,
  MONT_BOLD,
  FONT_SIZE,
  MONT_REGULAR,
} from '@/theme/index';

const DetailParameter = ({title, address, isOpen}) => {
  return (
    <View
      style={{
        padding: SPACING.innerContainer,
        borderBottomWidth: 1,
        borderBottomColor: COLORS.border_color,
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingBottom: SPACING.xs,
        }}>
        <Text
          customStyle={{
            fontFamily: MONT_BOLD,
            fontSize: FONT_SIZE.medium,
            lineHeight: SPACING.large,
          }}>
          Thông số chi tiết
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 10,
        }}>
        <View>
          <Text
            customStyle={{
              fontFamily: MONT_REGULAR,
              fontSize: FONT_SIZE.small,
              paddingVertical: 10,
            }}>
            Động cơ: 1
          </Text>
          <Text
            customStyle={{
              fontFamily: MONT_REGULAR,
              fontSize: FONT_SIZE.small,
              paddingVertical: 10,
            }}>
            Động cơ: 1
          </Text>
          <Text
            customStyle={{
              fontFamily: MONT_REGULAR,
              fontSize: FONT_SIZE.small,
              paddingVertical: 10,
            }}>
            Động cơ: 1
          </Text>
        </View>
        <View>
          <Text
            customStyle={{
              fontFamily: MONT_REGULAR,
              fontSize: FONT_SIZE.small,
              paddingVertical: 10,
            }}>
            Động cơ: 1
          </Text>
          <Text
            customStyle={{
              fontFamily: MONT_REGULAR,
              fontSize: FONT_SIZE.small,
              paddingVertical: 10,
            }}>
            Động cơ: 1
          </Text>
          <Text
            customStyle={{
              fontFamily: MONT_REGULAR,
              fontSize: FONT_SIZE.small,
              paddingVertical: 10,
            }}>
            Động cơ: 1
          </Text>
        </View>
      </View>
    </View>
  );
};

export default DetailParameter;
