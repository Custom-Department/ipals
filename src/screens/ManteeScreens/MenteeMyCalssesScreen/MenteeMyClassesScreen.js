import React ,{useEffect,useState}from "react";
import { FlatList, ScrollView, View } from "react-native";
import { ClassesDetailView } from "../../../components/ClassesDetailView/ClassesDetailView";
import HorizantalDetailComp from "../../../components/HorizantalDetailComp/HorizantalDetailComp";
import { SearchbarHeader } from "../../../components/SearchBarHeaderComp/SearchbarHeader";
import { PendingReqComp } from "../../../components/PendingReqComp/PendingReqComp";
import {MentorColor,color,colorTutor_} from '../../../config/color';
import types from '../../../Redux/types';
import {useDispatch, useSelector} from 'react-redux';
import {styles} from './styles'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';


const MenteeMyClassesScreen = () =>{
    const data = [{},{},{},{}]
    const datum = [{},{},{}]
    const {userData, token} = useSelector(state => state.userData);
    const dispatch = useDispatch();
    // const [allStates, setAllStates] = useState({
    //     GetMyClassState: [],
    // });
    // const [allLoading, setAllLoading] = useState({
    //     GetMyClassLoading: false,
    // });

    // const {
    //     GetMyClassLoading,
    // } = allLoading;

    // const {
    //     GetMyClassState,
    // }=allStates;

    // const updateState = data => {
    //     setAllStates(prev => ({...prev, ...data}));
    //   };
    //   const updateLoadingState = data => {
    //     setAllLoading(prev => ({...prev, ...data}));
    //   };
      
    // const getApiData = (url, state, loading) => {
    //     updateLoadingState({[loading]: true});
    //     axios
    //       .get(url, {
    //         headers: {Authorization: `Bearer ${token}`},
    //       })
    //       .then(function (response) {
    //         updateState({[state]: response.data.data});
    //         updateLoadingState({[loading]: false});
    //       })
    //       .catch(function (error) {
    //         updateLoadingState({[loading]: false});
    //         errorMessage(errorHandler(error));
    //       });
    //   };
    //   useEffect(() => {
    //     getApiData(GetTeachreClasses, 'GetMyClassState', 'GetMyClassLoading');
    // }, []);

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
            <FlatList
            data={data}
            contentContainerStyle={{marginTop: hp('2')}}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => {  
                return <ClassesDetailView data={item}  myclass={true}/>;}}

           />
             <HorizantalDetailComp 
            leftText={'Pending Requests'}
            icon={true}
            />

        <FlatList
          data={datum}
          contentContainerStyle={{marginTop: hp('2')}}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => {
            return (
              <PendingReqComp
                tickStatus={false}
                // onCancel={item => updateStatus(item, 'reject')}
                data={item}
              />
              );
            }}
          />
            </ScrollView>
        </View>
    )

}
export default MenteeMyClassesScreen;