import * as React from 'react';
import { View, Text } from "react-native";
import { styles } from './disponibilidadeStyles';
import CardBaia from '../../components/CardBaia/CardBaia'
import ResumoBaia from '../../components/ResumoBaia/ResumoBaia';

export default function Disponibilidade(){
    return(
        <View style={styles.container}>
            <View style={styles.descricaoPagina}>
                <Text style={{ marginTop: '3%', fontSize: 23, fontWeight: 'bold', marginBottom: '2%'}}>Legenda</Text>

                <View style={styles.legenda}>
                    <View style={styles.quadradoLegendaDisponivel} />
                        <Text style={styles.legendaText}>Disponível</Text>
                    <View style={styles.quadradoLegendaOcupado} />
                        <Text style={styles.legendaText}>Ocupada</Text>
                </View>
            </View>

            <View style={styles.baias}>
                <CardBaia />
                <ResumoBaia />
                
            </View>
            
        </View>      
    )
}