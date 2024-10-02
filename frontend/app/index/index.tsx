import * as React from 'react';
import { Pressable, View, Text } from "react-native";
import { styles } from './indexStyles';
import { Link } from 'expo-router';
import BotaoIndex from '@/components/BotaoIndex';

export default function Index() {
  return (
    <View style={styles.container}>

      <View style={styles.buttonContainer}>

        <Link href= "/cadastrar" asChild>
          <Pressable style={styles.buttonIndex}>
            <Text style={styles.buttonTextIndex}>Cadastrar</Text>
          </Pressable>
        </Link>

          <Pressable style={styles.buttonIndex}>
            <Text style={styles.buttonTextIndex}>Disponibilidade</Text>
        </Pressable>

      </View>

      <View style={styles.buttonContainer}>

        <Pressable style={styles.buttonIndex}>
          <Text style={styles.buttonTextIndex}>Cadastrados</Text>
        </Pressable>

        <Pressable style={styles.buttonIndex}>
          <Text style={styles.buttonTextIndex}>Financeiro</Text>
        </Pressable>

      </View>

    </View>
  );
}