import * as React from 'react';
import { Button, Text, View } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "@/components/navigation/types";

type HomeScreenProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

export default function HomeScreen() {
  const navigation = useNavigation<HomeScreenProp>();

  return (
    <View>
        <View>
          <Text>Principal</Text>
        </View>
        <View>
          <Text>Edit app/index.tsx to edit this screen.</Text>
          <Button title="Cadastrar" onPress={() => navigation.navigate('Cadastro')}/>
          <Button title="Disponibilidade"/>
          <Button title="Cadastrados"/>
          <Button title="Financeiro"/>
        </View>
    </View>
  );
}
