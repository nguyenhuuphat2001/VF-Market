import React, { useCallback, useRef, useMemo, useState } from 'react';

import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { COLORS } from '@/theme/index';

import Icon from 'react-native-vector-icons/MaterialIcons';
// arrow-drop-down

import ContainerInput from '../ContainerInput';

import Text from '../Text';

const SelectInput = ({
    label = 'label',
    value = 'value',
    onChange
}) => {

    return <ContainerInput customStyle={styles.input}>
        <Text customStyle={{ fontWeight: '400', color: COLORS.border_input, fontSize: 12 }}>{label}</Text>
        <View style={styles.horizontal}>
            <Text customStyle={{ color: 'black', fontSize: 16 }}>{value}</Text>
            <Icon name="arrow-drop-down" style={[styles.icon]} />
        </View>
    </ContainerInput>

}

export default SelectInput

const styles = StyleSheet.create({
    container: {
        padding: 15,
        width: '100%',
    },
    btn: {
        width: '100%',
        height: '100%'
    },
    border: {
        borderWidth: 0.5,
        borderColor: COLORS.border_input,
        borderRadius: 10
    },
    horizontal: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        alignItems: 'flex-end',
        marginTop: 2
    },
    input: {
        marginVertical: 5
    },
    icon: {
        fontSize: 25,
        top: 3
    },
    label: {

    }
})