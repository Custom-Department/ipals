import React, { useState ,useEffect} from 'react';
import { View , ScrollView} from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';
import {SearchbarHeader}from '../../../components/SearchBarHeaderComp/SearchbarHeader'
import HorizantalDetailComp from '../../../components/HorizantalDetailComp/HorizantalDetailComp';
import { styles } from './styles';
import { ManteeFlatlistcomponent } from '../../../components/MenteeComp/ManteeFlatlistcomponent';

const MenteeDashboardScreen = ({navigation}) => {
    return(
        <View style={styles.mainView}>
             <SearchbarHeader heart={true} />
             <ScrollView 
             contentContainerStyle={styles.scrollView}
             scrollEnabled
             showsVerticalScrollIndicator={false}>
              <View style={styles.Emptydivider}/>
             <HorizantalDetailComp
            leftText={`   Languages`}
            dot={true}
            line={true}
            rightText={` view all category`}
          />
          <View style={styles.Emptydivider}/>
          <ManteeFlatlistcomponent click={()=>navigation.navigate('MenteeDetailedScreen')}/>
          <View style={styles.Emptydivider}/>
          <HorizantalDetailComp
            leftText={`   Finance & Investment`}
            dot={true}
            line={true}
            rightText={`view all category`}
          />
          <View style={styles.Emptydivider}/>
          <ManteeFlatlistcomponent/>
          <View style={styles.Emptydivider}/>
          <HorizantalDetailComp
            leftText={`   Finance & Investment`}
            dot={true}
            line={true}
            rightText={`view all category`}
          />
            <View style={styles.Emptydivider}/>
          <ManteeFlatlistcomponent/>
          <View style={styles.Emptydivider}/>
          
             </ScrollView>
        </View>
    )
}
export default MenteeDashboardScreen;