import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {backgroundColor} from '../../globalStyles/commonStyles';

const AlertScreen = () => {
  return (
    <SafeAreaView style={backgroundColor.container}>
      <View style={backgroundColor.innerContainer}>
        <Text>AlertScreen</Text>
      </View>
    </SafeAreaView>
  );
};

export default AlertScreen;

const styles = StyleSheet.create({});
