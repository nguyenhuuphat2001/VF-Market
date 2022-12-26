import React, {useState, useEffect} from 'react';

import {
  View,
  StyleSheet,
  Image,
  Modal,
  TouchableOpacity,
  Pressable,
  Linking,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Lottie from 'lottie-react-native';
import {useDispatch, useSelector} from 'react-redux';
import {clearApproveTransaction} from '@/store/wallet';

import {MONT_REGULAR, MONT_BOLD, FONT_SIZE, COLORS} from '@/theme/index';
import Text from '@/components/Text';
import Button from '@/components/Button';

const ApproveSuccessModal = ({modalVisible, callbackChangeVisible}) => {
  const dispatch = useDispatch();
  const increaseHash = useSelector(state => state.walletReducer.increaseHash);
  const handleDisconnect = () => {
    callbackChangeVisible();
    dispatch(clearApproveTransaction());
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
          <Text customStyle={styles.modalText}>Approve success</Text>
          <TouchableOpacity
            onPress={handleDisconnect}
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
              marginTop: 30,
              marginBottom: 10,
            }}>
            <Lottie
              source={require('@/assets/lotties/approveSuccessLotie.json')}
              autoPlay
              loop
              style={{width: '60%'}}
            />
          </View>
          <Text
            customStyle={{
              fontFamily: MONT_REGULAR,
              fontSize: FONT_SIZE.medium,
              color: COLORS.white,
              padding: 10,
            }}>
            Your transaction is success
          </Text>
          {increaseHash ? (
            <TouchableOpacity
              style={{
                paddingVertical: 8,
                marginBottom: 16,
              }}
              onPress={() =>
                Linking.openURL(
                  `https://testnet.bscscan.com/tx/${increaseHash}`,
                )
              }>
              <Text
                customStyle={{
                  color: '#00BDFF',
                  textDecorationLine: 'underline',
                }}>
                View on BNB Smart Chain Explorer
              </Text>
            </TouchableOpacity>
          ) : null}
        </View>
      </View>
    </Modal>
  );
};
export default ApproveSuccessModal;

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
