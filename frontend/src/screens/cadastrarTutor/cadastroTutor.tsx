import * as React from "react";
import { View, Text, TextInput, Pressable } from "react-native";
import { styles } from "./cadastroStyle";
import { TouchableOpacity } from "react-native-gesture-handler";
import axios from "axios"; // Para fazer a requisição HTTP

export default function Cadastro({ navigation }: any) {
  const [nome, setNome] = React.useState("");
  const [cpf, setCpf] = React.useState("");
  const [endereco, setEndereco] = React.useState("");
  const [telefone, setTelefone] = React.useState("");
  const [pagamento, setPagamento] = React.useState("");

  // Função para enviar dados para o backend
  const handleCadastro = async () => {
    try {
      await axios.post("http://localhost:3000/addOwner", {
        name: nome,
        cpf: cpf,
        address: endereco,
        telephoneNumber: telefone,
        paymentMethod: pagamento,
      });
      navigation.navigate("Cadastro Cachorro");
    } catch (error) {
      console.error("Erro ao cadastrar o tutor:", error);
    }
  };

  return (
    <View style={styles.container}>

      {/*nome do tutor */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Nome do tutor</Text>
        <TextInput
          placeholder="Digite o nome completo"
          style={styles.input}
          value={nome}
          onChangeText={setNome}
        />
      </View>

      {/*cpf do tutor */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>CPF</Text>
        <TextInput
          placeholder="Digite o cpf"
          style={styles.input}
          value={cpf}
          onChangeText={setCpf}
        />
      </View>

      {/*endereço */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Endereço</Text>
        <TextInput
          placeholder="Digite o endereço"
          style={styles.input}
          value={endereco}
          onChangeText={setEndereco}
        />
      </View>

      {/*telefone */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Telefone</Text>
        <TextInput
          placeholder="Digite o telefone"
          style={styles.input}
          value={telefone}
          onChangeText={setTelefone}
        />
      </View>

      {/*pagamento */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Método de pagamento</Text>
        <TextInput
          placeholder="Digite o pagamento"
          style={styles.input}
          value={pagamento}
          onChangeText={setPagamento}
        />
      </View>

      {/*botao de avançar para próxima tela*/}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() =>navigation.navigate('Cadastro Cachorro')}>
          <Text style={styles.buttonText}>Avançar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
