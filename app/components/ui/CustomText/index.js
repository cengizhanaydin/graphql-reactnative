import React from 'react';
import {Text, StyleSheet} from 'react-native';

function CustomText({text, style}) {
  return <Text style={[styles.text, style]}>{text}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontSize: 12,
  },
});
export default CustomText;
