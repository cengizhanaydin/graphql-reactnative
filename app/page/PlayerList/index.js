import React, {useState} from 'react';
import {View, StyleSheet, Button} from 'react-native';
import Modal from 'react-native-modal';
import {PLAYER} from '../../config/queries';
import {SET_PLAYER} from '../../config/mutations';
import {Player, Progress, CustomTextInput} from '../../components';
import {getRequest} from '../../utils/request';
import {useMutation} from '@apollo/react-hooks';

function PlayerList() {
  const [isShowAddPlayerModal, setShowAddPlayerModal] = useState(false);
  const [licenseID, setLicenseID] = useState('');
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [teamName, setTeamName] = useState('');
  const [leagueName, setLeagueName] = useState('');
  const {loading, data} = getRequest(PLAYER) || [];
  const [setPlayer] = useMutation(SET_PLAYER);

  const addPlayer = () => {
    setPlayer({
      variables: {licenseID, name, surname, teamName, leagueName},
      refetchQueries: [{query: PLAYER}],
    });
    setShowAddPlayerModal(false);
  };

  if (loading) {
    return <Progress />;
  }
  return (
    <View style={style.container}>
      {data?.players?.map((player, index) => {
        return <Player key={index} player={player} />;
      })}
      <View style={style.buttonView}>
        <Button
          title="ADD PLAYER"
          color="black"
          onPress={() => setShowAddPlayerModal(true)}
        />
      </View>
      <Modal isVisible={isShowAddPlayerModal}>
        <View style={style.modalView}>
          <CustomTextInput
            title="Player licenseID"
            onChangeText={text => setLicenseID(text)}
            value={licenseID}
          />
          <CustomTextInput
            title="Name"
            onChangeText={text => setName(text)}
            value={name}
          />
          <CustomTextInput
            title="Surname"
            onChangeText={text => setSurname(text)}
            value={surname}
          />
          <CustomTextInput
            title="Team Name"
            onChangeText={text => setTeamName(text)}
            value={teamName}
          />
          <CustomTextInput
            title="League Name"
            onChangeText={text => setLeagueName(text)}
            value={leagueName}
          />
        </View>
        <View style={style.buttonView}>
          <Button title="OKEY" color="black" onPress={() => addPlayer()} />
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

export default PlayerList;
