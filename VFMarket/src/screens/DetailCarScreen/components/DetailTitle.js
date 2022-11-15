import { View } from 'react-native'
import React from 'react'
import Text from '@/components/Text';
import { COLORS, SPACING, MONT_BOLD, FONT_SIZE, MONT_REGULAR } from '@/theme/index';

const StatusDot = ({ isOpen }) => {
  return (
    <View
      style={{
        height: SPACING.xs,
        width: SPACING.xs,
        backgroundColor: isOpen ? COLORS.green : 'red',
        borderRadius: 100,
        marginRight: SPACING.xs
      }}></View>
  )
}

const StatusTag = ({ isOpen }) => {
  return (
    <Text
      customStyle={{
        fontSize: FONT_SIZE.small
      }}>
      {isOpen ? 'Đang mở cửa' : 'Đóng cửa'}
    </Text>
  )
}

const DetailTitle = ({ title, address, isOpen }) => {
  return (
    <View
      style={{
        padding: SPACING.innerContainer,
        borderBottomWidth: 1,
        borderBottomColor: COLORS.border_color
      }}
    >
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        <Text
          customStyle={{
            fontFamily: MONT_BOLD,
            fontSize: FONT_SIZE.medium + 2
          }}>
          {title}
        </Text>
        <View style={{
          flexDirection: 'row',
          alignItems: 'center'
        }}>
          <StatusDot isOpen={isOpen} />
          <StatusTag isOpen={isOpen} />
        </View>
      </View>
      <Text
        customStyle={{
          fontFamily: MONT_REGULAR,
          fontSize: FONT_SIZE.tiny,
          paddingTop: SPACING.xs,
          color: COLORS.sub_text
        }}>
        {address}
      </Text>
    </View >
  )
}

export default DetailTitle