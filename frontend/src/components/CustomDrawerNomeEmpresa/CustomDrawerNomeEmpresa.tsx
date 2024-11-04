import { View, Text } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { styles } from './CustomDrawerNomeEmpresaStyle'

export const CustomDrawerNomeEmpresa = () => {
  return (
    <DrawerContentScrollView>
      <View style={styles.headerNomeEmpresa}>
        <Text style={styles.textNomeEmpresa}>Canil Recreio's</Text>
      </View>
    </DrawerContentScrollView>
  );
};

export default  CustomDrawerNomeEmpresa;