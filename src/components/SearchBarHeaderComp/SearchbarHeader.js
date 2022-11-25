import React, {useState} from 'react';
import {
  View,
  Image,
  Text,
  TextInput,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {styles} from './styles';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import {SafeAreaView} from 'react-native-safe-area-context';
import {MentorColor, color} from '../../config/color';
import {CircleImageComp} from '../CircleImageComp/CircleImageComp';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';

export const SearchbarHeader = props => {
  const {userData, token} = useSelector(state => state.userData);
  const navigation = useNavigation();
  const [value, setValue] = useState('');
  return (
    <SafeAreaView style={styles.mainView}>
      <View style={styles.secondView}>
        <CircleImageComp
          styles={{
            width: Dimensions.get('window').width * 0.1,
            height: Dimensions.get('window').width * 0.1,
          }}
          image={{uri: userData.profileImageLink}}
          // image={require('../../image/image.jpg')}
        />
        <View style={styles.TextHeadingView}>
          <Text style={styles.WellcomeText}>Welcome</Text>
          <Text style={styles.username}>
            {userData.f_name + ' ' + userData.l_name}
          </Text>
        </View>
        <View style={styles.iconView}>
          <MaterialCommunityIcons
            name="bell"
            size={hp('3')}
            color={color.white}
            style={styles.bellIcon}
          />
          {props.heart && (
            <Entypo
              name="heart-outlined"
              size={hp('3')}
              color={color.white}
              style={styles.bellIcon}
            />
          )}
          <Feather
            onPress={() => {
              userData.user_type == 'mentee'
                ? navigation.navigate('MenteeSettingScreen')
                : navigation.navigate('MentorSettingScreen');
            }}
            name={'menu'}
            size={hp('3')}
            color={color.white}
          />
        </View>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate('MentorSeacrhFilterScreen')}
        style={styles.searchView}>
        <Feather
          name={'search'}
          size={hp('3')}
          color={MentorColor.MentorThemeFirst}
          style={styles.searchIcon}
        />
        <TextInput
          editable={false}
          style={styles.searchText}
          placeholder={'Search for services'}
          value={value}
          placeholderTextColor={MentorColor.MentorThemeFirst}
          onChangeText={val => setValue(val)}
        />
      </TouchableOpacity>
    </SafeAreaView>
  );
};
