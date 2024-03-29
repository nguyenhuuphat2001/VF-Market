import React, {useCallback, useRef, useMemo, useState} from 'react';

import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {COLORS, SPACING} from '@/theme/index';

import Icon from 'react-native-vector-icons/MaterialIcons';
// arrow-drop-down

import ContainerInput from '../ContainerInput';

import Text from '../Text';

const DATA = [
  {
    id: '1',
    name: 'Động cơ điện',
    value: 'electronic',
  },
  {
    id: '2',
    name: 'Động cơ xăng',
    value: 'diesel',
  },
];

const SelectMany = ({label = 'label', value = 'value', onChange}) => {
  const renderSelected = (id, name, isSelected, value) => (
    <TouchableOpacity
      style={[styles.box, isSelected && styles.isActive]}
      key={id}>
      <Text
        customStyle={{
          color: isSelected ? COLORS.gray_light : COLORS.primary,
          fontWeight: '500',
        }}>
        {name}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {DATA.map((item, index) =>
        renderSelected(item.id, item.name, !!(index % 2), item.value),
      )}
    </View>
  );
};

export default SelectMany;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },

  box: {
    backgroundColor: COLORS.border_color,
    width: '45%',
    marginTop: 10,
    padding: SPACING.small,
    alignItems: 'center',
    borderRadius: 10,
  },

  isActive: {
    backgroundColor: COLORS.primary,
  },
});
