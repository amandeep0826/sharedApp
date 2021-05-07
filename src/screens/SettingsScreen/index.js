import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {backgroundColor} from '../../globalStyles/commonStyles';

const SettingsScreen = () => {
  return (
    <SafeAreaView style={backgroundColor.container}>
      <View style={backgroundColor.innerContainer}>
        <Text>SettingsScreen</Text>
      </View>
    </SafeAreaView>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({});
