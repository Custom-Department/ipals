import React from "react";
import { FlatList, ScrollView, View } from "react-native";
import { ClassesDetailView } from "../../../components/ClassesDetailView/ClassesDetailView";
import HorizantalDetailComp from "../../../components/HorizantalDetailComp/HorizantalDetailComp";
import { SearchbarHeader } from "../../../components/SearchBarHeaderComp/SearchbarHeader";
import { PendingReqComp } from "../../../components/PendingReqComp/PendingReqComp";
import {MentorColor,color,colorTutor_} from '../../../config/color';
import {styles} from './styles'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';


const MenteeMyClassesScreen = () =>{
    const data = [{},{},{},{}]
    const datum = [{},{},{}]

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
                checkPendingReq={() => checkPendingReq(item)}
                onCancel={item => updateStatus(item, 'reject')}
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