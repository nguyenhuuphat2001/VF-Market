import React, {useRef, useEffect, useState} from 'react';
import {MAIN_LOGO} from '@/assets/images';
import {
  Appearance,
  View,
  Image,
  Animated,
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

import SCREEN from '@/constants/screen';

import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {login} from '@/store/auth/action';

import {useDispatch, useSelector} from 'react-redux';
import LoadingModal from '@/components/Modal/LoadingModal.js';

const SignInScreen = () => {
  const isLoading = useSelector(state => state.authReducer.isLoading);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [modalLoadingVisible, setModalLoadingVisible] = useState(isLoading);
  const isDisable = !email || !password;

  const dispatch = useDispatch();
  const navigation = useNavigation();

  const inputRef = React.useRef(null);

  const _scrollToInput = reactNode => {
    // Add a 'scroll' ref to your ScrollView
    inputRef?.current.scrollToFocusedInput(reactNode);
  };

  const goToSignUpScreen = () => navigation.push(SCREEN.SIGN_UP_STEP_ONE);

  const goToRecoveryPasswordScreen = () => navigation.push(SCREEN.INPUT_GMAIL);

  const handleEmail = txt => {
    setEmail(txt);
  };

  const handlePassword = txt => {
    setPassword(txt);
  };

  const handleLogin = async () => {
    await dispatch(login({email, password, isGoToMain: true}));
    // console.log(data.payload);
  };

  return (
    <View style={[styles.container]}>
      <KeyboardAwareScrollView
        ref={inputRef}
        onFocus={event => {
          _scrollToInput(findNodeHandle(event.target));
        }}
        showsVerticalScrollIndicator={false}
        style={{flex: 1, width: '100%', height: '100%'}}>
        <View style={{width: '100%', alignItems: 'center', marginTop: 20}}>
          <Image style={styles.image} resizeMode="contain" source={MAIN_LOGO} />
        </View>

        <View style={{flex: 1, width: '100%'}}>
          <ContainerInput customStyle={styles.input}>
            <TextInput
              placeholder="Email"
              onChangeText={handleEmail}
              placeholderTextColor={COLORS.border_input}
            />
          </ContainerInput>
          <PasswordInput onChangeText={handlePassword} />

          <TouchableOpacity
            style={styles.btnForget}
            onPress={goToRecoveryPasswordScreen}>
            <Text style={styles.subText}>Forgot the password ?</Text>
          </TouchableOpacity>

          <Button
            onPress={handleLogin}
            isLoading={isLoading}
            disabled={isDisable}
            content="Sign in"
          />
        </View>
      </KeyboardAwareScrollView>

      <TouchableOpacity
        style={styles.registerContainer}
        onPress={goToSignUpScreen}>
        <Text customStyle={styles.register}>Don't have an account?</Text>
        <Text customStyle={styles.highLightText}> Sign up</Text>
      </TouchableOpacity>
      <LoadingModal
        modalVisible={isLoading}
        // callbackChangeVisible={() => setModalLoadingVisible(false)}
      />
    </View>
  );
};

export default SignInScreen;
