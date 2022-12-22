import React, {useRef, useCallback, useMemo, useState, useEffect} from 'react';
import {
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  FlatList,
  SafeAreaView,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Lottie from 'lottie-react-native';
import {clearListTansactions} from '@/store/transaction';
import {getListTransactions} from '@/store/transaction/action';
import {getShortAddress} from '@/utils/helper';

import WalletCard from '@/components/WalletCard';
import {MONT_REGULAR, MONT_BOLD, COLORS} from '@/theme/index';
import Text from '@/components/Text';

import styles from './styles';

const WalletScreen = () => {
  const dispatch = useDispatch();
  const {currentAccount, allowance} = useSelector(state => state.walletReducer);

  const {list, status} = useSelector(state => state.transactionReducer);

  const [paginatior, setPaginator] = useState({page: 1, limit: 20});

  useEffect(() => {
    if (currentAccount) {
      dispatch(getListTransactions({search: currentAccount, paginatior}));
    } else {
      dispatch(clearListTansactions());
    }
  }, [allowance, currentAccount]);

  const renderItems = useCallback(
    ({item}) => (
      <TouchableOpacity
        // onPress={() => navigate(screen.DETAIL_CAR, item)}
        style={{
          backgroundColor: COLORS.light_grey,
          marginTop: 10,
          borderRadius: 10,
        }}>
        <View style={{margin: 5, padding: 2}}>
          <Text customStyle={{fontSize: 16, fontWeight: '500', color: 'green'}}>
            Buy
          </Text>
          <View style={{marginTop: 5}}>
            <Text
              customStyle={{fontSize: 12, fontWeight: '400', color: 'black'}}>
              TxHash: {getShortAddress(item.txHash)}
            </Text>
            <Text
              customStyle={{fontSize: 12, fontWeight: '400', color: 'black'}}>
              NFT Id: {item.tokenId}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    ),
    [],
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        <WalletCard />
        <View>
          <Text
            customStyle={{
              fontFamily: MONT_BOLD,
              fontSize: 16,
              fontWeight: '500',
              color: 'black',
            }}>
            History transaction
          </Text>
        </View>
        {currentAccount ? (
          <View style={{height: '100%'}}>
            {status !== 'FETCHING' ? (
              <View>
                {list.length > 0 ? (
                  <FlatList
                    data={list}
                    renderItem={renderItems}
                    numColumns={1}
                    // columnWrapperStyle={{justifyContent: 'space-between'}}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={item => item._id}
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
                      Dont have transaction
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
    </SafeAreaView>
  );
};

export default WalletScreen;
