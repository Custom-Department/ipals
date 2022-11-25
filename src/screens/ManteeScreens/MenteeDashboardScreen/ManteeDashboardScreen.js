import React, {useState, useEffect} from 'react';
import {View, ScrollView, StatusBar, Platform, Text} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {SearchbarHeader} from '../../../components/SearchBarHeaderComp/SearchbarHeader';
import HorizantalDetailComp from '../../../components/HorizantalDetailComp/HorizantalDetailComp';
import axios from 'react-native-axios';
import {styles} from './styles';
import {ManteeFlatlistcomponent} from '../../../components/MenteeComp/ManteeFlatlistcomponent';
import {useDispatch, useSelector} from 'react-redux';
import types from '../../../Redux/types';
import {Getmentorformentee} from '../../../config/Urls';
import {SkypeIndicator} from 'react-native-indicators';

const MenteeDashboardScreen = ({navigation}) => {
  const {userData, token} = useSelector(state => state.userData);
  const dispatch = useDispatch();
  const [allStates, setAllStates] = useState({
    GetmentorformenteeState: [],
  });
  const [allLoading, setAllLoading] = useState({
    GetmentorformenteeLoading: false,
  });

  const {GetmentorformenteeLoading} = allLoading;

  const {GetmentorformenteeState} = allStates;

  const updateState = data => {
    setAllStates(prev => ({...prev, ...data}));
  };
  const updateLoadingState = data => {
    setAllLoading(prev => ({...prev, ...data}));
  };

  const getApiData = (url, state, loading) => {
    updateLoadingState({[loading]: true});
    axios
      .get(url, {
        headers: {Authorization: `Bearer ${token}`},
      })
      .then(function (response) {
        updateState({[state]: response.data.data});
        updateLoadingState({[loading]: false});
      })
      .catch(function (error) {
        updateLoadingState({[loading]: false});
        errorMessage(errorHandler(error));
      });
  };
  useEffect(() => {
    getApiData(
      Getmentorformentee,
      'GetmentorformenteeState',
      'GetmentorformenteeLoading',
    );
  }, []);
  return (
    <View style={styles.mainView}>
      <StatusBar
        hidden={false}
        barStyle={Platform.OS == 'ios' ? 'dark-content' : 'default'}
      />
      <SearchbarHeader />

      <ScrollView
        contentContainerStyle={styles.scrollView}
        scrollEnabled
        showsVerticalScrollIndicator={false}>
        <View style={styles.Emptydivider} />
        <HorizantalDetailComp
          dot={true}
          leftText={`   Mentors`}
          // rightText={` view all category`}
        />

        <View style={styles.Emptydivider} />
        {GetmentorformenteeLoading ? (
          <SkypeIndicator
            color={'white'}
            size={hp('4')}
            style={{
              alignSelf: 'center',
              justifyContent: 'center',
              marginVertical: hp('10'),
            }}
          />
        ) : (
          <ManteeFlatlistcomponent
            data={GetmentorformenteeState}
            click={item => navigation.navigate('MenteeDetailedScreen', item)}
          />
        )}
      </ScrollView>
    </View>
  );
};

export default MenteeDashboardScreen;
