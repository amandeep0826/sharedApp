import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {backgroundColor} from '../../globalStyles/commonStyles';

const ChatScreen = () => {
  return (
    <SafeAreaView style={backgroundColor.container}>
      <View style={backgroundColor.innerContainer}>
        <Text>ChatScreen</Text>
      </View>
    </SafeAreaView>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({});
