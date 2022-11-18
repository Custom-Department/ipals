import React, {useState, useEffect} from 'react';
import {
  View,
  Image,
  Text,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {color, colorTutor_} from '../../../config/color';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {SearchbarHeader} from '../../../components/SearchBarHeaderComp/SearchbarHeader';
import {TextComp} from '../../../components/TextComponent';
import {styles} from './styles';
import HorizontalDividerComp from '../../../components/HorizontalDividerComp/HorizontalDividerComp';
import {ButtonThemeComp} from '../../../components/ButtonThemeComp/ButtonThemeComp';
import {BackHeaderComponent} from '../../../components/BackHeaderComponent/BackHeaderComponent';

const MenteeDtailedScreen = () => {
  const data = [{}, {}, {}, {}];
  const RenderCard = prop => {
    return (
      <View style={styles.innerView}>
        <View style={styles.timeView}>
          <AntDesign name="clockcircle" size={hp('2.5')} color={'gray'} />
          <TextComp
            style={{fontSize: hp('1.6')}}
            text={'09:00 PM' + ' - ' + '11:15 AM'}
          />
        </View>
        <HorizontalDividerComp
          style={{
            marginHorizontal: 0,
            alignSelf: 'center',
            marginTop: hp('0.5'),
          }}
          width={'40'}
        />
        <View style={styles.centerView}>
          <View style={styles.innerBottomView}>
            <FontAwesome name="book" size={hp('2')} color={'gray'} />
            <TextComp style={{fontSize: hp('1.6')}} text={'History'} />
          </View>
          <View style={styles.verDivider} />
          <View
            style={{
              ...styles.innerBottomView,
              alignItems: 'center',
              width: wp('23'),
              justifyContent: 'center',
            }}>
            <MaterialIcons name="timer" size={hp('2')} color={'gray'} />
            <TextComp style={{fontSize: hp('1.5')}} text={'10 hours'} />
          </View>
        </View>
        <ButtonThemeComp
          onPress={() => {
            // setScheduleDays(data?.class_schedules),
            //   updateState({subjectTitle: data?.course});
            // updateState({getSpecData: data});
            // updateLoadingState({isVisible: true});
            console.log('Click Apply Now');
          }}
          style={styles.bottomButton}
          text={'Apply Now'}
        />
      </View>
    );
  };
  return (
    <View style={styles.mainView}>
      {/* <SearchbarHeader heart={true} /> */}
      <BackHeaderComponent heading={'Mentee Detail'} />
      <ScrollView contentContainerStyle={styles.secondmainView}>
        <View style={styles.roundedview}>
          <View style={styles.ImagerowView}>
            <Image
              source={require('../../../image/image.jpg')}
              style={styles.imagecrop}
            />
            <View style={styles.HeadingText}>
              <Text style={styles.usernamestyle}>Harley Martin</Text>
              <View style={styles.divider}></View>
              <Text style={styles.category}>Category</Text>
              <View style={styles.financeview}>
                <Text style={styles.textfinance}>Finance & Investment</Text>
              </View>
            </View>
          </View>
          <Text style={styles.paragraphtext}>
            Like other forms of writing, paragraphs follow a standard three-part
            structure with a beginning, middle, and end. These parts are the
            topic sentence, development and support, and conclusion.Topic
            sentences, also known as “paragraph leaders,” introduce the main
            idea that the paragraph is about. They shouldn’t reveal too much on
            their own, but rather prepare the reader for the rest of the
            paragraph by stating clearly what topic will be discussed.{' '}
          </Text>
          <View style={styles.buttonView}>
            <TouchableOpacity style={styles.whatsaap}>
              <Image
                source={require('../../../image/whatsapp.png')}
                style={styles.whatsaapicon}
              />
              <Text style={styles.buttonText}>Whatsaap</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.linkedin}>
              <Entypo name="linkedin" size={hp('3')} color={color.white} />
              <Text style={styles.buttonText}>LinkedIn</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.categoryheading}>
          <Entypo name="dot-single" size={hp('4')} />
          <Text>Other categories</Text>
        </View>
        {/* <ManteeFlatlistcomponent/> */}
        <FlatList
          data={data}
          scrollEnabled={false}
          contentContainerStyle={{
            marginTop: hp('2'),
            width: wp('95'),
            alignSelf: 'center',
          }}
          keyExtractor={(item, index) => index.toString()}
          numColumns={2}
          renderItem={({item}) => {
            return <RenderCard data={item} />;
          }}
        />
      </ScrollView>
    </View>
  );
};

export default MenteeDtailedScreen;
