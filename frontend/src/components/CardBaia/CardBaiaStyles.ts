import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    cardForma:{
        width: '90%',
        height: 350,
        backgroundColor:'#F4F1F1',
        borderWidth: 3,
        borderRadius: 5,       

    },

    cardHeader:{
        width: '100%',
        height: '15%',
        backgroundColor:'#777070',
        borderBottomWidth: 2,
        justifyContent:'center',
    },

    cardHeaderText:{
        paddingLeft: '5%',
        fontSize: 34,
        fontWeight: "bold",       

    },

    campoInfo:{
        paddingLeft: '4%',
        marginTop: '3%',
        flexDirection:'row'
        
    },

    labelInfo:{
        fontWeight: "bold",

    },

    textArea:{
        borderWidth: 1,
        width: '95%',
        height: '53%'

    },

    cardOptions:{
        marginTop: '-15%', // os botões só ficaram no lugar certo depois que coloquei o sinal negativo
        flexDirection: 'row',
        justifyContent: 'center',

    },

    buttonBaiaOptions:{
        backgroundColor:'#7C7CF4',
        height: 25,
        width: 75,
        marginHorizontal:'10%',
        borderRadius:2,
    },

    textBaiaOptions:{
        color:'#fff',
        textAlign:'center',
    }

})