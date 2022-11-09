import React from 'react';
import {View, Text, FlatList} from 'react-native';
import {TuteeHomeComp} from '../TuteeHomeComp/TuteeHomeComp';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const TuteeHomeFlatListComp = props => {
  return (
    <FlatList
      data={props?.data}
      keyExtractor={(item, index) => index.toString()}
      numColumns={2}
      contentContainerStyle={{
        width: wp('95'),
        alignSelf: 'center',
        paddingBottom: hp('15'),
      }}
      renderItem={({item}) => {
        return (
          <TuteeHomeComp navigate={() => props?.navigate(item)} data={item} />
        );
      }}
    />
  );
};
