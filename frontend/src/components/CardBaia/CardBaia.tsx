import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './CardBaiaStyles';

const CardBaia = () => {
    return(
        <View style={styles.cardForma}>
            {/*titulo card*/}
            <View style={styles.cardHeader}>
                <Text style={styles.cardHeaderText}>BAIA x</Text>
            </View>

            {/*informações da baia */}
            <View style={styles.campoInfo}>
                <Text style={styles.labelInfo}>nome do cachorro: </Text>
                <Text>Cachorro 1</Text>
            </View>

            <View style={styles.campoInfo}>
                <Text style={styles.labelInfo}>data de ingresso: </Text>
                <Text>dd/mm/aaaa</Text>
            </View>

            <View style={styles.campoInfo}>
                <Text style={styles.labelInfo}>Nome do tutor: </Text>
                <Text>Fulano 1</Text>
            </View>

            <View style={{paddingLeft: '4%', marginTop: '3%',}}>
                <Text style={styles.labelInfo}>Observações: </Text>
                <View style={styles.textArea}>
                    <Text>info importante</Text>
                </View>
                
            </View>

            {/*opções da baia*/}
            <View style={styles.cardOptions}>
                <TouchableOpacity style={styles.buttonBaiaOptions}>
                    <Text style={styles.textBaiaOptions}>Editar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonBaiaOptions}>
                    <Text style={styles.textBaiaOptions}>Limpar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default CardBaia;