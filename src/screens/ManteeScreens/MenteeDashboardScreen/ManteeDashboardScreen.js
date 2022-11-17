import React, {useState, useEffect} from 'react';
import {
  View,
  Image,
  Text,
  TextInput,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
  FlatList,
  ScrollView,
  StatusBar,
  Platform,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {SearchbarHeader} from '../../../components/SearchBarHeaderComp/SearchbarHeader';
import HorizantalDetailComp from '../../../components/HorizantalDetailComp/HorizantalDetailComp';
import {styles} from './styles';
import {ManteeFlatlistcomponent} from '../../../components/MenteeComp/ManteeFlatlistcomponent';

export const MenteeDashboardScreen = ({navigation}) => {
  return (
    <View style={styles.mainView}>
      <StatusBar
        hidden={false}
        barStyle={Platform.OS == 'ios' ? 'dark-content' : 'default'}
      />
      <SearchbarHeader heart={true} />
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
