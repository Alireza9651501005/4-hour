import React, { useState } from 'react';
import { ScrollView, View } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { useDispatch, useSelector } from 'react-redux';
import { CButton, CTextInput, HeaderWithText, IconButton } from '../../utils/components';
import { sizes } from '../../utils/constants/theme';
import { checkPurchaseCode } from './actions/purchaseActions';
import { purchaseCodeinputPlaceholder, purchaseCodeinputTitle, purchaseCodePageDescription, purchaseCodePageTitle } from './texts';


function PurchaseCodeScreen(props) {
    const [code, setCode] = useState('');
    const dispatch = useDispatch()
    const state = useSelector(state => state)
    const loading = state.purchaseReducer.codeLoading

    const handleOnPress = () => {
        checkPurchaseCode(code)
    }
    return (
        <View style={styles.container}>
            <HeaderWithText
                title={purchaseCodePageTitle}
                description={purchaseCodePageDescription}
            />
            <ScrollView style={styles.body}>
                <CTextInput
                    title={purchaseCodeinputTitle}
                    onChangeText={setCode}
                    value={code}
                    placeholder={purchaseCodeinputPlaceholder}
                />
                <View style={{ flexDirection: 'row' }}>
                    <CButton
                        loading={loading}
                        onPress={handleOnPress}
                        btnStyle={styles.buttonStyle}>ادامه</CButton>
                    <IconButton
                        btnStyle={styles.iconStyle}
                        imageSource={require('../../assets/images/icons/camera.png')}
                    />
                </View>
            </ScrollView>

        </View>
    );
}

const styles = ScaledSheet.create({
    container: {
        flex: 1,
    },
    body: {
        paddingRight: sizes.globalMarginHorizontal,
        paddingLeft: sizes.globalMarginHorizontal,
        paddingTop: sizes.globalMarginVertical,
    },
    buttonStyle: {
        marginTop: '11@vs'
    },
    iconStyle: {
        margin: '11@vs'
    }
});

export default PurchaseCodeScreen;
