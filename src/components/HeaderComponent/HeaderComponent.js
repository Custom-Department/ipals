import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { globalStyles } from '../../config/globalStyles';
import { styles } from './styles'
import Octicons from 'react-native-vector-icons/Octicons';

export const HeaderComponent = props => {
  return (
    <View style={styles.topView}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <View style={{ flexDirection: 'row', marginLeft: wp('3'), }}>
          <Image source={require('../../image/smallImage1.png')} style={{ marginRight: wp('4') }} />
          <View>
            <Text style={{ ...styles.txt, ...globalStyles.globalModuletutor2 }}>Welcome</Text>
            <Text style={{ ...globalStyles.globalModuletutor2, fontSize: hp('2.3') }}>Kevin Martin</Text>
          </View>
        </View>

      </View>
    </View>
  );
};
