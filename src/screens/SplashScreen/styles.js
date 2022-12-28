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
    width: wp(45),
    height: wp(45),
  },
  text: {
    fontFamily: OPENSANS_BOLD,
    marginTop: 15,
    fontSize: 17,
    color: COLORS.background,
  },
  smallCircle: {
    width: wp(65),
    height: wp(65),
    borderRadius: wp(65) * 0.5,
    backgroundColor: COLORS.primary,
    position: 'absolute',
    zIndex: -2,
    opacity: 0.7,
  },
  secondCircle: {
    width: wp(80),
    height: wp(80),
    borderRadius: wp(75) * 0.5,
    backgroundColor: COLORS.primary,
    position: 'absolute',
    zIndex: -3,
    opacity: 0.5,
  },
  thirdCircle: {
    width: wp(95),
    height: wp(95),
    borderRadius: wp(95) * 0.5,
    backgroundColor: COLORS.primary,
    position: 'absolute',
    zIndex: -4,
    opacity: 0.2,
  },
});

export default styles;
