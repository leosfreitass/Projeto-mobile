import * as React from 'react';
import { View, Text, TextInput, Pressable } from "react-native";
import { styles } from '../cadastrarTutor/cadastroStyle';

export default function CadastroCachorro() {
  const [nomeCachorro, setNomeCachorro] = React.useState("");
  const [raca, setRaca] = React.useState("");
  const [idadeCachorro, setIdade] = React.useState("");
  const [info, setInfo] = React.useState("");

  // Função para enviar dados para o backend
  const handleCadastroCachorro = async () => {
    try {
      await axios.post("http://localhost:3000/addDog", {
        name: nomeCachorro,
        breed: raca,
        age: idadeCachorro,
        extraInfo: info,
      });
      {/* função para enviar informações para o banco */}
    } 
    catch (error) {
      console.error("Erro ao cadastrar o cachorro:", error);
    }
  };


  return (
    <View style={styles.container}>
      {/* Nome do cachorro */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Nome do cachorro</Text>
        <TextInput 
          placeholder="Digite o nome do cachorro" 
          style={styles.input}
          value={nomeCachorro}
          onChangeText={setNomeCachorro}
        />
      </View>

      {/* raça do cachorro */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Raça</Text>
        <TextInput 
          placeholder="Digite a raça do cachorro" 
          style={styles.input}
          value={raca}
          onChangeText={setRaca}
        />
      </View>

      {/* Idade do cachorro */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Idade do cachorro</Text>
        <TextInput 
          placeholder="Digite a idade do cachorro" 
          style={styles.input}
          value={idadeCachorro}
          onChangeText={setIdade} 
        />
      </View>

      {/* Tabela com informações sobre o cachorro */}
      <View style={styles.inputContainer}>
    <Text style={styles.label}>Tabela de Informações</Text>
    <TextInput 
      placeholder={`Digite Informações a mais sobre o Pet\nEx:\n- Remédios que pode tomar.\n- Hábitos que ele pode ter.`} 
      style={styles.infoExtra} 
      multiline={true}         // Permite múltiplas linhas
      textAlignVertical="top"  // Alinha o texto no topo do campo
      value={info}
      onChangeText={setInfo}
    />
</View> 

      {/* Botão para salvar as informações */}
      <View style={styles.buttonContainer}>
        <Pressable style={styles.button}
        onPress={ handleCadastroCachorro }>
          <Text style={styles.buttonText}>Salvar</Text>
        </Pressable>
      </View>
    </View>
  );
}
