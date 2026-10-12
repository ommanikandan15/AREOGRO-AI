import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import AntigravityCanvas from '../components/AntigravityCanvas';
import ControlPanel from '../components/AntigravityControlPanel';

export default function AntigravitySimulatorScreen() {
  return (
    <View style={styles.container}>
      <AntigravityCanvas />
      <ControlPanel />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0b0b1a',
  },
});
