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
  GetMenteeAllApprove,
  GetMenteeAllPending,
  GetMenteePendingClass,
  UpdateMenteeRequestStatusUrl,
} from '../../../config/Urls';
import {ButtonIconComp} from '../../../components/ButtonIconComp/ButtonIconComp';
import {errorMessage} from '../../../config/NotificationMessage';
import {errorHandler} from '../../../config/helperFunction';
import {SkypeIndicator} from 'react-native-indicators';
import {BackHeaderComponent} from '../../../components/BackHeaderComponent/BackHeaderComponent';
const MenteeViewAllApproveClass = () => {
  const {userData, token} = useSelector(state => state.userData);
  const dispatch = useDispatch();
  const [allStates, setAllStates] = useState({
    GetAllapproveclassState: [],
  });
  const [allLoading, setAllLoading] = useState({
    GetAllapproveclassLoading: false,
  });

  const {GetAllapproveclassLoading} = allLoading;

  const {GetAllapproveclassState} = allStates;
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
      GetMenteeAllApprove,
      'GetAllapproveclassState',
      'GetAllapproveclassLoading',
    );
  }, []);
  return (
    <View style={styles.mainView}>
      <BackHeaderComponent heading={'All Approve Request'} />
      {GetAllapproveclassLoading ? (
        <SkypeIndicator
          color={'white'}
          size={hp('4')}
          style={{
            // marginTop: hp('30'),
            alignSelf: 'center',
            justifyContent: 'center',
            marginVertical: hp('10'),
          }}
        />
      ) : GetAllapproveclassState.length > 0 ? (
        <FlatList
          data={GetAllapproveclassState}
          contentContainerStyle={{marginTop: hp('2')}}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => {
            return <ClassesDetailView data={item} myclass={true} />;
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
            text={'You don’t have any Approve class'}
          />
        </View>
      )}
    </View>
  );
};
export default MenteeViewAllApproveClass;
