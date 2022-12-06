import React, {useEffect, useCallback, useState} from 'react';
import {View, TextInput, TouchableOpacity, findNodeHandle} from 'react-native';
import Clipboard from '@react-native-clipboard/clipboard';
import Toast from 'react-native-toast-message';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Text from '@/components/Text';
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

const CreateWalletScreen = ({navigation, route}) => {
  const {password} = route.params;
  const [privateKey, setPrivateKey] = useState(
    'e636c6af44faa82a6eb342a751325c20a88be339407015b34d94a9cf2b17212b',
  );

  const handlePressCopy = () => {
    Clipboard.setString(privateKey);
    Toast.show({
      type: 'info',
      text1: 'Đã sao chép khoá bí mật vào bộ nhớ đệm.',
    });
  };

  return (
    <View>
      <Header title="Tạo ví mới" />
      <View
        style={{
          alignSelf: 'center',
          // flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View
          style={{
            marginTop: 20,
            alignSelf: 'center',
            // flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            customStyle={{
              fontFamily: MONT_REGULAR,
              fontSize: FONT_SIZE.small,
            }}>
            Hãy giữ khoá bí mật cẩn thận !!!
          </Text>
          <Text
            customStyle={{
              fontFamily: MONT_REGULAR,
              fontSize: FONT_SIZE.small,
              marginTop: 10,
              // marginRight: 5,
            }}>
            Nếu bạn làm mất nó, bạn sẽ không thể phục hồi ví.
          </Text>
        </View>
        <View
          style={{
            backgroundColor: 'white',
            marginTop: 40,
            paddingVertical: 20,
            paddingHorizontal: 25,
            width: 300,

            borderRadius: 10,
            borderWidth: 2,
            borderColor: COLORS.sub_text,
          }}>
          <TouchableOpacity
            onPress={handlePressCopy}
            delayLongPress={0}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              // backgroundColor: 'red',
              width: 215,
            }}>
            <Text
              customStyle={{
                textAlign: 'center',
                color: COLORS.text,
                fontSize: FONT_SIZE.medium,
                fontFamily: MONT_BOLD,
              }}>
              {privateKey}
            </Text>
            <Icon
              name="content-copy"
              style={{fontSize: 45, marginLeft: 10, color: COLORS.text}}
            />
          </TouchableOpacity>
        </View>
        <Button
          containerStyle={{
            width: 200,
            borderRadius: 10,
            marginTop: 55,
          }}
          // disabled={disabled}
          content={'Kết nối ví'}
          onPress={() => navigate(SCREEN.MAIN_SCREEN)}
        />
      </View>
    </View>
  );
};

export default CreateWalletScreen;
