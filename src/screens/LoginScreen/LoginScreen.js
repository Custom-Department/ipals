import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { styles } from './style'
import { LoginInputComp } from '../../components/LoginInputComp/LoginInputComp'
import { color, colorTutor_ } from '../../config/color'
import { ButtonThemeComp } from '../../components/ButtonThemeComp/ButtonThemeComp'
import { globalStyles } from '../../config/globalStyles'
import { Divider } from 'react-native-paper'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const LoginScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image resizeMode='contain' style={styles.imageView} source={require('../../image/logo.png')} />
      <LoginInputComp placeholder={'Email Address '} eyeIconName={'email'} />
      <LoginInputComp placeholder={'Password '} eyeIconName={'lock'} color={colorTutor_.ipallightGreen} />
      <ButtonThemeComp style={styles.signBtn} text={'SIGN IN'} onPress={() => navigation.navigate('DashboardScreen')} />
      <View style={styles.forgetView}>
        <TouchableOpacity>
          <Text style={globalStyles.globalTextStyles2}>Forget email?</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={globalStyles.globalTextStyles2}>Forget password?</Text>
        </TouchableOpacity>
      </View>

      <Divider style={{ marginTop: hp('13'), marginBottom: hp('1'), height: hp('0.2'), backgroundColor: 'black', width: wp('70'), alignSelf: 'center' }} />
      <TouchableOpacity onPress={() => console.log('dont have you acc')}><Text>Don't have you account</Text></TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('CreateAccount')}><Text>Create New Account</Text></TouchableOpacity>
      <View style={styles.bottomBar}>
        <TouchableOpacity onPress={() => console.log('dont have you acc')}>
          <Text style={globalStyles.globalModuletutor}>Term of use</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('dont have you acc')} >
          <Text style={globalStyles.globalModuletutor}>Privacy Policy</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default LoginScreen
