import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Picker } from '@react-native-picker/picker';

const PickerComponent = (props) => {
    return (
        <View >
            <Text style={styles.accView}>{props.text}</Text>
            <Picker
                selectedValue={props.selectedValue}
                style={{ ...styles.pickerStyle, ...props.style, }}
                onValueChange={(itemValue, itemIndex) => {
                    // let g = Object.keys(props.h)
                    console.log(15, props.h)
                    props.setSelectedValue(itemValue, props.h)
                }}>
                {props?.data?.map(item => {
                    return (
                        <Picker.Item label={item.label} value={item.value} />)
                })}
            </Picker>
        </View>
    )
}

export default PickerComponent

const styles = StyleSheet.create({
    pickerStyle: {
        width: wp('60'),
        height: hp('6'),
        backgroundColor: 'white'

    },
    accView: {
        marginLeft: wp('2'),
        marginBottom: hp('0.5')

    }
})