import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, FlatList } from 'react-native';
import { styles } from './ListadosStyles';
import CollapsibleView from '../../components/CollapsibleView';
import axios from 'axios';

interface Owner {
  id: string;
  cpf: string;
  name: string;
  email: string;
  telephoneNumber: string; 
  address: string;
}

const Listados: React.FC = () => {
  const [owners, setOwners] = useState<Owner[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchOwners = async () => {
      try {
        const response = await axios.get(`${process.env.EXPO_PUBLIC_BACKEND_URL}/owners`);
        setOwners(response.data); // Supondo que a resposta seja um array de proprietários
      } catch (err) {
        setError("Erro ao carregar os dados.");
      } finally {
        setLoading(false);
      }
    };

    fetchOwners()
  }, [owners]);

  const _renderItem = (ownersList: Owner[index]) => (
    <CollapsibleView style={styles.userCard} title={owners.name}>
      <View style={styles.userCard}>
        <Text style={styles.userEmail}>CPF: {owners.cpf}</Text>
        <Text style={styles.userEmail}>Endereço: {owners.address}</Text>
        <Text style={styles.userEmail}>Telefone: {owners.telephoneNumber}</Text>
      </View>
    </CollapsibleView>
  );

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
        renderItem={{ _renderItem }}
      />
    </View>
  );
};

export default Listados;