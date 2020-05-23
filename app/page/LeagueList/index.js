import React, {useState} from 'react';
import {View, StyleSheet, Button} from 'react-native';
import Modal from 'react-native-modal';
import {LEAGUE} from '../../config/queries';
import {SET_LEAGUE} from '../../config/mutations';
import {League, CustomTextInput, Progress} from '../../components';
import {getRequest} from '../../utils/request';
import {useMutation} from '@apollo/react-hooks';

function LeagueList() {
  const [name, setName] = useState('');
  const [foundYear, setFoundYeart] = useState('');
  const [teamCount, setTeamCount] = useState('');
  const [isShowAddLeagueModal, setShowAddLeagueModal] = useState(false);
  const {loading, data} = getRequest(LEAGUE) || [];
  const [setLeague] = useMutation(SET_LEAGUE);

  const addLeague = () => {
    setLeague({
      variables: {name, foundYear, teamCount},
      refetchQueries: [{query: LEAGUE}],
    });
    setShowAddLeagueModal(false);
  };

  if (loading) {
    return <Progress />;
  }
  return (
    <View style={style.container}>
      {data?.leagues?.map((league, index) => {
        return <League key={index} league={league} />;
      })}
      <View style={style.buttonView}>
        <Button
          title="ADD LEAGUE"
          color="black"
          onPress={() => setShowAddLeagueModal(true)}
        />
      </View>
      <Modal isVisible={isShowAddLeagueModal}>
        <View style={style.modalView}>
          <CustomTextInput
            title="Name"
            onChangeText={text => setName(text)}
            value={name}
          />
          <CustomTextInput
            title="Found Year"
            onChangeText={text => setFoundYeart(text)}
            value={foundYear}
          />
          <CustomTextInput
            title="Team Count"
            onChangeText={text => setTeamCount(text)}
            value={teamCount}
          />
        </View>
        <View style={style.buttonView}>
          <Button title="OKEY" color="black" onPress={() => addLeague()} />
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

export default LeagueList;
