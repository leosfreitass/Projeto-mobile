import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './HeaderStyles'; 

const Header = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => { /* Lógica do menu hambúrguer */ }}>
        <Text style={styles.menuIcon}>☰</Text> {/* Ícone do menu hambúrguer */}
      </TouchableOpacity>
      <Text style={styles.title}>Título</Text> {/*arrumar títulos das telas*/}
    </View>
  );
};

export default Header;