import * as React from 'react';
import { View } from "react-native";
import { styles } from './indexStyles'; // Importa os estilos
import BotaoIndex from '@/components/BotaoIndex';

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <BotaoIndex title="Cadastrar" route='/cadastrar' /> {/* Define a rota correta */}
        <BotaoIndex title="Disponibilidade" route='/disponibilidade' />
      </View>

      <View style={styles.buttonContainer}>
        <BotaoIndex title="Cadastrados" route='/cadastrados' />
        <BotaoIndex title="Financeiro" route='/financeiro' />
      </View>
    </View>
  );
}