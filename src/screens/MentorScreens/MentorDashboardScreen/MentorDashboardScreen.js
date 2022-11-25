import React, {useCallback, useState} from 'react';
import {
  FlatList,
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  RefreshControl,
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
  MentorSubscriptionUrl,
  MentorUpdateStatusUrl,
  UpdateRequestStatusUrl,
} from '../../../config/Urls';
import {errorHandler} from '../../../config/helperFunction';
import {
  errorMessage,
  successMessage,
} from '../../../config/NotificationMessage';
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
    subcriptionState: [],
  });
  const [allLoading, setAllLoading] = useState({
    acceptLoading: false,
    pendingLoading: true,
    messageLoading: false,
    myClassLoading: false,
    courcesLoading: false,
    createClassLoading: false,
    subcriptionLoader: false,
  });
  const {
    acceptLoading,
    pendingLoading,
    messageLoading,
    myClassLoading,
    courcesLoading,
    createClassLoading,
    subcriptionLoader,
  } = allLoading;
  const {
    acceptClassState,
    pendingClassState,
    messagesState,
    myClassState,
    courcesState,
    subcriptionState,
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
    updateLoadingState({pendingLoading: true});
    let url = MentorUpdateStatusUrl + data.id;
    console.log(141, url);
    let body = {
      // status: 'Approve',
      // status: 'Rejected',
      status: status,
    };

    axios
      .put(url, body, {
        headers: {Authorization: `Bearer ${token}`},
      })
      .then(function (response) {
        updateLoadingState({pendingLoading: false});
        successMessage(
          status == 'Approve' ? 'Succesfully Accepted' : ' Succefully Rejected',
        );
        getApiData(
          GetMentorPendingClassUrl,
          'pendingClassState',
          'pendingLoading',
        );
        status == 'Approve' &&
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
  const wait = timeout => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  };
  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = useCallback(() => {
    updateLoadingState({
      acceptLoading: true,
      pendingLoading: true,
      GetTeacherLoading: true,
    });
    wait(2000).then(() => {
      getApiData(
        GetMentorApprovedClassUrl,
        'acceptClassState',
        'acceptLoading',
      );
      getApiData(
        GetMentorPendingClassUrl,
        'pendingClassState',
        'pendingLoading',
      );
      setRefreshing(false);
    });
  }, []);
  const getApiData = (url, state, loading) => {
    updateLoadingState({[loading]: true});
    axios
      .get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
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
    getApiData(MentorSubscriptionUrl, 'subcriptionState', 'subcriptionLoader');
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
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        scrollEnabled
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.MainScroll}>
        <View style={styles.MainView}>
          <HorizantalDetailComp
            leftText={`   Approved request`}
            dot={true}
            // line={true}
            // rightText={` view all classes`}
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
            dot={true}
            // line={true}
            // rightText={` view all classes`}
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
            dot={true}
            // line={true}
            // rightText={` view all plans`}
          />

          {/* {subcriptionState.length > 0 ? (
            <FlatList
              data={subcriptionState}
              keyExtractor={(item, index) => index.toString()}
              numColumns={2}
              contentContainerStyle={{
                width: wp('95'),
                alignSelf: 'center',
                paddingBottom: hp('15'),
              }}
              renderItem={({item, index}) => {
                return (
                  <View style={{marginTop: wp('3')}}>
                    <SubcriptionPackComp
                      priceTxt={'$' + item?.price}
                      iconcolor={MentorColor.MentorlightGrey}
                      perAnumTxt={item?.plan_type}
                      data={false}
                      text={`You are subscribed to
our ${item?.plan_type} package`}
                    />
                  </View>
                );
              }}
            />
          ) : (
            <View style={{marginTop: wp('3')}}>
              <SubcriptionPackComp
                iconcolor={MentorColor.MentorlightGrey}
                data={true}
                text={`You are not subscribe
to any plans`}
              />
            </View>
          )} */}
          {subcriptionState.length > 0 ? (
            <FlatList
              data={subcriptionState}
              keyExtractor={(item, index) => index.toString()}
              numColumns={2}
              contentContainerStyle={{
                width: wp('95'),
                alignSelf: 'center',
                paddingBottom: hp('15'),
              }}
              renderItem={({item, index}) => {
                return (
                  <View style={{marginTop: wp('3')}}>
                    <SubcriptionPackComp
                      priceTxt={'$' + item?.price}
                      // priceTxt={'$50'}
                      iconcolor={MentorColor.MentorlightGrey}
                      perAnumTxt={item?.plan_type}
                      data={false}
                      text={`You are subscribed to
our ${item?.plan_type} package`}
                    />
                  </View>
                );
              }}
            />
          ) : (
            <View style={{marginTop: wp('3')}}>
              <SubcriptionPackComp
                iconcolor={MentorColor.MentorlightGrey}
                data={true}
                text={`You are not subscribe
to any plans`}
              />
            </View>
          )}
        </View>
      </ScrollView>
    </View>
  );
};
{
  /* <View style={{marginTop: wp('3')}}>
<SubcriptionPackComp
  priceTxt={'$' + item?.price}
  iconcolor={MentorColor.MentorlightGrey}
  perAnumTxt={item?.plan_type}
  data={item.length > 0 ? true : false}
  text={
    item?.length > 0
      ? `You are subscribed to
our ${item?.plan_type} package`
      : `You are not subscribe
to any plans`
  }
/>
</View> */
}
export default MentorDashboardScreen;
