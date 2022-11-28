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

const SignInScreen = () => {
  const isLoading = useSelector(state => state.authReducer.isLoading);
  let fadeAnim = useRef(new Animated.Value(0)).current;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const isDisable = !email || !password;

  const dispatch = useDispatch();
  const navigation = useNavigation();

  const inputRef = React.useRef(null);
  console.log('dard mode: ', Appearance.getColorScheme());

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 4,
      duration: 3000,
      useNativeDriver: true,
    });
    //.start(() => navigation.replace('AuthScreen'));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // const opacityAnim = fadeAnim.interpolate({
  //   inputRange: [0, 1, 2, 4],s
  //   outputRange: [0.5, 1, 0.2, 0.9],
  // });

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
      <SafeAreaView
        style={{
          flex: 0,
          marginBottom: 20,
          backgroundColor:
            Appearance.getColorScheme() === 'dark' ? 'black' : 'white',
        }}
      />
      <KeyboardAwareScrollView
        ref={inputRef}
        onFocus={event => {
          _scrollToInput(findNodeHandle(event.target));
        }}
        showsVerticalScrollIndicator={false}
        style={{flex: 1, width: '100%', height: '100%'}}>
        <View style={{width: '100%', alignItems: 'center'}}>
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
            <Text style={styles.subText}>Quên mật khẩu ?</Text>
          </TouchableOpacity>

          <Button
            onPress={handleLogin}
            isLoading={isLoading}
            disabled={isDisable}
            content="Đăng nhập"
          />
        </View>
      </KeyboardAwareScrollView>

      <TouchableOpacity
        style={styles.registerContainer}
        onPress={goToSignUpScreen}>
        <Text customStyle={styles.register}>Bạn chưa có tài khoản?</Text>
        <Text customStyle={styles.highLightText}> Đăng kí ngay</Text>
      </TouchableOpacity>
      <SafeAreaView style={{flex: 0, marginBottom: 20}} />
    </View>
  );
};

export default SignInScreen;
