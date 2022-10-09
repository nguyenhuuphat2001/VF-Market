import { StyleSheet } from 'react-native';
import { OPENSANS_BOLD, COLORS, SPACING, MONT_REGULAR } from '@/theme/index';

import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'flex-start',
        // alignItems: 'center',
        backgroundColor: COLORS.background,
        // paddingHorizontal: SPACING.innerContainer
    },
    innerContainer: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: COLORS.background,
        paddingHorizontal: SPACING.innerContainer
    },
    image: {
        width: wp(65),
        height: wp(25),
        marginVertical: 10
    },
    text: {
        fontFamily: OPENSANS_BOLD,
        marginTop: 15,
        fontSize: 17,
        color: COLORS.background,
    },
    input: {
        color: COLORS.primary_text,
        borderRadius: 10

    },
    underlineStyleHighLighted: {
        borderRadius: 10
    },
    containerNote: {
        width: '60%',
        alignItems: 'center'
    },
    subText: {
        color: COLORS.border_input,
        fontSize: 14,
        textAlign: 'center',
        fontFamily: MONT_REGULAR,
        lineHeight: 20
    },
    registerContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        // marginVertical: 30,
        marginTop: 10,
        marginBottom: 15
    },
    register: {

    },
    highLightText: {
        color: COLORS.orange
    },
    title: {
        fontSize: 20,
        fontWeight: '600',
        textAlign: 'left'
    },
    marginTopLarge: {
        marginTop: SPACING.large
    },
    marginTopMedium: {
        marginTop: SPACING.medium
    },
    note: {
        color: COLORS.primary_text,
        fontSize: 12,
        textAlign: 'right',
        fontFamily: MONT_REGULAR,
        marginLeft: 3,
        marginTop: 5
    },
    phone: {
        fontWeight: "500",
        color: 'black'
    },
    time: {
        fontSize: 18,
        fontWeight: '600',
    }

});

export default styles;
