import React, {useState} from 'react';
import {
  View,
  Image,
  Text,
  TextInput,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {color, colorTutor_} from '../../config/color';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {SearchbarHeader} from '../SearchBarHeaderComp/SearchbarHeader';
import {styles} from './styles';
import {CircleImageComp} from '../CircleImageComp/CircleImageComp';
import {TextComp} from '../TextComponent';

export const ManteeFlatlistcomponent = props => {
  const data = [
    {
      id: 0,
      image: require('../../image/profile.jpg'),
      name: 'Sarah Martin',
      clock: '9:00PM - 10:00PM',
      subject: 'English',
      timing: '1 hour',
    },
    {
      id: 1,
      image: require('../../image/profile.jpg'),
      name: 'Sarah Martin',
      clock: '9:00PM - 10:00PM',
      subject: 'English',
      timing: '1 hour',
    },
    {
      id: 2,
      image: require('../../image/profile.jpg'),
      name: 'Sarah Martin',
      clock: '9:00PM - 10:00PM',
      subject: 'English',
      timing: '1 hour',
    },
    {
      id: 3,
      image: require('../../image/profile.jpg'),
      name: 'Sarah Martin',
      clock: '9:00PM - 10:00PM',
      subject: 'English',
      timing: '1 hour',
    },
    {
      id: 4,
      image: require('../../image/profile.jpg'),
      name: 'Sarah Martin',
      clock: '9:00PM - 10:00PM',
      subject: 'English',
      timing: '1 hour',
    },
    {
      id: 5,
      image: require('../../image/profile.jpg'),
      name: 'Sarah Martin',
      clock: '9:00PM - 10:00PM',
      subject: 'English',
      timing: '1 hour',
    },
    {
      id: 6,
      image: require('../../image/profile.jpg'),
      name: 'Sarah Martin',
      clock: '9:00PM - 10:00PM',
      subject: 'English',
      timing: '1 hour',
    },
  ];
  const renderitem = ({item}) => {
    return (
      <TouchableOpacity style={styles.flatlistmain} onPress={props.click}>
        <View style={styles.flupperView}>
          <Image
            source={require('../../image/image.jpg')}
            style={styles.flimagecrop}
          />
          <View>
            <Text style={{fontSize: hp('1.8')}}>Sarah Martin</Text>
            <Text style={{fontSize: hp('1.5')}}>Language</Text>
          </View>
        </View>
        <View style={styles.centerView}>
          <AntDesign
            name="clockcircle"
            size={hp('2.5')}
            style={{marginRight: wp('1')}}
            color={colorTutor_.ipallightGreen}
          />
          <TextComp
            text={item?.clock}
            style={{color: colorTutor_.ipallightGreen}}
          />
        </View>
        <View style={styles.centerView}>
          <View
            style={{
              flexDirection: 'row',
              width: wp('45'),
              justifyContent: 'space-around',
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Image
                style={{
                  height: 20,
                  width: 20,
                  tintColor: colorTutor_.ipallightGreen,
                }}
                source={require('../../image/book.png')}
              />
              <TextComp
                text={item?.subject}
                style={{color: colorTutor_.ipallightGreen}}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <AntDesign
                name="clockcircle"
                size={hp('2.5')}
                style={{marginRight: wp('1')}}
                color={colorTutor_.ipallightGreen}
              />
              <TextComp
                text={item?.timing}
                style={{
                  color: colorTutor_.ipallightGreen,
                  marginRight: wp('1'),
                }}
              />
            </View>
          </View>
        </View>
        <View style={styles.bottomView}>
          <View style={styles.bottombutton}>
            <Text style={styles.price}>$25</Text>
          </View>
          <MaterialCommunityIcons
            name="email"
            size={hp('4')}
            color={colorTutor_.lightGreen}
          />
          <View style={styles.verticaldivider}></View>
          <EvilIcons
            name="heart"
            size={hp('4')}
            style={{marginTop: hp('0.5')}}
          />
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <FlatList
      data={data}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{marginLeft: wp('4')}}
      horizontal={true}
      renderItem={renderitem}
    />
  );
};
