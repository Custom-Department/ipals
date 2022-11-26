import React, {useCallback, useEffect, useState} from 'react';
import {FlatList, RefreshControl, ScrollView, View} from 'react-native';
import {ClassesDetailView} from '../../../components/ClassesDetailView/ClassesDetailView';
import HorizantalDetailComp from '../../../components/HorizantalDetailComp/HorizantalDetailComp';
import {SearchbarHeader} from '../../../components/SearchBarHeaderComp/SearchbarHeader';
import InformationTextView from '../../../components/InformationTextView/InformationTextView';
import {PendingReqComp} from '../../../components/PendingReqComp/PendingReqComp';
import {MentorColor, color, colorTutor_} from '../../../config/color';
import axios from 'react-native-axios';
import types from '../../../Redux/types';
import {useDispatch, useSelector} from 'react-redux';
import {styles} from './styles';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {
  GetMenteeAllPending,
  UpdateMenteeRequestStatusUrl,
} from '../../../config/Urls';
import {ButtonIconComp} from '../../../components/ButtonIconComp/ButtonIconComp';
import {errorMessage} from '../../../config/NotificationMessage';
import {errorHandler} from '../../../config/helperFunction';
import {SkypeIndicator} from 'react-native-indicators';
import {BackHeaderComponent} from '../../../components/BackHeaderComponent/BackHeaderComponent';

const MenteeViewAllPendingClass = () => {
  const {userData, token} = useSelector(state => state.userData);
  const dispatch = useDispatch();
  const [allStates, setAllStates] = useState({
    GetAllpendingclassState: [],
  });
  const [allLoading, setAllLoading] = useState({
    GetAllpendingclassLoading: false,
  });

  const {GetAllpendingclassLoading} = allLoading;

  const {GetAllpendingclassState} = allStates;
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
  const updateStatus = (data, status) => {
    updateLoadingState({pendingLoading: true});
    let url = UpdateMenteeRequestStatusUrl + data.data.id;
    let body = {
      status: status,
    };

    axios
      .put(url, body, {
        headers: {Authorization: `Bearer ${token}`},
      })
      .then(function (response) {
        updateLoadingState({pendingLoading: false});
        getApiData(
          GetMenteeAllPending,
          'GetAllpendingclassState',
          'GetAllpendingclassLoading',
        );
      })
      .catch(function (error) {
        updateLoadingState({pendingLoading: false});
        errorMessage(errorHandler(error));
      });
  };
  useEffect(() => {
    getApiData(
      GetMenteeAllPending,
      'GetAllpendingclassState',
      'GetAllpendingclassLoading',
    );
  }, []);
  return (
    <View style={styles.mainView}>
      <BackHeaderComponent heading={'All Pending Request'} />
      {GetAllpendingclassLoading ? (
        <SkypeIndicator
          color={'white'}
          size={hp('4')}
          style={styles.loaderStyle}
        />
      ) : GetAllpendingclassState.length > 0 ? (
        <FlatList
          data={GetAllpendingclassState}
          contentContainerStyle={{marginTop: hp('2')}}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => {
            return (
              <PendingReqComp
                tickStatus={false}
                onCancel={item => updateStatus(item, 'reject')}
                data={item}
              />
            );
          }}
        />
      ) : (
        <View style={styles.createClassView}>
          <InformationTextView
            iconcolor={MentorColor.MentorThemeFirst}
            style={{
              width: wp('85'),
              backgroundColor: MentorColor.MentorLightTheme,
            }}
            textColor={MentorColor.MentorThemeFirst}
            text={'You don’t have any Pending class'}
          />
        </View>
      )}
    </View>
  );
};
export default MenteeViewAllPendingClass;
