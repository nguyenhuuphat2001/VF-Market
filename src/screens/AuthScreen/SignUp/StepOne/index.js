import React, {useRef, useEffect, useState} from 'react';
import {MAIN_LOGO} from '@/assets/images';
import {
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  findNodeHandle,
} from 'react-native';
import {COLORS} from '@/theme/index';
import Text from '@/components/Text';
import {useNavigation} from '@react-navigation/native';
import ContainerInput from '@/components/ContainerInput';
import PasswordInput from '@/components/PasswordInput';
import styles from './styles';
import Button from '@/components/Button';
import Header from '@/components/Header';
import SCREEN from '@/constants/screen';

import {signUp} from '@/store/auth/action';

import {useDispatch, useSelector} from 'react-redux';
import Toast from 'react-native-toast-message';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Icon from 'react-native-vector-icons/MaterialIcons';
import LoadingModal from '@/components/Modal/LoadingModal.js';

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
  const disabled =
    !input.email ||
    !input.firstName ||
    !input.lastName ||
    !input.mobileNumber ||
    input.mobileNumber.length < 10 ||
    input.password < 8 ||
    input.passwordConfirm !== input.password;

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
    const data = await dispatch(signUp(input));
  };

  return (
    <View style={[styles.container]}>
      <Header title="Sign up" />
      <View style={[styles.innerContainer]}>
        <KeyboardAwareScrollView
          ref={inputRef}
          onFocus={event => {
            _scrollToInput(findNodeHandle(event.target));
          }}
          showsVerticalScrollIndicator={false}
          style={{flex: 1, width: '100%', height: '100%'}}>
          <View style={{flex: 1, width: '100%'}}>
            <ContainerInput
              customStyle={styles.input}
              isError={!!error['firstName']}>
              <TextInput
                onChangeText={handleTextChanges('firstName')}
                placeholder="First name"
                placeholderTextColor={COLORS.border_input}
              />
            </ContainerInput>
            <ContainerInput
              customStyle={styles.input}
              isError={!!error['lastName']}>
              <TextInput
                onChangeText={handleTextChanges('lastName')}
                placeholder="Last name"
                placeholderTextColor={COLORS.border_input}
              />
            </ContainerInput>
            <ContainerInput
              customStyle={styles.input}
              isError={!!error['email']}>
              <TextInput
                onChangeText={handleTextChanges('email')}
                keyboardType="email-address"
                placeholder="Email"
                placeholderTextColor={COLORS.border_input}
              />
            </ContainerInput>
            <ContainerInput
              customStyle={styles.input}
              isError={!!error['mobileNumber']}
              errorText={'Invalid phone number'}>
              <TextInput
                onChangeText={handleTextChanges('mobileNumber')}
                keyboardType="numeric"
                placeholder="Phone"
                placeholderTextColor={COLORS.border_input}
              />
            </ContainerInput>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'flex-end',
                marginTop: -7,
                marginBottom: 10,
              }}>
              <Icon name="check" style={styles.icon} />
              <Text customStyle={styles.note}>
                Valid phone number with 10 digits
              </Text>
            </View>
            {/* <ContainerInput customStyle={styles.input}>
              <TextInput
                onChangeText={handleTextChanges('password')}
                secureTextEntry
                placeholder="Mật khẩu"
              />
            </ContainerInput> */}
            <PasswordInput
              placeholder="Password"
              onChangeText={handleTextChanges('password')}
            />
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'flex-end',
              }}>
              <Icon name="check" style={styles.icon} />
              <Text customStyle={styles.note}>Minimum 8 characters</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'flex-end',
                marginBottom: 10,
              }}>
              <Icon name="check" style={styles.icon} />
              <Text customStyle={styles.note}>
                Include capital letters, numbers, special characters(#,@,...)
              </Text>
            </View>
            <PasswordInput
              placeholder="Confirm password"
              onChangeText={handleTextChanges('passwordConfirm')}
            />
            <Button
              content="Sign up"
              // isLoading={isLoading}
              disabled={disabled}
              containerStyle={styles.marginTopLarge}
              onPress={submit}
              // onPress={() => navigation.push(SCREEN.OTP)}
            />
          </View>
        </KeyboardAwareScrollView>

        <SafeAreaView style={{flex: 0, marginBottom: 20}} />
      </View>
      <LoadingModal
        modalVisible={isLoading}
        // callbackChangeVisible={() => setModalLoadingVisible(false)}
      />
    </View>
  );
};

export default SignInScreen;
