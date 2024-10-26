import * as React from 'react';
import { View, Text, TextInput, Pressable } from "react-native";
import { styles } from '../cadastrarTutor/cadastroStyle';

export default function CadastroCachorro() {
  return (
    <View style={styles.container}>
      {/* Nome do cachorro */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Nome do cachorro</Text>
        <TextInput 
          placeholder="Digite o nome do cachorro" 
          style={styles.input} 
        />
      </View>

      {/* Idade do cachorro */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Idade</Text>
        <TextInput 
          placeholder="Digite a idade do cachorro" 
          style={styles.input} 
        />
      </View>

      {/* Raça do cachorro */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Raça do cachorro</Text>
        <TextInput 
          placeholder="Digite a raça do cachorro" 
          style={styles.input} 
        />
      </View>

      {/* Tabela com informações sobre o cachorro */}
      <View style={styles.inputContainer}>
    <Text style={styles.label}>Tabela de Informações</Text>
    <TextInput 
      placeholder={`Digite Informações a mais sobre o Pet\nEx:\n- Remédios que pode tomar.\n- Hábitos que ele pode ter.`} 
      style={styles.opcao} 
      multiline={true}         // Permite múltiplas linhas
      textAlignVertical="top"  // Alinha o texto no topo do campo
    />
</View> 

      {/* Botão para salvar as informações */}
      <View style={styles.inputContainer}>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Salvar</Text>
        </Pressable>
      </View>
    </View>
  );
}
