import {ScrollView, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {ThreeViewComp} from '../../../components/ThreeViewComp/ThreeViewComp';
import {styles} from './styles';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {SearchbarHeader} from '../../../components/SearchBarHeaderComp/SearchbarHeader';
import {colorTutor_} from '../../../config/color';
const MenteeMessagesScreen = ({navigation}) => {
  const [message, setMessage] = useState([
    {
      id: 0,
      firstText: 'Nadia Salvester',
      image: require('../../../image/profile.jpg'),
      secondText: "Hi, we aren't ready to start our class today...",
    },

    {
      id: 1,
      firstText: 'Nadia Salvester',
      image: require('../../../image/profile.jpg'),
      secondText: "Hi, we aren't ready to start our class today...",
    },

    {
      id: 2,
      firstText: 'Nadia Salvester',
      image: require('../../../image/profile.jpg'),
      secondText: "Hi, we aren't ready to start our class today...",
    },

    {
      id: 3,
      firstText: 'Nadia Salvester',
      image: require('../../../image/profile.jpg'),
      secondText: "Hi, we aren't ready to start our class today...",
    },

    {
      id: 4,
      firstText: 'Nadia Salvester',
      image: require('../../../image/profile.jpg'),
      secondText: "Hi, we aren't ready to start our class today...",
    },

    {
      id: 5,
      firstText: 'Nadia Salvester',
      image: require('../../../image/profile.jpg'),
      secondText: "Hi, we aren't ready to start our class today...",
    },
  ]);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colorTutor_.topNavigationColor,
      }}>
      <SearchbarHeader heart={true} />

      <ScrollView
        contentContainerStyle={{
          ...styles.container,
        }}>
        {message.length > 0 &&
          message.map(res => {
            return (
              <TouchableOpacity
                onPress={() => navigation.navigate('MentorChatScreen', res)}>
                <ThreeViewComp
                  data={res}
                  viewStyle={{marginTop: hp('2'), alignSelf: 'center'}}
                />
              </TouchableOpacity>
            );
          })}
      </ScrollView>
    </View>
  );
};

export default MenteeMessagesScreen;
