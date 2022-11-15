import React, {useRef, useEffect} from 'react';
import {SPLASH_LOGO, MAIN_LOGO} from '@assets/images';
import {View, Image, Animated, Text} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import {getData} from '@/utils/storage';
import {useDispatch, useSelector} from 'react-redux';
import {getProfile} from '@/store/auth/action';

import styles from './styles';

const SplashScreen = () => {
  let fadeAnim = useRef(new Animated.Value(0)).current;
  const dispatch = useDispatch();

  const navigation = useNavigation();

  const handleNavigate = async () => {
    const token = await getData('KEY_AUTHEN');
    console.log('token: ', token);

    if (token) {
      await dispatch(getProfile());
    } else {
      await navigation.replace('AuthScreen');
    }
  };

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 4,
      duration: 3000,
      useNativeDriver: true,
    }).start(() => {
      // navigation.replace(auth ? 'MAIN' : 'AuthScreen')
      handleNavigate();
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const opacityAnim = fadeAnim.interpolate({
    inputRange: [0, 1, 2, 4],
    outputRange: [0.5, 0.8, 0.2, 0.9],
  });

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.smallCircle,
          {
            opacity: opacityAnim,
          },
        ]}
      />
      <Animated.View
        style={[
          styles.secondCircle,
          {
            opacity: opacityAnim,
          },
        ]}
      />
      <Animated.View
        style={[
          styles.thirdCircle,
          {
            opacity: opacityAnim,
          },
        ]}
      />
      <Image resizeMode="contain" style={styles.image} source={MAIN_LOGO} />
      {/* <Text style={styles.text}>Welcome to Fitness</Text> */}
    </View>
  );
};

export default SplashScreen;
