import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { styles } from './style'
import { LoginInputComp } from '../../components/LoginInputComp/LoginInputComp'
import { color } from '../../config/color'
import { ButtonThemeComp } from '../../components/ButtonThemeComp/ButtonThemeComp'
import { globalStyles } from '../../config/globalStyles'
import { Divider } from 'react-native-paper'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <Image resizeMode='contain' style={styles.imageView} source={require('../../image/logo.png')} />
      <LoginInputComp placeholder={'Email Address '} eyeIconName={'email'} />
      <LoginInputComp placeholder={'Password '} eyeIconName={'lock'} color={color.ipallightGreen} />
      <ButtonThemeComp style={styles.signBtn} text={'SIGN IN'} />
      <View style={styles.forgetView}>
        <TouchableOpacity>
          <Text style={globalStyles.globalTextStyles2}>Forget email?</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={globalStyles.globalTextStyles2}>Forget password?</Text>
        </TouchableOpacity>
      </View>

      <Divider style={{ marginTop: hp('6'), backgroundColor: 'black', width: wp('70'), alignSelf: 'center' }} />
    </View>
  )
}

export default LoginScreen
