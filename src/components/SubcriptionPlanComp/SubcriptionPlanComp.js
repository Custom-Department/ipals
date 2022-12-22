import React from 'react';
import {View, StyleSheet} from 'react-native';
import {TuteeHomeComp} from '../TuteeHomeComp/TuteeHomeComp';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {MentorColor} from '../../config/color';
import {TextComp} from '../TextComponent';
import {ButtonIconComp} from '../ButtonIconComp/ButtonIconComp';
import {SkypeIndicator} from 'react-native-indicators';

const SubcriptionPlanComp = props => {
  return (
    <View style={{...styles.MainView, ...props?.style}}>
      <View style={styles.innerMainView}>
        <View style={styles.packageView}>
          <TextComp style={styles.priceView} text={props?.priceTxt} />
          <TextComp style={styles.perAnumView} text={props?.yearTxt} />
        </View>
        <View style={styles.bottomView}>
          <TextComp style={styles.text} text={props?.text} />

          <ButtonIconComp
            onPress={() =>
              props?.onPress ? props?.onPress() : console.log('klasjfdl')
            }
            style={styles.buttonView}
            text={`Proceed`}
            size={hp('3')}
            name={'arrow-forward'}
          />
        </View>
      </View>
    </View>
  );
};

export default SubcriptionPlanComp;

const styles = StyleSheet.create({
  MainView: {
    height: hp('17'),
    alignSelf: 'center',
    width: wp('93'),
    backgroundColor: MentorColor.MentorSubsPlan1,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loaderStyle: {
    alignSelf: 'center',
  },
  innerMainView: {
    width: wp('80'),
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    width: wp('30'),
    color: 'white',
    fontSize: hp('2'),
    marginLeft: wp('3'),
  },
  packageView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  priceView: {
    color: 'white',
    fontSize: hp('5.5'),
    fontWeight: 'bold',
    textAlign: 'left',
  },
  perAnumView: {
    color: 'white',
    fontSize: hp('1.9'),
  },
  bottomView: {
    marginTop: hp('1'),
  },

  buttonView: {
    marginTop: hp('2'),
    backgroundColor: MentorColor.MentorThemeFirst,
    height: hp('5'),
    width: wp('42'),
  },
});
