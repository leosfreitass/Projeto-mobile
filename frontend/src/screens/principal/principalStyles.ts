import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  
  buttonContainer: {
    flexDirection: 'row',
    //marginVertical: 10, // Adiciona espaço entre as linhas
  },

  buttonIndex: {
    backgroundColor: '#9494EC',
    height: 120,
    width: 180,
    marginVertical: 10, // Adiciona espaço entre as linhas
    marginHorizontal: 5,
    flexDirection: 'row',
    borderRadius: 10,
    justifyContent:'center'  

  },

  buttonTextIndex: {
    color: '#fff',
    marginTop: '50%',
        
  },



});