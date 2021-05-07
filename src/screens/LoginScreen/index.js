import React, {useState} from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  borderColorLightGray,
  fadedBlackLight,
  fadedTextBlack,
  placeholderTextColor,
  primaryBlack,
  primaryGreen,
  primaryWhite,
  shadowColorGreen,
} from '../../assets/colors/colors';
import PhoneInput from 'react-native-phone-number-input';
import Svg, {SvgProps, Path} from 'react-native-svg';
import {MontserratMedium, MontserratSemiBold} from '../../assets/fonts/font';
import {backgroundColor} from '../../globalStyles/commonStyles';
import {styles} from './style';

const LoginScreen = ({navigation}) => {
  const [loginMethod, setLoginMethod] = useState(1);
  const [countryCode, setCountryCode] = useState('');

  return (
    <SafeAreaView style={backgroundColor.container}>
      <View SafeAreaView style={backgroundColor.innerContainer}>
        <Image
          style={styles.loginLogo}
          source={require('../../assets/images/login_logo.png')}
        />
        <Text style={styles.signUpText}>Welcome Back, John!</Text>
        <Text style={styles.secondaryFadedTexts}>
          Please log in to your account.
        </Text>
        <View style={styles.loginMethodContainer}>
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.loginWithPhoneTouchable}
            onPress={() => {
              setLoginMethod(1);
            }}>
            {loginMethod == 1 ? <RadioIconChecked /> : <RadioIconUnchecked />}
            <Text
              style={[
                loginMethod == 1
                  ? styles.loginMethodTypeTextSelected
                  : styles.loginMethodTypeTextUnselected,
              ]}>
              Mobile Number
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.7}
            style={[styles.loginWithPhoneTouchable, {marginLeft: 30}]}
            onPress={() => {
              setLoginMethod(2);
            }}>
            {loginMethod == 2 ? <RadioIconChecked /> : <RadioIconUnchecked />}
            <Text
              style={[
                loginMethod == 2
                  ? styles.loginMethodTypeTextSelected
                  : styles.loginMethodTypeTextUnselected,
              ]}>
              Email
            </Text>
          </TouchableOpacity>
        </View>
        {loginMethod == 1 ? (
          <View style={styles.countryCodePickerContainer}>
            <PhoneInput
              defaultCode="AU"
              withDarkTheme
              onChangeFormattedText={countryCode => {
                setCountryCode(countryCode);
              }}
            />
          </View>
        ) : (
          <TextInput
            style={styles.inputBox}
            placeholder="Email"
            placeholderTextColor={placeholderTextColor}
          />
        )}
        <TextInput
          style={styles.inputBox}
          placeholder="Password"
          placeholderTextColor={placeholderTextColor}
        />
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => {
            navigation.navigate('ForgotPasswordScreen');
          }}>
          <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.signInButtonContainer}
          onPress={() => {
            navigation.navigate('RootTabNavigator');
          }}>
          <Text style={styles.signInButtonText}>SIGN IN</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export const RadioIconChecked = (props: SvgProps) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={19}
      height={19}
      viewBox="0 0 19 19"
      {...props}>
      <Path data-name="Path 5629" d="M0 0h19v19H0z" fill="none" />
      <Path
        data-name="Path 5630"
        d="M9.5 5.541a3.958 3.958 0 103.958 3.958A3.96 3.96 0 009.5 5.541zm0-3.958A7.917 7.917 0 1017.417 9.5 7.92 7.92 0 009.5 1.583zm0 14.25A6.333 6.333 0 1115.833 9.5 6.332 6.332 0 019.5 15.833z"
        fill="#14ac63"
      />
    </Svg>
  );
};

export const RadioIconUnchecked = (props: SvgProps) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={19}
      height={19}
      viewBox="0 0 19 19"
      {...props}>
      <Path data-name="Path 5627" d="M0 0h19v19H0z" fill="none" />
      <Path
        data-name="Path 5628"
        d="M9.5 1.583A7.917 7.917 0 1017.417 9.5 7.92 7.92 0 009.5 1.583zm0 14.25A6.333 6.333 0 1115.833 9.5 6.332 6.332 0 019.5 15.833z"
        fill="#707070"
      />
    </Svg>
  );
};

export default LoginScreen;
