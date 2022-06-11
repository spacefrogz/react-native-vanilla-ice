import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { normalizeSizes } from '../utils';

const Profile = () => {
  return (
    <View style={styles.profileContainer}>
      <Text style={styles.centeredTitle}>🐸</Text>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
    profileContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#deeb24'
    },
    centeredTitle: {
      fontSize: normalizeSizes(100),
    }
  });