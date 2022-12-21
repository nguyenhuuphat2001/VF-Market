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
  const currentAccount = useSelector(
    state => state.walletReducer.currentAccount,
  );
  const listMyCar = useSelector(state => state.productReducer.listMyCar);

  useEffect(() => {
    if (currentAccount) {
      dispatch(getListMyCar(currentAccount));
    }
  }, []);

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
          <View
            style={{
              width: '100%',
              marginTop: 22,
              height: '80%',
              paddingHorizontal: '5%',
            }}>
            {listMyCar ? (
              <FlatList
                data={listMyCar}
                renderItem={renderItems}
                numColumns={2}
                columnWrapperStyle={{justifyContent: 'space-between'}}
                showsVerticalScrollIndicator={false}
                keyExtractor={item => item.tokenId}
              />
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
      </View>
    </SafeAreaView>
  );
};

export default MyCarScreen;
