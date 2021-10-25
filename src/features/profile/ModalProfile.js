import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {verticalScale, scale} from 'react-native-size-matters';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {CText} from '../../utils/components';
import {
  changeProfileImage,
  showModal,
  uploadProfileImageAc,
} from './actions/profileAction2';
import ImagePicker from 'react-native-image-crop-picker';
import Modal from 'react-native-modal';
import {
  uploadProfileText,
  choosePictureFromGalleryText,
  getPcitureFromCameraText,
  cancelChoosPhoto,
  deleteUserProfilePhoto,
} from './texts';
import {fontSize14, fontSize16} from '../../utils/helper/fontSizes';
import { colors } from '../../utils/constants/theme';
export default function ModalProfile() {
  //   const [imgg, setImgg] = useState('');
  const dispatch = useDispatch();
  const states = useSelector(state => state);

  const uploadProfileImage = image => {
    dispatch(uploadProfileImageAc(image));
  };

  let profileData = states.profileReducer;

  //   =====================================================

  const options = {
    compressImageQuality: 0.9,
    compressImageMaxWidth: 2048,
    compressImageMaxHeight: 1536,
    cropping: true,
    cropperCircleOverlay: true,
    mediaType: 'photo',
    freeStyleCropEnabled: false,
    cropperStatusBarColor: 'gray',
    includeBase64: true,
    // includeBase64: true,
    cropperToolbarTitle: 'برش تصویر',
    hideBottomControls: true,
    height: wp(150),
    width: wp(150),
  };
  const takePhotoFgallery = () => {
    ImagePicker.openPicker(options).then(image => {
      console.log('======IMAGE IS======', image);
      let imageAddress = `data:${image.mime};base64,${image.data}`;
      console.log('======IMAGE log======', imageAddress);
      //   setImgg(imageAddress);
      dispatch(changeProfileImage(imageAddress));
      uploadProfileImage(imageAddress);
      // takePhotoFgalleryPermission()
      dispatch(showModal(true));
      dispatch(showModal(false));
      // dispatch(showModalConfirm(false, uploadProfileText, uploadImage(), uploadProfileImage, null, closeModal))
    });
  };
  const takePhotoFcamera = () => {
    ImagePicker.openCamera(options).then(image => {
      console.log('======IMAGE IS======', image);
      let imageAddress = `data:${image.mime};base64,${image.data}`;
      console.log('======IMAGE log======', imageAddress);
      //   setImgg(imageAddress);
      dispatch(changeProfileImage(imageAddress));
      uploadProfileImage(imageAddress);
      // requestCameraPermission()
      dispatch(showModal(true));
      dispatch(showModal(false));
      // dispatch(showModalConfirm(false, uploadProfileText, uploadImage(), uploadProfileImage, null, closeModal))
    });
  };

  return (
    <Modal
      isVisible={profileData.modal}
      backdropColor="#fdfcff"
      animationOut="slideOutDown"
      backdropOpacity={0.5}
      backdropTransitionOutTiming={0}
      animationType="slide"
      hideModalContentWhileAnimating={true}
      useNativeDriver={true}
      onBackdropPress={() => dispatch(showModal(false))}
      onBackButtonPress={() => dispatch(showModal(false))}
    >
      <View key="modalView" style={styles.wholemodal}>
        <CText textType="bold" style={styles.modaltext1}>
          {uploadProfileText}
        </CText>
        <View style={styles.label}>
          <TouchableOpacity style={styles.label2} onPress={takePhotoFcamera}>
            <Image
              style={styles.Imgg}
              source={require('../../assets/images/iconss/camera.png')}
            />
            <CText style={styles.modaltext1}>{getPcitureFromCameraText}</CText>
          </TouchableOpacity>
          <TouchableOpacity style={styles.label2} onPress={takePhotoFgallery}>
            <Image
              style={styles.Imgg}
              source={require('../../assets/images/iconss/gallery.png')}
            />
            <CText style={styles.modaltext1}>{choosePictureFromGalleryText}</CText>
          </TouchableOpacity>
        </View>
        {profileData.profileData.image_exist ? (
          <View style={styles.twoButtons}>
            <TouchableOpacity
              style={styles.label4}
              onPress={() => {
                dispatch(uploadProfileImageAc(null, 'delete'));
                dispatch(showModal(false));
              }}
            >
              <CText textType="iranSans" style={styles.modaltext2}>
                {deleteUserProfilePhoto}
              </CText>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.label5}
              onPress={() => dispatch(showModal(false))}
            >
              <CText textType="iranSans" style={styles.modaltext2}>
                {cancelChoosPhoto}
              </CText>
            </TouchableOpacity>
          </View>
        ) : (
          <TouchableOpacity
            style={styles.label3}
            onPress={() => dispatch(showModal(false))}
          >
            <CText textType="iranSans" style={styles.modaltext2}>
              {cancelChoosPhoto}
            </CText>
          </TouchableOpacity>
        )}
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  twoButtons: {
    flexDirection: 'row',
    width: scale(260),
    // borderWidth: 2,
    justifyContent: 'space-between',
  },
  wholemodal: {
    width: scale(300),
    padding: scale(30),
    borderRadius: scale(10),
    borderWidth: scale(1),
    borderColor: colors.modalBorder,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: 'white'
  },
  label: {
    alignItems: 'flex-end',
    marginRight: -scale(130),
    height: verticalScale(30),
    marginBottom: verticalScale(90)
  },
  Imgg: {
    width: scale(20),
    height: verticalScale(18),
    marginLeft: scale(2),
  },
  label2: {
    flexDirection: 'row-reverse',
    marginVertical: verticalScale(8),
    alignItems: 'center',
    padding: 10,
    borderRadius: scale(15),
  },
  label3: {
    marginHorizontal: 15,
    justifyContent: 'center',
    alignItems: 'center',
    width: scale(256),
    padding: 10,
    borderRadius: scale(5),
    backgroundColor: colors.modalBorder,
  },
  label4: {
    justifyContent: 'center',
    alignItems: 'center',
    width: verticalScale(145),
    paddingVertical: scale(7),
    borderRadius: scale(5),
    backgroundColor: colors.deletUser,
  },
  label5: {
    // marginHorizontal: 15,
    // marginBottom: verticalScale(50),
    justifyContent: 'center',
    alignItems: 'center',
    // flex: 3, 
    // borderWidth: 2,
    width: verticalScale(70),
    paddingVertical: scale(7),
    borderRadius: scale(5),
    backgroundColor: colors.modalBorder,
  },
  modaltext2: {
    fontSize: fontSize16,
    // fontWeight: 'bold',
    color: colors.modaltext2,
  },
  modaltext1: {
    // marginTop: 30,
    fontSize: fontSize14,
    // fontWeight: 'bold',
    color: colors.modaltext1,
  },
});
