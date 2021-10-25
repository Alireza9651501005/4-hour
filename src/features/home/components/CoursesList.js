import React from "react";
import { FlatList, View } from "react-native";
import { ScaledSheet } from "react-native-size-matters";
import CourseItem from "./CourseItem";

export default function CoursesList({ data }) {
    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                renderItem={({ item, index }) => <CourseItem index={index} item={item}/>}
            />
        </View>
    )
}

const styles = ScaledSheet.create({
    container: {
        flex: 1
    }
})