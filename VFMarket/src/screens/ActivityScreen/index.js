import React, {useRef, useEffect, useState} from 'react';
import {MINING, COIN, MINER} from '@/assets/images';
import {View, Image, Animated, Text, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import styles from './styles';
import {COLORS} from '@/theme/index';

const ActivityScreen = () => {
  let fadeAnim = useRef(new Animated.Value(0)).current;
  const [time, setTime] = useState({
    date: '',
    hour: '',
    minute: '',
    second: '',
  });

  const [isMining, setMining] = useState(false);

  let timerID = '';

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 4,
      duration: 3000,
      useNativeDriver: true,
      iterations: 4,
    }).start();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const opacityAnim = fadeAnim.interpolate({
    inputRange: [0, 1, 2, 4],
    outputRange: [0.5, 1, 0.2, 0.9],
  });

  function updateTime() {
    const date1 = new Date('Feb 25, 2022 00:00:00');

    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = date1.getTime() - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
    );
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    time.time = setTime({
      date: days,
      hour: zeroPadding(hours, 2),
      minute: zeroPadding(minutes, 2),
      second: zeroPadding(seconds, 2),
    });
  }

  function zeroPadding(num, digit) {
    var zero = '';
    for (var i = 0; i < digit; i++) {
      zero += '0';
    }
    return (zero + num).slice(-digit);
  }

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    timerID = setInterval(updateTime, 1000);
    return () => clearInterval(timerID);
  }, [isMining]);

  const handleMining = () => {
    setMining(true);
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
      }}>
      <SafeAreaView edges={['top']} mode="padding" style={styles.safeArea} />

      <View
        style={{
          alignItems: 'center',
        }}>
        <Text style={{color: COLORS.text, fontSize: 24}}>
          Let's become a milionare with us
        </Text>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 10,
            alignItems: 'center',
          }}>
          <Text style={{color: COLORS.text, fontSize: 20}}>Your token:</Text>
          <Text
            style={{
              color: COLORS.text,
              fontSize: 24,
              fontWeight: '600',
              marginLeft: 10,
              marginHorizontal: 5,
            }}>
            48
          </Text>
          <Image style={styles.icon} source={COIN} />
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          marginTop: 10,
          alignItems: 'center',
          position: 'absolute',
          bottom: 0,
          backgroundColor: COLORS.primary,
          zIndex: 200,
          right: 0,
          padding: 20,
          borderTopLeftRadius: 20,
        }}>
        <Text style={{color: COLORS.text, fontSize: 20}}>Your limit:</Text>
        <Text
          style={{
            color: COLORS.text_secondary,
            fontSize: 20,
            fontWeight: '600',
            marginLeft: 10,
            marginHorizontal: 5,
          }}>
          0.1/1h
        </Text>
      </View>

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
        <TouchableOpacity onPress={handleMining}>
          <Image style={styles.image} source={isMining ? MINING : MINER} />

          <Text style={styles.text}>
            {isMining
              ? `${time.hour}h : ${time.minute}m : ${time.second}s`
              : "Let's Mining"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ActivityScreen;
