import React from 'react';
import PropTypes from 'prop-types';
import {View, StyleSheet} from 'react-native';
import {RowView, CustomText} from '../../index';

function Team({team}) {
  console.log('Team -> team', team);
  return (
    <View style={styles.container}>
      <CustomText style={styles.title} text={team?.name} />
      <RowView
        leftText="Number of team players:"
        rightText={team?.playerCount}
      />
      <RowView leftText="League name:" rightText={team?.league?.name} />
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

Team.prototype = {
  team: PropTypes.object,
};

export default Team;
