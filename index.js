/**
 * @format
 */
import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from '@apollo/react-hooks';
require('react-native').unstable_enableLogBox();

const client = new ApolloClient({
  uri: 'http://localhost:8080/graphql',
  cache: null,
});

const Client = () => (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);

AppRegistry.registerComponent(appName, () => Client);
