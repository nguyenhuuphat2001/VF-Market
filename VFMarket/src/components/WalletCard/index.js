import React, {useEffect, useCallback, useState} from 'react';
import {View, StyleSheet, Image, Modal, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useDispatch, useSelector} from 'react-redux';
import {getBalanceWallet, getTokenBalanceWallet} from '@/store/wallet/action';

import {navigate} from '@/navigation/navigationUtils';
import SCREEN from '@/constants/screen';
import {BNB_LOGO} from '@/assets/images';

import {getShortAddress, formatPricing} from '@/utils/helper';

import {MONT_REGULAR, MONT_BOLD, FONT_SIZE, COLORS} from '@/theme/index';
import Text from '@/components/Text';
import Button from '@/components/Button';

import MyWalletModal from '@/components/Modal/MyWalletModal.js';

export const WalletBalance = ({address}) => {
  return (
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <Icon
        name="account-balance-wallet"
        style={{fontSize: 30, color: 'black'}}
      />
      <Text
        customStyle={{
          fontFamily: MONT_BOLD,
          fontSize: FONT_SIZE.medium,
          color: 'black',
          // marginTop: 5,
          marginLeft: 7,
        }}>
        {getShortAddress(address)}
      </Text>
    </View>
  );
};

export default () => {
  const dispatch = useDispatch();
  const {currentAccount, balance, tokenBalance} = useSelector(
    state => state.walletReducer,
  );
  const [modalVisible, setModalVisible] = useState(false);
  useEffect(() => {
    handleCreateWallet();
  }, []);

  const handleCreateWallet = async () => {
    dispatch(getBalanceWallet(currentAccount));
    dispatch(getTokenBalanceWallet(currentAccount));
  };
  return (
    <View
      style={{
        width: '100%',
        height: 200,
        backgroundColor: 'black',
        position: 'relative',
        marginTop: 20,
        marginBottom: 20,
        borderRadius: 10,
      }}>
      <View style={styles.circleTop} />
      <View style={styles.circleTop2} />
      <View style={styles.circleBottom} />
      <View style={styles.circleBottom2} />
      <View style={styles.circleBottom3} />
      {currentAccount ? (
        <View>
          <View
            style={{
              alignSelf: 'center',
              alignItems: 'center',
              flexDirection: 'row',
              marginTop: 10,
              // marginLeft: 80,
            }}>
            <Image
              style={{width: 25, height: 25}}
              resizeMode="contain"
              source={BNB_LOGO}
            />
            <Text
              customStyle={{
                fontFamily: MONT_BOLD,
                fontSize: FONT_SIZE.large,
                color: COLORS.white,
                marginLeft: 7,
              }}>
              BSC Testnet
            </Text>
          </View>

          <View style={{marginLeft: 10, marginTop: 20}}>
            <Text
              customStyle={{
                fontFamily: MONT_BOLD,
                fontSize: FONT_SIZE.medium,
                color: COLORS.white,
              }}>
              Your balance
            </Text>
            <Text
              customStyle={{
                fontFamily: MONT_REGULAR,
                fontSize: FONT_SIZE.medium,
                color: COLORS.gray_light,
                marginTop: 2,
              }}>
              TBNB: {formatPricing(balance)}
            </Text>
            <Text
              customStyle={{
                fontFamily: MONT_REGULAR,
                fontSize: FONT_SIZE.medium,
                color: COLORS.gray_light,
              }}>
              C60: {formatPricing(tokenBalance)}
            </Text>
          </View>
          <View
            style={{
              backgroundColor: '#f2f2f2',
              width: '80%',
              padding: 5,
              marginLeft: 35,
              marginTop: 15,
              borderRadius: 10,
              alignItems: 'center',
            }}>
            <TouchableOpacity
              onPress={() => setModalVisible(true)}
              delayLongPress={0}>
              <WalletBalance address={currentAccount} />
            </TouchableOpacity>
          </View>
          <MyWalletModal
            modalVisible={modalVisible}
            callbackChangeVisible={() => setModalVisible(false)}
          />
        </View>
      ) : (
        <View
          style={{
            marginTop: 80,
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            onPress={() => navigate(SCREEN.INTRO_WALLET_SCREEN)}
            delayLongPress={0}>
            <View
              style={{
                backgroundColor: '#fafafa',
                padding: 10,
                borderRadius: 10,
                width: 200,
              }}>
              <Text
                customStyle={{
                  textAlign: 'center',
                  fontFamily: MONT_BOLD,
                  fontSize: FONT_SIZE.medium,
                  color: 'black',
                  paddingVertical: 5,
                }}>
                Kết nối ví
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  circleTop: {
    position: 'absolute',
    width: 20,
    height: 70,
    left: 310,
    top: 10,
    backgroundColor: COLORS.primary,
    borderRadius: 4,
    zIndex: 1,
    opacity: 0.9,
  },
  circleTop2: {
    position: 'absolute',
    width: 20,
    height: 75,
    left: 300,
    top: 40,
    backgroundColor: COLORS.primary,
    borderRadius: 4,
    zIndex: 1,
    opacity: 0.8,
  },
  circleBottom: {
    position: 'absolute',
    width: 60,
    height: 60,
    left: 12,
    top: 125,
    backgroundColor: COLORS.primary,
    borderRadius: 100,
    zIndex: -1,
    opacity: 0.9,
  },
  circleBottom2: {
    position: 'absolute',
    width: 35,
    height: 35,
    left: 5,
    top: 160,
    backgroundColor: COLORS.primary,
    borderRadius: 100,
    zIndex: -2,
    opacity: 0.8,
  },
  circleBottom3: {
    position: 'absolute',
    width: 20,
    height: 20,
    left: 0,
    top: 180,
    backgroundColor: COLORS.primary,
    borderRadius: 100,
    zIndex: -3,
    opacity: 0.7,
  },
});
