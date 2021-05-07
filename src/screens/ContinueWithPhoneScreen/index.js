import React, {useState} from 'react';
import {Image, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import PhoneInput from 'react-native-phone-number-input';
import {backgroundColor} from '../../globalStyles/commonStyles';
import {styles} from './style';

const ContinueWithPhoneScreen = ({navigation}) => {
  const [countryCode, setCountryCode] = useState('');
  // const countryCodeHandler = countryCode => {
  //   setCountryCode(countryCode);
  // };

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
        <View style={styles.countryCodePickerContainer}>
          <PhoneInput
            defaultCode="AU"
            withDarkTheme
            onChangeFormattedText={countryCode => {
              setCountryCode(countryCode);
            }}
            autoFocus={true}
          />
        </View>
        <TouchableOpacity
          style={styles.continueButtonContainer}
          onPress={() => {
            navigation.navigate('EnterOTPScreen', {countryCode});
          }}>
          <Text style={styles.continueButtonText}>CONTINUE</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ContinueWithPhoneScreen;
