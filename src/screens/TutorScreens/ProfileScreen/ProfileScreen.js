import {
  Text,
  View,
  TouchableOpacity,
  Image,
  ImageBackground,
  Dimensions,
  ScrollView,
  StyleSheet,
} from 'react-native';
import React, {useState} from 'react';
import {HeaderComponent} from '../../../components/HeaderComponent/HeaderComponent';
import {colorTutor_} from '../../../config/color';
import {globalStyles} from '../../../config/globalStyles';
import {styles} from './style';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {TextComp} from '../../../components/TextComponent';
import {ButtonIconComp} from '../../../components/ButtonIconComp/ButtonIconComp';
import {ButtonThemeComp} from '../../../components/ButtonThemeComp/ButtonThemeComp';
import {SettingIconComp} from '../../../components/SettingIconComp/SettingIconComp';
import * as Animatable from 'react-native-animatable';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import InformationTextView from '../../../components/InformationTextView/InformationTextView';
import {BackHeaderComponent} from '../../../components/BackHeaderComponent/BackHeaderComponent';

const SettingScreen1 = () => {
  const [accState, setAccState] = useState(false);
  const [deleteAccState, setDeleteAccState] = useState(false);
  const [createChildAcState, setCreateChildAcState] = useState(false);

  const AccountSettings = () => {
    return (
      <Animatable.View
        animation="fadeInRight"
        style={settingstyles.setContainer}>
        <View style={{flexDirection: 'row'}}>
          <Ionicons
            name={'md-arrow-back'}
            size={hp('3')}
            color={'white'}
            onPress={() => setAccState(false)}
          />
          <TextComp
            color={colorTutor_.TxtColor}
            text={'Settings'}
            style={{
              marginLeft: wp('3'),
              marginBottom: hp('2'),
              fontSize: hp('2'),
            }}
          />
        </View>
        <TouchableOpacity onPress={() => setCreateChildAcState(true)}>
          <SettingIconComp
            changeIcon={
              <MaterialCommunityIcons
                name={'account-child'}
                size={hp('3')}
                color={'white'}
              />
            }
            text={'Create child account'}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setDeleteAccState(true)}>
          <SettingIconComp
            changeIcon={
              <MaterialIcons name={'delete'} size={hp('3')} color={'white'} />
            }
            text={'Delete Account'}
          />
        </TouchableOpacity>
      </Animatable.View>
    );
  };

  const DeleteAccount = () => {
    return (
      <Animatable.View
        animation="fadeInRight"
        style={settingstyles.setContainer}>
        <View style={{flexDirection: 'row'}}>
          <Ionicons
            style={styles.icon1}
            name={'md-arrow-back'}
            size={hp('3')}
            color={'white'}
            onPress={() => setDeleteAccState(false)}
          />
          <TextComp
            color={colorTutor_.TxtColor}
            text={'Delete account'}
            style={{
              marginLeft: wp('3'),
              marginBottom: hp('2'),
              fontSize: hp('2'),
            }}
          />
        </View>
        <TextComp
          text="Are you sure you want to delete account ?"
          style={{
            color: 'white',
            textAlign: 'center',
            fontSize: hp('2.0'),
            marginTop: hp('3'),
          }}
        />
        <View style={styles.buttonView}>
          <ButtonThemeComp
            style={{
              ...styles.yesView,
            }}
            text={'Yes'}
            onPress={() => navigation.navigate('DashboardScreen')}
          />
          <ButtonThemeComp
            style={{
              backgroundColor: colorTutor_.topNavigationColor,
              ...styles.yesView,
            }}
            text={'No'}
            onPress={() => navigation.navigate('DashboardScreen')}
          />
        </View>
      </Animatable.View>
    );
  };

  const CreateChildAccount = () => {
    return (
      <Animatable.View
        animation="fadeInRight"
        style={settingstyles.setContainer}>
        <View style={{flexDirection: 'row'}}>
          <Ionicons
            style={styles.icon1}
            name={'md-arrow-back'}
            size={hp('3')}
            color={'white'}
            onPress={() => setCreateChildAcState(false)}
          />
          <TextComp
            color={colorTutor_.TxtColor}
            text={'Create child account'}
            style={{
              marginLeft: wp('3'),
              marginBottom: hp('2'),
              fontSize: hp('2'),
            }}
          />
          <InformationTextView text={'You don’t have Classes '} />
        </View>
      </Animatable.View>
    );
  };
  return accState ? (
    deleteAccState ? (
      <DeleteAccount />
    ) : createChildAcState == true ? (
      <CreateChildAccount />
    ) : (
      <AccountSettings />
    )
  ) : (
    <Animatable.View animation="fadeInLeft" style={settingstyles.setContainer}>
      <TextComp
        color={colorTutor_.TxtColor}
        text={'Settings'}
        style={{
          marginLeft: wp('3'),
          marginBottom: hp('2'),
          fontSize: hp('2'),
        }}
      />
      <SettingIconComp
        name={'bell-fill'}
        text={'Notifications'}
        switch={true}
      />
      <TouchableOpacity onPress={() => setAccState(true)}>
        <SettingIconComp
          onPress={() => console.log('hellow')}
          name={'person-fill'}
          text={' Account settings'}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setAccState(true)}>
        <SettingIconComp
          text={'Edit Profile'}
          changeIcon={
            <FontAwesome5
              style={styles.icon1}
              name={'user-edit'}
              size={hp('3')}
              color={'white'}
            />
          }
        />
      </TouchableOpacity>
      <SettingIconComp
        onPress={() => console.log('hellow')}
        name={'info'}
        text={'Help & Guide'}
      />
      <SettingIconComp
        onPress={() => console.log('hellow')}
        name={'sign-out'}
        text={' Log out'}
      />
    </Animatable.View>
  );
};
export const settingstyles = StyleSheet.create({
  setContainer: {
    flex: 1,
    marginLeft: wp('5'),
    marginTop: hp('3'),
  },
});
const ProfileScreen = () => {
  const [settingScreenState, setSettingScreenState] = useState(false);

  return (
    <View
      style={{
        backgroundColor: colorTutor_.ipalBlue,
        flex: 1,
      }}>
      <BackHeaderComponent name3={"settings"} bellOnPress={()=>console.log('bell')} />
      {settingScreenState == true ? (
        <SettingScreen1 />
      ) : (
        <ScrollView contentContainerStyle={styles.midView}>
          <ImageBackground
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              width: Dimensions.get('window').width * 0.35,

              height: Dimensions.get('window').width * 0.35,
            }}
            imageStyle={{
              borderRadius: Math.round(
                Dimensions.get('window').width +
                  Dimensions.get('window').height,
              ),
            }}
            source={require('../../../image/userprofile.jpg')}>
            <FontAwesome
              style={styles.cameraStyle}
              name="camera"
              size={hp('3.8')}
              color="white"
            />
          </ImageBackground>
          <TextComp style={styles.textharMatin} text={'Harley Martin'} />
          <View
            style={{
              flexDirection: 'row',
              width: wp('70'),
              justifyContent: 'space-evenly',
            }}>
            <View style={styles.subView}>
              <TextComp
                text="English"
                style={{
                  fontSize: hp('1.3'),
                  textAlign: 'center',
                  color: 'white',
                }}
              />
            </View>
            <View style={styles.subView}>
              <TextComp
                text="Math"
                style={{fontSize: hp('1.3'), color: 'white'}}
              />
            </View>
            <View style={styles.subView}>
              <TextComp
                text="Physics"
                style={{fontSize: hp('1.3'), color: 'white'}}
              />
            </View>
            <View
              style={{...styles.subView, backgroundColor: colorTutor_.blue}}>
              <TextComp
                text="Add Subject"
                style={{fontSize: hp('1.3'), color: 'white'}}
              />
            </View>
          </View>
          <View style={styles.desView}>
            <TextComp
              style={styles.textdes}
              text={`Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`}
            />
          </View>
          <ButtonThemeComp
            TextStyle={{fontSize: hp('1.9')}}
            style={{width: wp('80'), height: hp('7'), marginVertical: hp('3')}}
            onPress={() => console.log('Save Profile')}
            text="Save Profile"
          />
        </ScrollView>
      )}
      <View style={styles.bottomBar}>
        <TouchableOpacity onPress={() => console.log('dont have you acc')}>
          <Text style={globalStyles.globalModuletutor}>Term of use</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('dont have you acc')}>
          <Text style={globalStyles.globalModuletutor}>Privacy Policy</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProfileScreen;
