import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container:{
        
    },

    descricaoPagina:{
        marginLeft:'20%',
    },

    legenda:{
        flexDirection: 'row',
        marginBottom: '3%',
        alignItems: 'center',

    },

    legendaText:{
        fontSize: 16,
        marginLeft:'2%',
        marginRight:'10%',
        fontWeight:'bold'
    },

    quadradoLegendaDisponivel:{
        width: 20,
        height: 20,
        backgroundColor: '#8FDD74',
    },
    quadradoLegendaOcupado:{
        width: 20,
        height: 20,
        backgroundColor: '#FF5959',
    },

    baias:{
        marginLeft:'10%'

    },

    modalBackground: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',  // Fundo semi-transparente
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardContainer: {
        width: '100%', // Largura do CardBaia no modal
        marginLeft: '10%',
        //backgroundColor: 'white',
        //borderRadius: 10,
        //overflow: 'hidden',
    },

    screenOptions:{
        alignItems:'center',
    },

    buttonAdicionarBaia:{
        backgroundColor:'#7C7CF4',
        alignItems: 'center',
        height: 40,
        width: 150,
        //marginHorizontal:'10%',
        borderRadius:2,
        justifyContent: 'center'

    },

    textButtonAddBaia:{
        //justifyContent: 'center',
        alignItems: 'center',
        color: '#fff'

    },

    buttonRemoverBaia:{

    },

    textButtonRemoverBaia:{
        
    }

});