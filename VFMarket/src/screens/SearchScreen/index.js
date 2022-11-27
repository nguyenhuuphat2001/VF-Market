import React, {useRef, useCallback, useMemo, useState, useEffect} from 'react';
import {
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import Text from '@/components/Text';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';

import {debounce} from 'lodash';

import Header from '@/components/Header';

import SCREEN from '@/constants/screen';

import {PAGE_LIMIT} from '@/constants/index';

import {SPACING, COLORS} from '@/theme/index';

import Icon from 'react-native-vector-icons/MaterialIcons';

import BottomSheet, {BottomSheetBackdrop} from '@gorhom/bottom-sheet';

import Search from '@/components/Search';

import {BANNER, FILTER} from '@/assets/images/index';

import ItemCourse from '../HomeScreen/components/ItemCourse';

import ItemSearch from './components/ItemSearch';

import SelectMany from '@/components/SelectMany';

import {useDispatch, useSelector} from 'react-redux';
import {getListSearchProduct} from '@/store/product/action';
import {navigate} from '@/navigation/navigationUtils';
import screen from '@/constants/screen';

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

const SearchScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const ref = useRef(null);
  const listProduct = useSelector(state => state.productReducer.listSearch);

  const [search, setSearch] = React.useState('');
  const [paginatior, setPaginator] = useState({page: 1, limit: PAGE_LIMIT});

  useEffect(() => {
    dispatch(getListSearchProduct({search: search, paginatior}));
  }, [search]);

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

  const snapPoints = useMemo(() => ['45%', '45%'], []);

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

  const renderHeaderRight = () => (
    <TouchableOpacity onPress={onPress}>
      <Image
        style={{width: 30, height: 30}}
        resizeMode="contain"
        source={FILTER}
      />
    </TouchableOpacity>
  );

  const debounceSearch = React.useCallback(
    debounce(_search => {
      getProducts(_search);
    }, 500),
    [],
  );

  const getProducts = _search => {
    setSearch(_search);
    if (!_search) {
      console.log('all');

      return;
    }
    // dispatch(getListSearchProduct({search: _search, paginatior}));
  };

  const handleChangeText = value => {
    console.log('value: ', value);
    debounceSearch(value);
  };

  return (
    <View style={[styles.container]}>
      <Header title="Tìm kiếm" renderIconRight={renderHeaderRight} />
      <View
        style={[styles.innerContainer]}
        showsVerticalScrollIndicator={false}>
        <View
          style={{
            width: '100%',
            alignItems: 'flex-start',

            // marginBottom: SPACING.medium,
          }}>
          <Search onChangeText={handleChangeText} />
        </View>
        <View
          style={{
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View
            style={{
              width: '100%',
              height: 30,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View
              style={{
                borderWidth: 1,
                borderColor: COLORS.border_color,
                padding: 10,
                maxWidth: 100,
                borderRadius: 20,
                position: 'absolute',
                top: 0,
                backgroundColor: 'white',
                zIndex: 100,
              }}>
              <Text>{listProduct.length} Kết quả</Text>
            </View>
            <View
              style={{
                width: '100%',
                height: 1,
                backgroundColor: COLORS.border_color,
              }}
            />
          </View>
          <View
            style={{
              width: '100%',
              marginTop: 22,
              height: '80%',
              // paddingBottom: 100,
            }}>
            <FlatList
              data={listProduct}
              renderItem={renderItems}
              numColumns={2}
              columnWrapperStyle={{justifyContent: 'space-between'}}
              showsVerticalScrollIndicator={false}
              keyExtractor={item => item._id}
            />
          </View>
        </View>
      </View>

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
              {/* <Icon name="close" style={{ fontSize: 35, color: COLORS.border_input }} /> */}
              <Text customStyle={{fontWeight: '600', fontSize: 18}}>
                Bộ lọc
              </Text>
            </View>
            <TouchableOpacity onPress={onClose}>
              <Text customStyle={{fontSize: 16, color: COLORS.border_input}}>
                Đặt lại
              </Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '100%',
              marginTop: 10,
            }}>
            {/* <Text
              customStyle={{
                fontSize: 12,
                color: COLORS.border_input,
                textAlign: 'left',
                width: '100%',
              }}> */}
            <Text
              customStyle={{fontSize: 14, textAlign: 'left', width: '100%'}}>
              Vị trí của bạn
            </Text>
            <View
              style={{
                width: '100%',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                borderColor: COLORS.border_input,
                borderWidth: 1.5,
                borderRadius: 10,
                paddingHorizontal: 10,
                marginVertical: 10,
              }}>
              <Text customStyle={{fontSize: 12, textAlign: 'left'}}>
                Sắp xếp
              </Text>
              <Icon
                name="arrow-drop-down"
                style={{fontSize: 35, color: COLORS.border_input}}
              />
            </View>
          </View>
          <View
            style={{
              width: '100%',
              height: 1,
              backgroundColor: COLORS.border_color,
              marginVertical: SPACING.small,
            }}
          />
          <View
            style={{width: '100%'}}
            contentContainerStyle={{paddingBottom: 60}}
            showsVerticalScrollIndicator={false}>
            <View style={{width: '100%'}}>
              <Text customStyle={{fontSize: 14, textAlign: 'left'}}>
                Động cơ
              </Text>
              <SelectMany />
            </View>
            <View
              style={{
                width: '100%',
                height: 1,
                backgroundColor: COLORS.border_color,
                marginVertical: SPACING.large,
              }}
            />
            <View style={{width: '100%'}}>
              <Text customStyle={{fontSize: 14, textAlign: 'left'}}>
                Số ghế
              </Text>
              <SelectMany />
            </View>
          </View>
        </View>
      </BottomSheet>
    </View>
  );
};

export default SearchScreen;
