import React from 'react';
import {OTP} from '@/assets/images';
import {View, Image, SafeAreaView, TouchableOpacity} from 'react-native';
import Text from '@/components/Text';
import {useNavigation} from '@react-navigation/native';
import SCREEN from '@/constants/screen';
import styles from './styles';
import Button from '@/components/Button';

import Header from '@/components/Header';

import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import OTPInputView from '@twotalltotems/react-native-otp-input';

const OtpRecoveryScreen = () => {
  const navigation = useNavigation();

  const inputRef = React.useRef(null);

  const _scrollToInput = reactNode => {
    // Add a 'scroll' ref to your ScrollView
    // inputRef?.current.scrollToFocusedInput(reactNode)
  };

  return (
    <View style={[styles.container]}>
      <Header title="Confirm email" />
      <View style={[styles.innerContainer]}>
        <KeyboardAwareScrollView
          showsVerticalScrollIndicator={false}
          style={{flex: 1, width: '100%', height: '100%', marginBottom: 0}}>
          {/* <View
            style={{width: '100%', alignItems: 'flex-start', marginBottom: 10}}>
            <Text customStyle={styles.title}>Confirm email</Text>
          </View> */}
          <View style={{width: '100%', alignItems: 'center'}}>
            <Image style={styles.image} resizeMode="contain" source={OTP} />
          </View>
          <View style={{width: '100%', alignItems: 'center'}}>
            <View style={styles.containerNote}>
              <Text customStyle={styles.title}> Xác thực OTP</Text>
              <View style={{flexDirection: 'row', marginVertical: 20}}>
                <Text customStyle={styles.subText}>
                  Please enter the OTP just sent to email{' '}
                  <Text customStyle={styles.phone}> abc@gmail.com </Text>
                </Text>
              </View>

              <Text customStyle={[styles.highLightText, styles.time]}>
                {' '}
                39s{' '}
              </Text>
            </View>

            <View style={{width: '100%', alignItems: 'center'}}>
              <OTPInputView
                codeInputFieldStyle={styles.input}
                codeInputHighlightStyle={styles.underlineStyleHighLighted}
                pinCount={4}
                style={{
                  width: '80%',
                  height: 100,
                  color: 'red',
                  borderRadius: 10,
                }}
              />
            </View>
          </View>

          <TouchableOpacity style={styles.registerContainer}>
            <Text customStyle={styles.register}>Don't receive code?</Text>
            <Text customStyle={styles.highLightText}> Resend</Text>
          </TouchableOpacity>
          <View style={{flex: 1, width: '100%'}}>
            <Button
              onPress={() => navigation.push(SCREEN.CHANGE_PASSWORD)}
              content="Confirm"
              containerStyle={styles.marginTopLarge}
            />
          </View>
        </KeyboardAwareScrollView>

        <SafeAreaView style={{flex: 0, marginBottom: 20}} />
      </View>
    </View>
  );
};

export default OtpRecoveryScreen;
