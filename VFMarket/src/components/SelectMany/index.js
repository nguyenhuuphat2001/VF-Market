import React, { useCallback, useRef, useMemo, useState } from 'react';

import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { COLORS, SPACING } from '@/theme/index';

import Icon from 'react-native-vector-icons/MaterialIcons';
// arrow-drop-down

import ContainerInput from '../ContainerInput';

import Text from '../Text';

const DATA = [
    {
        name: 'GYM',
        value: 'gym'
    },
    {
        name: 'BOXING',
        value: 'boxing'
    },
    {
        name: 'YOGA',
        value: 'yoga'
    },
    {
        name: 'FOOTBALL',
        value: 'football'
    }
]

const SelectMany = ({
    label = 'label',
    value = 'value',
    onChange
}) => {

    const renderSelected = (name, isSelected, value) => (
        <TouchableOpacity style={[styles.box, isSelected && styles.isActive]}>
            <Text customStyle={{ color: isSelected ? COLORS.gray_light : COLORS.primary, fontWeight: '500' }}>{name}</Text>
        </TouchableOpacity>
    )

    return <View style={styles.container}>
        {
            DATA.map((item, index) => renderSelected(item.name, !!(index % 2), item.value))
        }
    </View>

}

export default SelectMany

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between'
    },

    box: {
        backgroundColor: COLORS.border_color,
        width: '30%',
        marginTop: 10,
        padding: SPACING.small,
        alignItems: 'center',
        borderRadius: 10
    },

    isActive: {
        backgroundColor: COLORS.primary
    }

})