import React from 'react';
import {Text, TextInput, View, StyleSheet} from 'react-native';
import {CustomText} from '../../index';

function CustomTextInput({title, onChangeText, value}) {
  return (
    <View style={style.container}>
      <CustomText style={style.text} text={title} />
      <TextInput
        style={style.textInput}
        onChangeText={text => onChangeText(text)}
        value={value}
      />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    margin: 10,
  },
  text: {
    fontSize: 20,
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 5,
  },
});

export default CustomTextInput;
