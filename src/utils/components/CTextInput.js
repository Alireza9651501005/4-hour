import React from 'react'
import { TextInput, StyleSheet, View, Image } from 'react-native'
import { colors, sizes } from '../constants/theme';
import { CText } from '.';
import { danaRegular } from '../constants/fonts';
import { ScaledSheet } from 'react-native-size-matters';
import { fontSize14 } from '../helper/fontSizes';
const CTextInput = ({
    value,
    onChangeText,
    secureTextEntry,
    keyboardType,
    maxLength,
    autoFocus,
    style,
    multiline,
    onSelectionChange,
    inputRef,
    placeholder,
    title,
    disable
}) => {
    return (

        <View style={styles.container}>
            <CText style={styles.titleStyle}>{title}</CText>
            <TextInput
                selectTextOnFocus={disable?false:true}
                
                ref={inputRef}
                secureTextEntry={secureTextEntry}
                placeholder={placeholder}
                // selectionColor={colors.textWhite}
                autoCorrect={false}
                autoCapitalize={'none'}
                style={[styles.input, style]}
                value={value}
                autoFocus={autoFocus}
                editable={disable?false:true}
                maxLength={maxLength}
                onChangeText={onChangeText}
                multiline={multiline}
                onSelectionChange={onSelectionChange}
                keyboardType={keyboardType} />
        </View>
    )
}
const styles = ScaledSheet.create({
    container: {
        width:'100%',
        alignSelf:'center',
        marginBottom: '14@vs'
    },
    input: {
        borderWidth:'1@s',
        borderRadius:sizes.globalRadius,
        borderColor:colors.grayBorder,
        width:'100%',
        fontFamily:danaRegular,
        padding:'5@s',
        fontSize:fontSize14,
        textAlign:'right',
        minHeight: '45@vs',
    },
    titleStyle:{color:colors.textBlack}
})
export { CTextInput }
