import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    headerDrawer: {
        backgroundColor: '#5E5ED4',
      },
      headerTitulo: {
        fontWeight: 'bold',
        fontSize: 20,
      },

});

const drawerStyles = {
    headerStyle: styles.headerDrawer,
    headerTintColor: '#fff',
    headerTitleStyle: styles.headerTitulo,

}

export { styles, drawerStyles}