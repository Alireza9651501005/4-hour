import React from 'react';
import { View, StyleSheet, Image } from 'react-native'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import { useDispatch } from "react-redux";
import { CButton, CText, GradientButton } from '../../../utils/components';
import { fontSize14 } from '../../../utils/helper/fontSizes';
import { changeCommentVisible } from '../actions/commentsAction';
export default function ListEmptyComponent({ setReply, sendComment }) {
    const dispatch = useDispatch()
    const setShowReply = (value) => {
        dispatch(changeCommentVisible(value))
    }
    let guide1, guide2, sendCommentBtnTxt;
    guide1 = 'تاکنون نظری ثبت نشده است ';
    guide2 = 'اولین نظر را شما ثبت کنید!';
    sendCommentBtnTxt = 'ثبت نظر';
    return (
        <View style={{ width: '100%', height: hp(40),justifyContent:'center' }}>
            <Image source={require("../../../assets/images/commentIsEmpty/commentIsEmpty.png")} style={{ width: wp(50), height: hp(20), resizeMode: 'contain', alignSelf: 'center' }} />
            <View style={{ alignItems: 'center', marginBottom: hp(2) }}>
                <CText
                    style={{}}
                >{guide1}</CText>
                <CText
                    style={{}}
                >{guide2}</CText>
            </View>
            <View>
            <GradientButton
                title={sendCommentBtnTxt}
                onPress={() => setShowReply(true)}
                style={{ width: wp(35), marginBottom: hp(0),alignSelf:'center' }}
                labelStyle={{ fontSize: fontSize14, }}>{sendCommentBtnTxt}</GradientButton>
            </View>
            
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        // position: 'absolute',
        // bottom: 0,
        width: wp(100),
        borderWidth:1
    },

})
