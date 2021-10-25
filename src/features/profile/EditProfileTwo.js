import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {verticalScale, scale} from 'react-native-size-matters';
import {showModal} from './actions/profileAction2';
import {
  editeUserProfileInfoAction,
  geteUserProfileInfoAction,
  changeUserNamePending,
  changeUserNameSuccess,
} from './actions/profileAction2';
import {CText, GradientButton, HeaderMinimum} from '../../utils/components';
import {CTextInput} from '../../utils/components';
import ModalProfile from './ModalProfile';
import {
  confirmText,
  educationText,
  fieldtext,
  Gender,
  headerTextEdit,
  nameAndFamilyText,
  PhoneNumberOrEmailText,
  userNameText,
} from './texts';
import DropDownPicker from 'react-native-dropdown-picker';
import {colors} from '../../utils/constants/theme';
import { fontSize14 } from '../../utils/helper/fontSizes';
import { danaRegular } from '../../utils/constants/fonts';

export default function EditProfileTwo({navigation}) {
  const states = useSelector(state => state);
  const dispatch = useDispatch();
  let profileData = states.profileReducer;
  useEffect(() => {
    dispatch(geteUserProfileInfoAction(getUserInfoApiHandle));
  }, []);

  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [phone_email, setPhoneEmail] = useState('');
  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');
  const [certificate, setCertificate] = useState('');
  const [field, setField] = useState('');
  const [gender, setGender] = useState(null);
  const [getUserInfo, setUserInfo] = useState({loading: false, error: null});
  const [changeuserInfo, setChangeuserInfo] = useState({loading: false});
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [items, setItems] = useState([
    {label: 'دیپلم', value: 'دیپلم'},
    {label: 'کاردانی', value: 'کاردانی'},
    {label: 'کارشناسی', value: 'کارشناسی'},
    {label: 'کارشناسی ارشد', value: 'کارشناسی ارشد'},
    {label: 'دکتری', value: 'دکتری'},
  ]);

  const [items2, setItems2] = useState([
    {label: 'مرد', value: 'مرد'},
    {label: 'زن', value: 'زن'},
  ]);

  const buttonLoading = states.profileReducer.editUserProfileInfoLoading;
  //==============================================================

  const getUserInfoApiHandle = value => {
    if (value === 'pending') {
      setUserInfo({loading: true, error: null});
    } else if (value === 'error') {
      setUserInfo({loading: false, error: true});
    } else {
      setUserInfo({
        loading: false,
        error: null,
      });
      setName(value.name == 'null' ? '' : value.name);
      setUsername(value.username == 'null' ? '' : value.username);
      setPhoneEmail(!value.phone_email ? '' : value.phone_email);
      setGender(value.gender == 'null' ? '' : value.gender);
      setCity(value.city == 'null' ? '' : value.city);
      setCountry(value.country == 'null' ? '' : value.country);
      setCertificate(value.certificate == 'null' ? '' : value.certificate);
      setField(value.field == 'null' ? '' : value.field);
    }
  };

  return (
    <View style={styles.container}>
      <HeaderMinimum title={headerTextEdit} />
      <ScrollView
        style={{paddingHorizontal: scale(22), width: '100%'}}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <View style={styles.outerContainer}>
          <View style={styles.innerContainer}>
            <Image
              source={
                profileData.profileData.image
                  ? {
                      uri: profileData.profileData.image,
                    }
                  : require('../../assets/images/common/no-image.png')
              }
              style={styles.profileImgg}
            />
          </View>
        </View>
        <TouchableOpacity
          onPress={() => dispatch(showModal(true))}
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            top: -verticalScale(22),
          }}
        >
          <View style={styles.selectPhoto}>
            <Image
              style={styles.personTypeImgg}
              source={require('../../assets/images/icons/camera.png')}
            />
          </View>
        </TouchableOpacity>
        <CTextInput
          title={nameAndFamilyText}
          onChangeText={txx => setName(txx)}
          value={name}
          style={{
            width: scale(302),
            alignSelf: 'center',
            color: colors.textBlack,
          }}
        />
        <CTextInput
          title={userNameText}
          onChangeText={txx => setUsername(txx)}
          value={username}
          style={{
            width: scale(302),
            alignSelf: 'center',
            color: colors.textBlack,
          }}
        />
        <CTextInput
          title={PhoneNumberOrEmailText}
          onChangeText={txx => setPhoneEmail(txx)}
          value={phone_email}
          style={{
            width: scale(302),
            alignSelf: 'center',
            color: colors.textBlack,
          }}
        />
        <CText style={styles.dropText}>{educationText}</CText>
        <DropDownPicker
          open={open}
          value={certificate}
          items={items}
          setOpen={setOpen}
          labelStyle={{color: colors.textBlack, fontSize: fontSize14, fontFamily: danaRegular}}
          listItemLabelStyle={{color: colors.textBlack, fontSize: fontSize14, fontFamily: danaRegular}}
          setValue={setCertificate}
          setItems={setItems}
          placeholder=""
          listMode="SCROLLVIEW"
          rtl={true}
          style={styles.dropdownPicker}
        />
        <CTextInput
          title={fieldtext}
          onChangeText={txx => setField(txx)}
          value={field}
          style={{
            width: scale(302),
            alignSelf: 'center',
            color: colors.textBlack,
          }}
        />
        <CTextInput
          title="کشور"
          onChangeText={txx => setCountry(txx)}
          value={country}
          style={{
            width: scale(302),
            alignSelf: 'center',
            color: colors.textBlack,
          }}
        />
        <CTextInput
          title="شهر"
          onChangeText={txx => setCity(txx)}
          value={city}
          style={{
            width: scale(302),
            alignSelf: 'center',
            color: colors.textBlack,
          }}
        />
        <CText style={styles.dropText}>{Gender}</CText>
        <DropDownPicker
          open={open2}
          value={gender}
          items={items2}
          setOpen={setOpen2}
          labelStyle={{color: colors.textBlack, fontSize: fontSize14, fontFamily: danaRegular}}
          listItemLabelStyle={{color: colors.textBlack, fontSize: fontSize14, fontFamily: danaRegular}}
          setValue={setGender}
          setItems={setItems2}
          placeholder=""
          rtl={true}
          listMode="SCROLLVIEW"
          style={styles.dropdownPicker}
        />
        <GradientButton
          loading={buttonLoading}
          onPress={() => {
            dispatch(
              editeUserProfileInfoAction(
                name,
                username,
                certificate,
                field,
                city,
                country,
                gender,
              ),
            );
            // navigation.navigate('ProfileScreens')
          }}
          title={confirmText}
          style={styles.gradianButton}
        />
      </ScrollView>
      <ModalProfile />
    </View>
  );
}
const styles = StyleSheet.create({
  dropdownPicker: {
    width: scale(302),
    height: verticalScale(44.8),
    alignSelf: 'center',
    backgroundColor: colors.dropdownBackground,
    borderWidth: scale(1),
    borderRadius: verticalScale(5),
    borderColor: colors.grayBorder,
    marginBottom: verticalScale(14),
    color: colors.textBlack,
  },
  dropText: {
    color: colors.textBlack,
  },
  gradianButton: {
    width: verticalScale(123),
    height: verticalScale(41),
    alignSelf: 'center',
    marginTop: verticalScale(25),
    marginBottom: verticalScale(30),
  },
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: colors.white,
    // borderWidth:1,
    // borderColor:'red'
  },
  outerContainer: {
    marginTop: verticalScale(15),
    padding: verticalScale(3),
    borderRadius: verticalScale(1000),
    alignSelf: 'center',
    backgroundColor: colors.profileImageBorder,
  },
  profileImgg: {
    width: verticalScale(100),
    height: verticalScale(100),
    resizeMode: 'contain',
  },
  innerContainer: {
    borderWidth: verticalScale(2),
    borderRadius: verticalScale(1000),
    borderColor: colors.whiteBg,
    width: verticalScale(100),
    height: verticalScale(100),
    overflow: 'hidden',
  },

  selectPhoto: {
    backgroundColor: colors.profileImageBorder,
    padding: verticalScale(20),
    borderRadius: verticalScale(100),
    width: verticalScale(15),
    height: verticalScale(15),
    justifyContent: 'center',
    alignItems: 'center',
  },
  personTypeImgg: {
    width: verticalScale(20),
    height: verticalScale(20),
  },
  profileHeader: {
    height: '60@vs',
    justifyContent: 'center',
    paddingTop: '29@vs',
  },
});
