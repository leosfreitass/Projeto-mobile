import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './CardBaiaStyles';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { axiosConfigs } from '../../../configs/axiosConfigs';
import { Picker } from '@react-native-picker/picker'
import { Dogs } from '../../types/dogs'


const axiosInstance = axios.create(axiosConfigs);

const CardBaia = () => {
    const [dogs, setDogs] = useState<Dogs[]>([]); // Lista de cachorros
    const [selectedDog, setSelectedDog] = useState(""); // Cachorro selecionado

    useEffect(() => {
        // Função para buscar cachorros do banco
        const fetchDogs = async () => {
            try {
                const response = await axiosInstance.get("admin/dogs/all"); // Substitua pela URL correta
                setDogs(response.data);
            } catch (error) {
                console.error("Erro ao buscar cachorros:", error);
            }
        };
        fetchDogs();
    }, []);

    return(
        <View style={styles.cardForma}>
            {/*titulo card*/}
            <View style={styles.cardHeader}>
                <Text style={styles.cardHeaderText}>BAIA x</Text>
            </View>

            {/* Campo de seleção para o nome do cachorro */}
            <View style={styles.campoInfo}>
                <Text style={styles.labelInfo}>Cachorro: </Text>
                <View style={styles.pickerArea}>
                    <Picker
                    selectedValue={selectedDog}
                    onValueChange={(itemValue) => setSelectedDog(itemValue)}>
                        <Picker.Item label="Selecione um cachorro" value="" 
                        style={styles.textPicker}/>
                        {dogs.map((dog) => (
                            <Picker.Item key={dog.id} label={dog.name} value={dog.id} />
                        ))}
                    </Picker>
                </View>
            </View>

            <View style={styles.campoInfo}>
                <Text style={styles.labelInfo}>data de inclusão: </Text>
                <Text>dd/mm/aaaa</Text>
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