import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { useDispatch, useSelector } from 'react-redux';
import { CButton, CTextInput, HeaderWithText } from '../../utils/components';
import { colors, sizes } from '../../utils/constants/theme';
import { createZeroSmallPrice } from '../../utils/helper/priceHelper';
import navigationService from '../../utils/services/navigation/navigationService';
import { checkDiscountAction, checkDiscountSuccess } from './actions/purchaseActions';
import RowPriceTitle from './components/RowPriceTitle';
import { discountInputPlaceholder, discountInputTitle, discountPageDescription, discountPageTitle } from './texts';

const productPrice = 364000
function DiscountScreen({ route, navigation }) {
    const [code, setCode] = useState('');
    const dispatch = useDispatch()
    const state = useSelector(state => state)
    const loading = state.purchaseReducer.discountLoading
    const discountData = state.purchaseReducer.discountData
    const price = createZeroSmallPrice(3420000)
    console.log(price)
    const handleOnPress = () => {
        if(discountData){
            dispatch(checkDiscountSuccess(null))
            setCode('')
        }else{
            checkDiscountAction(code)
        }
    }

    const handleOnPaymentPress = () => {
        navigationService.resetFirst('PersonalType')
    }
    return (
        <View style={styles.container}>
            <HeaderWithText
                title={discountPageTitle}
                description={discountPageDescription}
            />
            <ScrollView style={styles.body}>
                <CTextInput
                    disable={discountData?true:false}
                    title={discountInputTitle}
                    onChangeText={setCode}
                    value={code}
                    placeholder={discountInputPlaceholder}
                />
                <CButton
                    loading={loading}
                    onPress={handleOnPress}
                    btnStyle={styles.buttonStyle}>{discountData?'حذف':'اعمال'}</CButton>

                <View style={styles.priceWrapper}>
                    <RowPriceTitle price={productPrice} subject={'قیمت محصول'} />
                    <RowPriceTitle price={discountData ? discountData.amount : '0'} subject={'تخفیف'} />
                    <RowPriceTitle price={discountData ? productPrice - discountData.amount : productPrice} subject={'مبلغ قابل پرداخت'} />
                    <CButton
                        onPress={handleOnPaymentPress}
                        backgroundColor={colors.buttonGreen}
                        // loading={loading}
                        disable={loading}
                        btnStyle={styles.buttonStyle}>پرداخت</CButton>
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
        marginTop: '11@vs',
        backgroundColor: colors.buttonGreen
    },
    priceWrapper: {
        marginTop: '40@vs'
    }
});

export default DiscountScreen;
