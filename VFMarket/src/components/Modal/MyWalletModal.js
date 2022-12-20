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
import QRCode from 'react-native-qrcode-svg';
import Clipboard from '@react-native-clipboard/clipboard';
import Toast from 'react-native-toast-message';
import {useDispatch, useSelector} from 'react-redux';
import {disconnect} from '@/store/wallet';

import {navigate} from '@/navigation/navigationUtils';
import SCREEN from '@/constants/screen';
import {BNB_LOGO} from '@/assets/images';

import {getShortAddress} from '@/utils/helper';

import {MONT_REGULAR, MONT_BOLD, FONT_SIZE, COLORS} from '@/theme/index';
import Text from '@/components/Text';
import Button from '@/components/Button';

const MyWalletModal = ({modalVisible, callbackChangeVisible}) => {
  console.log('modalVisible: ', modalVisible);
  const dispatch = useDispatch();
  const currentAccount = useSelector(
    state => state.walletReducer.currentAccount,
  );
  const handleCopy = () => {
    Clipboard.setString(currentAccount);
    Toast.show({
      type: 'info',
      text1: 'Đã sao chép địa chỉ ví',
    });
  };
  const handleDisconnect = () => {
    callbackChangeVisible();
    dispatch(disconnect());
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
          <Text customStyle={styles.modalText}>My Wallet</Text>
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
              // textAlign: 'center',
              // fontFamily: MONT_BOLD,
              // fontSize: FONT_SIZE.medium,
              // color: COLORS.white,
              flexDirection: 'row',
              marginTop: 40,
              marginLeft: 7,
            }}>
            <Image
              style={{width: 20, height: 20}}
              resizeMode="contain"
              source={BNB_LOGO}
            />
            <Text
              customStyle={{
                // textAlign: 'center',
                fontFamily: MONT_BOLD,
                fontSize: FONT_SIZE.medium,
                color: COLORS.white,
                // marginTop: 40,
                marginLeft: 5,
              }}>
              BSC Testnet
            </Text>
          </View>

          <View
            style={{
              padding: 10,
              backgroundColor: '#fff',
              marginTop: 15,
              marginBottom: 15,
              width: 180,
            }}>
            <QRCode
              value={`https://testnet.bscscan.com/address/${currentAccount}`}
              size={160}
            />
          </View>
          <TouchableOpacity
            onPress={handleCopy}
            style={[
              {
                padding: 5,
                backgroundColor: 'white',
                borderRadius: 10,
                flexDirection: 'row',
              },
            ]}
            delayLongPress={0}>
            {/* <WalletBalance address={currentAccount} /> */}
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
                {getShortAddress(currentAccount)}
              </Text>
            </View>
            <View
              style={{
                // marginTop: 15,
                // width: '100%',
                marginLeft: 5,
                borderLeftWidth: 2,
                borderLeftColor: 'black',
              }}>
              <Icon
                name="content-copy"
                style={{
                  fontSize: 30,
                  color: 'black',
                  marginLeft: 15,
                }}
              />
            </View>
          </TouchableOpacity>
          <View
            style={{
              marginTop: 15,
              width: '100%',
              alignItems: 'center',
              borderTopWidth: 1,
              borderTopColor: COLORS.border_color,
            }}>
            <TouchableOpacity onPress={handleDisconnect} delayLongPress={0}>
              <View
                style={{
                  // backgroundColor: 'white',
                  padding: 10,
                  margin: 10,
                  borderRadius: 10,
                }}>
                <Text
                  customStyle={{
                    textAlign: 'center',
                    fontFamily: MONT_BOLD,
                    fontSize: 22,
                    color: 'red',
                  }}>
                  Disconnect
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};
export default MyWalletModal;

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
