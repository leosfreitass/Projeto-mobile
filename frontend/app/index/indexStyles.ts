import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    //width: '30%',
    //height: '20%',
    marginVertical: 10, // Adiciona espaço entre as linhas
  },

  buttonIndex: {
    backgroundColor: '#9494EC',
    height: 120,
    width: 180,
    marginVertical: 10, // Adiciona espaço entre as linhas
    marginHorizontal: 5,
    flexDirection: 'row',
    borderRadius: 2,
  

  },

  buttonTextIndex: {
    color: '#fff',
    padding: 50, //arrumar
    
    

  },



});