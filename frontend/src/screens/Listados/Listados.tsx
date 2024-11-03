import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, FlatList } from 'react-native';
import { styles } from './ListadosStyles';
import CollapsibleView from '../../components/CollapsibleView';
import axios from 'axios';

interface Owner  {
  id: string;
  cpf: string;
  name: string;
  email: string;
  telephoneNumber: string; 
  address: string;
}

const axiosInstance = axios.create({
  baseURL: process.env.EXPO_PUBLIC_BACKEND_URL,
  headers: {
    "Content-Type": "application/json",
  },
});


export default function Listados() {
  const [owners, setOwners] = useState<Owner[]>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  
  const fetchData = async () => {
    try {
      await axiosInstance.get('/owners').then(function (response) {
        setOwners(response.data);
        return response.data;
      });
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return error.response?.data;
      }
    }
  }
  
  useEffect(() => {
    fetchData();
  }, []);
  
  const renderItem = ({item}: {item: Owner}) => {
    return (
      <CollapsibleView title={item.name}>
        <View style={styles.userCard}>
          <Text style={styles.userEmail}>CPF: {item.cpf}</Text>
          <Text style={styles.userEmail}>Endereço: {item.address}</Text>
          <Text style={styles.userEmail}>Telefone: {item.telephoneNumber}</Text>
        </View>
      </CollapsibleView>
    );
  };

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
      <Text style={styles.title}>Usuários Cadastrados</Text>
      <FlatList
        data={owners}
        keyExtractor={item => item.cpf}
        renderItem={ renderItem }
      />
    </View>
  );
};