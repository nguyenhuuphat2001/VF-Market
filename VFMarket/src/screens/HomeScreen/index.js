import React, {useRef, useCallback, useMemo, useState, useEffect} from 'react';
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

import {useDispatch, useSelector} from 'react-redux';
import {getListProduct} from '@/store/product/action';

import {PAGE_LIMIT} from '@/constants/index';

import {SPACING, COLORS} from '@/theme/index';

import Icon from 'react-native-vector-icons/MaterialIcons';

import BottomSheet, {BottomSheetBackdrop} from '@gorhom/bottom-sheet';

import Search from '@/components/Search';
import Loading from '@/components/Loading';

import {BANNER, HELLO} from '@/assets/images/index';
import {navigate} from '@/navigation/navigationUtils';
import screen from '@/constants/screen';

import ItemCourse from './components/ItemCourse';
import {logout} from '@/store/auth';

const UpdatePersonalInfoScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const profile = useSelector(state => state.authReducer.profile);
  const listProduct = useSelector(state => state.productReducer.list);

  const [paginatior, setPaginator] = useState({page: 1, limit: PAGE_LIMIT});

  useEffect(() => {
    dispatch(getListProduct(paginatior));
  }, []);
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
        onPress={() => navigate(screen.DETAIL_CAR, item)}
        style={{width: '48%'}}>
        <ItemCourse
          id={item._id}
          image={item.images[0]}
          name={item.name}
          price={item.price.value}
          currency={item.price.currency}
        />
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
          <TouchableOpacity style={styles.itemMenu}>
            <Image
              style={{width: 48, height: 48, borderRadius: 100}}
              resizeMode="contain"
              source={{
                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRieAa2n6WfexuRussvPylufCjOBXpon47vJQ&usqp=CAU',
              }}
            />
          </TouchableOpacity>

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
              {profile?.firstName} {profile?.lastName}
            </Text>
          </View>
        </View>
        <Search onPress={() => navigate(screen.SEARCH)} />
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
              data={listProduct}
              renderItem={renderItems}
              numColumns={2}
              columnWrapperStyle={{justifyContent: 'space-between'}}
              showsVerticalScrollIndicator={false}
              keyExtractor={item => item._id}
            />
            {/* <Loading isLoading={true} /> */}
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
