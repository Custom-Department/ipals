import React, { useState } from 'react';
import { View  ,Image,Text,TextInput, SafeAreaView, Dimensions, TouchableOpacity, FlatList} from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';
import { color, colorTutor_ } from '../../config/color';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {SearchbarHeader}from '../SearchBarHeaderComp/SearchbarHeader'
import { styles } from './styles';
import { CircleImageComp } from '../CircleImageComp/CircleImageComp';
import { ManteeFlatlistcomponent } from '../../../components/MenteeComp/ManteeFlatlistcomponent';

export const MenteeDtailedScreen = () => {
return(
    <SafeAreaView style={styles.mainView}>
        <SearchbarHeader heart={true}/>
        <View style={styles.secondmainView}>
            <View style={styles.roundedview}>
            <View style={styles.ImagerowView}>
            <Image
            source={require('../../../image/image.jpg')}
            style={styles.imagecrop}
            />
            <View style={styles.HeadingText}>
                <Text style={styles.usernamestyle}>Harley Martin</Text>
                <View style={styles.divider}></View>
                <Text style={styles.category}>Category</Text>
                <View style={styles.financeview}>
                    <Text style={styles.textfinance}>Finance & Investment</Text>
                </View>
            </View>
            </View>
            <Text style={styles.paragraphtext}>Like other forms of writing, paragraphs follow a standard three-part structure with a beginning, middle, and end. These parts are the topic sentence, development and support, and conclusion.Topic sentences, also known as “paragraph leaders,” introduce the main idea that the paragraph is about. They shouldn’t reveal too much on their own, but rather prepare the reader for the rest of the paragraph by stating clearly what topic will be discussed. </Text>
            <View style={styles.buttonView}>
                <TouchableOpacity style={styles.whatsaap}>
                    <Image 
                    source={require('../../../image/whatsapp.png')} 
                    style={styles.whatsaapicon}/>
                    <Text style={styles.buttonText}>Whatsaap</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.linkedin}>
                <Entypo
                name='linkedin'
                size={hp('3')}
                color={color.white}/>
                <Text style={styles.buttonText}>LinkedIn</Text>
                </TouchableOpacity>
            </View>
            </View>
            <View style={styles.categoryheading}>
            <Entypo
            name='dot-single'
            size={hp('4')}/>
            <Text>Other categories</Text>
            </View>
            <ManteeFlatlistcomponent/>
        </View>
       

    </SafeAreaView>
)
}