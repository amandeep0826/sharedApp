import React, {useState} from 'react';
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import {backgroundColor} from '../../globalStyles/commonStyles';
import {styles} from './style';

const CELL_COUNT = 5;

const EnterOTPScreen = ({navigation, route}) => {
  const {countryCode} = route.params;
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  return (
    <SafeAreaView style={backgroundColor.container}>
      <View style={backgroundColor.innerContainer}>
        <Text style={styles.enterTheCodeText}>Enter the code just sent to</Text>
        <Text style={styles.phoneNumber}>{countryCode}</Text>
        <CodeField
          ref={ref}
          {...props}
          value={value}
          onChangeText={setValue}
          cellCount={CELL_COUNT}
          rootStyle={styles.codeFieldRoot}
          keyboardType="number-pad"
          textContentType="oneTimeCode"
          autoFocus={true}
          //   onEndEditing={() => {
          //     navigation.navigate('NumberVerifiedScreen');
          //   }}
          renderCell={({index, symbol, isFocused}) => (
            <View
              onLayout={getCellOnLayoutHandler(index)}
              key={index}
              style={[styles.cellRoot, isFocused && styles.focusCell]}>
              <Text style={styles.cellText}>
                {symbol || (isFocused ? <Cursor /> : null)}
              </Text>
            </View>
          )}
        />
        <TouchableOpacity
          style={styles.submitButtonContainer}
          onPress={() => {
            navigation.navigate('NumberVerifiedScreen');
          }}>
          <Text style={styles.submitButtonText}>SUBMIT</Text>
        </TouchableOpacity>
        <View style={styles.sendCodeAgainContainer}>
          <Text style={styles.didnotGetCodeText}>Didn't get a code? </Text>
          <Text style={styles.sendAgainText}>Send again</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default EnterOTPScreen;
