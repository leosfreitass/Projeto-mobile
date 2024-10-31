import { StyleSheet,Image } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  
  buttonContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    //marginVertical: 10, // Adiciona espaço entre as linhas
  },

  buttonIndex: {
    backgroundColor: '#9494EC',
    height: 120,
    width: 180,
    marginVertical: 10, // Adiciona espaço entre as linhas
    marginHorizontal: 5,
    flexDirection: 'row',
    alignItems:'center',
    borderRadius: 10,
    justifyContent:'center'  

  },

  icon: {
    width: 30,
    height: 30,
    marginRight: 10, // espaçamento entre o ícone e o texto
    marginBottom: 5,

  },

  buttonTextIndex: {
    color: '#fff',
    fontSize:16
        
  },



});