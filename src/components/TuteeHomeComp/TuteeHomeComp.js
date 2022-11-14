import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {CircleImageComp} from '../CircleImageComp/CircleImageComp';
import {TextComp} from '../TextComponent';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {colorTutor_} from '../../config/color';
import HorizontalDividerComp from '../HorizontalDividerComp/HorizontalDividerComp';

export const TuteeHomeComp = props => {
  const {data} = props;
  return (
    <TouchableOpacity
      onPress={() => props?.navigate(data)}
      style={styles.mainView}>
      <CircleImageComp
        image={{uri: data?.profileImageLink}}
        styles={{
          alignSelf: 'center',
          // position: 'absolute',
          marginTop: hp('-2'),
        }}
      />
      <TextComp
        text={data?.f_name + ' ' + data.l_name}
        style={{marginTop: hp('1'), fontSize: hp('2')}}
      />
      <HorizontalDividerComp style={styles.divider} />
      <TextComp text="Subjects" />
      <View style={styles.bottomView}>
        {data.course.length > 0 &&
          data.course.map(res => {
            return (
              <View style={styles.subView}>
                <TextComp
                  text="English"
                  style={{fontSize: hp('1.3'), color: 'white'}}
                />
              </View>
            );
          })}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  mainView: {
    width: wp('47'),
    backgroundColor: 'white',
    alignItems: 'center',
    marginRight: wp('1'),
    marginTop: hp('3'),
    borderRadius: 10,
  },
  divider: {
    width: wp('40'),
    marginTop: hp('1'),
    marginBottom: hp('1'),
    color: colorTutor_.TxtColor,
  },
  bottomView: {
    flexDirection: 'row',
    display: 'flex',
    flexWrap: 'wrap',
    width: wp('45'),
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: hp('1'),
  },
  subView: {
    backgroundColor: colorTutor_.ipallightGreen,
    borderRadius: 10,
    paddingTop: hp('0.5'),
    paddingBottom: hp('0.5'),
    paddingLeft: hp('1'),
    paddingRight: hp('1'),
    alignSelf: 'center',
    marginTop: hp('1'),
  },
});
