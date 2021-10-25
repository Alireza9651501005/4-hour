import React from "react";
import { FlatList, View } from "react-native";
import { ScaledSheet } from "react-native-size-matters";

export default function HomeLargeHeader({ data }) {
    return (
        <View style={styles.container}>

        </View>
    )
}

const styles = ScaledSheet.create({
    container: {
        borderWidth: 1,
        height: 100,
        backgroundColor:'#f00'
    }
})