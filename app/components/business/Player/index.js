import React from 'react';
import PropTypes from 'prop-types';
import {View, StyleSheet} from 'react-native';
import {RowView, CustomText} from '../../index';

function Player({player}) {
  return (
    <View style={styles.container}>
      <CustomText
        style={styles.title}
        text={player?.name + ' ' + player?.surname}
      />
      <RowView leftText="Team" rightText={player?.team?.name} />
      <RowView leftText="League" rightText={player?.league?.name} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  title: {
    fontSize: 20,
    marginBottom: 10,
  },
});

Player.prototype = {
  player: PropTypes.object,
};

export default Player;
