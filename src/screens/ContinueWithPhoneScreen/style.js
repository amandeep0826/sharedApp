import {StyleSheet} from 'react-native';
import {
  borderColorLightGray,
  fadedBlackLight,
  primaryBlack,
  primaryGreen,
  primaryWhite,
  shadowColorGreen,
} from '../../assets/colors/colors';
import {MontserratMedium, MontserratSemiBold} from '../../assets/fonts/font';

export const styles = StyleSheet.create({
  loginLogo: {
    width: 120,
    height: 120,
    alignSelf: 'center',
    marginTop: 50,
  },
  continueWithPhoneText: {
    fontSize: 18,
    fontFamily: MontserratSemiBold,
    color: primaryBlack,
    marginTop: 40,
  },
  letsStartText: {
    fontFamily: MontserratMedium,
    fontSize: 14,
    color: fadedBlackLight,
    marginTop: 10,
  },
  countryCodePickerContainer: {
    borderWidth: 1,
    borderColor: borderColorLightGray,
    marginTop: 20,
  },
  continueButtonContainer: {
    backgroundColor: primaryGreen,
    height: 42,
    paddingVertical: 12,
    borderRadius: 4,
    elevation: 3,
    shadowOffset: {width: 5, height: 5},
    shadowOpacity: 1,
    shadowColor: shadowColorGreen,
    marginTop: 24,
  },
  continueButtonText: {
    textAlign: 'center',
    fontSize: 14,
    fontFamily: MontserratSemiBold,
    color: primaryWhite,
  },
});
