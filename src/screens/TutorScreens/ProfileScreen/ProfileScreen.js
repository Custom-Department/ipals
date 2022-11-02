import {  Text, View ,TouchableOpacity, Image, ImageBackground, Dimensions, ScrollView} from 'react-native'
import React, { useState } from 'react'
import { HeaderComponent } from '../../../components/HeaderComponent/HeaderComponent'
import { colorTutor_ } from '../../../config/color'
import { globalStyles } from '../../../config/globalStyles'
import { styles } from './style'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import FontAwesome
  from 'react-native-vector-icons/FontAwesome';
import { TextComp } from '../../../components/TextComponent'
import { ButtonIconComp } from '../../../components/ButtonIconComp/ButtonIconComp'
import { ButtonThemeComp } from '../../../components/ButtonThemeComp/ButtonThemeComp'

const ProfileScreen = () => {
  const [topNavigator, setTopNavigator] = useState([
    'HOME', 'MY CLASSES', 'MESSAGES'
  ])
  const [index, setIndex] = useState(0);
  const checkIndexStatus = (value) => {
    setIndex(value)
  }
  return (
    <View style={{
      backgroundColor: colorTutor_.ipalBlue,
      flex: 1,
    }}>
  
      <HeaderComponent navigatorName={topNavigator} checkIndexStatus={checkIndexStatus} />
      <ScrollView contentContainerStyle={styles.midView}>
        <ImageBackground
        style={{ 
          justifyContent:'center',
          alignItems:'center',
          width: Dimensions.get('window').width * 0.35,

        height: Dimensions.get('window').width * 0.35,}}
        imageStyle={{     borderRadius: Math.round(

          Dimensions.get('window').width + Dimensions.get('window').height,

        ),

       }}
        source={require('../../../image/userprofile.jpg')}>
          <FontAwesome style={styles.cameraStyle}  name='camera' size={hp('3.8')} color='white'/>
        </ImageBackground>
        <TextComp style={styles.textharMatin} text={'Harley Martin'}/> 
        <View style={{flexDirection:'row',width:wp('70'),justifyContent:'space-evenly'}}>
        <View style={styles.subView}>
            <TextComp
              text="English"
              style={{fontSize: hp('1.3'),textAlign:'center', color: 'white'}}
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
          <View style={{...styles.subView,backgroundColor: colorTutor_.blue,}}>
            <TextComp
              text="Add Subject"
              style={{fontSize: hp('1.3'), color: 'white'}}
            />
            
          </View>
        </View>
        <View style={styles.desView}>
          <TextComp style={styles.textdes} text={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
          when an unknown printer took a galley of type and scrambled it to make a type specimen book.
           It has survived not only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.`}/>
        </View>
        <ButtonThemeComp TextStyle={{fontSize:hp('1.9')}}  style={{width:wp('80'),height:hp('7'), marginVertical:hp('3')}}  onPress={()=>console.log('Save Profile')} text="Save Profile" />
       
             </ScrollView>
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

export default ProfileScreen
