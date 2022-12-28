import {StyleSheet} from 'react-native';
import {
  OPENSANS_BOLD,
  COLORS,
  SPACING,
  MONT_REGULAR,
  FONT_SIZE,
} from '@/theme/index';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    // padding: SPACING.innerContainer
  },
  image: {
    width: 50,
    height: 50,
    zIndex: 100,
  },
  name: {
    fontSize: FONT_SIZE.medium,
    fontWeight: '500',
    marginTop: SPACING.xs,
    color: 'black',
  },
  email: {
    fontSize: FONT_SIZE.tiny,
    fontWeight: '400',
    marginTop: 4,
    color: 'black',
  },
  title: {
    fontSize: FONT_SIZE.large * 0.75,
    fontWeight: '500',
    marginBottom: SPACING.small,
  },
  innerContainer: {
    marginTop: SPACING.large * 2,
    flex: 1,
  },
  dash: {
    // marginVertical: SPACING.medium
  },
  itemMenu: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: SPACING.small,
  },
  icon: {
    width: 25,
    height: 25,
    marginRight: SPACING.small,
  },
  menuName: {
    fontSize: 14,
    color: 'black',
  },
  iconArrow: {
    width: 16,
    height: 16,
    marginRight: SPACING.small,
  },
  circleTop: {
    position: 'absolute',
    width: 350,
    height: 250,
    left: 250,
    top: -104,
    backgroundColor: COLORS.primary,
    borderRadius: 250 / 2,
    zIndex: 2,
    opacity: 0.2,
  },
  circleBottom: {
    position: 'absolute',
    width: 100,
    height: 100,
    right: 350,
    top: 154,
    backgroundColor: COLORS.primary,
    borderRadius: 250 / 2,
    zIndex: 1,
    opacity: 0.05,
  },
});

export default styles;
