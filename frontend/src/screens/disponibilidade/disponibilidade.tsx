import * as React from 'react';
import { View, Text, TextInput, Pressable } from "react-native";
import { styles } from './disponibilidadeStyles';
import CardBaia from '../../components/CardBaia/CardBaia'
import ResumoBaia from '../../components/ResumoBaia/ResumoBaia';

export default function Disponibilidade(){
    return(
        <View style={styles.container}>
            <Text>Legenda</Text>

            <View style={styles.legenda}>
                <Text >Disponível</Text>
                    <View style={styles.quadradoLegendaDisponivel} />
                <Text >Ocupada</Text>
                    <View style={styles.quadradoLegendaOcupado} />
            </View>

            <View>
                <CardBaia />
                <ResumoBaia />
            
            </View>
            
        </View>      
    )
}