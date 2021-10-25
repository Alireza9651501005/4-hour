import React, { useRef, useState } from 'react';
import { View } from 'react-native';
import { scale, ScaledSheet } from 'react-native-size-matters';
import { danaBold, danaRegular } from '../../../utils/constants/fonts';
import { colors, sizes } from '../../../utils/constants/theme';
import CodeInput from '../../../utils/helper/ConfirmationCodeInput';
import { fontSize25 } from '../../../utils/helper/fontSizes';
import navigationService from '../../../utils/services/navigation/navigationService';

export default function VerifyCodeInput({ onCodeAction, phoneNumber }) {
    const [code, setCode] = useState('')
    const codeRef = useRef(null)
    const _onFulfill = (code) => {
        onCodeAction(code, phoneNumber ,codeRef.current)   
    }
    return (
        <View style={styles.container}>
            <CodeInput
                ref={codeRef}
                // secureTextEntry
                containerStyle={{ position: 'relative' }}
                activeColor={colors.codeInputActiveBorder}
                inactiveColor={colors.codeInputInActiveBorder}
                space={scale(13)}
                className={'border-box'}
                inputPosition='center'
                onFulfill={(code) => _onFulfill(code)}
                onCodeChange={setCode}
                codeInputStyle={styles.codeInput}
            />
        </View>

    )
}

const styles = ScaledSheet.create({
    codeInput: {
        width: '46@s',
        height: '53@s',
        borderRadius: sizes.globalRadius,
        backgroundColor: colors.codeInputBackground,
        color: colors.textBlack,
        fontSize: fontSize25,
        fontFamily: danaRegular
    },
    container: {
        height: '53@s'
    }
})