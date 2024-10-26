import { View } from 'react-native';
import MainDrawer from './src/components/DrawerNavigation/DrawerNavigation';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>
        <MainDrawer />
    </NavigationContainer>
  );
}