import React, {useState, useEffect} from 'react';
import {
Image,
ImageBackground,
ScrollView,
Text,
TextInput,
TouchableOpacity,
View,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { OnboardBackHeadeerComponent } from '../../components/OnboardBackHeaderComponent/OnbaordBackHeaderComponent';
import { color, colorTutor_ } from '../../config/color';
import { styles } from './styles';
const OnboardHomeScreen = () => {
    // const[images,setImages]=useState([
    //         require('../../image/sliderimage.png'),
    //         require('../../image/sliderimage.png'),
    //         require('../../image/sliderimage.png'),
    //         require('../../image/sliderimage.png'),
    //         require('../../image/sliderimage.png'),
        
    // ])
    return(
        <View style={{flex:1}}>
           <OnboardBackHeadeerComponent
           headingtext={'HOME'}
           threedots={true}
           />
           <ScrollView 
            scrollEnabled
            showsVerticalScrollIndicator={false}
           contentContainerStyle={styles.scrollView}>
            <Image
            source={
                require('../../image/homemain.png')
            }
            style={{width:wp('100')}}
            />
            <View style={styles.SecondView}>
            <Image
            source={
                require('../../image/empowerment.png')
            }
            style={{width:wp('85'),margin:20,alignSelf:'center'}}
            />
            <Image
            source={
                require('../../image/embrace.png')
            }
            style={{width:wp('85'),margin:20,alignSelf:'center'}}
            />
            <View style={styles.textarea}>
            <Text style={styles.textheading}>Learn, Connect, Experience across the Seas & Oceans</Text>
            <Text style={styles.normalImage}>i-Pals, a free virtual tutoring program, focuses on helping young learners to enhance academic, non-academic fields and build valuable life skills they need to overcome new challenges and succeed in their future endeavors.</Text>
            <Text style={styles.textheading}>Learning Buddy</Text>
            <Text style={styles.normalImage}>At i-Pals, we encourage every student from grade 4 - 12 to volunteer to become a virtual tutor, “reading buddy” or “math buddy”, in areas of their strength academically or non-academically such as public speaking, creative writing, simple cooking, baking, piano playing, painting, jewelry making, little fun science experiments etc.</Text>
            <Text style={styles.normalImage}> Every new tutor student must be validated first by completing a registration form, followed by a short video call interview to finalize the process.</Text>
            <Text style={styles.normalImage}> In addition, there is a monitored built-in SMS messaging which allows tutees and parents of tutees to communicate directly with the selected student tutors for privacy protection.</Text>
            <Text style={styles.normalImage}> Lastly, there is integrated feedback and enforced blocking mechanism in place to ensure the highest standard of accountability and integrity of student tutors. This is accomplished by a joint effort among student tutors, tutees, parents of tutees and school teachers.</Text>
            </View>
            <ImageBackground style={styles.backgroundImage} 
            source={require('../../image/backgroundimage.png')}>
                <View style={{justifyContent:'center'}}>
                    <Text style={styles.imagetext}>SEND US MESSAGE FOR INFOMATION</Text>
                    <View style={styles.formView}>
                    <TextInput
                    style={{width:wp('75'), borderRadius:10,margin:10,textAlign:'center'}}
                    placeholder='First Name'
                    placeholderTextColor={color.placeholdercolor}
                    backgroundColor={color.textfieldcolor}
                    />
                    <TextInput
                    style={{width:wp('75'), borderRadius:10,margin:10,textAlign:'center'}}
                    placeholder='Last Name'
                    placeholderTextColor={color.placeholdercolor}
                    backgroundColor={color.textfieldcolor}
                    />
                    <TextInput
                    style={{width:wp('75'), borderRadius:10,margin:10,textAlign:'center'}}
                    placeholder='Number'
                    placeholderTextColor={color.placeholdercolor}
                    keyboardType={'number-pad'}
                    backgroundColor={color.textfieldcolor}
                    />
                    <TextInput
                    style={{width:wp('75'), borderRadius:10,margin:10,textAlign:'center'}}
                    placeholder='Email'
                    placeholderTextColor={color.placeholdercolor}
                    keyboardType={'email-address'}
                    backgroundColor={color.textfieldcolor}
                    />
                    <TextInput
                    style={{width:wp('75'), borderRadius:10,margin:10,textAlign:'center',textAlignVertical:'top',height:hp('25')}}
                    placeholder='Message'
                    multiline={true}
                    placeholderTextColor={color.placeholdercolor}
                    backgroundColor={color.textfieldcolor}
                    />

                    <TouchableOpacity style={styles.sendbutton}>
                        <Text style={{fontSize:hp('2.75') ,textAlign:'center',color:color.white}}>SEND</Text>
                    </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
                
            </View>
            <View style={{width:wp('100'),height:hp('30'),alignItems:'center',marginVertical:hp('25')}}>
            <Text style={{fontSize:hp('3'),color:color.black,marginBottom:hp('2')}}>TESTIMONIALS</Text>
            <Image
            source={ require('../../image/sliderimage.png')}
            style={{width:wp('80'),borderRadius:20}}/>
            </View>

           </ScrollView>

        </View>
    )


}
export default OnboardHomeScreen;