import React from "react";
import { View } from "react-native";
import { ScaledSheet } from "react-native-size-matters";
import { CText } from "../../../utils/components";
import { fontSize10, fontSize12, fontSize14, fontSize18, fontSize25, fontSize30 } from "../../../utils/helper/fontSizes";
import { createZeroSmallPrice } from "../../../utils/helper/priceHelper";

export default function RowPriceTitle({ price, subject }) {

    let value = price + ''
    if (value != '0') {
        if (value.length > 3) {
            value = createZeroSmallPrice(value)
        } else {
            value = { firstPart: value, lastPart:''  }
        }
    }
    console.log(value)

    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <CText style={styles.tomanText}>تومان</CText>
                {price != 0 ?
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <CText textType={'ultraBold'} style={styles.price}>{value.firstPart }</CText>
                        <CText textType={'bold'} style={styles.zeroStyle}>{value.lastPart}</CText>
                    </View>
                    : <CText>0</CText>}
            </View>

            <View>
                <CText textType={'demiBold'} style={styles.subject}>{subject}</CText>
            </View>
        </View>
    )
}

const styles = ScaledSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    tomanText: {
        marginRight: 5,
        fontSize: fontSize12
    },
    price: {
        fontSize: fontSize30
    },
    zeroStyle: {
        fontSize: fontSize14,
        marginTop: 10
    },
    subject: {
        fontSize: fontSize18
    }
})