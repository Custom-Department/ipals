import React ,{useEffect,useState}from "react";
import { FlatList, ScrollView, View } from "react-native";
import { ClassesDetailView } from "../../../components/ClassesDetailView/ClassesDetailView";
import HorizantalDetailComp from "../../../components/HorizantalDetailComp/HorizantalDetailComp";
import { SearchbarHeader } from "../../../components/SearchBarHeaderComp/SearchbarHeader";
import InformationTextView from '../../../components/InformationTextView/InformationTextView';
import { PendingReqComp } from "../../../components/PendingReqComp/PendingReqComp";
import {MentorColor,color,colorTutor_} from '../../../config/color';
import axios from 'react-native-axios';
import types from '../../../Redux/types';
import {useDispatch, useSelector} from 'react-redux';
import {styles} from './styles'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';
import { GetApprovedClassUrl, GetMenteeApproveClass, GetMenteePendingClass, UpdateMenteeRequestStatusUrl } from "../../../config/Urls";
import { ButtonIconComp } from "../../../components/ButtonIconComp/ButtonIconComp";
import { errorMessage } from "../../../config/NotificationMessage";
import { errorHandler } from "../../../config/helperFunction";
import { SkypeIndicator } from "react-native-indicators";


const MenteeMyClassesScreen = () =>{
    const data = [{},{},{},{}]
    const datum = [{},{},{}]
    const {userData, token} = useSelector(state => state.userData);
    const dispatch = useDispatch();
    const [allStates, setAllStates] = useState({
        GetpendingclassState: [],
        GetApproveclassState:[],
    });
    const [allLoading, setAllLoading] = useState({
        GetpendingclassLoading: false,
        GetapproveclassLoading: false,
    });

    const {
        GetpendingclassLoading,
        GetapproveclassLoading
    } = allLoading;

    const {
        GetpendingclassState,
        GetApproveclassState
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
            getApiData(GetMenteePendingClass, 'GetpendingclassState', 'GetpendingclassLoading');
            // status == 'approve' &&
            //   getApiData(GetApprovedClassUrl, 'acceptClassState', 'acceptLoading');
          })
          .catch(function (error) {
            updateLoadingState({pendingLoading: false});
            errorMessage(errorHandler(error));
          });
      };
      useEffect(() => {
        getApiData(GetMenteePendingClass, 'GetpendingclassState', 'GetpendingclassLoading');
        getApiData(GetMenteeApproveClass, 'GetApproveclassState', 'GetapproveclassLoading');
    }, []);

    return(
        <View style={styles.mainView}>
            <SearchbarHeader heart={true}/>
            <ScrollView 
             contentContainerStyle={styles.scrollView}
             scrollEnabled
             showsVerticalScrollIndicator={false}>
            <HorizantalDetailComp 
            leftText={'My Classes'}
            icon={true}
            />
        {GetapproveclassLoading ? (
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
          ) : GetApproveclassState.length > 0 ? (
            <FlatList
            data={GetApproveclassState}
            contentContainerStyle={{marginTop: hp('2')}}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => {  
                return <ClassesDetailView data={item}  myclass={true}/>;}}
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
           
             <HorizantalDetailComp 
            leftText={'Pending Requests'}
            icon={true}
            />
            {GetpendingclassLoading ? (
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
          ) : GetpendingclassState.length > 0 ? (
            <FlatList
          data={GetpendingclassState}
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



        
            </ScrollView>
        </View>
    )

}
export default MenteeMyClassesScreen;