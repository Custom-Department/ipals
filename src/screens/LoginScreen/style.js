import { StyleSheet } from "react-native";
import { color } from "../../config/color";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: color.ipalBlue
    },
    imageView: {
        height: hp('25'),
        width: wp('30')
    },
    signBtn: {
        marginTop: hp('2')
    },
    forgetView: {
        width: wp('80'),
        marginTop: hp('2'),
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center'
    }
})