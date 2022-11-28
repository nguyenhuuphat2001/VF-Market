import React from 'react';
import {SafeAreaView, View} from 'react-native';

import WalletCard from '@/components/WalletCard';
import {MONT_REGULAR, MONT_BOLD, COLORS} from '@/theme/index';
import Text from '@/components/Text';

import styles from './styles';

const WalletScreen = () => (
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
          Lịch sử giao dịch
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
        Vui lòng kết nối ví
      </Text>
    </View>
  </SafeAreaView>
);

export default WalletScreen;
