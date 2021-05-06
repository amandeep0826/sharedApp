import React from 'react';
import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {fadedBlackLight, primaryBlack} from '../../assets/colors/colors';
import {MontserratMedium, MontserratSemiBold} from '../../assets/fonts/font';
import {backgroundColor} from '../../globalStyles/commonStyles';

const ContinueWithPhoneScreen = () => {
  return (
    <SafeAreaView style={backgroundColor.container}>
      <View style={backgroundColor.innerContainer}>
        <Image
          style={styles.loginLogo}
          source={require('../../assets/images/login_logo.png')}
        />
        <Text style={styles.continueWithPhoneText}>
          Continue With Phone Number
        </Text>
        <Text style={styles.letsStartText}>
          Let's start with just your phone number.
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default ContinueWithPhoneScreen;

const styles = StyleSheet.create({
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
});
