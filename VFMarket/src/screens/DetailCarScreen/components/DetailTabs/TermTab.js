import { View, ScrollView } from 'react-native'
import Text from '@/components/Text';
import React from 'react'
import { COLORS, SPACING, MONT_BOLD, FONT_SIZE, MONT_REGULAR, MONT_MEDIUM } from '@/theme/index';

const TermTab = () => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{
        paddingTop: SPACING.innerContainer
      }}>
      <Text
        customStyle={{
          fontSize: FONT_SIZE.medium,
          lineHeight: SPACING.large,
          paddingBottom: 5 * SPACING.innerContainer,
        }}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </Text>
    </ScrollView>
  )
}

export default TermTab