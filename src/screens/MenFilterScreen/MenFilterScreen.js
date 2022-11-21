import React from 'react';
import {useEffect} from 'react';
import {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  FlatList,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import {SkypeIndicator} from 'react-native-indicators';
import {useDispatch, useSelector} from 'react-redux';
import HorizontalDividerComp from '../../components/HorizontalDividerComp/HorizontalDividerComp';
import InformationTextView from '../../components/InformationTextView/InformationTextView';
import {TextComp} from '../../components/TextComponent';
import {TuteeHomeFlatListComp} from '../../components/TuteeHomeFlatListComp/TuteeHomeFlatListComp';
import {colorTutor_} from '../../config/color';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {HeaderComponent} from '../../components/HeaderComponent/HeaderComponent';
import {ButtonIconComp} from '../../components/ButtonIconComp/ButtonIconComp';
import {
  GetTeachreClasses,
  MenteeFilterMentor,
  MentorFilterMenteeUrl,
} from '../../config/Urls';
import axios from 'react-native-axios';
import {errorMessage} from '../../config/NotificationMessage';
import {errorHandler} from '../../config/helperFunction';
import {BackHeaderComponent} from '../../components/BackHeaderComponent/BackHeaderComponent';
import {styles} from './styles';
import {CircleImageComp} from '../../components/CircleImageComp/CircleImageComp';
import {LoginInputComp} from '../../components/LoginInputComp/LoginInputComp';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

const MenFilterScreen = ({route, navigation}) => {
  const item = route.params.item;
  console.log(27, item);
  const dispatch = useDispatch();
  const {userData, token} = useSelector(state => state.userData);

  const [allStates, setAllStates] = useState({
    acceptClassState: [],
    pendingClassState: [],
    GetTeacherState: [],
    messagesState: [],
    courcesState: [],
  });
  const [allLoading, setAllLoading] = useState({
    acceptLoading: false,
    pendingLoading: true,
    messageLoading: false,
    GetTeacherLoading: false,
    courcesLoading: false,
    createClassLoading: false,
  });
  const {
    acceptLoading,
    pendingLoading,
    messageLoading,
    GetTeacherLoading,
    courcesLoading,
    createClassLoading,
  } = allLoading;
  const {
    acceptClassState,
    pendingClassState,
    messagesState,
    GetTeacherState,
    courcesState,
  } = allStates;
  const updateState = data => {
    setAllStates(prev => ({...prev, ...data}));
  };
  const updateLoadingState = data => {
    setAllLoading(prev => ({...prev, ...data}));
  };

  const getApiData = (url, state, loading) => {
    updateLoadingState({[loading]: true});
    let body = {
      full_name: item.name,
      category_id: item.countryId,
      city_id: item.cityId,
      state_id: item.stateId,
      zip_code: item.zipCode,
    };
    axios
      .post(url, body, {
        headers: {Authorization: `Bearer ${token}`},
      })
      .then(function (response) {
        updateState({[state]: response.data.data});
        updateLoadingState({[loading]: false});
      })
      .catch(function (error) {
        console.log(980, error);
        updateLoadingState({[loading]: false});
        errorMessage(errorHandler(error));
      });
  };
  console.log(userData.user_type);
  useEffect(() => {
    getApiData(
      userData?.user_type == 'mentee'
        ? MenteeFilterMentor
        : MentorFilterMenteeUrl,
      'GetTeacherState',
      'GetTeacherLoading',
    );
  }, []);
  return (
    <View style={{flex: 1, backgroundColor: colorTutor_.ipalBlue}}>
      <BackHeaderComponent heading={'Filter Mentee'} />
      <ScrollView contentContainerStyle={{flex: 1}}>
        {GetTeacherLoading ? (
          <SkypeIndicator
            color={'white'}
            size={hp('4')}
            style={{
              alignSelf: 'center',
              justifyContent: 'center',
            }}
          />
        ) : GetTeacherState?.length > 0 ? (
          // <TuteeHomeFlatListComp
          //   // navigate={navigateTeacher}
          //   data={GetTeacherState}
          // />
          <FlatList
            data={GetTeacherState}
            keyExtractor={(item, index) => index.toString()}
            numColumns={2}
            contentContainerStyle={{
              width: wp('95'),
              alignSelf: 'center',
              paddingBottom: hp('15'),
            }}
            renderItem={({item}) => {
              return userData?.user_type == 'mentee' ? (
                <MentHomeComp
                  navigate={() =>
                    navigation.navigate('MenteeDetailedScreen', item)
                  }
                  data={item}
                />
              ) : (
                <MentHomeComp data={item} />
              );
            }}
          />
        ) : (
          <View>
            <View style={styles.classDashBoard}>
              <TextComp text="Search Mentee" />
              <HorizontalDividerComp color={colorTutor_.blue} />
            </View>
            <InformationTextView text={'Mentee Not Found'} />
          </View>
        )}
      </ScrollView>
    </View>
  );
};
export default MenFilterScreen;

export const MentHomeComp = props => {
  const {data} = props;
  return (
    <TouchableOpacity
      // onPress={() => props?.navigate(data)}
      style={styles.mainView}>
      <CircleImageComp
        image={{uri: data?.profileImageLink}}
        styles={{
          alignSelf: 'center',
          marginTop: hp('-2'),
        }}
      />
      <TextComp
        text={data?.f_name + ' ' + data.l_name}
        style={{fontSize: hp('2')}}
      />
      <TextComp
        text={data?.email}
        style={{marginTop: hp('1'), fontSize: hp('1.5')}}
      />
      <TextComp
        text={data?.phone_number}
        style={{marginTop: hp('1'), fontSize: hp('2')}}
      />
      <HorizontalDividerComp style={styles.divider} />
      <TextComp
        text={data?.language}
        style={{marginBottom: hp('1'), fontSize: hp('2')}}
      />
    </TouchableOpacity>
  );
};

// export const Renderitem = props => {
//   const {data} = props;
//   let price = data?.amount;
//   console.log(208, price);
//   const pricefixed = Number(price)?.toFixed();

//   return (
//     <TouchableOpacity style={styles.flatlistmain} onPress={props.click}>
//       <View style={styles.flupperView}>
//         <Image
//           // source={require('../../image/image.jpg')}
//           source={{uri: data?.profileImageLink}}
//           style={styles.flimagecrop}
//         />
//         {console.log(data)}
//         <View style={{width: wp('28')}}>
//           <Text style={{fontSize: hp('1.8'), color: 'black'}}>
//             {data?.f_name} {data?.l_name}
//           </Text>
//           <Text style={{fontSize: hp('1.5'), color: 'black'}}>
//             {data?.language}
//           </Text>
//         </View>
//       </View>
//       <View style={styles.centerView}>
//         <AntDesign
//           name="clockcircle"
//           size={hp('2.5')}
//           style={{marginRight: wp('1')}}
//           color={colorTutor_.ipallightGreen}
//         />
//         <TextComp
//           text={data?.clock}
//           style={{color: colorTutor_.ipallightGreen}}
//         />
//       </View>
//       <View style={styles.centerView}>
//         <View
//           style={{
//             flexDirection: 'row',
//             width: wp('45'),
//             justifyContent: 'space-around',
//           }}>
//           <View
//             style={{
//               flexDirection: 'row',
//               alignItems: 'center',
//             }}>
//             <Image
//               style={{
//                 height: 20,
//                 width: 20,
//                 tintColor: colorTutor_.ipallightGreen,
//               }}
//               source={require('../../image/book.png')}
//             />
//             <TextComp
//               text={data?.subject}
//               style={{color: colorTutor_.ipallightGreen}}
//             />
//           </View>
//           <View
//             style={{
//               flexDirection: 'row',
//               alignItems: 'center',
//             }}>
//             <AntDesign
//               name="clockcircle"
//               size={hp('2.5')}
//               style={{marginRight: wp('1')}}
//               color={colorTutor_.ipallightGreen}
//             />
//             <TextComp
//               text={data?.timing}
//               style={{
//                 color: colorTutor_.ipallightGreen,
//                 marginRight: wp('1'),
//               }}
//             />
//           </View>
//         </View>
//       </View>
//       <View style={styles.bottomView}>
//         <View style={styles.bottombutton}>
//           <Text style={styles.price}>${pricefixed}</Text>
//         </View>
//         <View style={styles.verticaldivider}></View>

//         <MaterialCommunityIcons
//           name="email"
//           size={hp('4')}
//           color={colorTutor_.lightGreen}
//         />
//         <View style={styles.verticaldivider}></View>
//         <EvilIcons
//           color={colorTutor_.lightGreen}
//           name="heart"
//           size={hp('4')}
//           style={{marginTop: hp('0.5')}}
//         />
//       </View>
//     </TouchableOpacity>
//   );
// };
