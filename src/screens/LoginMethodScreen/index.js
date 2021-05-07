import React from 'react';
import {Image, SafeAreaView, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Svg, {Path, SvgProps} from 'react-native-svg';
import {facebookBlue, primaryRed} from '../../assets/colors/colors';
import {backgroundColor} from '../../globalStyles/commonStyles';
import {styles} from './style';

const LoginMethodScreen = ({navigation}) => {
  return (
    <SafeAreaView style={backgroundColor.container}>
      <View style={backgroundColor.innerContainer}>
        <Image
          style={styles.welcomeIllustrationImage}
          source={require('../../assets/images/welcome_illustration.png')}
        />
        <Text style={styles.welcomeToAppText}>Welcome to App</Text>
        <TouchableOpacity
          style={styles.numberButtonContainer}
          onPress={() => {
            navigation.navigate('ContinueWithPhoneScreen');
          }}>
          <PhoneIcon />
          <Text style={styles.numberButtonText}>CONTINUE WITH NUMBER</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.numberButtonContainer, {backgroundColor: primaryRed}]}>
          <GoogleIcon />
          <Text style={styles.numberButtonText}>CONTINUE WITH GOOGLE</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.numberButtonContainer,
            {backgroundColor: facebookBlue},
          ]}>
          <FacebookIcon />
          <Text style={styles.numberButtonText}>CONTINUE WITH FACEBOOK</Text>
        </TouchableOpacity>
        <View style={styles.alreadyHaveAccountContainer}>
          <Text style={styles.alreadyHaveAccountText}>
            Already have an account?{' '}
          </Text>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => {
              navigation.navigate('LoginScreen');
            }}>
            <Text style={styles.signInText}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
export function PhoneIcon(props: SvgProps) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      style={styles.phoneIcon}
      viewBox="0 0 24 24"
      {...props}>
      <Path data-name="Path 601" d="M0 0h24v24H0z" fill="none" />
      <Path
        data-name="Path 602"
        d="M15.5 1h-8A2.5 2.5 0 005 3.5v17A2.5 2.5 0 007.5 23h8a2.5 2.5 0 002.5-2.5v-17A2.5 2.5 0 0015.5 1zm-4 21a1.5 1.5 0 111.5-1.5 1.5 1.5 0 01-1.5 1.5zm4.5-4H7V4h9z"
        fill="#fff"
      />
    </Svg>
  );
}
export function FacebookIcon(props: SvgProps) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={10.387}
      height={20.004}
      viewBox="0 0 10.387 20.004"
      style={styles.facebookIcon}
      {...props}>
      <Path
        d="M6.743 20v-9.12h3.061l.459-3.557h-3.52V5.052c0-1.029.285-1.731 1.763-1.731h1.882V.139A25.517 25.517 0 007.644 0C4.929 0 3.07 1.657 3.07 4.7v2.623H0v3.557h3.071V20z"
        fill="#fff"
      />
    </Svg>
  );
}
export function GoogleIcon(props: SvgProps) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={20}
      height={20}
      viewBox="0 0 20 20"
      style={styles.googleIcon}
      {...props}>
      <Path
        data-name="Path 1952"
        d="M4.432 12.086l-.7 2.6-2.544.054a10.017 10.017 0 01-.074-9.338l2.265.415.992 2.252a5.968 5.968 0 00.056 4.018z"
        fill="#fff"
      />
      <Path
        data-name="Path 1953"
        d="M19.825 8.132a10 10 0 01-3.565 9.666l-2.853-.146-.4-2.521a5.96 5.96 0 002.564-3.043h-5.347V8.132h9.605z"
        fill="#fff"
      />
      <Path
        data-name="Path 1954"
        d="M16.26 17.798a10 10 0 01-15.069-3.059l3.241-2.653a5.947 5.947 0 008.57 3.045z"
        fill="#fff"
      />
      <Path
        data-name="Path 1955"
        d="M16.383 2.3l-3.24 2.652a5.947 5.947 0 00-8.767 3.114L1.119 5.4a10 10 0 0115.264-3.1z"
        fill="#fff"
      />
    </Svg>
  );
}

export default LoginMethodScreen;
