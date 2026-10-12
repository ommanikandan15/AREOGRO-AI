import React from 'react';
import { View, StyleSheet } from 'react-native';
import SplitPanel from '../components/SplitPanel';
import AntigravityCanvas from '../components/AntigravityCanvas';
import { Text } from 'react-native';

// Placeholder components for Earth metrics
const EarthMetrics = () => (
  <View style={styles.metricsContainer}>
    <Text style={styles.title}>Earth Metrics</Text>
    {/* Replace with actual map and chart components */}
    <View style={styles.placeholder}>
      <Text style={styles.placeholderText}>[Weather Map + Market Chart]</Text>
    </View>
  </View>
);

export default function DashboardHomeScreen() {
  return (
    <SplitPanel
      top={<EarthMetrics />}
      bottom={<AntigravityCanvas />}
      topRatio={0.5}
    />
  );
}

const styles = StyleSheet.create({
  metricsContainer: {
    flex: 1,
    padding: 16,
    backgroundColor: '#1a1a9f', // space‑indigo background
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#00ff00', // neon‑green
    marginBottom: 12,
  },
  placeholder: {
    flex: 1,
    borderRadius: 8,
    backgroundColor: '#111',
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeholderText: {
    color: '#555',
  },
});
