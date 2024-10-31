import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { styles } from './ListadosStyles';
import CollapsibleView from '../../components/CollapsibleView';

interface User {
  id: string;
  name: string;
  email: string;
  additionalInfo: string;
}

const Listados: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const mockUsers: User[] = [
        { id: '1', name: 'Alice Silva', email: 'alice@example.com', additionalInfo: 'Informações adicionais sobre Alice' },
        { id: '2', name: 'Bruno Costa', email: 'bruno@example.com', additionalInfo: 'Informações adicionais sobre Bruno' },
        { id: '3', name: 'Carla Nunes', email: 'carla@example.com', additionalInfo: 'Informações adicionais sobre Carla' },
      ];
      setUsers(mockUsers);
    };

    fetchUsers();
  }, []);

  const renderItem = ({ item }: { item: User }) => (
    <CollapsibleView title={item.name}>
      <View style={styles.userCard}>
        <Text style={styles.userEmail}>Email: {item.email}</Text>
        <Text style={styles.additionalInfo}>Detalhes: {item.additionalInfo}</Text>
      </View>
    </CollapsibleView>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Usuários Cadastrados</Text>
      <FlatList
        data={users}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
};

export default Listados;