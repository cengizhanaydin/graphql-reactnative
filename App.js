/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

// Screens
import PlayerList from './app/page/PlayerList';
import TeamList from './app/page/TeamList';
import LeagueList from './app/page/LeagueList';
import Home from './app/page/Home';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{title: 'DASHBOARD'}}
        />
        <Stack.Screen
          name="Player"
          component={PlayerList}
          options={{title: 'PLAYERS', headerBackTitle: ''}}
        />
        <Stack.Screen
          name="Team"
          component={TeamList}
          options={{title: 'TEAMS', headerBackTitle: ''}}
        />
        <Stack.Screen
          name="League"
          component={LeagueList}
          options={{title: 'LEAGUES', headerBackTitle: ''}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
