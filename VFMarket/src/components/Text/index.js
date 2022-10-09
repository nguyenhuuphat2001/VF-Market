import React from 'react';

import { Text, StyleSheet } from 'react-native';
import { MONT_REGULAR, COLORS } from '@/theme/index'

export default ({
    children,
    customStyle
}) => {
    console.log(customStyle)
    return <Text style={[styles.text, customStyle]} >
        {
            children
        }
    </Text>
}

const styles = StyleSheet.create({
    text: {
        fontFamily: MONT_REGULAR,
        fontSize: 12,
        color: COLORS.primary_text
    }
})

