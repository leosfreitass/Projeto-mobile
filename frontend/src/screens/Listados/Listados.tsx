import React, { useEffect, useState } from "react";
import { View, Text, ActivityIndicator, FlatList, TouchableOpacity } from "react-native";
import { styles } from "./ListadosStyles";
import OwnerCard from "../../components/OwnerCards/OwnerCards";
import { Owner } from "../../types/owner";
import axios from "axios";
import { axiosConfigs } from "../../../configs/axiosConfigs";

const axiosInstance = axios.create(axiosConfigs);

export default function Listados({navigation}:any) {
  const [owners, setOwners] = useState<Owner[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    try {
      await axiosInstance.get("admin/owners/all").then(function (response) {
        setOwners(response.data);
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
        data={owners}
        keyExtractor={(item) => item.id}
        renderItem={OwnerCard}
        ListHeaderComponent={
          <Text style={styles.title}>Tutores Cadastrados</Text>
        }
      />

      <View style={styles.buttonContainerListados}>
        <TouchableOpacity style={styles.buttonListados}
        onPress={() =>navigation.navigate('Listados Cachorros')}>
          <Text style={styles.buttonTextListados}>Ir para cachorros listados</Text>
        </TouchableOpacity>
      </View>
    </View>


  );
}
