import React from 'react';
import { Button, View } from 'react-native';
import { useRouter } from 'expo-router';

// Definindo a interface para as props
interface BotaoIndexProps {
    title: string;
    route: string; // Nova prop para definir a rota
}

const BotaoIndex: React.FC<BotaoIndexProps> = ({ title, route }) => {
  const router = useRouter();

  return (
    <View style={{ margin: 10 }}>
      <Button 
        title={title} 
        onPress={() => router.push(route)} // Redireciona para a rota
      />
    </View>
  );
};

export default BotaoIndex;