import React from 'react';
import {
  Image,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {placeholderTextColor} from '../../assets/colors/colors';
import {backgroundColor} from '../../globalStyles/commonStyles';
import {styles} from './style';

const CompleteSignupScreen = ({navigation}) => {
  return (
    <SafeAreaView style={backgroundColor.container}>
      <View style={backgroundColor.innerContainer}>
        <Image
          style={styles.loginLogo}
          source={require('../../assets/images/login_logo.png')}
        />
        <Text style={styles.signUpText}>Sign Up</Text>
        <Text style={styles.secondaryFadedTexts}>
          Please create your new account.
        </Text>
        <TextInput
          style={styles.inputBox}
          placeholder="Name"
          placeholderTextColor={placeholderTextColor}
        />
        <TextInput
          style={styles.inputBox}
          placeholder="Email"
          placeholderTextColor={placeholderTextColor}
        />
        <TextInput
          style={styles.inputBox}
          placeholder="Password"
          placeholderTextColor={placeholderTextColor}
        />
        <Text style={styles.termsTextLineOne}>
          By creating an account you agree with our
        </Text>
        <View style={styles.termsTextContainer}>
          <TouchableOpacity activeOpacity={0.7}>
            <Text style={[styles.termsTextLinetwoSelectable]}>
              Terms of Service{' '}
            </Text>
          </TouchableOpacity>
          <Text style={styles.termsTextLinetwo}>and </Text>
          <TouchableOpacity activeOpacity={0.7}>
            <Text style={styles.termsTextLinetwoSelectable}>
              Privacy Policy.
            </Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.signUpButtonContainer}
          onPress={() => {
            navigation.navigate('HomeScreen');
          }}>
          <Text style={styles.signUpButtonText}>SUBMIT</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default CompleteSignupScreen;
