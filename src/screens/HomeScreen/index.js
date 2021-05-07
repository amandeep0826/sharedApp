import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {backgroundColor} from '../../globalStyles/commonStyles';

const HomeScreen = () => {
  return (
    <SafeAreaView style={backgroundColor.container}>
      <View style={backgroundColor.innerContainer}>
        <Text>HomeScreen</Text>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
