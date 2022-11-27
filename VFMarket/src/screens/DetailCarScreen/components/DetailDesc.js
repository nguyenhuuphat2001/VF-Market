import {View, Button, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Text from '@/components/Text';
import {ARROW_DOWN} from '@/assets/images';
import {
  COLORS,
  SPACING,
  MONT_BOLD,
  FONT_SIZE,
  MONT_REGULAR,
  MONT_MEDIUM,
} from '@/theme/index';
// arrow-drop-down

const getFormatTime = time => {
  if (time < 12) return `${time}:00 AM`;
  else return `${time}:00 PM`;
};

const ReadMoreButton = ({readMore, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Icon
        name={readMore ? 'expand-more' : 'navigate-next'}
        style={{fontSize: FONT_SIZE.large, color: COLORS.sub_text}}
      />
    </TouchableOpacity>
  );
};

const DetailDesc = ({description, openTime, closeTime}) => {
  const [text, setText] = useState(description.slice(0, 100));
  const [readMore, setReadMore] = useState(false);

  const pressReadMore = () => {
    if (!readMore) {
      setText(description);
      setReadMore(true);
    } else {
      setText(description.slice(0, 100));
      setReadMore(false);
    }
  };

  return (
    <View
      style={{
        padding: SPACING.innerContainer,
        borderBottomWidth: 1,
        borderBottomColor: COLORS.border_color,
      }}>
      <TouchableOpacity onPress={pressReadMore} activeOpacity={1}>
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
            Mô tả
          </Text>
          <ReadMoreButton readMore={readMore} onPress={pressReadMore} />
        </View>

        <Text
          customStyle={{
            fontSize: FONT_SIZE.small,
            lineHeight: SPACING.large,
          }}>
          {text}
          {!readMore && '...'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default DetailDesc;
