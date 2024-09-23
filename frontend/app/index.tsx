import * as React from 'react';
import 'react-native-gesture-handler'; // Import necessário para React Navigation
import { NavigationContainer } from "@react-navigation/native";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './pagina_inicial';
import Cadastro from './cadastro';
import { RootStackParamList } from '@/components/navigation/types';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function Index() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Cadastro" component={Cadastro} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
