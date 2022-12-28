import React, {useRef, useEffect, useCallback} from 'react';
import {View, TextInput, TouchableOpacity, findNodeHandle} from 'react-native';
import Text from '@/components/Text';

import {useNavigation} from '@react-navigation/native';
import styles from './styles';
import {
  COLORS,
  SPACING,
  MONT_BOLD,
  FONT_SIZE,
  MONT_REGULAR,
} from '@/theme/index';
import {navigate} from '@/navigation/navigationUtils';
import Button from '@/components/Button';
import Header from '@/components/Header';
import SCREEN from '@/constants/screen';

const IntroWalletScreen = () => {
  return (
    <View>
      <Header title="Kết nối ví" />
      <View>
        <Text
          customStyle={{
            fontFamily: MONT_BOLD,
            fontSize: FONT_SIZE.large,
            textAlign: 'center',
            marginTop: 20,
          }}>
          Ví VF Market
        </Text>
        <Text
          customStyle={{
            fontFamily: MONT_REGULAR,
            fontSize: FONT_SIZE.medium,
            textAlign: 'center',
            marginTop: 15,
          }}>
          Vui lòng chọn phương thức kết nối!
        </Text>
      </View>
      <View
        style={{
          marginTop: 90,
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Button
          containerStyle={{
            width: 250,
            borderRadius: 10,
          }}
          content={'Tạo ví mới'}
          onPress={() =>
            navigate(SCREEN.CREATE_PASSWORD_WALLET_SCREEN, {
              to: SCREEN.CREATE_WALLET_SCREEN,
            })
          }
        />
      </View>
      <View
        style={{
          marginTop: 30,
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Button
          containerStyle={{
            width: 250,
            borderRadius: 10,
          }}
          content={'Nhập ví'}
          onPress={() =>
            navigate(SCREEN.CREATE_PASSWORD_WALLET_SCREEN, {
              to: SCREEN.IMPORT_WALLET_SCREEN,
            })
          }
        />
      </View>
    </View>
  );
};

export default IntroWalletScreen;
