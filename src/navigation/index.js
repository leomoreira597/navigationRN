import React from "react";
import { SafeAreaView, Text } from "react-native";
import { NavigationContainer } from '@react-navigation/native'
import Tab from "./Tab";
//import Stack from "./Stack";

export default function Navigation(props) {
    return (
        <SafeAreaView style={{flex: 1}}>
            <NavigationContainer>
                <Tab />
                {/* <Stack /> */}
            </NavigationContainer>
        </SafeAreaView>
    );
}