import React from 'react';
import {Image, Text, View} from 'react-native';
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
          source={require('../../assets/images/splash_logo.png')}
        />
      </View>

      <Text></Text>
    </View>
  );
};

export default SplashScreen;
