import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import WalletCard from '@/components/WalletCard';
import {MONT_REGULAR, MONT_BOLD, COLORS} from '@/theme/index';
import Text from '@/components/Text';

import styles from './styles';

const WalletScreen = () => {
  const currentAccount = useSelector(
    state => state.walletReducer.currentAccount,
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
      </View>
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
          {currentAccount ? 'Dont have transaction' : 'Please connect wallet'}
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default WalletScreen;
