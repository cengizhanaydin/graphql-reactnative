import {gql} from 'apollo-boost';

const SET_PLAYER = gql`
  mutation createPlayer(
    $licenseID: String!
    $name: String!
    $surname: String!
    $teamName: String!
    $leagueName: String!
  ) {
    createPlayer(
      playerInput: {licenseID: $licenseID, name: $name, surname: $surname}
      teamName: $teamName
      leagueName: $leagueName
    ) {
      name
      surname
    }
  }
`;

const SET_TEAM = gql`
  mutation createTeam(
    $name: String!
    $playerCount: Int!
    $leagueName: String!
  ) {
    createTeam(
      teamInput: {name: $name, playerCount: $playerCount}
      leagueName: $leagueName
    ) {
      name
    }
  }
`;

const SET_LEAGUE = gql`
  mutation createLeague($name: String!, $foundYear: String!, $teamCount: Int!) {
    createLeague(
      leagueInput: {name: $name, foundYear: $foundYear, teamCount: $teamCount}
    ) {
      name
    }
  }
`;

export {SET_PLAYER, SET_TEAM, SET_LEAGUE};
