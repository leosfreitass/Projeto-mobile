import { useState } from "react";
import { View, Text, TextInput } from "react-native";
import {
  cleanCPF,
  maskCPF,
  maskTelefone,
  styles,
} from "./cadastroStyle";
import { Picker } from "@react-native-picker/picker";
import { TouchableOpacity } from "react-native-gesture-handler";
import axios from "axios";
import { axiosConfigs } from "../../../configs/axiosConfigs";

export default function Cadastro({ navigation }: any) {
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [endereco, setEndereco] = useState("");
  const [telefone, setTelefone] = useState("");
  const [pagamento, setPagamento] = useState("");

  const axiosInstance = axios.create(axiosConfigs)

  const handleCadastro = async () => {
    const strippedCPF = cleanCPF(cpf);
    const ownerData = {
      name: nome,
      cpf: strippedCPF,
      address: endereco,
      telephoneNumber: telefone,
      paymentMethod: pagamento,
    };

    try {
      const { data } = await axiosInstance
        .post("addOwner", ownerData)
        navigation.navigate("CadastroCachorro", data.id);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return error.response?.data;
      } else {
        return { error: error, errorDetails: "Erro desconhecido" };
      }
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
          onSubmitEditing={() => setCpf(cleanCPF(cpf))}
          onChangeText={(text: string) => setCpf(maskCPF(text))}
          maxLength={14}
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
          onChangeText={(text) => setTelefone(maskTelefone(text))}
          maxLength={15}
        />
      </View>

      {/*pagamento */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Método de pagamento</Text>
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={pagamento}
            style={styles.picker}
            onValueChange={(itemValue) => setPagamento(itemValue)}
          >
            <Picker.Item
              label="Selecione o método de pagamento"
              value=""
            />
            <Picker.Item label="Pix" value="pix" />
            <Picker.Item label="Dinheiro" value="cash" />
            <Picker.Item label="Crédito" value="credit" />
            <Picker.Item label="Débito" value="debit" />
          </Picker>
        </View>
      </View>

      {/*botao de avançar para próxima tela*/}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={handleCadastro}
        >
          <Text style={styles.buttonText}>Avançar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
