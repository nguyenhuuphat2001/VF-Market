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

import {MONT_REGULAR, MONT_BOLD, FONT_SIZE, COLORS} from '@/theme/index';

const LoadingModal = ({modalVisible, callbackChangeVisible}) => {
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
          <Lottie
            source={require('@/assets/lotties/loadingLotie.json')}
            autoPlay
            loop
            style={{width: '50%'}}
          />
        </View>
      </View>
    </Modal>
  );
};
export default LoadingModal;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
    // marginTop: 22,
    backgroundColor: '#00000070',
  },
  modalView: {
    position: 'absolute',
    width: '100%',
    // marginTop: 200,
    // marginLeft: '7%',
    // backgroundColor: '#474747',
    alignItems: 'center',
    borderRadius: 10,
    // padding: 10,
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
