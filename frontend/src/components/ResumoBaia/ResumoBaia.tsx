import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './ResumoBaiaStyles';
import CardBaia from '../CardBaia/CardBaia';

const ResumoBaia = () => {
    
    return(
        <View style={styles.resumoBaiaForma}>
            {/*titulo card*/}
            <View style={styles.resumoBaiaHeader}>
                <Text style={styles.resumoBaiaHeaderText}>BAIA x</Text>
            </View>

            {/*informações resumidas da baia */}
            <View> 
                <Text style={styles.tituloBaia}>Cachorro 1</Text>
            </View>
        </View>
    )
}

export default ResumoBaia;