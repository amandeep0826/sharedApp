import React from 'react';
import {StyleSheet, Text, View, Image, StatusBar} from 'react-native';
import {primarybackgroundColorWhite} from '../../assets/colors';
import {backgroundColor} from '../../globalStyles/commonStyles';
import {styles} from './style';

const SplashScreen = ({navigation}) => {
  setTimeout(() => {
    navigation.navigate('OnboardingScreen');
  }, 2000);
  return (
    <View style={[backgroundColor.container, styles.splashLogoContainer]}>
      {/* <StatusBar backgroundColor={primarybackgroundColorWhite} /> */}
      <View style={styles.splashLogoContainer}>
        <Image
          style={styles.splashLogo}
          source={require('../../assets/splash_logo.png')}
        />
      </View>

      <Text></Text>
    </View>
  );
};

export default SplashScreen;
