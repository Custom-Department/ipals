import {ScrollView, View} from 'react-native';
import React, {useState} from 'react';
import {BackHeaderComponent} from '../../../components/BackHeaderComponent/BackHeaderComponent';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {colorTutor_, MentorColor} from '../../../config/color';
import {TextComp} from '../../../components/TextComponent';
import axios from 'react-native-axios';
import {styles} from './style';
import HorizontalDividerComp from '../../../components/HorizontalDividerComp/HorizontalDividerComp';
import SubcriptionPackComp from '../../../components/SubcriptionPackComp/SubcriptionPackComp';
import SubcriptionPlanComp from '../../../components/SubcriptionPlanComp/SubcriptionPlanComp';
import {useEffect} from 'react';
import {MentorGetPlanUrl} from '../../../config/Urls';
import {useSelector} from 'react-redux';
import {FlatList} from 'react-native-gesture-handler';
import {SkypeIndicator} from 'react-native-indicators';
const MentorPaymentMethod = ({navigation}) => {
  const {userData, token} = useSelector(state => state.userData);

  // const items = route.params;
  const [allStates, setAllStates] = useState({
    getPlan: [],
  });
  const [allLoading, setAllLoading] = useState({
    getPlanLoading: false,
  });
  const {getPlanLoading} = allLoading;
  const {getPlan} = allStates;
  const updateState = data => {
    setAllStates(prev => ({...prev, ...data}));
  };
  const updateLoadingState = data => {
    setAllLoading(prev => ({...prev, ...data}));
  };

  const getApiData = (url, state, loading) => {
    updateLoadingState({[loading]: true});
    axios
      .get(url, {
        headers: {Authorization: `Bearer ${token}`},
      })
      .then(function (response) {
        updateState({[state]: response.data.data});
        updateLoadingState({[loading]: false});
      })
      .catch(function (error) {
        updateLoadingState({[loading]: false});
        errorMessage(errorHandler(error));
      });
  };
  useEffect(() => {
    getApiData(MentorGetPlanUrl, 'getPlan', 'getPlanLoading');
  }, []);
  console.log(22, getPlan);

  return (
    <View style={{flex: 1, backgroundColor: colorTutor_.ipalBlue}}>
      <BackHeaderComponent
        // style={{backgroundColor: MentorColor.MentorThemeFirst}}
        heading={'Payment Method'}
      />
      <ScrollView>
        <View style={{...styles.classDashBoard}}>
          <TextComp
            style={{color: MentorColor.MentorThemeFirst}}
            text="Current Plan"
          />
          <HorizontalDividerComp
            width={'53'}
            color={MentorColor.MentorThemeFirst}
          />
        </View>
        {getPlanLoading ? (
          <SkypeIndicator
            color={'white'}
            size={hp('4')}
            style={styles.loaderStyle}
          />
        ) : (
          <FlatList
            data={getPlan}
            keyExtractor={(index, item) => index.toString()}
            renderItem={({item, index}) => {
              return (
                <SubcriptionPackComp
                  priceTxt={`$${item?.price}`}
                  iconcolor={MentorColor.MentorlightGrey}
                  data={false}
                  text={`You are subscribed to our ${item?.plan_type} package`}
                />
              );
            }}
          />
        )}
        {/* <View style={{marginTop: wp('3')}}>
          <SubcriptionPackComp
            priceTxt={'$65'}
            iconcolor={MentorColor.MentorlightGrey}
            data={false}
            text={`You are subscribed to our yearly package`}
          />
        </View> */}
        <View style={{...styles.classDashBoard, marginTop: hp('6')}}>
          <TextComp
            style={{color: MentorColor.MentorThemeFirst}}
            text="Subcription plans"
          />
          <HorizontalDividerComp
            width={'53'}
            color={MentorColor.MentorThemeFirst}
          />
        </View>
        {getPlanLoading ? (
          <SkypeIndicator
            color={'white'}
            size={hp('4')}
            style={styles.loaderStyle}
          />
        ) : (
          <FlatList
            data={getPlan}
            keyExtractor={(index, item) => index.toString()}
            renderItem={({item, index}) => {
              console.log(97, index);
              return (
                <SubcriptionPlanComp
                  onPress={() =>
                    navigation.navigate('MentorPaymentCardScreen', item)
                  }
                  text={`Subscribe to our ${item?.plan_type} plan`}
                  priceTxt={`$${item?.price}`}
                  yearTxt={`${item?.plan_type}`}
                  style={{
                    backgroundColor:
                      item?.plan_type == 'Per Month'
                        ? MentorColor.MentorSubsPlan2
                        : MentorColor.MentorSubsPlan1,
                  }}
                />
              );
            }}
          />
        )}
        {/* <View style={{...styles.topViewSubs}}>
          <SubcriptionPlanComp
            text={`Subscribe to our yearly plan`}
            priceTxt={`$65`}
            yearTxt={`per anum`}
            onpress={()=>{navigation.navigate('MentorPaymentCardScreen')}}
          />
        </View>
        <View style={{marginTop: hp('2')}}>
          <SubcriptionPlanComp
            style={{backgroundColor: MentorColor.MentorSubsPlan2}}
            text={`Subscribe to our monthly plan`}
            priceTxt={`$15`}
            yearTxt={`per month`}
          />
        </View> */}
      </ScrollView>
    </View>
  );
};

export default MentorPaymentMethod;
