import React, {useState} from 'react';
import {
  Image,
  SafeAreaView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  primarybackgroundColorWhite,
  primaryWhite,
} from '../../assets/colors/colors';
import {backgroundColor} from '../../globalStyles/commonStyles';
import {styles} from './style';

const OnboardingScreen = ({navigation}) => {
  const [currentOnboardingScreen, setCurrenOnboardingScreen] = useState(1);

  return (
    <SafeAreaView style={backgroundColor.container}>
      <StatusBar backgroundColor={primarybackgroundColorWhite} />
      <View style={backgroundColor.innerContainer}>
        {currentOnboardingScreen == 1 || currentOnboardingScreen == 2 ? (
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => {
              navigation.navigate('LoginMethodScreen');
            }}>
            <Text style={styles.skipText}>SKIP</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity activeOpacity={0.5}>
            <Text style={[styles.skipText, {color: primaryWhite}]}>SKIP</Text>
          </TouchableOpacity>
        )}
        <View style={styles.illustration_oneContainer}>
          {currentOnboardingScreen == 1 ? (
            <Image
              style={styles.illustration_one}
              source={require('../../assets/images/illustration_one.png')}
            />
          ) : currentOnboardingScreen == 2 ? (
            <Image
              style={styles.illustration_one}
              source={require('../../assets/images/illustration_two.png')}
            />
          ) : (
            <Image
              style={styles.illustration_one}
              source={require('../../assets/images/illustration_three.png')}
            />
          )}
        </View>
        {currentOnboardingScreen == 1 ? (
          <Text style={styles.welcomeText}>Welcome</Text>
        ) : currentOnboardingScreen == 2 ? (
          <Text style={styles.welcomeText}>Friendly Work Environment</Text>
        ) : (
          <Text style={styles.welcomeText}>Join Our Team</Text>
        )}
        <Text style={styles.welcomeDetail}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut
          purus et massa porta aliquet.
        </Text>
        <View style={styles.navigatiomPillContainer}>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => {
              setCurrenOnboardingScreen(1);
            }}
            style={[
              currentOnboardingScreen == 1
                ? styles.PillSelected
                : styles.PillUnselected,
            ]}></TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => {
              setCurrenOnboardingScreen(2);
            }}
            style={[
              currentOnboardingScreen == 2
                ? styles.PillSelected
                : styles.PillUnselected,
            ]}></TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => {
              setCurrenOnboardingScreen(3);
            }}
            style={[
              currentOnboardingScreen == 3
                ? styles.PillSelected
                : styles.PillUnselected,
            ]}></TouchableOpacity>
        </View>
        {currentOnboardingScreen == 3 ? (
          <TouchableOpacity
            style={styles.nextButtonContainer}
            onPress={() => {
              navigation.navigate('LoginMethodScreen');
            }}>
            <Text style={styles.nextButtonText}>GET STARTED</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={styles.nextButtonContainer}
            onPress={() => {
              setCurrenOnboardingScreen(currentOnboardingScreen + 1);
            }}>
            <Text style={styles.nextButtonText}>NEXT</Text>
          </TouchableOpacity>
        )}
      </View>
      {/* <SvgComponent /> */}
    </SafeAreaView>
  );
};

export default OnboardingScreen;
