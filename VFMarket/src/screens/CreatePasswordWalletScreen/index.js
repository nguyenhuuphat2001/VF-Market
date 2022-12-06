import React, {useRef, useEffect, useCallback, useState} from 'react';
import {View, TextInput, TouchableOpacity, findNodeHandle} from 'react-native';
import Text from '@/components/Text';
import {useNavigation} from '@react-navigation/native';
import ContainerInput from '@/components/ContainerInput';
import styles from './styles';
import {COLORS} from '@/theme/index';

import {navigate} from '@/navigation/navigationUtils';
import Header from '@/components/Header';
import Button from '@/components/Button';
import PasswordInput from '@/components/PasswordInput';

import SCREEN from '@/constants/screen';

const CreatePasswordWalletScreen = ({navigation, route}) => {
  const {to} = route.params;

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const disabled = password.length < 8 || password !== confirmPassword;

  const handleSubmit = () => {
    if (to === SCREEN.CREATE_WALLET_SCREEN) {
      navigate(SCREEN.CREATE_WALLET_SCREEN, {password});
    } else {
      navigate(SCREEN.IMPORT_WALLET_SCREEN, {password});
    }
  };

  return (
    <View>
      <Header title="Tạo mật khẩu ví" />
      <View
        style={{marginTop: 20, justifyContent: 'center', alignItems: 'center'}}>
        <View
          style={{
            width: '80%',
          }}>
          <PasswordInput
            placeholder="Mật khẩu"
            onChangeText={value => setPassword(value)}
          />
          <Text
            customStyle={{
              // fontFamily: MONT_REGULAR,
              // fontSize: FONT_SIZE.medium,
              // textAlign: 'center',
              marginTop: 5,
            }}>
            Nhập ít nhất 8 kí tự
          </Text>
        </View>
        <View style={{width: '80%', marginTop: 15}}>
          <PasswordInput
            placeholder="Nhập lại mật khẩu"
            onChangeText={value => setConfirmPassword(value)}
          />
        </View>
        <Button
          containerStyle={{
            width: 250,
            borderRadius: 10,
            marginTop: 25,
          }}
          disabled={disabled}
          content={'Xác nhận'}
          onPress={handleSubmit}
        />
      </View>
    </View>
  );
};

export default CreatePasswordWalletScreen;
