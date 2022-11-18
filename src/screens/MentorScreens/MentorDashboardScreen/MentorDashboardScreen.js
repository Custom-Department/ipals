import React, {useState} from 'react';
import {
  FlatList,
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {MentorClassComp} from '../../../components/MentorClassComp/MentorClassComp';
import {colorTutor_, MentorColor} from '../../../config/color';
import {styles} from './style';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import FrontMentorFlatlist from '../../../components/FrontMentorFlatlist/FrontMentorFlatlist';
import HorizantalDetailComp from '../../../components/HorizantalDetailComp/HorizantalDetailComp';
import SubcriptionPackComp from '../../../components/SubcriptionPackComp/SubcriptionPackComp';
import {SearchbarHeader} from '../../../components/SearchBarHeaderComp/SearchbarHeader';
import {ButtonThemeComp} from '../../../components/ButtonThemeComp/ButtonThemeComp';
import InformationTextView from '../../../components/InformationTextView/InformationTextView';
import {ButtonIconComp} from '../../../components/ButtonIconComp/ButtonIconComp';
import axios from 'react-native-axios';
import {
  GetMentorApprovedClassUrl,
  GetMentorPendingClassUrl,
  GetPendingClassUrl,
  UpdateRequestStatusUrl,
} from '../../../config/Urls';
import {errorHandler} from '../../../config/helperFunction';
import {errorMessage} from '../../../config/NotificationMessage';
import {useSelector} from 'react-redux';
import {SkypeIndicator} from 'react-native-indicators';
import {useEffect} from 'react';

const MentorDashboardScreen = ({navigation}) => {
  const {userData, token} = useSelector(state => state.userData);

  const [allStates, setAllStates] = useState({
    acceptClassState: [],
    pendingClassState: [],
    myClassState: [],
    messagesState: [],
    courcesState: [],
  });
  const [allLoading, setAllLoading] = useState({
    acceptLoading: false,
    pendingLoading: true,
    messageLoading: false,
    myClassLoading: false,
    courcesLoading: false,
    createClassLoading: false,
  });
  const {
    acceptLoading,
    pendingLoading,
    messageLoading,
    myClassLoading,
    courcesLoading,
    createClassLoading,
  } = allLoading;
  const {
    acceptClassState,
    pendingClassState,
    messagesState,
    myClassState,
    courcesState,
  } = allStates;
  const updateState = data => {
    setAllStates(prev => ({...prev, ...data}));
  };
  const updateLoadingState = data => {
    setAllLoading(prev => ({...prev, ...data}));
  };
  const [teacherList, setTeacherList] = useState([
    {
      id: 0,
      image: require('../../../image/profile.jpg'),
      name: 'Sarah Martin',
      clock: '9:00PM - 10:00PM',
      subject: 'English',
      timing: '1 hour',
    },
    {
      id: 1,
      image: require('../../../image/profile.jpg'),
      name: 'Sarah Martin',
      clock: '9:00PM - 10:00PM',
      subject: 'English',
      timing: '1 hour',
    },
    {
      id: 2,
      image: require('../../../image/profile.jpg'),
      name: 'Sarah Martin',
      clock: '9:00PM - 10:00PM',
      subject: 'English',
      timing: '1 hour',
    },
    {
      id: 3,
      image: require('../../../image/profile.jpg'),
      name: 'Sarah Martin',
      clock: '9:00PM - 10:00PM',
      subject: 'English',
      timing: '1 hour',
    },
    {
      id: 4,
      image: require('../../../image/profile.jpg'),
      name: 'Sarah Martin',
      clock: '9:00PM - 10:00PM',
      subject: 'English',
      timing: '1 hour',
    },
    {
      id: 5,
      image: require('../../../image/profile.jpg'),
      name: 'Sarah Martin',
      clock: '9:00PM - 10:00PM',
      subject: 'English',
      timing: '1 hour',
    },
    {
      id: 6,
      image: require('../../../image/profile.jpg'),
      name: 'Sarah Martin',
      clock: '9:00PM - 10:00PM',
      subject: 'English',
      timing: '1 hour',
    },
  ]);
  const updateStatus = (data, status) => {
    console.log(137, data.id, status);
    updateLoadingState({pendingLoading: true});
    let url = UpdateRequestStatusUrl + data.id;
    let body = {
      status: status,
    };

    axios
      .put(url, body, {
        headers: {
          Authorization: `Bearer ${'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiZmQ4OTZkNjZlY2FjMWI0ZjdjYTdmMWU4NWQwYWM3ZmFmNmViZjIxYzk2MzI0YmU5NjdlNDZhMjA5MDYzZTMxMDg5YmM5YTdlNWUxMzUwYzgiLCJpYXQiOjE2Njg3MTU4NjkuNzUwOTIxLCJuYmYiOjE2Njg3MTU4NjkuNzUwOTIzLCJleHAiOjE3MDAyNTE4NjkuNzQ4NzE5LCJzdWIiOiIyIiwic2NvcGVzIjpbXX0.MiydSQROBVjErvBnw3k0eEksifuGSuhm4LQ3A4a9ts5J50GLTy8QLYwDBsJ8paUztnukT7DGh0VYDyGKHFzx7PJlKpG3c8q2sV9XBLwp-ol8NIhHBIgWMEueX4fDVM-rUeJPsipzeLlBEqjSNVgzXtn4p7JbwDhlXjUvXaZcjOdd6nalrUTLefeZMMO0h3-yxDzGKeamZXDQ_ZOTINahl3glwSBr7zCS0GOuMkAw6V0RdMi1AYEX82kfcr_cVLGeonT40Cwyev3SESvw8U8-CAlM_xUu7Y_q5QTWX9bsLtvtM7mT_dgmoKzFkpw1QMZjolH_jVVywe_4NriLpz_ThUe-nM9ARWK85ndFHCeNJJWeQHzxOaEJsNlIl9sdKNknYGgSoGp1abFfELPYTBoUVrWLNXbbNysL7Vovk2iEdGK3O5dH4TCJp6e9dyoqFU1RWINM-x3s5WtHgM-ZjRphq2msGxdLxRZiZbAMouUXCK4eE_crZavI_frJUTKZDHjQdIyRtH606pMn3PfD9UW7Mbq8A7HeHQU0LoesyHF4UOaxOBBDm-aAc-2jhBafCzCXUhtIS11iiu9tYxlw81Hp4z99jGn6GJhAOM3J3vUws7T6IR2PkBwRTIyt2344Dn8rce5Cm8r2rl_NzZ4nt7qxpW5t3lzWfmGpTaNK6clru6w'}`,
        },
        // headers: {Authorization: `Bearer ${token}`},
      })
      .then(function (response) {
        console.log('res', response.data);
        updateLoadingState({pendingLoading: false});
        getApiData(
          GetMentorPendingClassUrl,
          'pendingClassState',
          'pendingLoading',
        );
        status == 'approve' &&
          getApiData(
            GetMentorApprovedClassUrl,
            'acceptClassState',
            'acceptLoading',
          );
      })
      .catch(function (error) {
        console.log('errro', error.response);
        updateLoadingState({pendingLoading: false});
        errorMessage(errorHandler(error));
      });
  };
  const getApiData = (url, state, loading) => {
    updateLoadingState({[loading]: true});
    axios
      .get(url, {
        headers: {
          Authorization: `Bearer ${'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiZmQ4OTZkNjZlY2FjMWI0ZjdjYTdmMWU4NWQwYWM3ZmFmNmViZjIxYzk2MzI0YmU5NjdlNDZhMjA5MDYzZTMxMDg5YmM5YTdlNWUxMzUwYzgiLCJpYXQiOjE2Njg3MTU4NjkuNzUwOTIxLCJuYmYiOjE2Njg3MTU4NjkuNzUwOTIzLCJleHAiOjE3MDAyNTE4NjkuNzQ4NzE5LCJzdWIiOiIyIiwic2NvcGVzIjpbXX0.MiydSQROBVjErvBnw3k0eEksifuGSuhm4LQ3A4a9ts5J50GLTy8QLYwDBsJ8paUztnukT7DGh0VYDyGKHFzx7PJlKpG3c8q2sV9XBLwp-ol8NIhHBIgWMEueX4fDVM-rUeJPsipzeLlBEqjSNVgzXtn4p7JbwDhlXjUvXaZcjOdd6nalrUTLefeZMMO0h3-yxDzGKeamZXDQ_ZOTINahl3glwSBr7zCS0GOuMkAw6V0RdMi1AYEX82kfcr_cVLGeonT40Cwyev3SESvw8U8-CAlM_xUu7Y_q5QTWX9bsLtvtM7mT_dgmoKzFkpw1QMZjolH_jVVywe_4NriLpz_ThUe-nM9ARWK85ndFHCeNJJWeQHzxOaEJsNlIl9sdKNknYGgSoGp1abFfELPYTBoUVrWLNXbbNysL7Vovk2iEdGK3O5dH4TCJp6e9dyoqFU1RWINM-x3s5WtHgM-ZjRphq2msGxdLxRZiZbAMouUXCK4eE_crZavI_frJUTKZDHjQdIyRtH606pMn3PfD9UW7Mbq8A7HeHQU0LoesyHF4UOaxOBBDm-aAc-2jhBafCzCXUhtIS11iiu9tYxlw81Hp4z99jGn6GJhAOM3J3vUws7T6IR2PkBwRTIyt2344Dn8rce5Cm8r2rl_NzZ4nt7qxpW5t3lzWfmGpTaNK6clru6w'}`,
        },
        // headers: {Authorization: `Bearer ${token}`},
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
    getApiData(GetMentorApprovedClassUrl, 'acceptClassState', 'acceptLoading');
    getApiData(GetMentorPendingClassUrl, 'pendingClassState', 'pendingLoading');
    // getApiData(GetMyClasses, 'myClassState', 'myClassLoading');
  }, []);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colorTutor_.topNavigationColor,
      }}>
      <StatusBar
        hidden={false}
        barStyle={Platform.OS == 'ios' ? 'dark-content' : 'default'}
      />
      <SearchbarHeader
        onPressSetting={() => navigation.navigate('MentorSettingScreen')}
        heart={true}
      />

      <ScrollView
        scrollEnabled
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.MainScroll}>
        <View style={styles.MainView}>
          <HorizantalDetailComp
            leftText={`   My classes`}
            rightText={` view all classes`}
          />
          {acceptLoading ? (
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
          ) : acceptClassState.length > 0 ? (
            <FrontMentorFlatlist data={acceptClassState} />
          ) : (
            <View style={styles.createClassView}>
              <InformationTextView
                iconcolor={MentorColor.MentorThemeFirst}
                style={{
                  width: wp('85'),
                  backgroundColor: MentorColor.MentorLightTheme,
                }}
                textColor={MentorColor.MentorThemeFirst}
                text={'You don’t have any class created'}
              />
              <View style={{marginTop: hp('2')}}>
                <ButtonIconComp
                  onPress={() => navigation.navigate('MentorServices')}
                  style={styles.createButton}
                  text={'Create class'}
                  name={'add'}
                  size={hp('3')}
                />
              </View>
            </View>
          )}
        </View>
        <View style={styles.MainView}>
          <HorizantalDetailComp
            leftText={`   Pending requests`}
            rightText={` view all classes`}
          />
          {pendingLoading ? (
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
          ) : pendingClassState.length > 0 ? (
            <FrontMentorFlatlist
              changeFIcon={true}
              changeSIcon={true}
              updateStatus={updateStatus}
              data={pendingClassState}
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
                text={'You don’t have any pending classes'}
              />
            </View>
          )}
        </View>
        <View style={styles.MainView}>
          <HorizantalDetailComp
            leftText={`   Your Subcription`}
            rightText={` view all plans`}
          />
          <View style={{marginTop: wp('3')}}>
            <SubcriptionPackComp
              priceTxt={'$15'}
              iconcolor={MentorColor.MentorlightGrey}
              data={teacherList.length > 0 ? false : true}
              text={
                teacherList.length > 0
                  ? `You are subscribed to our yearly package`
                  : `You are not subscribed to any plans`
              }
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default MentorDashboardScreen;
