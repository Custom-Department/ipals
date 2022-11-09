import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export const PendingReqComp = props => {
  return (
    <TouchableOpacity
      onPress={() => props?.checkPendingReq(props)}
      style={{
        flexDirection: 'row',
        backgroundColor: 'white',
        alignItems: 'center',
        marginBottom: hp('3'),
        marginHorizontal: wp('4'),
        borderRadius: 10,
      }}>
      <Image
        style={{
          height: 40,
          width: 40,
          margin: 5,
          borderRadius: 20,
          marginTop: 5,
        }}
        source={require('../../image/profile.jpg')}
      />
      <Text style={{color: 'black', padding: 15}}>
        {props?.data?.user?.f_name}
      </Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-end',
          flex: 1,
          padding: 15,
        }}>
        <TouchableOpacity onPress={() => props?.onPress(props)}>
          <Image
            style={{height: 20, width: 20, margin: 5}}
            source={require('../../image/rightick.png')}
          />
        </TouchableOpacity>
        <Image
          style={{height: 20, width: 20, margin: 5, tintColor: 'grey'}}
          source={require('../../image/line.png')}
        />
        <TouchableOpacity onPress={() => props?.onCancel(props)}>
          <Image
            style={{height: 20, width: 20, margin: 5}}
            source={require('../../image/close.png')}
          />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};
