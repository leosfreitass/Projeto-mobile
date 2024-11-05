import { useState } from "react";
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  Pressable,
  Alert,
  FlatList,
} from "react-native";
import { styles } from "./disponibilidadeStyles";
import CardBaia from "../../components/CardBaia/CardBaia";

export default function Disponibilidade() {
  const [modalVisible, setModalVisible] = useState(false);
  const [baias, setBaias] = useState([]);
  const [baiaCount, setBaiaCount] = useState(0);
  const [selectedBaia, setSelectedBaia] = useState<number | null>(null);

  const abrirModal = (baiaId: number) => {
    setSelectedBaia(baiaId);
    setModalVisible(true);
  };

  const fecharModal = () => {
    setModalVisible(false);
    setSelectedBaia(null);
  };

  const adicionarBaia = () => {
    Alert.alert("Adicionar Baia", "Você deseja adicionar uma nova baia?", [
      { text: "Cancelar", style: "cancel" },
      {
        text: "Adicionar",
        onPress: () => setBaiaCount((prevCount) => prevCount + 1),
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={baias}
        keyExtractor={(item) => item.id}
        renderItem={CardBaia}
        ListHeaderComponent={
          <Text style={styles.title}>Tutores Cadastrados</Text>
        }
      />
    </View>
  );
}
