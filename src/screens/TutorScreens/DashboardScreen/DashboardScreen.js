import { StyleSheet, TouchableOpacity, Text, View, TextComponent, ScrollView } from 'react-native'
import React, { useState } from 'react'
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
const DashboardScreen = () => {
  const [list,setList]=useState([
    // {
    //   id:0,
    //   name:'Freddy Mercury',
    //   image:require('../../../image/profile.jpg')
    // },
    // {
    //   id:1,
    //   name:'Freddy Mercury',
    //   image:require('../../../image/profile.jpg')

    // },
    // {
    //   id:2,
    //   name:'Freddy Mercury',
    //   image:require('../../../image/profile.jpg')

    // },
    // {
    //   id:2,
    //   name:'Freddy Mercury',
    //   image:require('../../../image/profile.jpg')

    // },
    // {
    //   id:2,
    //   name:'Freddy Mercury',
    //   image:require('../../../image/profile.jpg')

    // },
        {
      id:2,
      name:'Freddy Mercury',
      image:require('../../../image/profile.jpg')

    },
  ])
  
  
  const [topNavigator, setTopNavigator] = useState([
    'HOME', 'MY CLASSES', 'MESSAGES'
  ])
  const [index, setIndex] = useState(0);
  const checkIndexStatus = (value) => {
    setIndex(value)
    console.log(1444, value)
  }


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

