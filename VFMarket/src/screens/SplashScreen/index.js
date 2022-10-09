import React, { useRef, useEffect } from 'react';
import { SPLASH_LOGO, MAIN_LOGO } from '@assets/images';
import { View, Image, Animated, Text } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import styles from './styles';

const SplashScreen = () => {
  let fadeAnim = useRef(new Animated.Value(0)).current;

  const navigation = useNavigation();

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 4,
      duration: 3000,
      useNativeDriver: true,
    }).start(() => navigation.replace('AuthScreen'));
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
