import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {ThreeViewComp} from '../../components/ThreeViewComp/ThreeViewComp';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {colorTutor_} from '../../config/color';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {BackHeaderComponent} from '../../components/BackHeaderComponent/BackHeaderComponent';
import {globalStyles} from '../../config/globalStyles';
import {styles} from './style';
export const NotificationScreen = () => {
  const [message, setMessage] = useState([
    {
      id: 0,
      firstText: 'Nadia Salvester',
      image: require('../../image/profile.jpg'),
      secondText: "Hi, we aren't ready to start our class today...",
    },
    {
      id: 1,
      image: require('../../image/vedioCall.png'),
      firstText: 'Nadia Salvester',
      secondText: "Hi, we aren't ready to start our class today...",
    },
    {
      id: 2,
      firstText: 'Nadia Salvester',
      image: require('../../image/accept.png'),
      secondText: "Hi, we aren't ready to start our class today...",
    },
    {
      id: 3,
      firstText: 'Nadia Salvester',
      image: require('../../image/cancelIcon.png'),
      secondText: "Hi, we aren't ready to start our class today...",
    },
  ]);
  return (
    <View style={{flex: 1, backgroundColor: colorTutor_.topNavigationColor}}>
      <BackHeaderComponent
        heading={'Notification'}
        data={true}
        bellOnPress={() => console.log('bell')}
        settingOnPress={() => console.log('hello')}
      />

      <ScrollView contentContainerStyle={{flex: 1}}>
        {message.length > 0 &&
          message.map(res => {
            return (
              <ThreeViewComp
                imageStyles={{
                  width: Dimensions.get('window').width * 0.12,
                  height: Dimensions.get('window').width * 0.12,
                }}
                viewStyle={{
                  alignSelf: 'center',
                  marginBottom: hp('1'),
                  marginTop: hp('1'),
                }}
                data={res}
                changeIcon={
                  <FontAwesome5
                    name="trash"
                    color={colorTutor_.ipallightGreen}
                    size={hp('2.5')}
                  />
                }
              />
            );
          })}
      </ScrollView>
      <View style={styles.bottomBar}>
        <TouchableOpacity>
          <Text style={globalStyles.globalModuletutor}>Term of use</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={globalStyles.globalModuletutor}>Privacy Policy</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default NotificationScreen;
