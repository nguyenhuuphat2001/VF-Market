import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async (key, value) => {
  try {
    console.log('key: ', key);
    console.log('value: ', value);
    // const jsonValue = !value ? '' : JSON.stringify(value);
    // console.log('\n\n\n\n\njsonValue: ', jsonValue);
    await AsyncStorage.setItem(key, value);
  } catch (e) {
    // saving error
    console.log('storeData: ', e);
  }
};

export const getData = async key => {
  try {
    console.log('key: ', key);
    const jsonValue = await AsyncStorage.getItem(key);
    console.log('jsonValue: ', jsonValue);
    return jsonValue != null ? jsonValue : null;
  } catch (e) {
    // error reading value
    console.log('get StoreData: ', e);
  }
};
