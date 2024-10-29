import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
        flex: 1,
        marginTop: '5%',

    },

    inputContainer: {
        marginHorizontal: '10%',
        
    },

    label: {
        marginBottom: '3%', // Espaço entre o label e o campo de input
        fontSize: 20,   // Tamanho da fonte do label
        fontWeight: 'bold', // Negrito no label (opcional)
        color: '#000',  // Cor do texto do label
    },

    infoExtra: {
        height: 100,    // Aumenta a altura do campo para parecer um retângulo
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 10,   // Mantém bordas levemente arredondadas, ajuste para mais quadrado se preferir
        paddingLeft: 10,    // Adiciona espaço para o texto dentro do campo
        width: '100%',  // Ocupa 100% da largura disponível
        paddingTop: 15,
        textAlignVertical: 'top', 
        marginBottom: 10,
    },


    input: {
        paddingLeft: 10,    // Adiciona espaço para o texto dentro do campo
        height: 40,
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 3,
        marginBottom: 7,
    },

    buttonContainer: {
        marginTop: '3%',
        alignItems: 'center',

    },

    pickerContainer: {
        borderColor: "#000",
        borderWidth: 1,
        borderRadius: 3,
      },
      
      picker: {
        height: 50,
        width: "100%",
      },

    button: {
        alignItems:'center', // Centraliza o texto no eixo horizontal
        justifyContent: 'center',  // Centraliza o texto no eixo vertical
        backgroundColor: '#7C7CF4',
        height: 50,
        width: 150,
        borderRadius: 40,
        alignSelf: "center",
        margin: 20
    },
    
    buttonText: {
        color: '#fff',
    }
});