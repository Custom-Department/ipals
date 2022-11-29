import React from 'react';
import {View, Text, FlatList, TouchableOpacity, StyleSheet} from 'react-native';
import {TuteeHomeComp} from '../TuteeHomeComp/TuteeHomeComp';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {MentorColor} from '../../config/color';
import {TextComp} from '../TextComponent';
import AntDesign from 'react-native-vector-icons/AntDesign';

const SubcriptionPackComp = props => {
  let name = props?.name ?? 'exclamationcircle';
  return (
    <View style={styles.MainView}>
      <View style={styles.innerMainView}>
        <TextComp style={styles.text} text={props?.text} />
        {props?.data == true ? (
          <AntDesign
            style={{marginHorizontal: wp('2')}}
            name={name}
            size={hp('5.5')}
            color={props?.iconcolor ?? 'white'}
          />
        ) : (
          <View style={styles.packageView}>
            <TextComp style={styles.priceView} text={props?.priceTxt} />
            {props?.perAnumTxt && (
              <TextComp style={styles.perAnumView} text={props?.perAnumTxt} />
            )}
          </View>
        )}
      </View>
    </View>
  );
};

export default SubcriptionPackComp;

const styles = StyleSheet.create({
  MainView: {
    height: hp('12'),
    alignSelf: 'center',
    width: wp('93'),
    backgroundColor: MentorColor.MentorThemeFirst,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: hp('1'),
  },
  innerMainView: {
    width: wp('86'),
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: hp('2'),
    width: wp('60'),
  },
  packageView: {
    borderRadius: 10,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    height: hp('8'),
    // width: wp('20'),
    padding: 5,
  },
  priceView: {
    color: MentorColor.MentorThemeFirst,
    fontSize: hp('4'),
    fontWeight: 'bold',
  },
  perAnumView: {
    color: MentorColor.MentorThemeFirst,
    fontSize: hp('1.6'),
  },
});
