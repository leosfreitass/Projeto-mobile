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
        {/* Aqui você pode criar uma tabela com informações adicionais */}
        <Text>Cor: Branco</Text>
        <Text>Peso: 15kg</Text>
        <Text>Saúde: Vacinas em dia</Text>
        {/* Adicione mais campos conforme necessário */}
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
