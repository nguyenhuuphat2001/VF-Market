import React from 'react';
import {View, StyleSheet} from 'react-native';

const DashedLine = ({color = 'black'}) => {
  return (
    <View style={styles.container}>
      <View style={[styles.dashLine, {borderColor: color}]} />
    </View>
  );
};

const styles = StyleSheet.create({
  dashLine: {
    height: 2,
    borderWidth: 1,
    borderColor: 'black',
    borderStyle: 'dashed',
  },
  container: {
    height: 1,
    overflow: 'hidden',
  },
});

export default DashedLine;
