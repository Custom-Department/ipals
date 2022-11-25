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
import React, {useState, useEffect} from 'react';
import {color, colorTutor_} from '../../../config/color';
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
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {useDispatch, useSelector} from 'react-redux';
import types from '../../../Redux/types';
import axios from 'react-native-axios';
import {GetCourseUrl, UpdateProfileUrl} from '../../../config/Urls';
import {errorHandler} from '../../../config/helperFunction';
import {errorMessage} from '../../../config/NotificationMessage';

const SettingScreen = ({route, navigation}) => {
  const {userData} = useSelector(state => state.userData);
  const [isVisible, setIsVisible] = useState();
  const {user, token} = route.params;
  console.log(47, userData);

  const dispatch = useDispatch();

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
  const {} = stateChange;

  return (
    <View
      style={{
        backgroundColor: colorTutor_.ipalBlue,
        flex: 1,
      }}>
      <BackHeaderComponent
        heading={'Setting'}
        data={true}
        bellOnPress={() => console.log('bell')}
        settingOnPress={() => console.log('hello')}
      />

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
        <TouchableOpacity
          onPress={() => navigation.navigate('NotificationScreen')}>
          <SettingIconComp
            name={'bell-fill'}
            text={'Notifications'}
            switch={true}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('ProfileScreen')}>
          <SettingIconComp
            text={'Edit Profile'}
            changeIcon={
              <FontAwesome5 name={'user-edit'} size={hp('3')} color={'white'} />
            }
          />
        </TouchableOpacity>
        <SettingIconComp
          onPress={() => console.log('hellow')}
          name={'info'}
          text={'Help & Guide'}
        />
        <TouchableOpacity onPress={() => dispatch({type: types.LogoutType})}>
          <SettingIconComp name={'sign-out'} text={' Log out'} />
        </TouchableOpacity>
      </Animatable.View>

      <View style={styles.bottomBar}>
        <TouchableOpacity onPress={() => console.log('dont have you acc')}>
          <Text style={globalStyles.globalModuletutor}>Term of use</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('dont have you acc')}>
          <Text style={globalStyles.globalModuletutor}>Privacy Policy</Text>
        </TouchableOpacity>
      </View>
      {isVisible && <SubjectDetailScreen />}
    </View>
  );
};
export default SettingScreen;
