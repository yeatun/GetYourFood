import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, StatusBar as NvStatusBar, Platform, SafeAreaView } from 'react-native';
import Navbar from './components/Navbar/Navbar';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <Navbar />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === "android" ? NvStatusBar.currentHeight : 0,

  },
});
