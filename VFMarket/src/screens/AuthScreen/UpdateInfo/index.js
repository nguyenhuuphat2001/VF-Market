import React, { useRef, useCallback, useMemo } from 'react';
import { View, TextInput, findNodeHandle, TouchableOpacity } from 'react-native';
import Text from '@/components/Text';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import Button from '@/components/Button';

import Header from '@/components/Header';

import SCREEN from '@/constants/screen';

import { SPACING, COLORS } from '@/theme/index';

import SelectInput from '@/components/SelectInput';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Icon from 'react-native-vector-icons/MaterialIcons';
// import BottomSheet from '@/components/BottomSheet';
import BottomSheet, { BottomSheetBackdrop } from '@gorhom/bottom-sheet';

import { Picker } from 'react-native-wheel-pick';

const AGE = Array.from({ length: 100 }, (_, i) => i + 1)


const UpdatePersonalInfoScreen = () => {

  const navigation = useNavigation();

  const inputRef = useRef(null);

  const ref = useRef(null);

  const onPress = useCallback(() => {
    // const isActive = ref?.current?.isActive();
    // if (isActive) {
    //   ref?.current?.scrollTo(0);
    // } else {
    ref?.current?.collapse();
    // }
  }, []);

  const onClose = useCallback(() => {
    // const isActive = ref?.current?.isActive();
    // if (isActive) {
    //   ref?.current?.scrollTo(0);
    // } else {
    ref?.current?.close();
    // }
  }, []);




  const _scrollToInput = (reactNode) => {
    // Add a 'scroll' ref to your ScrollView
    inputRef?.current.scrollToFocusedInput(reactNode)
  }

  const renderBackdrop = useCallback(
    props => (
      <BottomSheetBackdrop
        {...props}
        disappearsOnIndex={0}
        appearsOnIndex={1}
      />
    ),
    []
  );

  const snapPoints = useMemo(() => ['50%', '50%'], []);

  // callbacks
  const handleSheetChanges = useCallback((index) => {
    console.log('handleSheetChanges', index);
  }, []);

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
            <Text customStyle={styles.title}>Cập nhật thông tin</Text>
          </View>

          <View style={{ flex: 1, width: '100%' }}>
            <TouchableOpacity onPress={onPress}>
              <SelectInput label='Cân nặng' value={5} />
            </TouchableOpacity>
            <TouchableOpacity onPress={onPress}>
              <SelectInput label='Chiều cao' value={175} />
            </TouchableOpacity>

            <TouchableOpacity onPress={onPress}>
              <SelectInput label='Ngày sinh' value={'02/10/1999'} />
            </TouchableOpacity>

            <Button
              content="Lưu thông tin"
              containerStyle={styles.marginTopLarge}
              onPress={() => navigation.push(SCREEN.AVATAR_CAMERA)} />
          </View>
        </KeyboardAwareScrollView >
      </View >

      <BottomSheet
        index={0}
        // opacity={1}
        backdropComponent={renderBackdrop}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
        ref={ref}
      >
        <View style={{ flex: 1, backgroundColor: 'transparent', paddingHorizontal: SPACING.medium }} >
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', }}>
              <Icon name="close" style={{ fontSize: 35, color: COLORS.border_input }} />
              <Text customStyle={{ fontWeight: '600', fontSize: 16, marginLeft: 10 }}>Cân nặng</Text>

            </View>
            <TouchableOpacity onPress={onClose}>
              <Text customStyle={{ fontSize: 16, color: COLORS.orange }}>Đồng ý</Text>

            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <Picker
              style={{ backgroundColor: 'transparent', width: '60%' }}
              selectedValue={5}
              pickerData={AGE}
              onValueChange={value => { console.log(value) }}
            />
            <Picker
              style={{ backgroundColor: 'transparent', width: '40%' }}
              pickerData={['KG']}
              onValueChange={value => { console.log(value) }}
            />
          </View>
        </View>
      </BottomSheet>
    </View>


  );
};

export default UpdatePersonalInfoScreen;
