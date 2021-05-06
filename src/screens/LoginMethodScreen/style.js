import {StyleSheet} from 'react-native';
import {
  fadedBlack,
  primaryBlack,
  primaryGreen,
  primaryWhite,
  shadowColorGreen,
} from '../../assets/colors/colors';
import {MontserratMedium, MontserratSemiBold} from '../../assets/fonts/font';

export const styles = StyleSheet.create({
  welcomeIllustrationImage: {
    width: 225,
    height: 230,
    alignSelf: 'center',
    marginTop: 70,
  },
  welcomeToAppText: {
    fontSize: 24,
    fontFamily: MontserratSemiBold,
    color: primaryBlack,
    textAlign: 'center',
    marginTop: 40,
  },
  numberButtonContainer: {
    flexDirection: 'row',
    backgroundColor: primaryGreen,
    height: 42,
    paddingVertical: 12,
    borderRadius: 4,
    elevation: 3,
    shadowOffset: {width: 5, height: 5},
    shadowOpacity: 1,
    shadowColor: shadowColorGreen,
    marginTop: 30,
  },
  numberButtonText: {
    textAlign: 'center',
    fontSize: 14,
    fontFamily: MontserratSemiBold,
    color: primaryWhite,
    marginLeft: 30,
  },
  phoneIcon: {
    marginLeft: 29,
    alignSelf: 'center',
  },
  googleIcon: {
    marginLeft: 26,
    alignSelf: 'center',
  },
  facebookIcon: {
    marginLeft: 30,
    alignSelf: 'center',
  },
  alreadyHaveAccountContainer: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    alignSelf: 'center',
    marginBottom: 10,
  },
  alreadyHaveAccountText: {
    fontFamily: MontserratMedium,
    fontSize: 14,
    color: fadedBlack,
  },
  signInText: {
    fontFamily: MontserratSemiBold,
    color: primaryGreen,
    fontSize: 14,
  },
});
