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