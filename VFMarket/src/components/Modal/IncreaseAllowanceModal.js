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
import {handleSignApproveTransaction} from '@/store/wallet/action';

const IncreaseAllowanceModal = ({modalVisible, callbackChangeVisible}) => {
  const dispatch = useDispatch();
  const {currentAccount, currentPrivateKey, txIncreaseConfig} = useSelector(
    state => state.walletReducer,
  );
  const gas =
    txIncreaseConfig?.gas && txIncreaseConfig?.gasPrice
      ? (+txIncreaseConfig?.gas * +txIncreaseConfig?.gasPrice) / 1e18
      : '';
  const handleApprove = () => {
    if (txIncreaseConfig && currentPrivateKey) {
      dispatch(
        handleSignApproveTransaction({
          transactionConfig: txIncreaseConfig,
          privateKey: currentPrivateKey,
        }),
      );
      callbackChangeVisible();
    } else {
      Toast.show({
        type: 'error',
        text1: 'Something went wrong when approve',
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
          <Text customStyle={styles.modalText}>Approve</Text>
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
                {txIncreaseConfig?.to && getShortAddress(txIncreaseConfig.to)}
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
                {txIncreaseConfig?.data}
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
                {/* <View
                  style={{
                    backgroundColor: 'white',
                    padding: 10,
                    margin: 10,
                    borderRadius: 10,
                    width: '30%',
                  }}> */}
                <Text
                  customStyle={{
                    textAlign: 'center',
                    fontFamily: MONT_BOLD,
                    fontSize: 16,
                    color: 'black',
                  }}>
                  Reject
                </Text>
                {/* </View> */}
              </TouchableOpacity>
              <TouchableOpacity
                onPress={handleApprove}
                delayLongPress={0}
                style={{
                  backgroundColor: 'white',
                  padding: 10,
                  margin: 10,
                  borderRadius: 10,
                  width: '40%',
                }}>
                {/* <View
                  style={{
                    backgroundColor: 'white',
                    padding: 10,
                    margin: 10,
                    borderRadius: 10,
                    width: '30%',
                  }}> */}
                <Text
                  customStyle={{
                    textAlign: 'center',
                    fontFamily: MONT_BOLD,
                    fontSize: 16,
                    color: 'black',
                  }}>
                  Sign
                </Text>
                {/* </View> */}
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};
export default IncreaseAllowanceModal;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // marginTop: 22,
    backgroundColor: '#00000070',

    // opacity: 0.9,
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
