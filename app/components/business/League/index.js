import React from 'react';
import PropTypes from 'prop-types';
import {View, StyleSheet} from 'react-native';
import {RowView, CustomText} from '../../index';

function League({league}) {
  return (
    <View style={styles.container}>
      <CustomText style={styles.title} text={league?.name} />
      <RowView
        leftText="League establishment year:"
        rightText={league?.foundYear}
      />
      <RowView leftText="League team count:" rightText={league?.teamCount} />
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

League.prototype = {
  league: PropTypes.object,
};

export default League;
