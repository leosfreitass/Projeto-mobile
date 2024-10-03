import { View, Text, TouchableOpacity, Pressable } from 'react-native';
import { styles } from './HeaderStyles'; 
import { MaterialIcons } from '@expo/vector-icons';

const Header = () => {
  return (
    <View style={styles.container}>
      <Pressable onPress={() => { /* Lógica do menu hambúrguer */ }}>
        <MaterialIcons name="menu" size={24} color="white" /> {/* Ícone do menu hambúrguer */}
      </Pressable>
      <Text style={styles.title}>Título</Text> {/*arrumar títulos das telas*/}
    </View>
  );
};

export default Header;