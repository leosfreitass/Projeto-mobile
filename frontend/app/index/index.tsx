import * as React from 'react';
import { Pressable, View, Text } from "react-native";
import { styles } from './indexStyles';
import { Link } from 'expo-router';

export default function Index() {
  return (
    <View style={styles.container}>

      <View style={styles.buttonContainer}>

        <Link href= "/cadastrar">
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