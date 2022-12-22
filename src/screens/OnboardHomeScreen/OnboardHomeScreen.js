import React, {useState, useRef, useEffect, useCallback} from 'react';
import {
  Image,
  ImageBackground,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Dimensions,
  FlatList,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {OnboardBackHeadeerComponent} from '../../components/OnboardBackHeaderComponent/OnbaordBackHeaderComponent';
import {color, colorTutor_} from '../../config/color';
import {styles} from './styles';
import PhoneInput from 'react-native-phone-number-input';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const OnboardHomeScreen = ({navigation}) => {
  const width = Dimensions.get('window').width;
  const [value, setValue] = useState('');
  const [indexValue, setIndexValue] = useState('');
  const [showMessage, setShowMessage] = useState(false);
  const phoneInput = useRef(null);
  console.log(24, phoneInput.state);
  const ref = React.useRef();

  const images = [
    {
      id: '1',
      image: require('../../image/sliderimage.png'),
    },
    {
      id: '2',
      image: require('../../image/test1.jpeg'),
    },
  ];
  const onScroll = useCallback(e => {
    const slideSize = e.nativeEvent.layoutMeasurement.width;
    const index = e.nativeEvent.contentOffset.x / slideSize;
    const roundIndex = Math.round(index);
    setIndexValue(roundIndex);
    console.log('roundIndex:', roundIndex, index);
  }, []);

  const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0);
  const updateCurrentSlideIndex = e => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setCurrentSlideIndex(currentIndex);
  };

  const goToNextSlide = () => {
    const nextSlideIndex = currentSlideIndex + 1;
    if (currentSlideIndex == 0) {
      const offset = nextSlideIndex * width;
      ref?.current.scrollToOffset({offset});
      setCurrentSlideIndex(currentSlideIndex + 1);
      setIndexValue(1);
    }
  };
  const goToBackSlide = () => {
    const nextSlideIndex = currentSlideIndex - 1;
    if (currentSlideIndex == 1) {
      const offset = nextSlideIndex * width;
      ref?.current.scrollToOffset({offset});
      setCurrentSlideIndex(currentSlideIndex - 1);
      setIndexValue(0);
    }
  };
  const skip = () => {
    const lastSlideIndex = images.length - 1;
    const offset = lastSlideIndex * width;
    ref?.current.scrollToOffset({offset});
    setCurrentSlideIndex(lastSlideIndex);
  };
  const Slides = ({item}) => {
    return (
      <View
        style={{
          width: wp('100'),
          alignItems: 'center',
        }}>
        <Image
          resizeMode="contain"
          source={item.image}
          style={{
            height: hp('50'),
            width: wp('80'),
            borderRadius: 20,
          }}
        />
        <View
          style={{
            flexDirection: 'row',
          }}></View>
        <TouchableOpacity
          onPress={goToBackSlide}
          style={{
            width: wp('100'),
            alignItems: 'center',
            position: 'absolute',
            top: hp('25'),
            right: wp('35'),
          }}>
          <FontAwesome5
            name={'chevron-circle-left'}
            size={hp('3')}
            color={color.white}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={goToNextSlide}
          style={{
            width: wp('100'),
            alignItems: 'center',
            position: 'absolute',
            top: hp('25'),
            left: wp('35'),
          }}>
          <FontAwesome5
            name={'chevron-circle-right'}
            size={hp('3')}
            color={color.white}
          />
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View>
      <OnboardBackHeadeerComponent
        headingtext={'HOME'}
        navigation={navigation}
        threedots={true}
      />
      <ScrollView
        scrollEnabled
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollView}>
        <Image
          source={require('../../image/homemain.png')}
          style={{width: wp('100')}}
        />
        <View style={styles.SecondView}>
          <Image
            source={require('../../image/empowerment.png')}
            style={{width: wp('85'), margin: 20, alignSelf: 'center'}}
          />
          <Image
            source={require('../../image/embrace.png')}
            style={{width: wp('85'), margin: 20, alignSelf: 'center'}}
          />
          <View style={styles.textarea}>
            <Text style={styles.textheading}>
              Learn, Connect, Experience across the Seas & Oceans
            </Text>
            <Text style={styles.normalImage}>
              i-Pals, a free virtual tutoring program, focuses on helping young
              learners to enhance academic, non-academic fields and build
              valuable life skills they need to overcome new challenges and
              succeed in their future endeavors.
            </Text>
            <Text style={styles.textheading}>Learning Buddy</Text>
            <Text style={styles.normalImage}>
              At i-Pals, we encourage every student from grade 4 - 12 to
              volunteer to become a virtual tutor, “reading buddy” or “math
              buddy”, in areas of their strength academically or
              non-academically such as public speaking, creative writing, simple
              cooking, baking, piano playing, painting, jewelry making, little
              fun science experiments etc.
            </Text>
            <Text style={styles.normalImage}>
              {' '}
              Every new tutor student must be validated first by completing a
              registration form, followed by a short video call interview to
              finalize the process.
            </Text>
            <Text style={styles.normalImage}>
              {' '}
              In addition, there is a monitored built-in SMS messaging and video
              call which allow tutees and parents of tutees to communicate
              directly with the selected student tutors for privacy protection.
            </Text>
            <Text style={styles.normalImage}>
              {' '}
              Lastly, there is integrated feedback and enforced blocking
              mechanism in place to ensure the highest standard of
              accountability and integrity of student tutors. This is
              accomplished by a joint effort among student tutors, tutees,
              parents of tutees and school teachers.
            </Text>
          </View>
          <ImageBackground
            style={styles.backgroundImage}
            source={require('../../image/backgroundimage.png')}>
            <View style={{justifyContent: 'center'}}>
              <Text style={styles.imagetext}>
                SEND US MESSAGE FOR INFOMATION
              </Text>
              <View style={styles.formView}>
                <TextInput
                  style={{
                    height: hp('8'),
                    width: wp('80'),
                    borderRadius: 10,
                    textAlign: 'center',
                  }}
                  placeholder="First Name"
                  placeholderTextColor={color.placeholdercolor}
                  backgroundColor={color.textfieldcolor}
                />
                <TextInput
                  style={{
                    width: wp('80'),
                    borderRadius: 10,
                    margin: 10,
                    textAlign: 'center',
                    height: hp('8'),
                  }}
                  placeholder="Last Name"
                  placeholderTextColor={color.placeholdercolor}
                  backgroundColor={color.textfieldcolor}
                />
                {/* <View
                  style={{
                    width: wp('75'),
                    borderRadius: 10,
                    backgroundColor: color.textfieldcolor,
                    height: hp('8'),
                  }}>
                  <PhoneInput
                    ref={phoneInput}
                    defaultValue={value}
                    defaultCode="IN"
                    onChangeFormattedText={text => {
                      setValue(text);
                    }}
                    textContainerStyle={styles.textInput}
                    containerStyle={styles.phoneContainer}
                  />
                </View> */}
                <PhoneInput
                  ref={phoneInput}
                  defaultValue={value}
                  defaultCode="DM"
                  layout="first"
                  onChangeText={text => {
                    setValue(text);
                  }}
                  textContainerStyle={styles.textInput}
                  containerStyle={styles.phoneContainer}
                  // onChangeFormattedText={text => {
                  //   setValue(text);
                  // }}
                />
                {/* <TextInput
                  style={{
                    width: wp('75'),
                    borderRadius: 10,
                    margin: 10,
                    textAlign: 'center',
                  }}
                  placeholder="Number"
                  placeholderTextColor={color.placeholdercolor}
                  keyboardType={'number-pad'}
                  backgroundColor={color.textfieldcolor}
                /> */}
                <TextInput
                  style={{
                    width: wp('80'),
                    borderRadius: 10,
                    margin: 10,
                    textAlign: 'center',
                    height: hp('8'),
                  }}
                  placeholder="Email"
                  placeholderTextColor={color.placeholdercolor}
                  keyboardType={'email-address'}
                  backgroundColor={color.textfieldcolor}
                />
                <TextInput
                  style={{
                    width: wp('80'),
                    borderRadius: 10,
                    textAlign: 'center',
                    textAlignVertical: 'top',
                    height: hp('25'),
                  }}
                  placeholder="Message"
                  multiline={true}
                  placeholderTextColor={color.placeholdercolor}
                  backgroundColor={color.textfieldcolor}
                />

                <TouchableOpacity style={styles.sendbutton}>
                  <Text
                    style={{
                      fontSize: hp('2.75'),
                      textAlign: 'center',
                      color: color.white,
                    }}>
                    SEND
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </ImageBackground>
        </View>
        <View
          style={{
            width: wp('100'),
            // height: hp('30'),
            alignItems: 'center',
            marginVertical: hp('25'),
          }}>
          <Text
            style={{
              fontSize: hp('3'),
              color: color.black,
              marginBottom: hp('2'),
            }}>
            TESTIMONIALS
          </Text>
          {/* <FlatList
            ref={ref}
            onMomentumScrollEnd={updateCurrentSlideIndex}
            data={images}
            horizontal
            pagingEnabled={true}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item, index) => {
              index.toString();
            }}
            // onScroll={onScroll}
            contentContainerStyle={
              {
                // height: hp('100'),
              }
            }
            renderItem={({item, index}) => {
              return (
                <View
                  style={{
                    width: wp('100'),
                    alignItems: 'center',
                  }}>
                  <Image
                    resizeMode="contain"
                    source={item.image}
                    style={{
                      height: hp('50'),
                      width: wp('80'),
                      borderRadius: 20,
                    }}
                  />
                  <View
                    style={{
                      flexDirection: 'row',
                    }}></View>
                  <TouchableOpacity
                    onPress={() => {
                      goToBackSlide(), setIndexValue(0);
                    }}
                    style={{
                      width: wp('100'),
                      alignItems: 'center',
                      position: 'absolute',
                      top: hp('25'),
                      right: wp('35'),
                    }}>
                    <FontAwesome5
                      name={'chevron-circle-left'}
                      size={hp('3')}
                      color={color.white}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => {
                      goToNextSlide, setIndexValue(1);
                    }}
                    style={{
                      width: wp('100'),
                      alignItems: 'center',
                      position: 'absolute',
                      top: hp('25'),
                      left: wp('35'),
                    }}>
                    <FontAwesome5
                      name={'chevron-circle-right'}
                      size={hp('3')}
                      color={color.white}
                    />
                  </TouchableOpacity>
                </View>
              );
            }}
          /> */}

          <FlatList
            ref={ref}
            onMomentumScrollEnd={updateCurrentSlideIndex}
            contentContainerStyle={{height: hp('50')}}
            showsHorizontalScrollIndicator={false}
            horizontal
            data={images}
            pagingEnabled
            renderItem={({item, index}) => <Slides item={item} />}
          />
          <View style={styles.topCircle}>
            {images.map((item, index1) => {
              console.log(33, indexValue);
              return (
                <View
                  style={{
                    ...styles.circle,
                    backgroundColor:
                      index1 == indexValue ? '#48D1CC' : '#D9D9D9',

                    marginRight: wp('2'),
                  }}
                />
              );
            })}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
export default OnboardHomeScreen;
