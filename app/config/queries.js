import {gql} from 'apollo-boost';

const PLAYER = gql`
  {
    players {
      name
      surname
      team {
        name
      }
      league {
        name
      }
    }
  }
`;

const TEAM = gql`
  {
    teams {
      name
      playerCount
      league {
        name
      }
    }
  }
`;

const LEAGUE = gql`
  {
    leagues {
      name
      foundYear
      teamCount
    }
  }
`;

export {PLAYER, TEAM, LEAGUE};
