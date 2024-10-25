import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './CardBaiaStyles';

const CardBaia = () => {
    return(
        <View style={styles.cardForma}>
            {/*titulo card*/}
            <View style={styles.cardHeader}>
                <Text style={styles.cardHeaderText}>Baia x</Text>
            </View>

            {/*informações da baia */}
            <View style={styles.cardInfo}> 
                <Text>nome do cachorro: </Text>
                <Text>Cachorro 1</Text>

                <Text>data de ingresso: </Text>
                <Text>dd/mm/aaaa</Text>

                <Text>Nome do tutor: </Text>
                <Text>Fulano 1</Text>

                <Text>Observações: </Text>
                <Text>info importante</Text>
            </View>
        </View>
    )
}

export default CardBaia;