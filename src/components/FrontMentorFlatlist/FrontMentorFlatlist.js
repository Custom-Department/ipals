import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {MentorClassComp} from '../MentorClassComp/MentorClassComp';
import {useNavigation} from '@react-navigation/native';
import Entypo from 'react-native-vector-icons/Entypo';

const FrontMentorFlatlist = props => {
  const navigation = useNavigation();
  const {data} = props;
  // console.log(12, data);
  return (
    <FlatList
      data={props?.data}
      contentContainerStyle={{
        marginTop: hp('2'),
        marginLeft: wp('3'),
        marginRight: wp('3'),
      }}
      keyExtractor={(item, index) => index.toString()}
      horizontal
      showsHorizontalScrollIndicator={false}
      renderItem={({item}) => {
        return (
          <MentorClassComp
            changeFirstIcon={
              props?.changeFIcon && (
                <Entypo
                  onPress={() => props?.updateStatus(item, 'Rejected')}
                  name="circle-with-cross"
                  color="red"
                  size={hp('3')}
                />
              )
            }
            changeSecondIcon={
              props?.changeSIcon && (
                <TouchableOpacity
                  onPress={() => props?.updateStatus(item, 'Approve')}>
                  <Image
                    style={{height: 20, width: 20, margin: 5}}
                    source={require('../../image/rightick.png')}
                  />
                </TouchableOpacity>
              )
            }
            navigate={() => props?.navigate(item)}
            data={item}
          />
        );
      }}
    />
  );
};

export default FrontMentorFlatlist;

const styles = StyleSheet.create({});
