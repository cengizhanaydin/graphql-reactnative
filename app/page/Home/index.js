import React from 'react';
import {View, Button, StyleSheet} from 'react-native';

function Home({navigation}) {
  const navigate = page => {
    switch (page) {
      case 'player':
        navigation.navigate('Player');
        break;
      case 'team':
        navigation.navigate('Team');
        break;
      case 'league':
        navigation.navigate('League');
        break;
      default:
        break;
    }
  };
  return (
    <View style={style.container}>
      <Button title="PLAYERS" onPress={() => navigate('player')} />
      <Button title="TEAMS" onPress={() => navigate('team')} />
      <Button title="LEAGUES" onPress={() => navigate('league')} />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});

export default Home;
