import * as React from 'react';
import { Pressable, View, Text, Touchable } from "react-native";
import { styles } from './principalStyles';
import Cadastro from '../cadastrarTutor/cadastroTutor';
import { TouchableOpacity } from 'react-native-gesture-handler';


export default function Index({ navigation, route }:any) {
    return (
      <View style={styles.container}>
  
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.buttonIndex}
          onPress={() =>navigation.navigate('Cadastro')}>
            <Text style={styles.buttonTextIndex}>Cadastrar</Text>
          </TouchableOpacity>        
  
          <TouchableOpacity style={styles.buttonIndex}
          onPress={() =>navigation.navigate('Disponibilidade')}>
            <Text style={styles.buttonTextIndex}>Disponibilidade</Text>
          </TouchableOpacity>
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