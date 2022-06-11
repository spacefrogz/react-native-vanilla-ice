import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { normalizeSizes } from '../utils';

const Settings = () => {
  return (
    <View style={styles.settingsContainer}>
      <Text style={styles.centeredTitle}>🧑🏻‍🚀</Text>
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({
    settingsContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#425765'
    },
    centeredTitle: {
      fontSize: normalizeSizes(100),
    }
  });