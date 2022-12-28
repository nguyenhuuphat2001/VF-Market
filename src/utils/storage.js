import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async (key, value) => {
  try {
    const jsonValue = !value ? '' : JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (e) {
    // saving error
    console.log('storeData: ', e);
  }
};

export const getData = async key => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    // error reading value
    console.log('get StoreData: ', e);
  }
};

export const keyStore = {
  KEY_AUTHEN: 'KEY_AUTHEN',
  ADDRESS: 'ADDRESS',
  PRIVATE_KEY: 'PRIVATE_KEY',
};
