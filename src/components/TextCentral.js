import React from "react";
import { View, Text } from "react-native";

export default function TextoCentral(props) {
    return (
        <View style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: props.corFundo || '#000'
        }}>
            <Text style={{
                fontSize: 50,
                color: props.corDotexto || '#FFF'
            }}>
                {props.children}
            </Text>
        </View>
    );


}
