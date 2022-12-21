import React, {useRef, useCallback, useMemo, useState, useEffect} from 'react';
import {
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Lottie from 'lottie-react-native';
import Text from '@/components/Text';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';

import {useDispatch, useSelector} from 'react-redux';
import {getListProduct} from '@/store/product/action';

import {PAGE_LIMIT} from '@/constants/index';

import {SPACING, COLORS, FONT_SIZE} from '@/theme/index';

import Search from '@/components/Search';

import {BANNER, HELLO} from '@/assets/images/index';
import {navigate} from '@/navigation/navigationUtils';
import screen from '@/constants/screen';

import ItemProduct from './components/ItemProduct';

const HomeScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const profile = useSelector(state => state.authReducer.profile);
  const listProduct = useSelector(state => state.productReducer.list);

  const [paginatior, setPaginator] = useState({page: 1, limit: PAGE_LIMIT});

  useEffect(() => {
    dispatch(getListProduct(paginatior));
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
          paddingHorizontal: SPACING.innerContainer,
          marginBottom: SPACING.medium,
          // backgroundColor: 'black',
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
              <Text customStyle={{fontSize: 16, fontWeight: '400'}}>Hello</Text>
              <Image style={{width: 20}} resizeMode="contain" source={HELLO} />
            </View>

            <Text customStyle={{fontSize: 18, fontWeight: '500'}}>
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
            // backgroundColor: 'red',
          }}>
          <Image
            style={{
              width: '100%',
              height: 180,
              // paddingHorizontal: SPACING.innerContainer,
            }}
            resizeMode="stretch"
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
                Special
              </Text>
              <TouchableOpacity onPress={() => navigate(screen.SEARCH)}>
                <Text
                  customStyle={{
                    fontSize: 14,
                    fontWeight: '500',
                    color: COLORS.text,
                  }}>
                  View all
                </Text>
              </TouchableOpacity>
            </View>
            {listProduct.length > 0 ? (
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                  alignItems: 'flex-start',
                  justifyContent: 'space-between',
                }}>
                {listProduct.map((product, index) => (
                  <TouchableOpacity
                    key={product._id}
                    onPress={() => navigate(screen.DETAIL_CAR, product)}
                    style={{width: '48%'}}>
                    <ItemProduct
                      id={product._id}
                      image={product.images[0]}
                      name={product.name}
                      price={product.price.value}
                      currency={product.price.currency}
                    />
                  </TouchableOpacity>
                ))}
              </View>
            ) : (
              <View style={{alignItems: 'center'}}>
                <Lottie
                  source={require('@/assets/lotties/loadingLotie.json')}
                  autoPlay
                  loop
                  style={{width: '50%'}}
                />
              </View>
            )}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
