import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, StatusBar as NvStatusBar, Platform, SafeAreaView } from 'react-native';
import Homepage from './components/Homepage/Homepage';
import Navbar from './components/Navbar/Navbar';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <Navbar />
      <Homepage />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === "android" ? NvStatusBar.currentHeight : 0
  },
});
