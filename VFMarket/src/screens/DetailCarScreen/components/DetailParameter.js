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

const DetailParameter = () => {
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
          Detail
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          // justifyContent: 'space-between',
          // paddingHorizontal: 10,
        }}>
        <View style={{width: '50%'}}>
          <Text
            customStyle={{
              fontFamily: MONT_REGULAR,
              fontSize: FONT_SIZE.small,
              paddingVertical: 10,
            }}>
            Engine: Diesel
          </Text>
          <Text
            customStyle={{
              fontFamily: MONT_REGULAR,
              fontSize: FONT_SIZE.small,
              paddingVertical: 10,
            }}>
            Seat: 7
          </Text>
          <Text
            customStyle={{
              fontFamily: MONT_REGULAR,
              fontSize: FONT_SIZE.small,
              paddingVertical: 10,
            }}>
            Size: 4750x1900x1660mm
          </Text>
        </View>
        <View style={{width: '50%'}}>
          <Text
            customStyle={{
              fontFamily: MONT_REGULAR,
              fontSize: FONT_SIZE.small,
              paddingVertical: 10,
            }}>
            Wattage: 402 hp
          </Text>
          <Text
            customStyle={{
              fontFamily: MONT_REGULAR,
              fontSize: FONT_SIZE.small,
              paddingVertical: 10,
            }}>
            Air bag: 11
          </Text>
          <Text
            customStyle={{
              fontFamily: MONT_REGULAR,
              fontSize: FONT_SIZE.small,
              paddingVertical: 10,
            }}>
            Drive: AWD - 4 wheel
          </Text>
        </View>
      </View>
    </View>
  );
};

export default DetailParameter;
