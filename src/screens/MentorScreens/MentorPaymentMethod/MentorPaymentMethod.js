import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {BackHeaderComponent} from '../../../components/BackHeaderComponent/BackHeaderComponent';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {colorTutor_, MentorColor} from '../../../config/color';
import {TextComp} from '../../../components/TextComponent';

import {LoginInputComp} from '../../../components/LoginInputComp/LoginInputComp';
import {styles} from './style';
import {ButtonThemeComp} from '../../../components/ButtonThemeComp/ButtonThemeComp';
import HorizantalDetailComp from '../../../components/HorizantalDetailComp/HorizantalDetailComp';
import HorizontalDividerComp from '../../../components/HorizontalDividerComp/HorizontalDividerComp';
import SubcriptionPackComp from '../../../components/SubcriptionPackComp/SubcriptionPackComp';
import SubcriptionPlanComp from '../../../components/SubcriptionPlanComp/SubcriptionPlanComp';
import {ButtonIconComp} from '../../../components/ButtonIconComp/ButtonIconComp';
const MentorPaymentMethod = ({route}) => {
  const items = route.params;
  return (
    <View style={{flex: 1, backgroundColor: colorTutor_.ipalBlue}}>
      <BackHeaderComponent
        // style={{backgroundColor: MentorColor.MentorThemeFirst}}
        heading={'Payment Method'}
      />
      <ScrollView>
        <View style={{...styles.classDashBoard}}>
          <TextComp
            style={{color: MentorColor.MentorThemeFirst}}
            text="Current Plan"
          />
          <HorizontalDividerComp
            width={'53'}
            color={MentorColor.MentorThemeFirst}
          />
        </View>
        <View style={{marginTop: wp('3')}}>
          <SubcriptionPackComp
            priceTxt={'$65'}
            iconcolor={MentorColor.MentorlightGrey}
            data={false}
            text={`You are subscribed to our yearly package`}
          />
        </View>
        <View style={{...styles.classDashBoard, marginTop: hp('6')}}>
          <TextComp
            style={{color: MentorColor.MentorThemeFirst}}
            text="Subcription plans"
          />
          <HorizontalDividerComp
            width={'53'}
            color={MentorColor.MentorThemeFirst}
          />
        </View>
        <View style={{...styles.topViewSubs}}>
          <SubcriptionPlanComp
            text={`Subscribe to our yearly plan`}
            priceTxt={`$65`}
            yearTxt={`per anum`}
          />
        </View>
        <View style={{marginTop: hp('2')}}>
          <SubcriptionPlanComp
            style={{backgroundColor: MentorColor.MentorSubsPlan2}}
            text={`Subscribe to our monthly plan`}
            priceTxt={`$65`}
            yearTxt={`per month`}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default MentorPaymentMethod;
