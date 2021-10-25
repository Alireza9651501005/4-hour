import React, { useEffect, useState } from 'react';
import { View ,ScrollView} from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { useDispatch, useSelector } from 'react-redux';
import { setAccessToken } from '../../store/globalActions';
import { CButton, CTextInput, HeaderWithText } from '../../utils/components';
import { sizes } from '../../utils/constants/theme';
import { checkUserAuth, setPhoneNumber } from './actions/authActions';
import { loginInputPlaceholder, loginInputTitle, loginPageDescription, loginPageTitle, registerPageDescription, registerPageTitle } from './texts';


function LoginScreen({ route, navigation }) {
    const [mobile, setMobile] = useState('');
    const dispatch = useDispatch();
    const state = useSelector(state => state);
    const loading = state.authReducer.loading;
    const authMode = state.authReducer.authMode;
    useEffect(() => {
        dispatch(setAccessToken(''))
    }, [])
    const handleOnPress = () => {
        dispatch(setPhoneNumber(mobile))
        checkUserAuth(mobile,authMode)
    }

    return (
        <View style={styles.container}>
            <HeaderWithText
                title={authMode == 'login' ? loginPageTitle : registerPageTitle}
                description={authMode == 'login' ? loginPageDescription : registerPageDescription}
            />
            <ScrollView style={styles.body}>
                <CTextInput
                    title={loginInputTitle}
                    onChangeText={setMobile}
                    value={mobile}
                    placeholder={loginInputPlaceholder}
                />
                <CButton
                    loading={loading}
                    onPress={handleOnPress}
                    btnStyle={styles.buttonStyle}>ادامه</CButton>
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
    }
});

export default LoginScreen;
