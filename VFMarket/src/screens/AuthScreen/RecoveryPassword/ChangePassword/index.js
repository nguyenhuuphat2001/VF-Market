import React, {useRef, useEffect, useCallback} from 'react';
import {MAIN_LOGO} from '@assets/images';
import {View, TextInput, TouchableOpacity, findNodeHandle} from 'react-native';
import Text from '@/components/Text';
import {useNavigation} from '@react-navigation/native';
import ContainerInput from '@/components/ContainerInput';
import styles from './styles';
import Button from '@/components/Button';

import Header from '@/components/Header';

import SCREEN from '@/constants/screen';

import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Icon from 'react-native-vector-icons/MaterialIcons';
import BottomSheet from '@/components/BottomSheet';

const ChangePasswordScreen = () => {
  const navigation = useNavigation();

  const inputRef = useRef(null);

  const _scrollToInput = reactNode => {
    // Add a 'scroll' ref to your ScrollView
    inputRef?.current.scrollToFocusedInput(reactNode);
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
            <Text customStyle={styles.title}>Cập nhật mật khẩu</Text>
          </View>

          <View style={{flex: 1, width: '100%'}}>
            <ContainerInput customStyle={styles.input}>
              <TextInput secureTextEntry={true} placeholder="Mật khẩu" />
            </ContainerInput>
            <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
              <Icon name="check" style={[styles.icon, styles.isChecked]} />
              <Text customStyle={[styles.note, styles.isChecked]}>
                Tối thiểu 8 kí tự
              </Text>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
              <Icon name="check" style={[styles.icon, styles.isChecked]} />
              <Text customStyle={[styles.note, styles.isChecked]}>
                Bao gồm chữ in hoa, số, kí tự đặc biệt (#,@,...)
              </Text>
            </View>
            <ContainerInput customStyle={[styles.input, styles.marginTopLarge]}>
              <TextInput
                secureTextEntry={true}
                placeholder="Nhập lại mật khẩu"
              />
            </ContainerInput>
            <Button
              content="Lưu mật khẩu"
              containerStyle={styles.marginTopLarge}
              onPress={() => navigation.push(SCREEN.MAIN_SCREEN)}
            />
          </View>
        </KeyboardAwareScrollView>
      </View>

      {/* <BottomSheet ref={ref}>
        <View style={{ flex: 1, backgroundColor: 'orange' }} />
      </BottomSheet> */}
    </View>
  );
};

export default ChangePasswordScreen;
