import {StyleSheet} from 'react-native';
import {
  borderColorLightGray,
  fadedBlackLight,
  fadedTextBlack,
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
  termsTextContainer: {
    flexDirection: 'row',
    width: '90%',
  },
  termsTextLineOne: {
    fontFamily: MontserratMedium,
    fontSize: 14,
    color: fadedTextBlack,
    marginTop: 16,
  },
  termsTextLinetwo: {
    fontFamily: MontserratMedium,
    fontSize: 14,
    color: fadedTextBlack,
    marginTop: 5,
  },
  termsTextLinetwoSelectable: {
    fontFamily: MontserratMedium,
    fontSize: 14,
    color: primaryGreen,
    marginTop: 5,
  },
  signUpButtonContainer: {
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
  signUpButtonText: {
    textAlign: 'center',
    fontSize: 14,
    fontFamily: MontserratSemiBold,
    color: primaryWhite,
  },
});
