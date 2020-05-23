import React from 'react';
import {View, StyleSheet} from 'react-native';
import {CustomText} from '../../index';
import {screen} from '../../../config/constant';

function RowView({leftText, rightText}) {
  return (
    <View style={style.container}>
      <View style={style.innerContainer}>
        <CustomText text={leftText} />
      </View>
      <View style={style.innerContainer}>
        <CustomText text={rightText} />
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: screen.width,
    height: 30,
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default RowView;
