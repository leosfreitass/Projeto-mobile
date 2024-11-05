import { View, Text, TouchableOpacity, Alert, FlatList } from "react-native";
import { styles } from "./CardBaiaStyles";
import { useEffect, useState } from "react";
import axios from "axios";
import { axiosConfigs } from "../../../configs/axiosConfigs";
import { Picker } from "@react-native-picker/picker";
import { Dogs } from "../../types/dogs";
import { Compartments } from "../../types/compartment";

const axiosInstance = axios.create(axiosConfigs);

type CardBaiaProps = {
  baiaId: number;
  onSaveSuccess: () => void;
};

const CardBaia = ({ baiaId, onSaveSuccess }: CardBaiaProps) => {
  const [baias, setBaias] = useState<Compartments[]>([]);
  const [dogs, setDogs] = useState<Dogs[]>([]);
  const [selectedDog, setSelectedDog] = useState<Dogs | null>(null);

  const fetchDogs = async () => {
    try {
      const response = await axiosInstance.get("admin/dogs/all");
      setDogs(response.data);
    } catch (error) {
      console.error("Erro ao buscar cachorros:", error);
    }
  };

  const fetchBaias = async () => {
    try {
      const response = await axiosInstance.get(`/compartment/${baiaId}`);
      setBaias(response.data);
    } catch (error) {
      console.error("Erro ao buscar baia:", error);
    }
  };

  useEffect(() => {
    fetchDogs();
    fetchBaias();
  }, []);

  const formatDate = (dateString: Date) => {
    const date = new Date(dateString);
    return `${date.getDate().toString().padStart(2, "0")}/${(date.getMonth() + 1).toString().padStart(2, "0")}/${date.getFullYear().toString().slice(-2)}`;
  };

  const handleSave = async () => {
    if (!selectedDog) {
      Alert.alert("Erro", "Por favor, selecione um cachorro.");
      return;
    }

    try {
      await axiosInstance.put(`/compartment/${baiaId}/update`, {
        dogId: selectedDog.id,
      });
      Alert.alert("Sucesso", "Baia atualizada com sucesso!");
      onSaveSuccess();
    } catch (error) {
      console.error("Erro ao atualizar a baia:", error);
      Alert.alert("Erro", "Não foi possível salvar as alterações.");
    }
  };

  return (
    <View>
      <View style={styles.cardHeader}>
        <TouchableOpacity
          style={styles.buttonBaiaOptions}
          onPress={() => navigation.navigate("Listados Cachorros")}
        >
          <Text style={styles.buttonTextListados}>
            Ir para cachorros listados
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CardBaia;
