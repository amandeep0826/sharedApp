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
  signUpText: {
    fontFamily: MontserratSemiBold,
    fontSize: 18,
    color: primaryBlack,
    marginTop: 40,
  },
  secondaryFadedTexts: {
    color: fadedBlackLight,
    fontSize: 14,
    fontFamily: MontserratMedium,
    marginTop: 10,
  },
  inputBox: {
    borderWidth: 1,
    borderColor: borderColorLightGray,
    marginTop: 20,
    paddingVertical: 12,
    paddingStart: 20,
  },
  signInButtonContainer: {
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
  signInButtonText: {
    textAlign: 'center',
    fontSize: 14,
    fontFamily: MontserratSemiBold,
    color: primaryWhite,
  },
  loginMethodContainer: {
    flexDirection: 'row',
    marginTop: 24,
  },
  loginWithPhoneTouchable: {
    flexDirection: 'row',
    paddingVertical: 5,
  },
  loginMethodTypeTextSelected: {
    fontFamily: MontserratSemiBold,
    fontSize: 14,
    color: primaryBlack,
    marginLeft: 10,
  },
  loginMethodTypeTextUnselected: {
    fontFamily: MontserratMedium,
    fontSize: 14,
    color: fadedBlackLight,
    marginLeft: 10,
  },
  countryCodePickerContainer: {
    borderWidth: 1,
    borderColor: borderColorLightGray,
    marginTop: 20,
  },
  forgotPasswordText: {
    marginTop: 10,
    color: primaryGreen,
    fontFamily: MontserratSemiBold,
    fontSize: 14,
    textAlign: 'right',
  },
});
