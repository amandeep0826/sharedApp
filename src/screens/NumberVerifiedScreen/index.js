import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import Svg, {
  Defs,
  LinearGradient,
  Path,
  Stop,
  SvgProps,
} from 'react-native-svg';
import {backgroundColor} from '../../globalStyles/commonStyles';
import {styles} from './style';

const NumberVerifiedScreen = ({navigation}) => {
  setTimeout(() => {
    navigation.navigate('CompleteSignupScreen');
  }, 2000);

  return (
    <SafeAreaView style={backgroundColor.container}>
      <View
        style={[backgroundColor.innerContainer, {justifyContent: 'center'}]}>
        <VerificationIcon />
        <Text style={styles.successText}>
          Your mobile number has successfully verified!
        </Text>
      </View>
    </SafeAreaView>
  );
};
export const VerificationIcon = (props: SvgProps) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={105.113}
      height={100}
      style={styles.verificationIcon}
      viewBox="0 0 105.113 100"
      {...props}>
      <Defs>
        <LinearGradient
          id="prefix__a"
          x1={1}
          y1={1}
          x2={0}
          gradientUnits="objectBoundingBox">
          <Stop offset={0} stopColor="#14ac63" />
          <Stop offset={1} stopColor="#23c879" />
        </LinearGradient>
      </Defs>
      <Path
        data-name="Path 5585"
        d="M105.113 62.437l-11.9-13.211 1.863-17.687-17.4-3.684L68.8 12.437 52.557 19.7l-16.245-7.26-8.876 15.416-17.4 3.684L11.9 49.226 0 62.437l11.9 13.211-1.864 17.687 17.4 3.684 8.876 15.419 16.245-7.26 16.245 7.26 8.876-15.418 17.4-3.684-1.864-17.688zM74.59 50.929L48.208 80.486 29.876 62.154l4.36-4.36L47.954 71.51l22.035-24.687z"
        fill="url(#prefix__a)"
        transform="translate(0 -12.437)"
      />
    </Svg>
  );
};

export default NumberVerifiedScreen;
