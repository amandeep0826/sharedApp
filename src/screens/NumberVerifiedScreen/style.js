import {StyleSheet} from 'react-native';
import {fadedBlack} from '../../assets/colors/colors';
import {MontserratSemiBold} from '../../assets/fonts/font';

export const styles = StyleSheet.create({
  verificationIcon: {
    alignSelf: 'center',
  },
  successText: {
    fontFamily: MontserratSemiBold,
    fontSize: 18,
    color: fadedBlack,
    marginTop: 24.5,
    textAlign: 'center',
  },
});
