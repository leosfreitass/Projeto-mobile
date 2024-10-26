import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
        flex: 1,

    },

    inputContainer: {
        marginBottom: 1,
        alignItems:'center',
    },

    label: {
        marginBottom: 10,     // Espaço entre o label e o campo de input
        fontSize: 20,        // Tamanho da fonte do label
        fontWeight: 'bold',  // Negrito no label (opcional)
        color: '#000',       // Cor do texto do label
    },

    opcao: {
        height: 100,               // Aumenta a altura do campo para parecer um retângulo
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 10,          // Mantém bordas levemente arredondadas, ajuste para mais quadrado se preferir
        paddingLeft: 10,          // Adiciona espaço para o texto dentro do campo
        width: '80%',            // Ocupa 100% da largura disponível
        paddingTop: 15,
        textAlignVertical: 'top', 
        marginBottom: 10,
    },
    input: {
        height: 40,
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 3,
        marginBottom: 7,
    },

    button: {
        alignItems:'center', // Centraliza o texto no eixo horizontal
        justifyContent: 'center',  // Centraliza o texto no eixo vertical
        backgroundColor: '#5E5ED4',
        height: 45,
        width: 130,
        borderRadius: 40,
    },


    
    buttonText: {
        color: '#fff',
    }
});