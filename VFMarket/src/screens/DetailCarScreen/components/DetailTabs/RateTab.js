import { View, FlatList, Image } from 'react-native'
import React from 'react'
import Text from '@/components/Text';
import { Rating, AirbnbRating } from 'react-native-ratings';
import { COLORS, SPACING, MONT_BOLD, FONT_SIZE, MONT_REGULAR, MONT_MEDIUM } from '@/theme/index';
import { AVATAR } from '@assets/images';

const rates = [
  {
    avatar: AVATAR,
    name: 'Long Nguyen',
    rate: 5,
    comment: 'Dịch vụ tốt, không gian đẹp, máy móc ổn. Sẽ tiếp tục sử dụng dịch vụ.',
    date: '11/1/2022  12:30'
  },
  {
    avatar: AVATAR,
    name: 'Long Nguyen',
    rate: 5,
    comment: 'Dịch vụ tốt, không gian đẹp, máy móc ổn. Sẽ tiếp tục sử dụng dịch vụ.',
    date: '11/1/2022  12:30'
  },
  {
    avatar: AVATAR,
    name: 'Long Nguyen',
    rate: 5,
    comment: 'Dịch vụ tốt, không gian đẹp, máy móc ổn. Sẽ tiếp tục sử dụng dịch vụ.',
    date: '11/1/2022  12:30'
  }
]

const renderRateItem = ({ item }) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'flex-start',
        paddingBottom: SPACING.small,
        alignItems: 'center'
      }}
    >
      <Image
        source={item.avatar}
        resizeMode='contain'
        style={{
          width: 28,
          height: 28,
          borderRadius: 100,
          paddingTop: SPACING.medium
        }}
      />

      <View style={{ paddingLeft: SPACING.small }}>

        <Text
          customStyle={{
            fontSize: FONT_SIZE.small,
            paddingTop: SPACING.xs,
            fontFamily: MONT_MEDIUM,
            paddingBottom: 0
          }}>
          {item.name}
        </Text>

        <View style={{
          flexDirection: 'row',
          justifyContent: 'flex-start',
        }}>
          <Text
            customStyle={{
              fontSize: FONT_SIZE.tiny,
              paddingTop: SPACING.xs,
              fontFamily: MONT_MEDIUM,
              color: COLORS.orange
            }}>
            {item.rate.toFixed(1)}
          </Text>
          <Text
            customStyle={{
              fontSize: FONT_SIZE.tiny,
              paddingTop: SPACING.xs,
              paddingLeft: SPACING.xs,
            }}>
            {item.date}
          </Text>
        </View>
        <View style={{
          paddingBottom: SPACING.small,
          borderBottomWidth: 1,
          borderBottomColor: COLORS.border_color,
        }}>

          <Text
            customStyle={{
              fontSize: FONT_SIZE.small,
              paddingTop: SPACING.xs,
            }}>
            {item.comment}
          </Text>
        </View>
      </View>
    </View>
  )
}

const RateList = ({ rates }) => {
  return (
    <FlatList
      data={rates}
      renderItem={renderRateItem}
      keyExtractor={item => item.id}
    />
  )
}


const RateTab = () => {
  return (

    <View style={{ paddingVertical: SPACING.innerContainer }}>
      <View
        style={{
          justifyContent: 'flex-start',
          flexDirection: 'row',
          alignItems: 'center',
          paddingVertical: SPACING.small
        }}>
        <Rating
          type='custom'
          ratingCount={5}
          imageSize={20}
          onFinishRating={this.ratingCompleted}
          ratingColor={COLORS.orange}
          jumpValue={0.5}
          count={4}
        />

        <Text
          customStyle={{
            fontSize: FONT_SIZE.medium,
            color: COLORS.orange,
            fontFamily: MONT_BOLD,
            paddingLeft: SPACING.xs
          }}>
          4.5
        </Text>

        <Text
          customStyle={{
            fontSize: FONT_SIZE.small,
            paddingLeft: SPACING.xs
          }}>
          (53 đánh giá)
        </Text>

        {/* RateList */}
      </View>

      <RateList rates={rates} />
    </View>
  )
}

export default RateTab