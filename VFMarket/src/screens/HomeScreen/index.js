import React, {useRef, useCallback, useMemo} from 'react';
import {
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Text from '@/components/Text';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';

import Header from '@/components/Header';

import SCREEN from '@/constants/screen';

import {SPACING, COLORS} from '@/theme/index';

import Icon from 'react-native-vector-icons/MaterialIcons';

import BottomSheet, {BottomSheetBackdrop} from '@gorhom/bottom-sheet';

import {Picker} from 'react-native-wheel-pick';

import Search from '@/components/Search';

import {BANNER, FILTER, HELLO} from '@assets/images/index';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import ItemCourse from './components/ItemCourse';

const AGE = Array.from({length: 100}, (_, i) => i + 1);

const LIST_DATA = [
  {
    key: '1',
    type: 'title',
    title: 'May',
    data: '25',
  },
  {
    key: '2',
    type: 'data',
    title: 'Meeting with UI/UX team',
    data: '09:00am - 11:00am',
  },
  {
    key: '3',
    type: 'data',
    title: 'Meeting with Patrick team',
    data: '09:00am - 11:00am',
  },
  {
    key: '4',
    type: 'title',
    title: 'May',
    data: '26',
  },
  {
    key: '5',
    type: 'data',
    title: 'Meeting with UI/UX team',
    data: '09:00am - 11:00am',
  },
  {
    key: '6',
    type: 'data',
    title: 'Meeting with Patrick team',
    data: '09:00am - 11:00am',
  },
];

const UpdatePersonalInfoScreen = () => {
  const navigation = useNavigation();

  const ref = useRef(null);

  const onPress = useCallback(() => {
    ref?.current?.collapse();
  }, []);

  const onClose = useCallback(() => {
    ref?.current?.close();
  }, []);

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

  const renderItems = useCallback(
    ({item}) => (
      <TouchableOpacity
        onPress={() => navigation.push('DetailScreen')}
        style={{width: '48%'}}>
        <ItemCourse />
      </TouchableOpacity>
    ),
    [],
  );

  return (
    <View style={[styles.container]}>
      <View
        style={{
          alignItems: 'flex-start',
          paddingHorizontal: SPACING.medium,
          marginBottom: SPACING.medium,
        }}>
        <SafeAreaView
          edges={['top']}
          mode="padding"
          style={[styles.safeArea, {backgroundColor: 'black'}]}
        />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'flex-start',
            marginBottom: SPACING.medium,
          }}>
          <Image
            style={{width: 48, height: 48, borderRadius: 100}}
            resizeMode="contain"
            source={{
              uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRieAa2n6WfexuRussvPylufCjOBXpon47vJQ&usqp=CAU',
            }}
          />
          <View
            style={{
              justifyContent: 'space-between',
              marginLeft: 4,
              height: 46,
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text customStyle={{fontSize: 14, fontWeight: '200'}}>
                Xin chào
              </Text>
              <Image style={{width: 20}} resizeMode="contain" source={HELLO} />
            </View>

            <Text customStyle={{fontSize: 16, fontWeight: '500'}}>
              Nguyễn Văn A
            </Text>
          </View>
        </View>
        <Search />
      </View>
      <ScrollView
        style={[styles.innerContainer]}
        showsVerticalScrollIndicator={false}>
        <View
          style={{
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            style={{
              // width: 298,
              height: 180,
              // paddingHorizontal: SPACING.innerContainer,
            }}
            resizeMode="contain"
            source={BANNER}
          />

          <View style={{width: '100%', marginTop: 20}}>
            <View
              style={{
                flexDirection: 'row',
                width: '100%',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: 20,
              }}>
              <Text customStyle={{fontSize: 20, fontWeight: '500'}}>
                Nổi bật
              </Text>
              <TouchableOpacity onPress={onPress}>
                {/* <Image
                  style={{width: 30, height: 30}}
                  resizeMode="contain"
                  source={FILTER}
                /> */}
                <Text customStyle={{fontSize: 14, fontWeight: '400'}}>
                  Xem tất cả
                </Text>
              </TouchableOpacity>
            </View>
            <FlatList
              data={LIST_DATA}
              renderItem={renderItems}
              numColumns={2}
              columnWrapperStyle={{justifyContent: 'space-between'}}
              showsVerticalScrollIndicator={false}
              keyExtractor={item => item.key}
            />
          </View>
        </View>
      </ScrollView>

      <BottomSheet
        index={-1}
        // opacity={1}
        backdropComponent={renderBackdrop}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
        ref={ref}>
        <View
          style={{
            flex: 1,
            backgroundColor: 'transparent',
            paddingHorizontal: SPACING.medium,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Icon
                name="close"
                style={{fontSize: 35, color: COLORS.border_input}}
              />
              <Text
                customStyle={{fontWeight: '600', fontSize: 16, marginLeft: 10}}>
                Sắp xếp theo
              </Text>
            </View>
            <TouchableOpacity onPress={onClose}>
              <Text customStyle={{fontSize: 16, color: COLORS.orange}}>
                Đồng ý
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '100%',
            }}>
            <View
              style={{
                flexDirection: 'row',
                width: '100%',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginTop: 10,
              }}>
              <Text
                customStyle={{fontSize: 14, color: 'black', fontWeight: '500'}}>
                Độ phổ biến
              </Text>
              <Icon
                name="radio-button-checked"
                style={{fontSize: 35, color: 'black'}}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                width: '100%',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginTop: 10,
              }}>
              <Text>Độ phổ biến</Text>
              <Icon
                name="radio-button-unchecked"
                style={{fontSize: 35, color: COLORS.border_input}}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                width: '100%',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginTop: 10,
              }}>
              <Text>Độ phổ biến</Text>
              <Icon
                name="radio-button-unchecked"
                style={{fontSize: 35, color: COLORS.border_input}}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                width: '100%',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginTop: 10,
              }}>
              <Text>Độ phổ biến</Text>
              <Icon
                name="radio-button-unchecked"
                style={{fontSize: 35, color: COLORS.border_input}}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                width: '100%',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginTop: 10,
              }}>
              <Text>Độ phổ biến</Text>
              <Icon
                name="radio-button-unchecked"
                style={{fontSize: 35, color: COLORS.border_input}}
              />
            </View>
          </View>
        </View>
      </BottomSheet>
    </View>
  );
};

export default UpdatePersonalInfoScreen;
