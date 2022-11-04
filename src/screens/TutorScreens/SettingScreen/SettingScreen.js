import {
  Text,
  View,
  TouchableOpacity,
  Image,
  ImageBackground,
  Dimensions,
  ScrollView,
  StyleSheet,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import {colorTutor_} from '../../../config/color';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {TextComp} from '../../../components/TextComponent';
import {SettingIconComp} from '../../../components/SettingIconComp/SettingIconComp';
import * as Animatable from 'react-native-animatable';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import styles from './style';
import {BackHeaderComponent} from '../../../components/BackHeaderComponent/BackHeaderComponent';
import {ButtonThemeComp} from '../../../components/ButtonThemeComp/ButtonThemeComp';
import {globalStyles} from '../../../config/globalStyles';
import InformationTextView from '../../../components/InformationTextView/InformationTextView';
import {LoginInputComp} from '../../../components/LoginInputComp/LoginInputComp';
import ChildAccountView from '../../../components/ChildAccountView/ChildAccountView';
import {PendingReqComp} from '../../../components/PendingReqComp/PendingReqComp';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const SettingScreen = () => {
  const [list, setList] = useState([
    {
      id: 0,
      name: 'Freddy Mercury',
      image: require('../../../image/profile.jpg'),
    },
    {
      id: 1,
      name: 'Freddy Mercury',
      image: require('../../../image/profile.jpg'),
    },
    {
      id: 2,
      name: 'Freddy Mercury',
      image: require('../../../image/profile.jpg'),
    },
    {
      id: 3,
      name: 'Freddy Mercury',
      image: require('../../../image/profile.jpg'),
    },
    {
      id: 4,
      name: 'Freddy Mercury',
      image: require('../../../image/profile.jpg'),
    },
    {
      id: 5,
      name: 'Freddy Mercury',
      image: require('../../../image/profile.jpg'),
    },
  ]);
  const [stateChange, setStateChange] = useState({
    editState: false,
    accState: false,
    createAccoutState: false,
    childAccState: false,
    deleteAccState: false,
  });
  const updateState = data => setStateChange(() => ({...stateChange, ...data}));
  const {
    editState,
    accState,
    createAccoutState,
    childAccState,
    deleteAccState,
  } = stateChange;

  const ProfileScreen = ({navigation}) => {
    return (
      <Animatable.View animation="fadeInRight">
        <ScrollView contentContainerStyle={styles.midView}>
          <View style={{flexDirection: 'row', alignSelf: 'baseline'}}>
            <Ionicons
              style={styles.icon1}
              name={'md-arrow-back'}
              size={hp('3')}
              color={'white'}
              onPress={() => updateState({editState: false})}
            />
          </View>
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
            <FontAwesome name="camera" size={hp('3.8')} color="white" />
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
            style={{
              width: wp('80'),
              height: hp('7'),
              marginVertical: hp('3'),
            }}
            onPress={() => console.log('Save Profile')}
            text="Save Profile"
          />
        </ScrollView>
      </Animatable.View>
    );
  };

  const CreateChildAccount = () => {
    return (
      <Animatable.View animation="fadeInRight" style={styles.setContainer}>
        <View style={{flexDirection: 'row', marginLeft: wp('5')}}>
          <Ionicons
            style={styles.icon1}
            name={'md-arrow-back'}
            size={hp('3')}
            color={'white'}
            onPress={() =>
              createAccoutState == true
                ? updateState({createAccoutState: false})
                : updateState({childAccState: false})
            }
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
        </View>
        <View style={styles.ViewContainer}>
          <InformationTextView
            text={'Your email address remains same for every child account'}
          />
          <View style={styles.createAcc}>
            <TextComp
              color={colorTutor_.TxtColor}
              text={'Create child account'}
              style={{
                marginLeft: wp('3'),
                marginBottom: hp('2'),
                fontSize: hp('2'),
              }}
            />
            <TouchableOpacity
              onPress={() => updateState({createAccoutState: true})}
              style={{
                ...styles.plusView,
                backgroundColor: createAccoutState
                  ? colorTutor_.topNavigationColor
                  : colorTutor_.blue,
              }}>
              <Ionicons name={'add'} size={hp('3')} color="white" />
            </TouchableOpacity>
          </View>

          {createAccoutState ? (
            <View>
              <TextComp
                text="Nick name"
                style={{
                  marginLeft: wp('7'),
                  color: colorTutor_.TxtColor,
                  marginTop: hp('2'),
                }}
              />
              <LoginInputComp
                style={{
                  alignSelf: 'center',
                  marginBottom: hp('2'),
                  width: wp('90'),
                }}
                placeholder="Child account name"
              />
              <TextComp
                text="Password"
                style={{
                  marginLeft: wp('7'),
                  color: colorTutor_.TxtColor,
                  marginTop: hp('2'),
                }}
              />
              <LoginInputComp
                style={{
                  alignSelf: 'center',
                  marginBottom: hp('2'),
                  width: wp('90'),
                }}
                placeholder="Password"
              />
              <TextComp
                text="Confirm password"
                style={{
                  marginLeft: wp('7'),
                  color: colorTutor_.TxtColor,
                  marginTop: hp('2'),
                }}
              />
              <LoginInputComp
                style={{
                  alignSelf: 'center',
                  marginBottom: hp('2'),
                  width: wp('90'),
                }}
                placeholder="Confirm password"
              />

              <ButtonThemeComp
                style={{
                  ...styles.signBtn,
                  marginTop: hp('2'),
                  width: wp('95'),
                  alignSelf: 'center',
                }}
                TextStyle={{fontSize: hp('2')}}
                text={'Create Account'}
                onPress={() => updateState({createAccoutState: false})}
              />
            </View>
          ) : (
            list.length > 0 && (
              <FlatList
                data={list}
                keyExtractor={(item, index) => index.toString()}
                contentContainerStyle={{
                  width: wp('95'),
                  alignSelf: 'center',
                  paddingBottom: hp('15'),
                }}
                renderItem={({item}) => {
                  return (
                    <Animatable.View animation="fadeInUp">
                      <PendingReqComp
                        text={'Daniel martin'}
                        changeIcon1={
                          <MaterialIcons
                            name={'delete'}
                            size={hp('5')}
                            color={'red'}
                          />
                        }
                        changeIcon2={
                          <Ionicons
                            name={'settings'}
                            size={hp('5')}
                            color={colorTutor_.darkGreen}
                          />
                        }
                      />
                    </Animatable.View>
                  );
                }}
              />
            )
          )}
        </View>
      </Animatable.View>
    );
  };

  const AccountSettings = () => {
    return (
      <Animatable.View animation="fadeInRight" style={styles.setContainer}>
        <View style={{flexDirection: 'row', marginLeft: wp('3')}}>
          <Ionicons
            name={'md-arrow-back'}
            size={hp('3')}
            color={'white'}
            onPress={() => updateState({accState: false})}
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
        <TouchableOpacity onPress={() => updateState({childAccState: true})}>
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

        <TouchableOpacity onPress={() => updateState({deleteAccState: true})}>
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
      <Animatable.View animation="fadeInRight" style={styles.setContainer}>
        <View style={{flexDirection: 'row',marginLeft:wp('5')}}>
          <Ionicons
            style={styles.icon1}
            name={'md-arrow-back'}
            size={hp('3')}
            color={'white'}
            onPress={() => updateState({deleteAccState: false})}
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
            onPress={() => console.log('yes')}
          />
          <ButtonThemeComp
            style={{
              backgroundColor: colorTutor_.topNavigationColor,
              ...styles.yesView,
            }}
            text={'No'}
            onPress={() => console.log('No')}
          />
        </View>
      </Animatable.View>
    );
  };
  return (
    <View
      style={{
        backgroundColor: colorTutor_.ipalBlue,
        flex: 1,
      }}>
      {console.log(
        362,
        createAccoutState,
        accState,
        editState,
        childAccState,
        deleteAccState,
      )}

      <BackHeaderComponent name3={"settings"} name2={"search"} name1={"bell-fill"} bellOnPress={()=>console.log('bell')} settingOnPress={() => console.log('hello')} />
      {editState ? (
        <ProfileScreen />
      ) : accState ? (
        childAccState ? (
          <CreateChildAccount />
        ) : deleteAccState ? (
          <DeleteAccount />
        ) : (
          <AccountSettings />
        )
      ) : (
        <Animatable.View animation="fadeInLeft" style={styles.topView}>
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
          <TouchableOpacity onPress={() => updateState({accState: true})}>
            <SettingIconComp
              onPress={() => console.log('hellow')}
              name={'person-fill'}
              text={' Account settings'}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => updateState({editState: true})}>
            <SettingIconComp
              text={'Edit Profile'}
              changeIcon={
                <FontAwesome5
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
          <SettingIconComp name={'sign-out'} text={' Log out'} />
        </Animatable.View>
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
export default SettingScreen;
