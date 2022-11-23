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
import {useDispatch,useSelector} from 'react-redux';
import types from '../../../Redux/types';
import { Getmentorformentee } from '../../../config/Urls';
import { SkypeIndicator } from 'react-native-indicators';

const MenteeDashboardScreen = ({navigation}) => {
  const {userData, token} = useSelector(state => state.userData);
    const dispatch = useDispatch();
    const [allStates, setAllStates] = useState({
        GetmentorformenteeState: [],
        // GetApproveclassState:[],
    });
    const [allLoading, setAllLoading] = useState({
        GetmentorformenteeLoading: false,
        // GetapproveclassLoading: false,
    });

    const {
        GetmentorformenteeLoading,
        // GetapproveclassLoading
    } = allLoading;

    const {
        GetmentorformenteeState,
        // GetApproveclassState
    }=allStates;

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
            // console.log("getdata",response.data.data);
            updateState({[state]: response.data.data});
            updateLoadingState({[loading]: false});
          })
          .catch(function (error) {
            updateLoadingState({[loading]: false});
            errorMessage(errorHandler(error));
          });
      };
      useEffect(() => {
        getApiData(Getmentorformentee, 'GetmentorformenteeState', 'GetmentorformenteeLoading');
    }, []);
  return (
    <View style={styles.mainView}>
      <StatusBar
        hidden={false}
        barStyle={Platform.OS == 'ios' ? 'dark-content' : 'default'}
      />
      <SearchbarHeader heart={true}/>

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
         {/* {GetapproveclassLoading ? (
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
          ) : GetApproveclassState.length > 0 ? ( */}
           <View style={styles.Emptydivider} />
          {GetmentorformenteeLoading?(
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
          ): <ManteeFlatlistcomponent
          data={GetmentorformenteeState}
          click={(item) => navigation.navigate('MenteeDetailedScreen',item)}
        />}
       
       
         
        {/* <View style={styles.Emptydivider} />
        <HorizantalDetailComp
          leftText={`   Finance & Investment`}
          rightText={`view all category`}
        />
        <View style={styles.Emptydivider} />
        <ManteeFlatlistcomponent />
        <View style={styles.Emptydivider} />
        <HorizantalDetailComp
          leftText={`   Finance & Investment`}
          rightText={`view all category`}
        />
        <View style={styles.Emptydivider} />
        <ManteeFlatlistcomponent />
        <View style={styles.Emptydivider} /> */}
      </ScrollView>
    </View>
  );
};

export default MenteeDashboardScreen;
