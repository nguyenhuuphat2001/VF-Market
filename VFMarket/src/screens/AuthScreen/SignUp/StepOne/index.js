import React, { useRef, useEffect } from 'react';
import { MAIN_LOGO } from '@assets/images';
import { View, SafeAreaView, TextInput, TouchableOpacity, findNodeHandle } from 'react-native';
import Text from '@/components/Text';
import { useNavigation } from '@react-navigation/native';
import ContainerInput from '@/components/ContainerInput'
import styles from './styles';
import Button from '@/components/Button';

import Header from '@/components/Header';

import SCREEN from '@/constants/screen';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Icon from 'react-native-vector-icons/MaterialIcons';

const SignInScreen = () => {

  const navigation = useNavigation();

  const inputRef = React.useRef(null);

  const _scrollToInput = (reactNode) => {
    // Add a 'scroll' ref to your ScrollView
    inputRef?.current.scrollToFocusedInput(reactNode)
  }

  return (
    <View style={[styles.container]}>
      <Header />
      <View style={[styles.innerContainer]}>
        <KeyboardAwareScrollView
          ref={inputRef}
          onFocus={(event) => {
            _scrollToInput(findNodeHandle(event.target))
          }}
          showsVerticalScrollIndicator={false}
          style={{ flex: 1, width: '100%', height: '100%' }}>
          <View style={{ width: '100%', alignItems: 'flex-start', marginBottom: 30 }}>
            {/* <Image style={styles.image} resizeMode="contain" source={MAIN_LOGO} /> */}
            <Text customStyle={styles.title}> Đăng kí</Text>

          </View>

          <View style={{ flex: 1, width: '100%' }}>
            <ContainerInput customStyle={styles.input}>
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
            <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
              <Icon name="check" style={styles.icon} />
              <Text customStyle={styles.note}>Tối thiểu 8 kí tự</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
              <Icon name="check" style={styles.icon} />
              <Text customStyle={styles.note}>Bao gồm chữ in hoa, số, kí tự đặc biệt (#,@,...)</Text>
            </View>
            <ContainerInput customStyle={[styles.input, styles.marginTopLarge]}>
              <TextInput placeholder="Nhập lại mật khẩu" />
            </ContainerInput>

            <Button
              content="Đăng ký"
              containerStyle={styles.marginTopLarge}
              onPress={() => navigation.push(SCREEN.OTP)} />
          </View>


        </KeyboardAwareScrollView >



        <TouchableOpacity style={styles.registerContainer}>
          <Text customStyle={styles.register}>Bạn chưa có tài khoản?</Text>
          <Text customStyle={styles.highLightText}> Đăng kí ngay</Text>
        </TouchableOpacity>
        <SafeAreaView style={{ flex: 0, marginBottom: 20 }} />

      </View >
    </View>


  );
};

export default SignInScreen;
