import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { MentorColor} from '../../config/color';
import {TextComp} from '../TextComponent';
const InformationTextView = props => {
  let name = props?.name ?? 'exclamationcircle';
  return (
    <TouchableOpacity
      onPress={() => console.log('sds')}
      style={{...styles.container, ...props.style}}>
      <AntDesign
        style={{marginHorizontal: wp('2')}}
        name={name}
        size={hp('2.5')}
        color={props?.iconcolor ?? 'white'}
      />
      <View style={{flexWrap: 'wrap', display: 'flex'}}>
        <TextComp
          style={{
            ...props.textStyle,
            width: wp('85'),
            marginLeft: wp('1.5'),
            fontSize: hp('1.5'),
          }}
          color={props.textColor ?? 'white'}
          text={props?.text}
        />
      </View>
    </TouchableOpacity>
  );
};

export default InformationTextView;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: wp('95'),
    height: hp('6'),
    borderRadius: 5,
    borderColor: 'black',
    alignItems: 'center',
    padding: 5,
    marginTop: hp('2'),
    alignSelf: 'center',
    backgroundColor: MentorColor.MentorInformationColor,
  },
});
