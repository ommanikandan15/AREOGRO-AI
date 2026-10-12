import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import DashboardHomeScreen from './src/screens/DashboardHomeScreen';
import EarthAgTrackerScreen from './src/screens/EarthAgTrackerScreen';
import AntigravitySimulatorScreen from './src/screens/AntigravitySimulatorScreen';
import { View, StyleSheet } from 'react-native';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <Stack.Navigator
        initialRouteName="DashboardHome"
        screenOptions={{ headerShown: false, animation: 'fade' }}
      >
        <Stack.Screen name="DashboardHome" component={DashboardHomeScreen} />
        <Stack.Screen name="EarthAgTracker" component={EarthAgTrackerScreen} />
        <Stack.Screen name="AntigravitySimulator" component={AntigravitySimulatorScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
