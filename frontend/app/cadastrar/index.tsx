import * as React from 'react';
import { View, Text, TextInput, Pressable } from "react-native";
import { styles } from './cadastroStyle';

export default function Cadastro() {
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
        {/*Ao invés de usar <Button [...] />, utilizar Pressable ou TouchableOpacity*/}
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Avançar</Text>
        </Pressable>

        
      </View>

    </View>
  );
}