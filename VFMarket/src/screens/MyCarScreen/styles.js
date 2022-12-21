import {StyleSheet} from 'react-native';
import {OPENSANS_BOLD, COLORS, SPACING, MONT_REGULAR} from '@/theme/index';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  innerContainer: {
    // flex: 1,
    // justifyContent: 'flex-start',
    marginTop: SPACING.large,
    backgroundColor: COLORS.background,
    paddingHorizontal: SPACING.innerContainer,
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
  registerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  register: {},
  highLightText: {
    color: COLORS.orange,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'left',
  },
  marginTopLarge: {
    marginTop: SPACING.large,
  },
  marginTopMedium: {
    marginTop: SPACING.medium,
  },
  note: {
    color: COLORS.primary_text,
    fontSize: 12,
    textAlign: 'right',
    fontFamily: MONT_REGULAR,
    marginLeft: 3,
    marginTop: 5,
  },
  isChecked: {
    color: COLORS.green,
  },
});

export default styles;
