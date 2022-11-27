import React, {useRef, useCallback, useMemo, useEffect} from 'react';
import {
  View,
  Image,
  findNodeHandle,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import Text from '@/components/Text';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';

import {SvgUri} from 'react-native-svg';

import Header from '@/components/Header';

import SCREEN from '@/constants/screen';

import Button from '@/components/Button';

import {SPACING, COLORS} from '@/theme/index';

import {RECTANGLE_CAMERA, CAMERA} from '@/assets/images';

import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Icon from 'react-native-vector-icons/MaterialIcons';
// import BottomSheet from '@/components/BottomSheet';
import BottomSheet, {BottomSheetBackdrop} from '@gorhom/bottom-sheet';

import {Picker} from 'react-native-wheel-pick';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import * as Progress from 'react-native-progress';

const AGE = Array.from({length: 100}, (_, i) => i + 1);

const AVATAR = 'https://avatars.dicebear.com/api/croodles/patrick.svg';

const AvatarCameraScreen = () => {
  const navigation = useNavigation();

  const inputRef = useRef(null);

  const ref = useRef(null);

  const onPress = useCallback(() => {
    ref?.current?.collapse();
  }, []);

  useEffect(() => {
    StatusBar.setBarStyle('light-content', true);

    return () => StatusBar.setBarStyle('dark-content', true);
  }, []);

  const onClose = useCallback(() => {
    ref?.current?.close();
  }, []);

  const _scrollToInput = reactNode => {
    // Add a 'scroll' ref to your ScrollView
    inputRef?.current.scrollToFocusedInput(reactNode);
  };

  const renderBackdrop = useCallback(
    props => (
      <BottomSheetBackdrop
        {...props}
        disappearsOnIndex={0}
        appearsOnIndex={1}
      />
    ),
    [],
  );

  const snapPoints = useMemo(() => ['50%', '50%'], []);

  // callbacks
  const handleSheetChanges = useCallback(index => {
    console.log('handleSheetChanges', index);
  }, []);

  return (
    <View style={[styles.container]}>
      <Header isDark={true} />
      <View style={[styles.innerContainer]}>
        <KeyboardAwareScrollView
          ref={inputRef}
          onFocus={event => {
            _scrollToInput(findNodeHandle(event.target));
          }}
          showsVerticalScrollIndicator={false}
          style={{flex: 1, width: '100%', height: '100%'}}>
          <View
            style={{
              width: '100%',
              alignItems: 'flex-start',
              marginBottom: 30,
              paddingHorizontal: SPACING.innerContainer,
            }}>
            <Text customStyle={[styles.title, {color: 'white'}]}>
              Chụp hình khuôn mặt
            </Text>
          </View>

          <View style={{flex: 1, width: '100%', alignItems: 'center'}}>
            <View
              style={{
                width: wp(100),
                height: wp(100),
                backgroundColor: 'white',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                resizeMode="cover"
                style={{width: wp(50), height: wp(50)}}
                source={RECTANGLE_CAMERA}
              />
            </View>

            <Text
              customStyle={{
                color: 'white',
                width: '80%',
                textAlign: 'center',
                marginTop: SPACING.small,
                fontSize: 14,
                marginBottom: 30,
              }}>
              Vui lòng điều chỉnh thiết bị để đảm bảo hình ảnh không bị mờ rồi
              ấn nút chụp
            </Text>

            <Progress.Bar progress={0.3} width={200} color={COLORS.orange} />
            <View
              style={{
                flexDirection: 'row',
                width: '100%',
                justifyContent: 'center',
              }}>
              <TouchableOpacity
                style={{
                  width: wp(16),
                  height: wp(16),
                  backgroundColor: 'white',
                  borderRadius: 50,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderWidth: 2,
                  borderColor: COLORS.border_color,
                  marginTop: 50,
                }}
                onPress={onPress}>
                <Image
                  resizeMode="contain"
                  style={{width: wp(10), height: wp(10), marginTop: -3}}
                  source={CAMERA}
                />
              </TouchableOpacity>
              <Text
                customStyle={{
                  color: COLORS.orange,
                  position: 'absolute',
                  bottom: 20,
                  left: 20,
                  fontSize: 20,
                }}>
                Bỏ qua
              </Text>
            </View>
          </View>
        </KeyboardAwareScrollView>
      </View>

      <BottomSheet
        index={-1}
        opacity={1}
        backdropComponent={renderBackdrop}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
        ref={ref}>
        <View
          style={{
            flex: 1,
            backgroundColor: 'transparent',
            paddingHorizontal: SPACING.medium,
            alignItems: 'center',
          }}>
          <SvgUri width={wp(40)} height={wp(40)} uri={AVATAR} />

          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
            }}>
            <Text
              customStyle={{textAlign: 'center', width: '80%', fontSize: 14}}>
              Hình ảnh này sẽ được sử dụng để vào phòng tập bạn đăng kí. Bạn
              đồng ý chứ?
            </Text>
            <View
              style={{
                backgroundColor: COLORS.border_color,
                width: '100%',
                height: 2,
                marginVertical: 30,
              }}
            />
            <View
              style={{
                justifyContent: 'space-around',
                alignItems: 'center',
                width: '100%',
                flexDirection: 'row',
                width: '100%',
              }}>
              <Button
                content="Chụp lại"
                containerStyle={{width: '40%'}}
                isOutline
                onPress={onClose}
              />
              <Button
                content="Xác nhận"
                containerStyle={{width: '40%'}}
                onPress={() => navigation.push(SCREEN.MAIN_SCREEN)}
              />
            </View>
          </View>
        </View>
      </BottomSheet>
    </View>
  );
};

export default AvatarCameraScreen;
