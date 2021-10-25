import React from 'react'
import { View, StyleSheet } from 'react-native'
import {useDispatch, useSelector} from 'react-redux';
import { CText } from '../../../utils/components'
import {ScaledSheet, scale, verticalScale} from 'react-native-size-matters';
import {fontSize16, fontSize20, fontSize14} from '../../../utils/helper/fontSizes';
import { citytext, Countrytext, cv, Gender } from '../texts';
export default function ProfileInfo() {
  const dispatch = useDispatch();
  // const [image, setImage] = useState(null);
  const states = useSelector(state => state);

  let profileData = states.profileReducer, name
  name = profileData.profileData.name ? profileData.profileData.name : 'سعید کاویانی پور';

  console.log("====PROFILEDATA FROM PROFILEINFO=====", profileData.profileData )
    return (
        <View>
          <CText style={styles.profileInfoName}>{name}</CText>
          <CText style={styles.profileInfoCV}>{cv}: {profileData.profileData.certificate}</CText>
          <View style={styles.profileInfoContainer}>
            <CText style={styles.profileInfo}>{Gender}: {profileData.profileData.gender}</CText>
            <CText style={styles.profileInfo}>{Countrytext}: {profileData.profileData.country}</CText>
            <CText style={styles.profileInfo}>{citytext}: {profileData.profileData.city}</CText>
          </View>
        </View>
    )
}

const styles = StyleSheet.create({
    profileInfo: {
        color: '#fff',
        fontSize: fontSize16,
        marginBottom: verticalScale(50),
      },
      profileInfoName: {
        color: '#fff',
        fontSize: fontSize20,
        marginBottom: verticalScale(20),
        marginTop: verticalScale(14),
        alignSelf: 'center',
      },
      profileInfoCV: {
        color: '#fff',
        fontSize: fontSize16,
        marginBottom: verticalScale(20),
        // marginRight: scale(30),
        alignSelf:'center'
      },
      profileInfoContainer: {
        flexDirection: 'row',
        width: scale(290),
        justifyContent: 'space-between',
        // marginBottom: '50@vs',
      },
})
