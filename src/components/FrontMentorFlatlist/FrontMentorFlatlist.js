import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {MentorClassComp} from '../MentorClassComp/MentorClassComp';
import {useNavigation} from '@react-navigation/native';
const FrontMentorFlatlist = props => {
  const navigation = useNavigation();

  return (
    <FlatList
      data={props?.data}
      contentContainerStyle={{marginTop: hp('2'), marginLeft: wp('5')}}
      keyExtractor={(item, index) => index.toString()}
      horizontal
      showsHorizontalScrollIndicator={false}
      renderItem={({item}) => {
        return (
          <MentorClassComp navigate={() => props?.navigate(item)} data={item} />
        );
      }}
    />
  );
};

export default FrontMentorFlatlist;

const styles = StyleSheet.create({});
