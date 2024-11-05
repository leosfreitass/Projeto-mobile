import { View, Text, TouchableOpacity, Alert } from 'react-native';
import { styles } from './CardBaiaStyles';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { axiosConfigs } from '../../../configs/axiosConfigs';
import { Picker } from '@react-native-picker/picker';
import { Dogs } from '../../types/dogs';

const axiosInstance = axios.create(axiosConfigs);

type CardBaiaProps = {
    baiaId: number;
    onSaveSuccess: () => void;
};

const CardBaia = ({ baiaId, onSaveSuccess }: CardBaiaProps) => {
    const [dogs, setDogs] = useState<Dogs[]>([]);
    const [selectedDog, setSelectedDog] = useState<Dogs | null>(null);

    useEffect(() => {
        const fetchDogs = async () => {
            try {
                const response = await axiosInstance.get("admin/dogs/all");
                setDogs(response.data);
            } catch (error) {
                console.error("Erro ao buscar cachorros:", error);
            }
        };
        fetchDogs();
    }, []);

    const formatDate = (dateString: Date) => {
        const date = new Date(dateString);
        return `${date.getDate().toString().padStart(2, '0')}/${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getFullYear().toString().slice(-2)}`;
    };

    const handleSave = async () => {
        if (!selectedDog) {
            Alert.alert("Erro", "Por favor, selecione um cachorro.");
            return;
        }

        try {
            await axiosInstance.put(`/compartment/${baiaId}/update`, {
                dogId: selectedDog.id,
                isOccupied: true,
            });
            Alert.alert("Sucesso", "Baia atualizada com sucesso!");
            onSaveSuccess();
        } catch (error) {
            console.error("Erro ao atualizar a baia:", error);
            Alert.alert("Erro", "Não foi possível salvar as alterações.");
        }
    };

    return (
        <View style={styles.cardForma}>
            <View style={styles.cardHeader}>
                <Text style={styles.cardHeaderText}>BAIA {baiaId}</Text>
            </View>
            <View style={styles.campoInfo}>
                <Text style={styles.labelInfo}>Cachorro: </Text>
                <View style={styles.pickerArea}>
                    <Picker
                        selectedValue={selectedDog ? selectedDog.id : ""}
                        onValueChange={(itemValue) => {
                            const selected = dogs.find(dog => dog.id === itemValue);
                            setSelectedDog(selected || null);
                        }}
                    >
                        <Picker.Item label="Selecione um cachorro" value="" style={styles.textPicker} />
                        {dogs.map((dog) => (
                            <Picker.Item key={dog.id} label={dog.name} value={dog.id} />
                        ))}
                    </Picker>
                </View>
            </View>
            <View style={styles.campoInfo}>
                <Text style={styles.labelInfo}>Data de inclusão: </Text>
                <Text>{selectedDog ? formatDate(selectedDog.createdAt) : "dd/mm/aa"}</Text>
            </View>
            <View style={{ paddingLeft: '4%', marginTop: '3%' }}>
                <Text style={styles.labelInfo}>Observações: </Text>
                <View style={styles.textArea}>
                    <Text>{selectedDog ? selectedDog.extraInfo : "Info importante"}</Text>
                </View>
            </View>
            <View style={styles.cardOptions}>
                <TouchableOpacity style={styles.buttonBaiaOptions} onPress={handleSave}>
                    <Text style={styles.textBaiaOptions}>Salvar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonBaiaOptions} onPress={() => setSelectedDog(null)}>
                    <Text style={styles.textBaiaOptions}>Limpar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default CardBaia;