import { StyleSheet } from "react-native";
import { color, colorTutor_ } from "../../config/color";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingTop: hp('7'),
        // justifyContent: 'center',
        backgroundColor: colorTutor_.ipalBlue
    },
    imageView: {
        height: hp('25'),
        width: wp('33')
    },
    topText: {
        color: colorTutor_.TxtColor,
        fontSize: hp('3.8'),
        marginTop: hp('3'),
    },
    midView: {
        height: hp('43'),
        backgroundColor: "white",
        width: wp('88'),
        alignSelf: 'center',
        marginTop: hp('3'),
        alignItems: 'center',
        marginRight: wp('6'),
        marginLeft: wp('6')
    },
    midViewTopView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        marginTop: hp('4'),
    },
    desc: {
        color: colorTutor_.TxtColor,
        fontSize: hp('1.8'),
        width: wp('75'),
        marginTop: hp('4'),
        textAlign: 'center'
    },
    midLastView: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: hp('3')
    },
    arrowView: {
        borderRadius: 25,
        backgroundColor: colorTutor_.lightAquaGreen,
        padding: 15,
        alignItems: 'center',
        width: wp('20'),

    },
    skipBtn: {
        borderRadius: 30,
        backgroundColor: colorTutor_.ipallightGreen,
        padding: 5,
        alignItems: 'center',
        width: wp('40'),
        marginHorizontal: wp('3'),
        justifyContent: 'center'
    },
    bottomBar: {
        position: "absolute",
        backgroundColor: colorTutor_.blue,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        height: hp('9'),
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        bottom: 0,
        width: wp('100'),
        paddingHorizontal: wp('10')
    }
})