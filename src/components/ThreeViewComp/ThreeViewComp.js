import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {colorTutor_} from '../../config/color';
import {CircleImageComp} from '../CircleImageComp/CircleImageComp';
import {TextComp} from '../TextComponent';
import Entypo from 'react-native-vector-icons/Entypo';

export const ThreeViewComp = props => {
  const {data} = props;
  return (
    <View style={{...styles.mainView, ...props?.viewStyle}}>
      <View style={styles.leftView}>
        <CircleImageComp styles={props?.imageStyles} image={data?.image} />
      </View>
      <View style={styles.centerView}>
        <TextComp text={data?.firstText} style={styles.firstText} />
        <TextComp text={data?.secondText} style={{fontSize: hp('1.3')}} />
      </View>
      <View style={styles.rightView}>
        {props.changeIcon ? (
          props.changeIcon
        ) : (
          <Entypo
            name="dots-three-vertical"
            color={colorTutor_.ipallightGreen}
            size={hp('3.5')}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    width: wp('93'),
    height: hp('8'),
    backgroundColor: 'white',
    flexDirection: 'row',
    borderRadius: 10,
  },
  leftView: {
    width: wp('16'),
    height: hp('8'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerView: {
    width: wp('61'),
    height: hp('8'),
    justifyContent: 'center',
    marginLeft: wp('1'),
  },
  firstText: {
    fontSize: hp('1.8'),
    fontWeight: 'normal',
    marginBottom: hp('0.5'),
  },
  rightView: {
    width: wp('15'),
    height: hp('8'),
    justifyContent: 'center',
    alignItems: 'center',
  },
});
