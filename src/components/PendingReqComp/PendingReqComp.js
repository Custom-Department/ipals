import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {SkypeIndicator} from 'react-native-indicators';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const PendingReqComp = props => {
  const {user} = props?.data?.my_class ?? props?.data;
  // console.log(10, props);
  return props.isLoading ? (
    <SkypeIndicator
      color={'white'}
      size={hp('4')}
      style={{
        alignSelf: 'center',
        justifyContent: 'center',
      }}
    />
  ) : (
    <TouchableOpacity
      onPress={() => console.log('HGUJBU')}
      // onPress={() => props?.checkPendingReq(props)}
      style={{
        flexDirection: 'row',
        backgroundColor: 'white',
        alignItems: 'center',
        marginBottom: hp('3'),
        marginHorizontal: wp('4'),
        borderRadius: 10,
      }}>
      {user?.profileImageLink && (
        <Image
          style={{
            height: 40,
            width: 40,
            margin: 5,
            borderRadius: 20,
            marginTop: 5,
          }}
          source={{uri: user?.profileImageLink}}
        />
      )}
      <Text style={{color: 'black', padding: 15}}>
        {user?.f_name + ' ' + user?.l_name}
      </Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-end',
          flex: 1,
          padding: 15,
        }}>
        {props.tickStatus != false && (
          <TouchableOpacity onPress={() => props?.onPress(props)}>
            <Image
              style={{height: 20, width: 20, margin: 5}}
              source={require('../../image/rightick.png')}
            />
          </TouchableOpacity>
        )}
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
