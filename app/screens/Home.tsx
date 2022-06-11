import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { normalizeSizes } from '../utils';

const Home = () => {
  return (
    <View style={styles.homeContainer}>
      <Text style={styles.centeredTitle}>☄️</Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fa6d80'
  },
  centeredTitle: {
    fontSize: normalizeSizes(100),
  }
});