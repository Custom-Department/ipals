import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image, Switch} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {globalStyles} from '../../config/globalStyles';
import {styles} from './styles';
import Octicons from 'react-native-vector-icons/Octicons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {color, colorTutor_} from '../../config/color';
import {TextComp} from '../TextComponent';
import HorizontalDividerComp from '../HorizontalDividerComp/HorizontalDividerComp';

export const SettingIconComp = props => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <>
      <View style={styles.container}>
        <View
          style={{
            flexDirection: 'row',
          }}>
          {props?.changeIcon ? (
            props?.changeIcon
          ) : (
            <Octicons
              style={styles.icon1}
              name={props?.name}
              size={hp('3')}
              color={'white'}
            />
          )}
          <TextComp
            color={'white'}
            text={props?.text}
            style={{
              marginLeft: wp('5.5'),
              fontSize: hp('2'),
            }}
          />
        </View>
        {props?.switch && (
          <Switch
            trackColor={{false: colorTutor_.blue, true: colorTutor_.blue}}
            thumbColor={isEnabled ? colorTutor_.topNavigationColor : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        )}
      </View>
      <HorizontalDividerComp
        style={{alignSelf: 'center', borderWidth: 0.1, marginRight: wp('10')}}
        width={'90'}
        color={colorTutor_.bookColor}
      />
    </>
  );
};
