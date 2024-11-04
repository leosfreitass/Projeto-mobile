import { View, Text } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { styles } from './CustomDrawerNomeEmpresaStyle'

export const CustomDrawerNomeEmpresa = (props: any) => {
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.headerNomeEmpresa}>
        <Text style={styles.textNomeEmpresa}>Canil Recreio's</Text>
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

export default  CustomDrawerNomeEmpresa;