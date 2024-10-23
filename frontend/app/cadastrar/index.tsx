import * as React from 'react';
import { View, Text, TextInput, Pressable } from "react-native";
import { styles } from './cadastroStyle';
import { useNavigation } from '@react-navigation/native';
import { Link }  from 'expo-router'
export default function Cadastro() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>

      {/*nome do tutor */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Nome do tutor</Text>
        <TextInput 
          placeholder="Digite o nome completo"
          style={styles.input} 
        />
      </View>

      {/*endereço */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Endereço</Text>
        <TextInput 
          placeholder="Digite o endereço" 
          style={styles.input}
        />
      </View>

      {/*telefone */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Telefone</Text>
        <TextInput 
          placeholder="Digite o telefone" 
          style={styles.input}
        />
      </View>

      {/*pagamento */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Método de pagamento</Text>
        <TextInput 
          placeholder="Digite o pagamento" 
          style={styles.input}
        />
      </View>

      {/*botao de avançar para próxima tela*/}
      <View style={styles.inputContainer}>
      <Link href= "./CadastroCachorro">
          <Pressable >
            <Text >Cadastrar</Text>
          </Pressable>
        </Link> 
      </View>

    </View>
  );
}
