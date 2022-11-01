import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {globalStyles} from '../../config/globalStyles';
import {styles} from './styles';
import Octicons from 'react-native-vector-icons/Octicons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {color, colorTutor_} from '../../config/color';

export const HeaderComponent = props => {
  const [index, setIndex] = useState('');
  const setIndexFunction = value => {
    setIndex(value);
    props?.checkIndexStatus(value);
  };
  return (
    <View style={styles.topView}>
      <View style={styles.innerTopView}>
        <View
          style={{
            flexDirection: 'row',
            marginLeft: wp('3'),
            alignItems: 'center',
          }}>
          <Image
            source={require('../../image/smallImage1.png')}
            style={{marginRight: wp('4')}}
          />
          <View>
            <Text style={{...styles.txt, ...globalStyles.globalModuletutor2}}>
              Welcome
            </Text>
            <Text
              style={{...globalStyles.globalModuletutor2, fontSize: hp('2.3')}}>
              Kevin Martin
            </Text>
          </View>
        </View>
        <View style={styles.iconView}>
          <Octicons
            onPress={() => console.log('bell')}
            name="bell-fill"
            size={hp('3')}
            color={colorTutor_.blue}
          />
          {props.search && (
            <Ionicons
              onPress={() => console.log('Setting')}
              name="search"
              size={hp('3')}
              color={colorTutor_.blue}
            />
          )}
          <Ionicons
            onPress={() => console.log('Setting')}
            name="settings"
            size={hp('3')}
            color={colorTutor_.blue}
          />
        </View>
      </View>
      <View style={styles.mainBtnContainer}>
        <TouchableOpacity
          style={{
            ...styles.homeButtonView,
            backgroundColor:
              index == 0 ? colorTutor_.blue : colorTutor_.topNavigationColor,
          }}
          onPress={() => {
            setIndexFunction(0), console.log('homeButton');
          }}>
          <Text
            style={{
              ...globalStyles.globalModuletutor,
              fontSize: hp('2'),
              textAlign: 'center',
            }}>
            {props?.navigatorName[0]}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            ...styles.classesButtonView,
            backgroundColor:
              index == 1 ? colorTutor_.blue : colorTutor_.topNavigationColor,
          }}
          onPress={() => {
            setIndexFunction(1), console.log('homeButton');
          }}>
          <Text
            style={{
              ...globalStyles.globalModuletutor,
              fontSize: hp('2'),
              textAlign: 'center',
            }}>
            {props?.navigatorName[1]}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            ...styles.msgButtonView,
            backgroundColor:
              index == 2 ? colorTutor_.blue : colorTutor_.topNavigationColor,
          }}
          onPress={() => {
            setIndexFunction(2), console.log('homeButton');
          }}>
          <Text
            style={{
              ...globalStyles.globalModuletutor,
              fontSize: hp('2'),
              textAlign: 'center',
            }}>
            {props?.navigatorName[2]}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
