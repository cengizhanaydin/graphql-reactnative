import React from 'react';
import {View, StyleSheet, ActivityIndicator} from 'react-native';

function Progress() {
  return (
    <View style={style.container}>
      <ActivityIndicator size="large" color="black" />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Progress;
