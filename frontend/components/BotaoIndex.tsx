import React from 'react';
import { View, Text } from 'react-native';
import { Link } from 'expo-router';

// Definindo a interface para as props
interface BotaoIndexProps {
    title: string;
    route: string; // Define a rota como string
}

const BotaoIndex: React.FC<BotaoIndexProps> = ({ title, route }) => {
  return (
    <View style={{ margin: 10 }}>
      {/* Usando o Link com o caminho da rota - CONSERTAR*/}
      <Link href={route}>
        <View style={{ padding: 10, backgroundColor: '#007bff', borderRadius: 5 }}>
          <Text style={{ color: '#fff', textAlign: 'center' }}>{title}</Text>
        </View>
      </Link>
    </View>
  );
};

export default BotaoIndex;