import React from 'react';
import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {placeholderTextColor} from '../../assets/colors/colors';
import {backgroundColor} from '../../globalStyles/commonStyles';
import {styles} from './style';

const ForgotPasswordScreen = () => {
  return (
    <SafeAreaView style={backgroundColor.container}>
      <View style={backgroundColor.innerContainer}>
        <Text style={styles.forgotPasswordText}>Forgotten your password?</Text>
        <Text style={styles.enterEmailText}>Please enter your email.</Text>
        <TextInput
          style={styles.inputBox}
          placeholder="Email"
          placeholderTextColor={placeholderTextColor}
        />
        <TouchableOpacity style={styles.resetButtonContainer}>
          <Text style={styles.resetInButtonText}>SEND RESET LINK</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ForgotPasswordScreen;
