import {StyleSheet} from 'react-native';
import {OPENSANS_BOLD, COLORS} from '@/theme/index';

import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.background,
  },
  image: {
    width: wp(30),
    height: wp(30),
  },
  icon: {
    width: 24,
    height: 24,
  },
  text: {
    fontFamily: OPENSANS_BOLD,
    marginTop: 15,
    fontSize: 17,
    color: COLORS.background,
  },
  smallCircle: {
    width: wp(55),
    height: wp(55),
    borderRadius: wp(65) * 0.5,
    backgroundColor: COLORS.primary,
    position: 'absolute',
    zIndex: -2,
    opacity: 0.9,
  },
  secondCircle: {
    width: wp(70),
    height: wp(70),
    borderRadius: wp(75) * 0.5,
    backgroundColor: COLORS.primary,
    position: 'absolute',
    zIndex: -3,
    opacity: 0.6,
  },
  thirdCircle: {
    width: wp(85),
    height: wp(85),
    borderRadius: wp(95) * 0.5,
    backgroundColor: COLORS.primary,
    position: 'absolute',
    zIndex: -4,
    opacity: 0.3,
  },
});

export default styles;
