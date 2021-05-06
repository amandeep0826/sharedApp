import {StyleSheet} from 'react-native';
import {
  primaryBlack,
  primaryGreen,
  primaryWhite,
  shadowColorGreen,
} from '../../assets/colors/colors';
import {MontserratMedium, MontserratSemiBold} from '../../assets/fonts/font';

export const styles = StyleSheet.create({
  skipText: {
    fontFamily: MontserratMedium,
    marginTop: 20,
    marginLeft: 'auto',
    fontSize: 15,
  },
  illustration_one: {
    width: 337,
    height: 210,
  },
  illustration_oneContainer: {
    alignItems: 'center',
    marginTop: 140,
  },
  welcomeText: {
    color: primaryGreen,
    fontFamily: MontserratSemiBold,
    fontSize: 20,
    textAlign: 'center',
    marginTop: 60,
  },
  welcomeDetail: {
    color: primaryBlack,
    fontFamily: MontserratMedium,
    fontSize: 15,
    textAlign: 'center',
    marginTop: 24,
  },
  nextButtonContainer: {
    backgroundColor: primaryGreen,
    height: 42,
    paddingVertical: 12,
    borderRadius: 4,
    elevation: 3,
    shadowOffset: {width: 5, height: 5},
    shadowOpacity: 1,
    shadowColor: shadowColorGreen,
    alignSelf: 'center',
    position: 'absolute',
    width: '100%',
    marginBottom: 10,
    bottom: 0,
  },
  nextButtonText: {
    textAlign: 'center',
    fontSize: 14,
    fontFamily: MontserratSemiBold,
    color: primaryWhite,
  },
  navigatiomPillContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 40,
  },
  PillSelected: {
    width: 26,
    height: 6,
    backgroundColor: primaryGreen,
    borderRadius: 10,
    marginLeft: 4,
    marginRight: 4,
  },
  PillUnselected: {
    width: 14,
    height: 6,
    backgroundColor: shadowColorGreen,
    marginLeft: 4,
    marginRight: 4,
  },
});
