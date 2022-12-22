import {
  Dimensions,
  FlatList,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {styles} from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {color, colorTutor_} from '../../config/color';
import {globalStyles} from '../../config/globalStyles';
import types from '../../Redux/types';
import {useDispatch} from 'react-redux';
import {TextComp} from '../../components/TextComponent';

const OnboardScreen = ({navigation}) => {
  const disptach = useDispatch();
  const {width, height} = Dimensions.get('window');
  const slides = [
    {
      id: '1',
      // image: require('../../images/image1.png'),
      title: 'Tutor Guide',
      subtitle: 'Best Online Shopping Platform',
    },
    {
      id: '2',
      // image: require('../../images/image2.png',
      title: 'Tutee Guide',
      subtitle:
        'Let you shop milions of products with best online shopping Deals',
    },
    {
      id: '3',
      // image: require('../../images/image3.png',
      title: 'Mentor Guide',
      subtitle: 'An exciting place for the whole family to shop',
    },
    {
      id: '4',
      // image: require('../../images/image3.png',
      title: 'Mentee Guide',
      subtitle: 'An exciting place for the whole family to shop',
    },
    {
      id: '5',
      // image: require('../../images/image3.png',
      title: 'Retailer Guide',
      subtitle: 'An exciting place for the whole family to shop',
    },
    {
      id: '6',
      // image: require('../../images/image3.png',
      title: 'Shop Guide',
      subtitle: 'An exciting place for the whole family to shop',
    },
  ];

  const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0);
  const ref = React.useRef();
  const updateCurrentSlideIndex = e => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setCurrentSlideIndex(currentIndex);
  };

  const goToNextSlide = () => {
    const nextSlideIndex = currentSlideIndex + 1;
    if (nextSlideIndex != slides.length) {
      const offset = nextSlideIndex * width;
      ref?.current.scrollToOffset({offset});
      setCurrentSlideIndex(currentSlideIndex + 1);
    }
  };
  const goToBackSlide = () => {
    const nextSlideIndex = currentSlideIndex - 1;
    if (nextSlideIndex != slides.length) {
      const offset = nextSlideIndex * width;
      ref?.current.scrollToOffset({offset});
      setCurrentSlideIndex(currentSlideIndex - 1);
    }
  };
  const skip = () => {
    const lastSlideIndex = slides.length - 1;
    const offset = lastSlideIndex * width;
    ref?.current.scrollToOffset({offset});
    setCurrentSlideIndex(lastSlideIndex);
  };
  const Slides = ({item}) => {
    return (
      <>
        <View style={styles.midView}>
          <View style={styles.midViewTopView}>
            <AntDesign
              style={{marginRight: wp('3')}}
              name="exclamationcircle"
              size={hp('3.5')}
              color={colorTutor_.ipallightGreen}
            />
            <Text style={{color: colorTutor_.TxtColor, fontSize: hp('2.5')}}>
              {item.title}
            </Text>
          </View>
          <Text style={styles.desc}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.Lorem Ipsum is simply
            dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industry's standard dummy text ever since the
          </Text>
          <View style={styles.midLastView}>
            <View style={styles.arrowView}>
              <AntDesign
                onPress={goToBackSlide}
                name="arrowleft"
                size={hp('4')}
                color={colorTutor_.TxtColor}
              />
            </View>
            {/* <TouchableOpacity onPress={skip} style={styles.skipBtn}> */}
            <TouchableOpacity
              onPress={() =>
                disptach({
                  type: types.LunchedCompleted,
                })
              }
              style={styles.skipBtn}>
              <TextComp color="white" text={'Skip Intro'} />
            </TouchableOpacity>
            <View style={styles.arrowView}>
              <AntDesign
                onPress={goToNextSlide}
                name="arrowright"
                size={hp('4')}
                color={colorTutor_.TxtColor}
              />
            </View>
          </View>
        </View>
      </>
    );
  };
  return (
    <View style={styles.container}>
      <StatusBar
        hidden={false}
        barStyle={Platform.OS == 'ios' ? 'dark-content' : 'default'}
      />
      <Image
        resizeMode="contain"
        style={styles.imageView}
        source={require('../../image/logo.png')}
      />
      <Text style={styles.topText}>Welcome To i-Pals</Text>
      <FlatList
        ref={ref}
        onMomentumScrollEnd={updateCurrentSlideIndex}
        contentContainerStyle={{height: hp('50')}}
        showsHorizontalScrollIndicator={false}
        horizontal
        data={slides}
        pagingEnabled
        renderItem={({item}) => <Slides item={item} />}
      />
      <View style={styles.bottomView}>
        <TouchableOpacity
          onPress={() => navigation.navigate('OnboardHomeScreen')}
          style={{
            backgroundColor: colorTutor_.ipallightGreen,
            ...styles.homeBtn,
          }}>
          <TextComp color="white" style={{fontSize: hp('2.2')}} text={'HOME'} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('OurStory')}
          style={{
            ...styles.homeBtn,
            backgroundColor: 'white',
          }}>
          <TextComp
            color={colorTutor_.ipallightGreen}
            style={{fontSize: hp('2.2')}}
            text={'OUR STORY'}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.bottomBar}>
        <TouchableOpacity onPress={() => console.log('dont have you acc')}>
          <Text style={globalStyles.globalModuletutor}>Term of use</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('dont have you acc')}>
          <Text style={globalStyles.globalModuletutor}>Privacy Policy</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OnboardScreen;
