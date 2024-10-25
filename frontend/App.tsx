import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MainDrawer from './src/components/DrawerNavigation/DrawerNavigation';

export default function App() {
  return (
    <View>
      <MainDrawer />
    </View>
  );
}