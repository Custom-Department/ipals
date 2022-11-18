import React, {useState, useEffect} from 'react';
import {View, ScrollView, StatusBar, Platform} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {SearchbarHeader} from '../../../components/SearchBarHeaderComp/SearchbarHeader';
import HorizantalDetailComp from '../../../components/HorizantalDetailComp/HorizantalDetailComp';
import {styles} from './styles';
import {ManteeFlatlistcomponent} from '../../../components/MenteeComp/ManteeFlatlistcomponent';
import {useDispatch} from 'react-redux';
import types from '../../../Redux/types';

const MenteeDashboardScreen = ({navigation}) => {
  const dispatch = useDispatch();
  return (
    <View style={styles.mainView}>
      <StatusBar
        hidden={false}
        barStyle={Platform.OS == 'ios' ? 'dark-content' : 'default'}
      />
      <SearchbarHeader
        onPressSetting={() => {
          navigation.navigate('MenteeSettingScreen');
        }}
        //    onPressSetting={() => {
        //   dispatch({
        //     type: types.LogoutType,
        //   });
        // }}
        heart={true}
      />
      <ScrollView
        contentContainerStyle={styles.scrollView}
        scrollEnabled
        showsVerticalScrollIndicator={false}>
        <View style={styles.Emptydivider} />
        <HorizantalDetailComp
          leftText={`   Languages`}
          rightText={` view all category`}
        />
        <View style={styles.Emptydivider} />
        <ManteeFlatlistcomponent
          click={() => navigation.navigate('MenteeDetailedScreen')}
        />
        <View style={styles.Emptydivider} />
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
        <View style={styles.Emptydivider} />
      </ScrollView>
    </View>
  );
};

export default MenteeDashboardScreen;
