import React from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import {TuteeHomeComp} from '../TuteeHomeComp/TuteeHomeComp';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
export const TuteeHomeFlatListComp = (props) => {
  const navigation = useNavigation();
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

        return( 
        <TouchableOpacity onPress={()=>navigation.navigate('SubjectDetailScreen',item)}>
          <TuteeHomeComp data={item} />
        </TouchableOpacity>
        )
      }}
    />
  );
};
