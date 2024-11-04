import { View, Text, Image } from "react-native";
import { styles } from './principalStyles';
import { TouchableOpacity } from 'react-native-gesture-handler';


export default function Index({ navigation, route }:any) {
    return (
      <View style={styles.container}>
  
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.buttonIndex}
          onPress={() =>navigation.navigate('Cadastro')}>
            <Image source={require('../../../assets/Dog.png')} style={styles.icon} />
            <Text style={styles.buttonTextIndex}>Cadastrar</Text>
          </TouchableOpacity>        
  
          <TouchableOpacity style={styles.buttonIndex}
          onPress={() =>navigation.navigate('Disponibilidade')}>
            <Image source={require('../../../assets/Audit.png')} style={styles.icon} />
            <Text style={styles.buttonTextIndex}>Disponibilidade</Text>
          </TouchableOpacity>
        </View>
  
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.buttonIndex}
          onPress={() =>navigation.navigate('Listados')}>
            <Image source={require('../../../assets/Bullet_List.png')} style={styles.icon} />
            <Text style={styles.buttonTextIndex}>Listados</Text>
          </TouchableOpacity> 
          
          <TouchableOpacity style={styles.buttonIndex}>
            <Image source={require('../../../assets/Money Bag.png')} style={styles.icon} />
            <Text style={styles.buttonTextIndex}>Financeiro</Text>
          </TouchableOpacity>
        </View>
  
      </View>
    );
    
  }