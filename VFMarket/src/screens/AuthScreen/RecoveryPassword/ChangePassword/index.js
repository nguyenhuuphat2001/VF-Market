import React, {useRef, useEffect, useCallback} from 'react';
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

const ChangePasswordScreen = () => {
  const navigation = useNavigation();

  const inputRef = useRef(null);

  const _scrollToInput = reactNode => {
    // Add a 'scroll' ref to your ScrollView
    inputRef?.current.scrollToFocusedInput(reactNode);
  };

  return (
    <View style={[styles.container]}>
      <Header title="Change password" />
      <View style={[styles.innerContainer]}>
        <KeyboardAwareScrollView
          ref={inputRef}
          onFocus={event => {
            _scrollToInput(findNodeHandle(event.target));
          }}
          showsVerticalScrollIndicator={false}
          style={{flex: 1, width: '100%', height: '100%'}}>
          <View style={{flex: 1, width: '100%'}}>
            <ContainerInput customStyle={styles.input}>
              <TextInput secureTextEntry={true} placeholder="Password" />
            </ContainerInput>
            <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
              <Icon name="check" style={[styles.icon, styles.isChecked]} />
              <Text customStyle={[styles.note, styles.isChecked]}>
                Minimum 8 characters
              </Text>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
              <Icon name="check" style={[styles.icon, styles.isChecked]} />
              <Text customStyle={[styles.note, styles.isChecked]}>
                Include capital letters, numbers, special characters(#,@,...)
              </Text>
            </View>
            <ContainerInput customStyle={[styles.input, styles.marginTopLarge]}>
              <TextInput
                secureTextEntry={true}
                placeholder="Confirm password"
              />
            </ContainerInput>
            <Button
              content="Save password"
              containerStyle={styles.marginTopLarge}
              // onPress={() => navigation.push(SCREEN.MAIN_SCREEN)}
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
