import React, {useState, useEffect} from 'react';
import {
  View,
  Image,
  Text,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
  FlatList,
  ScrollView,
  Button,
  TextInput,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {color, colorTutor_} from '../../../config/color';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {SearchbarHeader} from '../../../components/SearchBarHeaderComp/SearchbarHeader';
import {TextComp} from '../../../components/TextComponent';
import {styles} from './styles';
import axios from 'react-native-axios';
import moment from 'moment/moment';
import {useDispatch, useSelector} from 'react-redux';
import HorizontalDividerComp from '../../../components/HorizontalDividerComp/HorizontalDividerComp';
import {ButtonThemeComp} from '../../../components/ButtonThemeComp/ButtonThemeComp';
import {BackHeaderComponent} from '../../../components/BackHeaderComponent/BackHeaderComponent';
import {
  GetMenteementorClassesUrl,
  GetMenteeTimeslot,
} from '../../../config/Urls';
import {SkypeIndicator} from 'react-native-indicators';
import {
  errorMessage,
  successMessage,
} from '../../../config/NotificationMessage';
import {errorHandler} from '../../../config/helperFunction';

const MenteeDtailedScreen = ({route}) => {
  const item = route.params;
  const [scheduleDays, setScheduleDays] = useState([]);

  const {userData, token} = useSelector(state => state.userData);
  const dispatch = useDispatch();
  const [allStates, setAllStates] = useState({
    GetMentorClassesState: [],
    getSpecData: {},
    scheduleArray: '',
    subjectTitle: '',
    price:null,
    // GetApproveclassState:[],
  });
  const [allLoading, setAllLoading] = useState({
    GetMentorClassesLoading: false,
    isVisible: false,
    timeSlotButton: false,
    isSubscriptionVisible:false,
    // GetapproveclassLoading: false,
  });

  const {
    GetMentorClassesLoading,
    isVisible,
    timeSlotButton,
    isSubscriptionVisible,
    // GetapproveclassLoading
  } = allLoading;

  const {
    GetMentorClassesState,
    scheduleArray,
    subjectTitle,
    getSpecData,
    price
    // GetApproveclassState
  } = allStates;

  const updateState = data => {
    setAllStates(prev => ({...prev, ...data}));
  };
  const updateLoadingState = data => {
    setAllLoading(prev => ({...prev, ...data}));
  };

  const selectActivities = (v, i) => {
    if (scheduleArray.includes(v)) {
      updateState({
        scheduleArray: scheduleArray.filter(
          scheduleArray => scheduleArray.id !== v.id,
        ),
      });
    } else {
      updateState({scheduleArray: [...scheduleArray, v]});
    }
  };

  const getApiData = (data, state, loading) => {
    updateLoadingState({[loading]: true});
    url = GetMenteementorClassesUrl + data.id;
    axios
      .get(url, {
        headers: {Authorization: `Bearer ${token}`},
      })
      .then(function (response) {
        updateState({GetMentorClassesState: response.data.data});
        updateLoadingState({[loading]: false});
      })
      .catch(function (error) {
        updateLoadingState({[loading]: false});
        errorMessage(errorHandler(error));
      });
  };

  const RenderCard = prop => {
    const {data} = prop;
    const from = moment(data.from, 'hh:mm').format('LT');
    const to = moment(data.to, 'hh:mm').format('LT');
    return (
      <View style={styles.innerView}>
        <View style={styles.timeView}>
          <AntDesign name="clockcircle" size={hp('2.5')} color={'gray'} />
          <TextComp style={{fontSize: hp('1.6')}} text={from + ' - ' + to} />
        </View>
        <HorizontalDividerComp
          style={{
            marginHorizontal: 0,
            alignSelf: 'center',
            marginTop: hp('0.5'),
          }}
          width={'40'}
        />
        <View style={styles.centerView}>
          <View style={styles.innerBottomView}>
            <FontAwesome name="book" size={hp('2')} color={'gray'} />
            <TextComp
              style={{fontSize: hp('1.6')}}
              text={data?.category?.title}
            />
          </View>
          <View style={styles.verDivider} />
          <View
            style={{
              ...styles.innerBottomView,
              alignItems: 'center',
              width: wp('23'),
              justifyContent: 'center',
            }}>
            <MaterialIcons name="timer" size={hp('2')} color={'gray'} />
            <TextComp style={{fontSize: hp('1.5')}} text={data?.total_hours} />
          </View>
        </View>
        <ButtonThemeComp
          onPress={() => {
            setScheduleDays(data?.class_schedules),
              updateState({subjectTitle: data?.category});
            updateState({getSpecData: data});
            updateState({price:item.amount})
            updateLoadingState({isVisible: true});
          }}
          style={styles.bottomButton}
          text={'Apply Now'}
        />
      </View>
    );
  };

  const applyForClass = () => {
    updateLoadingState({timeSlotButton: true});
    const from = moment(getSpecData.from, 'h:mm:ss A').format('HH:mm:ss');
    const to = moment(getSpecData.to, 'h:mm:ss A').format('HH:mm:ss');
    url = GetMenteeTimeslot;
    if (scheduleArray.length > 0) {
      const fromToObject = scheduleArray.map(res => {
        return res.schedule;
      });
      let body = {
        my_class_id:getSpecData.id,
        category_id: subjectTitle.id,
        price:price,
        from: from,
        schedule: fromToObject,
        to: to,
      };
      axios
        .post(
          url, body,
          {
            headers: {Authorization: `Bearer ${token}`},
          },
         
        )
        .then(function (res) {
          // console.log("res",res.data);
          updateLoadingState({isSubscriptionVisible: false});
          updateLoadingState({timeSlotButton: false});
          successMessage('Your Have Succefully Apply for Class');
        })
        .catch(function (error) {
          updateLoadingState({timeSlotButton: false});
          errorMessage(errorHandler(error));
        });
    } else {
      updateLoadingState({timeSlotButton: false});
      errorMessage('Please Select Days');
    }
  };

const [numbervalue,setnumbervlaue]=useState({
  number:'',
  MM:'',
  YY:'',
  cvc:'',
});

  const ModalSubcriptionView = () =>{
    const updateState = data => setnumbervlaue(() => ({...numbervalue, ...data}));
    const {number,MM,YY,cvc} =numbervalue
    const handleCardNumber = (text) => {
      let formattedText = text.split(' ').join('');
      if (formattedText.length > 0) {
        formattedText = formattedText.match(new RegExp('.{1,4}', 'g')).join(' ');
      }
      updateState({number:formattedText})
      // setnumbervlaue({ number: formattedText });
      return formattedText;
    }
    return(
      <View style={styles.modalbottommainView}>
      <View style={styles.modalbottamView}>
      <Entypo
            name="circle-with-cross"
            color={'gray'}
            size={hp('3')}
            onPress={() => {
              updateLoadingState({
                isSubscriptionVisible: false,
              })
            }}
            style={styles.crowsIcon}
          />
          <Text style={{
            fontSize:hp('3'),
          color:'black',
          marginHorizontal:wp('3')}}>Add Credit/Debit Card</Text>
          <View style={styles.stripecardnumber}>
          <TextInput
          style={styles.childcardname}
          placeholder='Enter Card Number'
          maxLength={16}
          keyboardType={"numeric"}
          placeholderTextColor="grey"
          value={number}
          onChangeText={num=>handleCardNumber(num)}
          />
          </View>
          <View style={{flexDirection:'row',margin:10,marginTop:hp('2')}}>
           <View style={{flexDirection:'row'}}>
            <View style={styles.childcard}>
           <TextInput
           style={{fontSize:hp('2')}}
            placeholder='MM'
            maxLength={2}
            placeholderTextColor="grey"
            keyboardType={"numeric"}
            value={MM}
            onChangeText={month=>updateState({MM:month})}
            />
            </View>
            <View style={styles.childcard}>
             <TextInput
            style={{flex:1,fontSize:hp('2')}}
            placeholder='YY'
            maxLength={2}
            placeholderTextColor="grey"
            keyboardType={"numeric"}
            value={YY}
            onChangeText={year=>updateState({YY:year})}
            />
            </View>
           </View>
           <View style={styles.childcvc}>
             <TextInput
             style={{flex:1,fontSize:hp('2')}}
            placeholder='CVC'
            maxLength={4}
            keyboardType={"numeric"}
            value={cvc}
            onChangeText={cvc=>updateState({cvc:cvc})}
            />
            </View>
             
          </View>
         <TouchableOpacity style={styles.continue} onPress={()=>{applyForClass()}}>
          <Text style={{color:'white',fontSize:hp('2.3')}}>Continue</Text>
         </TouchableOpacity>

      </View>
      </View>
    )
  }

  const ModalView = () => {
    return (
      <View style={styles.modalMainView}>
        <View style={styles.modalInnerView}>
          <Entypo
            name="circle-with-cross"
            color={'gray'}
            size={hp('3')}
            onPress={() => {
              updateLoadingState({
                isVisible: false,
              }),
                updateState({
                  scheduleArray: '',
                  timeSlot: null,
                  allTimeSlot: [],
                });
            }}
            style={styles.crowsIcon}
          />
          <TextComp
            text="Subject"
            style={{marginLeft: wp('5'), fontWeight: 'bold'}}
          />
          <View style={styles.modalSubjectView}>
            <View
              style={{
                ...styles.subView,
                backgroundColor: colorTutor_.blue,
              }}>
              <TextComp
                text={subjectTitle?.title}
                style={{fontSize: hp('1.7'), color: 'white'}}
              />
            </View>
          </View>

          <TextComp text="Select schedule for class" style={styles.heading} />
          <ScrollView>
            <View style={styles.daysView}>
              {scheduleDays.map((res, i) => {
                const Month = moment(res?.schedule).format('YYYY-MM-DD');
                return (
                  <TouchableOpacity
                    onPress={() => selectActivities(res, i)}
                    style={{
                      ...styles.activitiesContainer,
                      backgroundColor: scheduleArray.includes(res)
                        ? colorTutor_.lightSeaGreen
                        : 'white',
                      borderColor: scheduleArray.includes(res)
                        ? colorTutor_.blue
                        : 'black',
                      borderWidth: scheduleArray.includes(res) ? 2 : 1,
                    }}>
                    <Text
                      style={{
                        textAlign: 'center',
                        color: scheduleArray.includes(res)
                          ? colorTutor_.blue
                          : 'black',
                        fontWeight: scheduleArray.includes(res)
                          ? 'bold'
                          : 'normal',
                        fontSize: hp('1.5'),
                      }}>
                      {Month}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>
            <ButtonThemeComp
              style={styles.getTimeButton}
              text={'Apply For Subscription'}
              onPress={() => {
                updateLoadingState({isVisible: false});
                if (scheduleArray.length > 0) {
                 
                updateLoadingState({isSubscriptionVisible: true});
                // updateState({
                //   scheduleArray: '',
                //   timeSlot: null,
                //   allTimeSlot: [],
                // });
              } else {
                updateLoadingState({timeSlotButton: false});
                errorMessage('Please Select Days');
              }
                // applyForClass()
              }}
              isLoading={timeSlotButton}
            />
          </ScrollView>
        </View>
      </View>
    );
  };
  useEffect(() => {
    // console.log("forprice",);
    getApiData(item, 'GetMentorClassesState', 'GetMentorClassesLoading');
  }, []);
  return (
    <View style={styles.mainView}>
      {/* <SearchbarHeader heart={true} /> */}
      <BackHeaderComponent heading={'M e n t e e  D e t a i l'} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.secondmainView}>
        <View style={styles.roundedview}>
          <View style={styles.ImagerowView}>
            <Image
              source={{uri: item?.profileImageLink}}
              style={styles.imagecrop}
            />
            <View style={styles.HeadingText}>
              <Text style={styles.usernamestyle}>
                {item?.f_name + ' ' + item?.l_name}
              </Text>
              <View style={styles.divider} />
              <Text style={styles.category}>Category</Text>
              <View style={styles.subMainView}>
                {item?.category.length > 0 &&
                  item?.category?.map(res => {
                    return (
                      <View style={styles.subView}>
                        <TextComp
                          // text="English"
                          text={res.title}
                          style={{fontSize: hp('1.3'), color: 'white'}}
                        />
                      </View>
                    );
                  })}
              </View>
            </View>
          </View>
          <Text style={styles.paragraphtext}>{item?.bio}</Text>
          <View style={styles.view}>
            <View style={styles.buttonView}>
              <TouchableOpacity style={styles.whatsaap}>
                <Image
                  source={require('../../../image/whatsapp.png')}
                  style={styles.whatsaapicon}
                />
                <Text style={styles.buttonText}>Whatsaap</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.linkedin}>
                <Entypo name="linkedin" size={hp('3')} color={color.white} />
                <Text style={styles.buttonText}>LinkedIn</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.categoryheading}>
          <Entypo name="dot-single" size={hp('4')} color={color.white} />
          <Text style={{color: color.white}}>Other categories</Text>
        </View>
        {GetMentorClassesLoading ? (
          <SkypeIndicator
            color={'white'}
            size={hp('4')}
            style={{
              // marginTop: hp('30'),
              alignSelf: 'center',
              justifyContent: 'center',
              marginVertical: hp('10'),
            }}
          />
        ) : (
          <FlatList
            data={GetMentorClassesState}
            scrollEnabled={false}
            contentContainerStyle={{
              marginTop: hp('2'),
              width: wp('95'),
              alignSelf: 'center',
            }}
            keyExtractor={(item, index) => index.toString()}
            numColumns={2}
            renderItem={({item}) => {
              return <RenderCard data={item} />;
            }}
          />
        )}
      </ScrollView>
      {isVisible && <ModalView />}
      {isSubscriptionVisible && <ModalSubcriptionView/>}
    </View>
  );
};

export default MenteeDtailedScreen;
