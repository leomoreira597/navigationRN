import React from "react";
import { SafeAreaView, Text, StyleSheet } from "react-native";
import TextoCentral from "./components/TextCentral";
import TelaA from "./views/TelaA";
import TelaB from "./views/TelaB";
import TelaC from "./views/TelaC";

export default function App(props){
    return (
        <SafeAreaView style={styles.Container}>
            <TelaA />
            <TelaB />
            <TelaC />
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    Container:{
        flex: 1
    }
})