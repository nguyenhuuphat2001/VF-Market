import React, {useState, useEffect} from 'react';

import {
  View,
  StyleSheet,
  Image,
  Modal,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Toast from 'react-native-toast-message';
import {useDispatch, useSelector} from 'react-redux';

import {getShortAddress} from '@/utils/helper';

import {MONT_REGULAR, MONT_BOLD, FONT_SIZE, COLORS} from '@/theme/index';
import Text from '@/components/Text';
import Button from '@/components/Button';
import {useIncreaseAllowance} from '../../blockchain/blockchain.erc20';
import {handleSignBuyTransaction} from '@/store/wallet/action';

const SignTransactionModal = ({modalVisible, callbackChangeVisible}) => {
  const dispatch = useDispatch();
  const {currentAccount, currentPrivateKey, txBuyConfig} = useSelector(
    state => state.walletReducer,
  );
  const gas =
    txBuyConfig?.gas && txBuyConfig?.gasPrice
      ? (+txBuyConfig?.gas * +txBuyConfig?.gasPrice) / 1e18
      : '';
  const handleDisconnect = () => {
    if (txBuyConfig && currentPrivateKey) {
      dispatch(
        handleSignBuyTransaction({
          transactionConfig: txBuyConfig,
          privateKey: currentPrivateKey,
        }),
      );
      callbackChangeVisible();
    } else {
      Toast.show({
        type: 'error',
        text1: 'Something went wrong.',
      });
    }
  };

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible || false}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
        // setModalVisible(false);
      }}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text customStyle={styles.modalText}>Sign</Text>
          <TouchableOpacity
            onPress={() => callbackChangeVisible()}
            style={[
              {
                padding: 8,
                position: 'absolute',
                right: 5,
              },
            ]}>
            <Icon name="close" style={{fontSize: 30, color: 'white'}} />
          </TouchableOpacity>
          <View
            style={{
              // flexDirection: 'row',
              marginTop: 40,
            }}>
            <Text
              // variant="headline1"
              customStyle={{
                width: 250,
                textAlign: 'left',
                color: COLORS.white,
                fontSize: 16,
                fontFamily: MONT_BOLD,
              }}>
              {'From: '}
              <Text
                // variant="body1"
                customStyle={{
                  width: 250,
                  color: COLORS.white,
                  fontSize: 14,
                  fontFamily: MONT_REGULAR,
                }}>
                {currentAccount && getShortAddress(currentAccount)}
              </Text>
            </Text>
            <Text
              customStyle={{
                width: 250,
                textAlign: 'left',
                color: COLORS.white,
                fontSize: 16,
                fontFamily: MONT_BOLD,
                marginTop: 10,
              }}>
              {'To: '}
              <Text
                customStyle={{
                  width: 250,
                  color: COLORS.white,
                  fontSize: 14,
                  fontFamily: MONT_REGULAR,
                }}>
                {txBuyConfig?.to && getShortAddress(txBuyConfig.to)}
              </Text>
            </Text>
            <Text
              customStyle={{
                width: 250,
                textAlign: 'left',
                color: COLORS.white,
                fontSize: 16,
                fontFamily: MONT_BOLD,
                marginTop: 10,
              }}>
              {'Gas: '}
              <Text
                customStyle={{
                  width: 250,
                  color: COLORS.white,
                  fontSize: 14,
                  fontFamily: MONT_REGULAR,
                }}>
                {gas}
              </Text>
            </Text>
            <Text
              customStyle={{
                width: 250,
                textAlign: 'left',
                color: COLORS.white,
                fontSize: 16,
                fontFamily: MONT_BOLD,
                marginTop: 10,
              }}>
              {'Data: '}
              <Text
                customStyle={{
                  width: 250,
                  color: COLORS.white,
                  fontSize: 14,
                  fontFamily: MONT_REGULAR,
                }}>
                {txBuyConfig?.data}
              </Text>
            </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 10,
              }}>
              <TouchableOpacity
                onPress={() => callbackChangeVisible()}
                delayLongPress={0}
                style={{
                  backgroundColor: 'white',
                  padding: 10,
                  margin: 10,
                  borderRadius: 10,
                  width: '40%',
                }}>
                <Text
                  customStyle={{
                    textAlign: 'center',
                    fontFamily: MONT_BOLD,
                    fontSize: 16,
                    color: 'black',
                  }}>
                  Reject
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={handleDisconnect}
                delayLongPress={0}
                style={{
                  backgroundColor: 'white',
                  padding: 10,
                  margin: 10,
                  borderRadius: 10,
                  width: '40%',
                }}>
                <Text
                  customStyle={{
                    textAlign: 'center',
                    fontFamily: MONT_BOLD,
                    fontSize: 16,
                    color: 'black',
                  }}>
                  Sign
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};
export default SignTransactionModal;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    backgroundColor: '#00000070',
  },
  modalView: {
    position: 'absolute',
    width: '86%',
    marginTop: 200,
    marginLeft: '7%',
    backgroundColor: '#474747',
    alignItems: 'center',
    borderRadius: 10,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    position: 'absolute',
    marginBottom: 15,
    fontFamily: MONT_BOLD,
    fontSize: FONT_SIZE.large,
    color: COLORS.white,
    padding: 8,
    left: 5,
  },
});
