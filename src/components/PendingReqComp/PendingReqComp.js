import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import VerticalDividerComp from '../VerticalDividerComp/VerticalDividerComp';

export const PendingReqComp = props => {
  return (
    <View
      style={{
        flexDirection: 'row',
        backgroundColor: 'white',
        alignItems: 'center',
        marginBottom: hp('3'),
        marginTop: hp('1'),
        marginHorizontal: 12,
        borderRadius: 5,
      }}>
      {props?.image && (
        <Image
          style={{
            height: 40,
            width: 40,
            margin: 5,
            borderRadius: 20,
            marginTop: 5,
          }}
          source={props?.image}
        />
      )}
      <Text style={{color: 'black', fontSize: hp('2.2'), padding: 15}}>
        {props?.text}
      </Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-end',
          flex: 1,
          padding: 15,
        }}>
        {props?.changeIcon1 ? (
          props?.changeIcon1
        ) : (
          <Image
            style={{height: 20, width: 20, margin: 5}}
            source={require('../../image/rightick.png')}
          />
        )}

        <VerticalDividerComp />
        {props?.changeIcon2 ? (
          props?.changeIcon2
        ) : (
          <Image
            style={{height: 20, width: 20, margin: 5}}
            source={require('../../image/close.png')}
          />
        )}
      </View>
    </View>
  );
};
