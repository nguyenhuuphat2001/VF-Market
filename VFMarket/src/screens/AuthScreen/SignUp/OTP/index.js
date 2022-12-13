import React, {useEffect, useRef, useState} from 'react';
import {OTP} from '@/assets/images';
import {View, Image, SafeAreaView, TouchableOpacity} from 'react-native';
import Text from '@/components/Text';
import {useNavigation} from '@react-navigation/native';
import SCREEN from '@/constants/screen';
import styles from './styles';
import Button from '@/components/Button';

import Header from '@/components/Header';

import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useDispatch, useSelector} from 'react-redux';

import OTPInputView from '@twotalltotems/react-native-otp-input';
import {activeAccount} from '@/store/auth/action';

const StepTwoScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [codeOTP, setCodeOTP] = useState('');

  // const [num, setNum] = useState(40);
  // let id = useRef(null);
  // let timer = useRef(40);

  const inputRef = React.useRef(null);

  const tempAccount = useSelector(state => state.authReducer.tempAccount);
  console.log('tempAccount: ', tempAccount);
  const onSubmit = () => {
    dispatch(activeAccount({...tempAccount, otp: codeOTP}));
  };

  console.log({codeOTP});

  return (
    <View style={[styles.container]}>
      <Header title="Confirm password" />
      <View style={[styles.innerContainer]}>
        <KeyboardAwareScrollView
          showsVerticalScrollIndicator={false}
          style={{flex: 1, width: '100%', height: '100%', marginBottom: 0}}>
          <View style={{width: '100%', alignItems: 'center'}}>
            <Image style={styles.image} resizeMode="contain" source={OTP} />
          </View>
          <View style={{width: '100%', alignItems: 'center'}}>
            <View style={styles.containerNote}>
              <Text customStyle={styles.title}>Confirm OTP</Text>
              <View style={{flexDirection: 'row', marginVertical: 20}}>
                <Text customStyle={styles.subText}>
                  Please enter the OTP that has just been sent to your email{' '}
                  <Text customStyle={styles.phone}> {tempAccount?.email} </Text>
                </Text>
              </View>

              {/* <Text customStyle={[styles.highLightText, styles.time]}>
                {' '}
                {`${num}s`}{' '}
              </Text> */}
            </View>

            <View style={{width: '100%', alignItems: 'center'}}>
              <OTPInputView
                codeInputFieldStyle={styles.input}
                codeInputHighlightStyle={styles.underlineStyleHighLighted}
                code={codeOTP} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
                onCodeChanged={code => {
                  console.log(codeOTP);
                  setCodeOTP(code);
                }}
                onCodeFilled={code => {
                  console.log(`Code is ${code}, you are good to go!`);
                }}
                pinCount={6}
                style={{
                  width: '80%',
                  height: 100,
                  color: 'red',
                  borderRadius: 10,
                }}
              />
            </View>
          </View>

          {/* <TouchableOpacity style={styles.registerContainer}>
            <Text customStyle={styles.register}>Không nhận được mã?</Text>
            <Text customStyle={styles.highLightText}> Gửi lại</Text>
          </TouchableOpacity> */}
          <View style={{flex: 1, width: '100%'}}>
            <Button
              onPress={onSubmit}
              content="Sign up"
              containerStyle={styles.marginTopLarge}
            />
          </View>
        </KeyboardAwareScrollView>

        <SafeAreaView style={{flex: 0, marginBottom: 20}} />
      </View>
    </View>
  );
};

export default StepTwoScreen;
