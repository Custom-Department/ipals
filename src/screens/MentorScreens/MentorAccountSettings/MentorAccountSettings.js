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
  Modal,
} from 'react-native';
import {color, colorTutor_} from '../../../config/color';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {TextComp} from '../../../components/TextComponent';
import {SettingIconComp} from '../../../components/SettingIconComp/SettingIconComp';
import * as Animatable from 'react-native-animatable';

import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import styles from './style';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useState} from 'react';
import {BackHeaderComponent} from '../../../components/BackHeaderComponent/BackHeaderComponent';
import {ButtonThemeComp} from '../../../components/ButtonThemeComp/ButtonThemeComp';
import {LoginInputComp} from '../../../components/LoginInputComp/LoginInputComp';
import InformationTextView from '../../../components/InformationTextView/InformationTextView';
import {PendingReqComp} from '../../../components/PendingReqComp/PendingReqComp';

const MentorAccountSettings = () => {
  const [list, setList] = useState([
    {
      id: 0,
      name: 'Freddy Mercury',
      image: require('../../../image/profile.jpg'),
      user: {
        f_name: 'Daniel Martin',
        l_name: 'Martin',
      },
    },
    {
      id: 1,
      name: 'Freddy Mercury',
      image: require('../../../image/profile.jpg'),
      user: {
        f_name: 'Daniel Martin',
        l_name: 'Martin',
      },
    },
    {
      id: 2,
      name: 'Freddy Mercury',
      image: require('../../../image/profile.jpg'),
      user: {
        f_name: 'Daniel Martin',

        l_name: 'Martin',
      },
    },
    {
      id: 3,
      name: 'Freddy Mercury',
      image: require('../../../image/profile.jpg'),
      user: {
        f_name: 'Daniel Martin',

        l_name: 'Martin',
      },
    },
    {
      id: 4,
      name: 'Freddy Mercury',
      image: require('../../../image/profile.jpg'),
      user: {
        f_name: 'Daniel Martin',

        l_name: 'Martin',
      },
    },
    {
      id: 5,
      name: 'Freddy Mercury',
      image: require('../../../image/profile.jpg'),
      user: {
        f_name: 'Daniel Martin',
        l_name: 'Martin',
      },
    },
  ]);
  const [stateChange, setStateChange] = useState({
    editState: false,
    accState: false,
    createAccoutState: false,
    childAccState: false,
    deleteAccState: false,
    BioData: user?.bio,
    isLoading: false,
    userImage: [],
    subjectModelLoader: false,
    subjectModelList: [],
    activities: [],
    idSubjectArray: [],
  });
  const updateState = data => setStateChange(prev => ({...prev, ...data}));
  const {
    editState,
    accState,
    createAccoutState,
    childAccState,
    deleteAccState,
    BioData,
    isLoading,
    userImage,
    subjectModelLoader,
    subjectModelList,
    activities,
    idSubjectArray,
  } = stateChange;
  const user = [
    {id: 0, name: 'Daniel Martin'},
    {id: 1, name: 'Daniel Martin'},
    {id: 2, name: 'Daniel Martin'},
  ];

  const DeleteAccount = () => {
    return (
      <Animatable.View animation="fadeInRight" style={styles.setContainer}>
        <View style={{flexDirection: 'row', marginLeft: wp('5')}}>
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
                        data={item}
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
  return (
    <View style={{flex: 1, backgroundColor: colorTutor_.ipalBlue}}>
      <BackHeaderComponent heading={'Setting'} data={true} />
      {childAccState ? (
        <CreateChildAccount />
      ) : deleteAccState ? (
        <DeleteAccount />
      ) : (
        <Animatable.View animation="fadeInRight" style={styles.setContainer}>
          <View style={{flexDirection: 'row', marginLeft: wp('3')}}>
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
      )}
    </View>
  );
};

export default MentorAccountSettings;
