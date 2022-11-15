import React, {useRef, useEffect, useState} from 'react';
import {MAIN_LOGO} from '@assets/images';
import {
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  findNodeHandle,
} from 'react-native';
import Text from '@/components/Text';
import {useNavigation} from '@react-navigation/native';
import ContainerInput from '@/components/ContainerInput';
import styles from './styles';
import Button from '@/components/Button';
import Header from '@/components/Header';
import SCREEN from '@/constants/screen';

import {signUp} from '@/store/auth/action';

import {useDispatch, useSelector} from 'react-redux';
import Toast from 'react-native-toast-message';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Icon from 'react-native-vector-icons/MaterialIcons';

const SignInScreen = () => {
  const navigation = useNavigation();
  const isLoading = useSelector(state => state.authReducer.isLoading);

  const dispatch = useDispatch();
  const [input, setInput] = useState({
    email: '',
    firstName: '',
    lastName: '',
    mobileNumber: '',
    password: '',
    passwordConfirm: '',
  });

  const [error, setError] = useState({
    email: false,
    firstName: false,
    lastName: false,
    password: false,
    mobileNumber: false,
    passwordConfirm: false,
  });

  const inputRef = React.useRef(null);

  const _scrollToInput = reactNode => {
    // Add a 'scroll' ref to your ScrollView
    inputRef?.current.scrollToFocusedInput(reactNode);
  };

  const handleTextChanges = mytextname => {
    // setInput({ ...error, [mytextname]: false })

    return val => {
      if (mytextname === 'passwordConfirm' && val !== input.password) {
        setError({...error, [mytextname]: true});
      } else if (error['passwordConfirm']) {
        setError({...error, [mytextname]: false});
      }
      if (
        mytextname === 'mobileNumber' &&
        (val.length < 10 || val.length > 11 || val[0] !== '0')
      ) {
        setError({...error, [mytextname]: true});
      } else if (error['mobileNumber']) {
        setError({...error, [mytextname]: false});
      }
      setInput({...input, [mytextname]: val});
    };
  };

  const submit = async () => {
    console.log('input: ', input);
    if (
      !input.mobileNumber ||
      !input.email ||
      !input.firstName ||
      !input.lastName
    ) {
      Toast.show({
        type: 'error',
        text1: 'Vui lòng nhập thông tin cần thiết !!!',
        // text2: 'This is some something 👋'
      });
      return;
    }
    await dispatch(signUp(input));
  };

  return (
    <View style={[styles.container]}>
      <Header />
      <View style={[styles.innerContainer]}>
        <KeyboardAwareScrollView
          ref={inputRef}
          onFocus={event => {
            _scrollToInput(findNodeHandle(event.target));
          }}
          showsVerticalScrollIndicator={false}
          style={{flex: 1, width: '100%', height: '100%'}}>
          <View
            style={{width: '100%', alignItems: 'flex-start', marginBottom: 30}}>
            {/* <Image style={styles.image} resizeMode="contain" source={MAIN_LOGO} /> */}
            <Text customStyle={styles.title}> Đăng kí</Text>
          </View>

          <View style={{flex: 1, width: '100%'}}>
            <ContainerInput
              customStyle={styles.input}
              isError={!!error['firstName']}>
              <TextInput
                onChangeText={handleTextChanges('firstName')}
                placeholder="First name"
              />
            </ContainerInput>
            <ContainerInput
              customStyle={styles.input}
              isError={!!error['lastName']}>
              <TextInput
                onChangeText={handleTextChanges('lastName')}
                placeholder="Last name"
              />
            </ContainerInput>
            <ContainerInput
              customStyle={styles.input}
              isError={!!error['email']}>
              <TextInput
                onChangeText={handleTextChanges('email')}
                keyboardType="email-address"
                placeholder="Email"
              />
            </ContainerInput>
            <ContainerInput
              customStyle={styles.input}
              isError={!!error['mobileNumber']}
              errorText={'SDT không hợp lệ'}>
              <TextInput
                onChangeText={handleTextChanges('mobileNumber')}
                keyboardType="numeric"
                placeholder="Số điện thoại"
              />
            </ContainerInput>
            <ContainerInput customStyle={styles.input}>
              <TextInput
                onChangeText={handleTextChanges('password')}
                secureTextEntry
                placeholder="Mật khẩu"
              />
            </ContainerInput>
            <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
              <Icon name="check" style={styles.icon} />
              <Text customStyle={styles.note}>Tối thiểu 8 kí tự</Text>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
              <Icon name="check" style={styles.icon} />
              <Text customStyle={styles.note}>
                Bao gồm chữ in hoa, số, kí tự đặc biệt (#,@,...)
              </Text>
            </View>
            <ContainerInput
              customStyle={[styles.input, styles.marginTopLarge]}
              isError={!!error['passwordConfirm']}
              errorText={'Mật khẩu không trùng khớp'}>
              <TextInput
                onChangeText={handleTextChanges('passwordConfirm')}
                secureTextEntry
                placeholder="Nhập lại mật khẩu"
              />
            </ContainerInput>
            {/* <ContainerInput customStyle={styles.input}>
              <TextInput placeholder="Tên người dùng" />
            </ContainerInput>
            <ContainerInput customStyle={styles.input}>
              <TextInput placeholder="Email" />
            </ContainerInput>
            <ContainerInput customStyle={styles.input}>
              <TextInput placeholder="Số điện thoại" />
            </ContainerInput>
            <ContainerInput customStyle={styles.input}>
              <TextInput placeholder="Mật khẩu" />
            </ContainerInput>
            <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
              <Icon name="check" style={styles.icon} />
              <Text customStyle={styles.note}>Tối thiểu 8 kí tự</Text>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
              <Icon name="check" style={styles.icon} />
              <Text customStyle={styles.note}>
                Bao gồm chữ in hoa, số, kí tự đặc biệt (#,@,...)
              </Text>
            </View>
            <ContainerInput customStyle={[styles.input, styles.marginTopLarge]}>
              <TextInput placeholder="Nhập lại mật khẩu" />
            </ContainerInput> */}

            {/* <Button
              content="Đăng ký"
              containerStyle={styles.marginTopLarge}
              onPress={() => navigation.push(SCREEN.OTP)}
            /> */}
            <Button
              content="Đăng ký"
              isLoading={isLoading}
              isDisabled={isLoading}
              containerStyle={styles.marginTopLarge}
              onPress={submit}
              // onPress={() => navigation.push(SCREEN.OTP)}
            />
          </View>
        </KeyboardAwareScrollView>

        {/* <TouchableOpacity style={styles.registerContainer}>
          <Text customStyle={styles.register}>Bạn chưa có tài khoản?</Text>
          <Text customStyle={styles.highLightText}> Đăng kí ngay</Text>
        </TouchableOpacity> */}
        <SafeAreaView style={{flex: 0, marginBottom: 20}} />
      </View>
    </View>
  );
};

export default SignInScreen;
