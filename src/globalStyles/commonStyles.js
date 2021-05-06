import {StyleSheet} from 'react-native';
import {primarybackgroundColorWhite} from '../assets/colors/colors';

export const backgroundColor = StyleSheet.create({
  container: {
    backgroundColor: primarybackgroundColorWhite,
    flex: 1,
  },
  innerContainer: {
    paddingHorizontal: 20,
    flex: 1,
  },
});
