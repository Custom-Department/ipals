import { StyleSheet, TouchableOpacity, Text, View, TextComponent, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { styles } from './style'
import { globalStyles } from '../../../config/globalStyles'
import { HeaderComponent } from '../../../components/HeaderComponent/HeaderComponent'
import { color, colorTutor_ } from '../../../config/color'
import { ButtonIconComp } from '../../../components/ButtonIconComp/ButtonIconComp'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { ClassesDetailView } from '../../../components/ClassesDetailView/ClassesDetailView'
import { TextComp } from '../../../components/TextComponent'
import { PendingReqComp } from '../../../components/PendingReqComp/PendingReqComp'
import HorizontalDividerComp from '../../../components/HorizontalDividerComp/HorizontalDividerComp'
import InformationTextView from '../../../components/InformationTextView/InformationTextView'
import Ionicons
  from 'react-native-vector-icons/Ionicons';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
const DashboardScreen = () => {
  const [list,setList]=useState([
    {
      id:0,
      name:'Freddy Mercury',
      image:require('../../../image/profile.jpg')
    },
    {
      id:1,
      name:'Freddy Mercury',
      image:require('../../../image/profile.jpg')

    },
    {
      id:2,
      name:'Freddy Mercury',
      image:require('../../../image/profile.jpg')

    },
    {
      id:2,
      name:'Freddy Mercury',
      image:require('../../../image/profile.jpg')

    },
    {
      id:2,
      name:'Freddy Mercury',
      image:require('../../../image/profile.jpg')

    },
        {
      id:2,
      name:'Freddy Mercury',
      image:require('../../../image/profile.jpg')

    },
  ])
  
  const vacation = {key: 'vacation', color: 'red', selectedDotColor: 'blue'};
const massage = {key: 'massage', color: 'blue', selectedDotColor: 'blue'};
const workout = {key: 'workout', color: 'green'};

  const [topNavigator, setTopNavigator] = useState([
    'HOME', 'MY CLASSES', 'MESSAGES'
  ])
  const [index, setIndex] = useState(0);
  const checkIndexStatus = (value) => {
    setIndex(value)
    console.log(1444, value)
  }

  useEffect(()=>{

  },[])

  return (
    <View style={{
      backgroundColor: colorTutor_.ipalBlue,
      flex: 1,
    }}>
      <HeaderComponent navigatorName={topNavigator} checkIndexStatus={checkIndexStatus} />


 {index==0 &&(
 list?.length > 0?
 
    
  <ScrollView  contentContainerStyle={styles.container}>
        <View style={styles.classDashBoard} >
          <TextComp text={'My Classes'}/>
          <ButtonIconComp onPress={()=>console.log('All Classes')} text="view all classes" size={hp('3.5')} name={'arrow-forward'} />
        </View>
        <View>
        {list.length>0 &&list.map(Item=>{
          return (
            <ClassesDetailView text={Item?.name} image={Item?.image}/>
          )}
          )}
        </View>
        <View style={styles.classDashBoard} >
          <TextComp text={'Pending Requests'}/>
          <ButtonIconComp onPress={()=>console.log('All Classes')} text="view all classes" size={hp('3.5')} name={'arrow-forward'} />
        </View>
        <View>
          {list.map(Item=>{
          return (
            <PendingReqComp text={Item?.name} image={Item?.image}/>
          )}
          )
        }</View>
      </ScrollView>:
     <View>
     <View style={styles.classDashBoard}>
       <TextComp text="My Classes"/> 
       <HorizontalDividerComp color={colorTutor_.blue}/>
     </View>
     <InformationTextView text={'You don’t have Classes '}/> 
     <View style={{justifyContent:'center',alignItems:'center',marginTop:hp('4')}}>
     <ButtonIconComp style={{width:wp('90'),height:hp('7')}} TextStyle={{fontSize:hp('2.6')}} onPress={()=>console.log('Create Class')} text="Create Class" size={hp('5.5')} name={'add'} />
     </View>
     <View style={{...styles.classDashBoard,marginTop:hp('6')}}>
       <TextComp text="Pending Requests"/> 
       <HorizontalDividerComp width={'53'} color={colorTutor_.blue}/>
     </View>
     <InformationTextView text={'You don’t have pending requests.'}/> 
   
     </View> ) 
      }




  {index==1 
    &&
  <ScrollView  contentContainerStyle={styles.container}>
        <View style={styles.myClassViewDashBoard} >
        <View style={{flexDirection:'row'}}>
      <Ionicons name={'arrow-back'} size={hp('2')} color='white' />
       <TextComp style={{marginLeft:wp('3'),color:colorTutor_.TxtColor}} text='My Classes'/>
        </View>
        </View>
        <View>
        </View>

<View style={{height:wp('10'),borderRadius:10,alignSelf:'center'}}>

<Calendar

// customHeaderTitle={<View style={{backgroundColor:'red', width:wp('55'),alignSelf:'center'}}>
//   <Text>hello</Text>
// </View>}
// style={{height:hp('50')}}
  markingType={'period'}
  markedDates={{
    '2022-10-28': {marked: true, dotColor: '#50cebb'},
    '2022-10-29': {marked: true, dotColor: '#50cebb'},
    '2022-10-30': {startingDay: true, color: '#50cebb', textColor: 'white'},
    '2012-05-22': {color: '#70d7c7', textColor: 'white'},
    '2012-05-23': {color: '#70d7c7', textColor: 'white', marked: true, dotColor: 'white'},
    '2012-05-24': {color: '#70d7c7', textColor: 'white'},
    '2012-05-25': {endingDay: true, color: '#50cebb', textColor: 'white'}
  }}
  // markedDates={{
  //   '2017-10-25': {dots: [vacation, massage, workout], selected: true, selectedColor: 'red'},
  //   '2017-10-26': {dots: [massage, workout], disabled: true}
  // }}
/>
</View>

      </ScrollView>
      }

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

export default DashboardScreen

