import AreaTexto from "@/components/AreaTexto";
import { Button, Text, View, TextInput } from "react-native";
import { useNavigation } from '@react-navigation/native';
  import { NativeStackNavigationProp } from "@react-navigation/native-stack";
  import { RootStackParamList } from "@/components/navigation/types";

type CadastroScreenProp = NativeStackNavigationProp<RootStackParamList, 'Cadastro'>

export default function Cadastro() {
    const navigation = useNavigation<CadastroScreenProp>();

  return (
    <View>
        <TextInput placeholder="Digite Aqui"/>
    </View>
  );
}
