import React, {useState} from 'react';
import {View, StyleSheet, Button} from 'react-native';
import Modal from 'react-native-modal';
import {TEAM} from '../../config/queries';
import {SET_TEAM} from '../../config/mutations';
import {Team, Progress, CustomTextInput} from '../../components';
import {getRequest} from '../../utils/request';
import {useMutation} from '@apollo/react-hooks';

function TeamList() {
  const [name, setName] = useState('');
  const [playerCount, setPlayerCount] = useState('');
  const [leagueName, setLeagueName] = useState('');
  const [isShowAddTeamModal, setShowAddTeamModal] = useState(false);
  const {loading, data} = getRequest(TEAM) || [];
  const [setLeague] = useMutation(SET_TEAM);

  const addTeam = () => {
    setLeague({
      variables: {name, playerCount, leagueName},
      refetchQueries: [{query: TEAM}],
    });
    setShowAddTeamModal(false);
  };

  if (loading) {
    return <Progress />;
  }
  return (
    <View style={style.container}>
      {data?.teams?.map((team, index) => {
        return <Team key={index} team={team} />;
      })}
      <View style={style.buttonView}>
        <Button
          title="ADD TEAM"
          color="black"
          onPress={() => setShowAddTeamModal(true)}
        />
      </View>
      <Modal isVisible={isShowAddTeamModal}>
        <View style={style.modalView}>
          <CustomTextInput
            title="Name"
            onChangeText={text => setName(text)}
            value={name}
          />
          <CustomTextInput
            title="Player Count"
            onChangeText={text => setPlayerCount(text)}
            value={playerCount}
          />
          <CustomTextInput
            title="League Name"
            onChangeText={text => setLeagueName(text)}
            value={leagueName}
          />
        </View>
        <View style={style.buttonView}>
          <Button title="OKEY" color="black" onPress={() => addTeam()} />
        </View>
      </Modal>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonView: {
    marginRight: 10,
    alignSelf: 'flex-end',
  },
  modalView: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default TeamList;
