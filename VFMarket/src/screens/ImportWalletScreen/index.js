import React, {useRef, useEffect, useCallback, useState} from 'react';
import {View, TextInput, TouchableOpacity, findNodeHandle} from 'react-native';
import Text from '@/components/Text';
import {useNavigation} from '@react-navigation/native';
import ContainerInput from '@/components/ContainerInput';
import {navigate} from '@/navigation/navigationUtils';
import styles from './styles';
import {
  COLORS,
  SPACING,
  MONT_BOLD,
  FONT_SIZE,
  MONT_REGULAR,
} from '@/theme/index';

import Header from '@/components/Header';
import Button from '@/components/Button';

import SCREEN from '@/constants/screen';

import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const ImportWalletScreen = ({navigation, route}) => {
  const {password} = route.params;
  const [privateKey, setPrivateKey] = useState('');

  return (
    <View>
      <Header title="Nhập ví" />
      <View
        style={{marginTop: 20, justifyContent: 'center', alignItems: 'center'}}>
        <View
          style={{
            // marginTop: 20,
            alignSelf: 'center',
            // flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            customStyle={{
              fontFamily: MONT_BOLD,
              fontSize: FONT_SIZE.small,
            }}>
            Hãy nhập khoá bí mật để kết nối ví.
          </Text>
        </View>
        <ContainerInput
          customStyle={{
            marginTop: 30,
            width: '80%',
            height: 80,
            borderColor: COLORS.sub_text,
            borderWidth: 2,
          }}>
          <TextInput
            // secureTextEntry={true}đasa
            placeholder="Pivate key"
            placeholderTextColor={COLORS.border_input}
            multiline
            numberOfLines={4}
          />
        </ContainerInput>
        <Button
          containerStyle={{
            width: 200,
            borderRadius: 10,
            marginTop: 55,
          }}
          content={'Kết nối ví'}
          onPress={() => navigate(SCREEN.MAIN_SCREEN)}
        />
      </View>
    </View>
  );
};

export default ImportWalletScreen;
