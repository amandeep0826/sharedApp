import {StyleSheet} from 'react-native';
import {
  borderColorLightGray,
  fadedTextBlack,
  primaryBlack,
  primaryGreen,
  primaryWhite,
  shadowColorGreen,
} from '../../assets/colors/colors';
import {MontserratMedium, MontserratSemiBold} from '../../assets/fonts/font';

export const styles = StyleSheet.create({
  enterTheCodeText: {
    color: primaryBlack,
    fontSize: 18,
    fontFamily: MontserratSemiBold,
    marginTop: 24,
  },
  phoneNumber: {
    color: primaryBlack,
    fontSize: 18,
    fontFamily: MontserratSemiBold,
    marginTop: 10,
    textDecorationLine: 'underline',
  },
  codeFieldRoot: {
    marginTop: 20,
  },
  cellRoot: {
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: borderColorLightGray,
    borderBottomWidth: 1,
  },
  cellText: {
    color: primaryBlack,
    fontSize: 36,
    textAlign: 'center',
  },
  focusCell: {
    borderBottomColor: '#007AFF',
    borderBottomWidth: 2,
  },
  sendCodeAgainContainer: {
    flexDirection: 'row',
    marginTop: 40.5,
  },
  didnotGetCodeText: {
    fontFamily: MontserratMedium,
    fontSize: 14,
    color: fadedTextBlack,
  },
  sendAgainText: {
    fontFamily: MontserratMedium,
    fontSize: 14,
    color: primaryGreen,
  },
  submitButtonContainer: {
    backgroundColor: primaryGreen,
    height: 42,
    paddingVertical: 12,
    borderRadius: 4,
    elevation: 3,
    shadowOffset: {width: 5, height: 5},
    shadowOpacity: 1,
    shadowColor: shadowColorGreen,
    marginTop: 40.5,
  },
  submitButtonText: {
    textAlign: 'center',
    fontSize: 14,
    fontFamily: MontserratSemiBold,
    color: primaryWhite,
  },
});
