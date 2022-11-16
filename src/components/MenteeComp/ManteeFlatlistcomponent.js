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

export const ManteeFlatlistcomponent = () => {
    const data=[{},{},{},{}]
    const renderitem=({item})=>{
        return(
            <View style={styles.flatlistmain}>
                <View style={styles.flupperView}>
                <Image
                 source={require('../../../image/image.jpg')}
                 style={styles.flimagecrop}
                 />
                 <View>
                    <Text style={{fontSize:hp('1.8')}}>Sarah Martin</Text>
                    <Text style={{fontSize:hp('1.5')}}>Language</Text>
                 </View>
                </View>
                <View style={styles.lineView}>
                    <FontAwesome5
                    name='clock'
                    size={hp('3')}
                    color={colorTutor_.ipallightGreen}/>
                    <Text style={styles.timeText}>9:00PM - 10:00PM</Text>
                </View>
                <View style={styles.lineView}>
                    <Feather
                    name='book'
                    size={hp('3')}
                    color={colorTutor_.ipallightGreen}/>
                    <Text style={styles.timeText}>English</Text>
                    <MaterialCommunityIcons
                    name='timer'
                    size={hp('3')}
                    color={colorTutor_.ipallightGreen}/>
                    <Text style={styles.timeText}>1 hour</Text>
                </View>
                <View style={styles.bottomView}>
                    <View style={styles.bottombutton}>
                        <Text style={styles.price}>$25</Text>
                    </View>
                    <MaterialCommunityIcons
                    name='email'
                    size={hp('4')}
                    color={colorTutor_.lightGreen}/>
                    <View style={styles.verticaldivider}></View>
                    <EvilIcons
                    name='heart'
                    size={hp('4')}/>
                </View>
            </View>
        )
    }
    return(
    <FlatList
            contentContainerStyle={{marginLeft:wp('5')}}
            data={data}
            horizontal={true}
            renderItem={renderitem}/>
    )
}