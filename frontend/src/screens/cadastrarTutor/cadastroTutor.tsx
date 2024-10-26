import * as React from 'react';
import { View, Text, TextInput, Pressable } from "react-native";
import { styles } from './cadastroStyle';
import { TouchableOpacity } from 'react-native-gesture-handler';
import CadastroCachorro from '../cadastrarCachorro/cadastroCachorro';


export default function Cadastro({ navigation }:any) {
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
        <TouchableOpacity style={styles.button}
        onPress={() =>navigation.navigate('Cadastro Cachorro')}>
          <Text style={styles.buttonText}>Avançar</Text>
        </TouchableOpacity> 
      </View>
    </View>
  );
}
