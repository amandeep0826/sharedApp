import React, {useEffect} from 'react';
import {
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {primarybackgroundColorWhite} from '../../assets/colors';
import {MontserratMedium} from '../../assets/fonts/font';
import {backgroundColor} from '../../globalStyles/commonStyles';
import Illustration_one from '../../assets/illustration_one.svg';

const OnboardingScreen = () => {
  return (
    <SafeAreaView style={backgroundColor.container}>
      <StatusBar backgroundColor={primarybackgroundColorWhite} />
      <TouchableOpacity>
        <Text style={styles.skipText}>SKIP</Text>
      </TouchableOpacity>
      <Illustration_one />
    </SafeAreaView>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  skipText: {
    fontFamily: MontserratMedium,
    marginTop: 20,
    marginLeft: 'auto',
    marginRight: 20,
  },
});
