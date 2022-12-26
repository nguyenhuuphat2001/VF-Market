import {StyleSheet} from 'react-native';
import {OPENSANS_BOLD, COLORS, SPACING, MONT_REGULAR} from '@/theme/index';

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: COLORS.background,
    paddingHorizontal: SPACING.innerContainer,
  },
  image: {
    width: wp(75),
    height: wp(35),
    marginVertical: hp(4),
  },
  text: {
    fontFamily: OPENSANS_BOLD,
    marginTop: 15,
    fontSize: 17,
    color: COLORS.background,
  },
  input: {
    marginVertical: 5,
  },
  subText: {
    color: COLORS.primary_text,
    fontSize: 12,
    textAlign: 'right',
    fontFamily: MONT_REGULAR,
  },
  btnForget: {
    width: '100%',
    alignItems: 'flex-end',
    marginTop: 2,
    marginBottom: 10,
    paddingVertical: 10,
  },
  registerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 40,
  },
  register: {},
  highLightText: {
    color: COLORS.orange,
  },
});

export default styles;
