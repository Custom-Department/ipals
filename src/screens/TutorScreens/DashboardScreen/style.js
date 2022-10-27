import { StyleSheet } from "react-native";
import { colorTutor_ } from "../../../config/color";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
    container: {
        flexGrow:1,
        paddingBottom:hp('9')
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
        paddingHorizontal: wp('10'),

    },
    classDashBoard: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 20,
    },
    myClassViewDashBoard: {
        padding: 20,
    }
})