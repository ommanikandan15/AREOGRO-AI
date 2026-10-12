import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ModeToggle from '../components/ModeToggle';
import WeatherIntelligenceWidget from '../components/WeatherIntelligenceWidget';

export default function EarthAgTrackerScreen() {
  const [mode, setMode] = useState<'organic' | 'natural'>('organic');

  return (
    <View style={styles.container}>
      <ModeToggle mode={mode} setMode={setMode} />
      <WeatherIntelligenceWidget mode={mode} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#1a1a9f', // space‑indigo background
  },
});
