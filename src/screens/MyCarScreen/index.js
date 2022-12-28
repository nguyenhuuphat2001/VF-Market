import React, {useRef, useCallback, useMemo, useState, useEffect} from 'react';
import {SafeAreaView, View, FlatList, TouchableOpacity} from 'react-native';
import Lottie from 'lottie-react-native';

import {useDispatch, useSelector} from 'react-redux';
import {getListMyCar} from '@/store/product/action';

import WalletCard from '@/components/WalletCard';
import {MONT_REGULAR, MONT_BOLD, COLORS} from '@/theme/index';
import Text from '@/components/Text';

import ItemMyCar from './components/ItemMyCar';

import styles from './styles';

const MyCarScreen = () => {
  const dispatch = useDispatch();
  const {currentAccount, allowance} = useSelector(state => state.walletReducer);
  const {listMyCar, status} = useSelector(state => state.productReducer);

  useEffect(() => {
    if (currentAccount) {
      dispatch(getListMyCar(currentAccount));
    }
  }, [allowance, currentAccount]);

  const renderItems = useCallback(
    ({item}) => (
      <TouchableOpacity
        // onPress={() => navigate(screen.DETAIL_CAR, item)}
        style={{width: '42%'}}>
        <ItemMyCar
          tokenId={item.tokenId}
          // image={item.images[0]}
          // name={item.name}
          // price={item.price.value}
          // currency={item.price.currency}
        />
      </TouchableOpacity>
    ),
    [],
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        <View>
          <Text
            customStyle={{
              fontFamily: MONT_BOLD,
              fontSize: 16,
              fontWeight: '500',
              color: 'black',
            }}>
            All of my cars
          </Text>
          {currentAccount ? (
            <View
              style={{
                width: '100%',
                marginTop: 22,
                height: '100%',
                paddingHorizontal: '5%',
              }}>
              {status !== 'FETCHING' ? (
                <View>
                  {listMyCar.length > 0 ? (
                    <FlatList
                      data={listMyCar}
                      renderItem={renderItems}
                      numColumns={2}
                      columnWrapperStyle={{justifyContent: 'space-between'}}
                      showsVerticalScrollIndicator={false}
                      keyExtractor={item => item.tokenId}
                    />
                  ) : (
                    <View
                      style={{
                        marginTop: 70,
                        width: '100%',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <Text
                        customStyle={{
                          fontFamily: MONT_REGULAR,
                          fontSize: 16,
                          fontWeight: '400',
                          color: 'black',
                        }}>
                        Dont have nft
                      </Text>
                    </View>
                  )}
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
          ) : (
            <View
              style={{
                marginTop: 70,
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                customStyle={{
                  fontFamily: MONT_REGULAR,
                  fontSize: 16,
                  fontWeight: '400',
                  color: 'black',
                }}>
                Please connect wallet
              </Text>
            </View>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default MyCarScreen;
