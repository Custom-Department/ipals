import {StyleSheet} from 'react-native';
import {colorTutor_} from '../../../config/color';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  activitiesContainer: {
    width: wp('25'),
    height: hp('4'),
    borderColor: 'black',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: hp('2'),
    maxHeight: hp('7'),
    marginLeft: wp('2'),
    marginRight: wp('1'),
    marginBottom: hp('2'),
  },
  midView: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    width: wp('90'),
    marginTop: hp('3'),
    paddingBottom: hp('13'),
  },
  bottomBar: {
    position: 'absolute',
    backgroundColor: colorTutor_.blue,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    height: hp('9'),
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    bottom: 0,
    width: wp('100'),
    paddingHorizontal: wp('10'),
  },
  image: {
    zIndex: 1,
    height: hp('12'),
    width: wp('25'),
    borderRadius: 70,
  },
  cameraStyle: {
    alignSelf: 'center',
  },
  textharMatin: {
    fontSize: hp('3.2'),
    marginTop: hp('4'),
  },
  subView: {
    backgroundColor: colorTutor_.ipalforgetTxtColor,
    borderRadius: 10,
    paddingTop: hp('0.5'),
    paddingBottom: hp('0.5'),
    paddingLeft: hp('1.5'),
    paddingRight: hp('1.5'),

    alignSelf: 'center',
    marginTop: hp('1'),
  },
  desView: {
    marginTop: hp('3'),
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
  },
  textdes: {
    paddingTop: hp('2'),
    paddingBottom: hp('1'),
    textAlign: 'justify',
    letterSpacing: 0.5,
  },
  yesView: {
    width: wp('40'),
    height: hp('5'),
    shadowColor: colorTutor_.ipalforgetTxtColor,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  buttonView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
    width: wp('85'),
    marginTop: hp('3.5'),
  },
  modalMainView: {
    position: 'absolute',
    zIndex: 1,
    height: hp('100'),
    width: wp('100'),
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalInnerView: {
    width: wp('90'),
    borderRadius: 10,
    paddingBottom: hp('2'),
    backgroundColor: 'white',
    overflow: Platform.OS == 'ios' ? 'visible' : 'hidden',
    zIndex: 1,
  },

  Bottombtn: {
    alignSelf: 'center',
  },

  heading: {
    marginLeft: wp('5'),
    fontWeight: 'bold',
    marginTop: hp('2'),
  },

  daysView: {
    width: wp('85'),
    alignSelf: 'center',
    flexDirection: 'row',
    // flexWrap: 'wrap',
    flexWrap: 'wrap',
  },
  addButton: {
    flexDirection: 'row',
    width: wp('100'),
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
    display: 'flex',
  },
});
