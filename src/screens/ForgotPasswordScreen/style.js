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
  inputBox: {
    borderWidth: 1,
    borderColor: borderColorLightGray,
    marginTop: 20,
    paddingVertical: 12,
    paddingStart: 20,
  },
  resetButtonContainer: {
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
  resetInButtonText: {
    textAlign: 'center',
    fontSize: 14,
    fontFamily: MontserratSemiBold,
    color: primaryWhite,
  },
  forgotPasswordText: {
    fontFamily: MontserratSemiBold,
    fontSize: 20,
    color: primaryBlack,
    marginTop: 24,
  },
  enterEmailText: {
    fontFamily: MontserratMedium,
    color: fadedBlackLight,
    marginTop: 8,
    fontSize: 14,
  },
});
