import React from 'react';

import { View, StyleSheet } from 'react-native'
import { COLORS } from '@/theme/index';

const ContainerInput = ({
    children,
    customStyle
}) => {
    return <View style={[styles.container, styles.border, customStyle]}>
        {
            children
        }
    </View>
}

export default ContainerInput

const styles = StyleSheet.create({
    container: {
        padding: 15,
        width: '100%',
    },
    border: {
        borderWidth: 0.5,
        borderColor: COLORS.border_input,
        borderRadius: 10
    }
})