import * as React from 'react';
import { View, Text, TextInput, Pressable } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import CadastroCachorro from '../cadastrarCachorro/cadastroCachorro';
import { styles } from './disponibilidadeStyles';
import CardBaia from '../../components/CardBaia/CardBaia'

export default function Disponibilidade(){
    return(
        <View style={styles.container}>
            <Text>Legenda</Text>
            
            <Text>Disponível</Text>
                <View style={styles.quadradoLegendaDisponivel} />
            <Text>Ocupada</Text>
                <View style={styles.quadradoLegendaOcupado} />

            <View>
                <CardBaia />
            
            </View>
            
        </View>      
    )
}