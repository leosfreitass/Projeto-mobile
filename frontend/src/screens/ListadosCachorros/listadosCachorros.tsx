import { useEffect, useState } from "react";
import { View, Text, ActivityIndicator, FlatList } from "react-native";
import { styles } from "../Listados/ListadosStyles";
import DogsCard from "../../components/DogsCard/DogsCard";
import { Dogs } from "../../types/dogs";
import axios from "axios";
import { axiosConfigs } from "../../../configs/axiosConfigs";

const axiosInstance = axios.create({...axiosConfigs, url: "/owners/ownersId"});

export default function ListadosCachorros() {
  const [dogs, setDogs] = useState<Dogs[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    try {
      await axiosInstance.get("admin/dogs/all").then(function (response) {
        setDogs(response.data);
        setLoading(false);
      });
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setLoading(false);
        setError(error.response?.data);
        return error.response?.data;
      }
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text>{error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={dogs}
        keyExtractor={(item) => item.id}
        renderItem={DogsCard}
        ListHeaderComponent={
          <Text style={styles.title}>Cachorros Cadastrados</Text>
        }
      />
    </View>
  );
}
