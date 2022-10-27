import React from "react";
import { Text } from "react-native";
import { color } from "../config/color";
export const TextComp =(props)=>{
    let color=props?.color??'black'
    return(

    <Text style={{color:color,...props?.style}}>{props?.text}</Text>
    )
}