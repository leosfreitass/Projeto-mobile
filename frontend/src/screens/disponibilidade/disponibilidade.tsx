import { useState } from "react";
import { View, Text, Modal, TouchableOpacity, Pressable, Alert } from "react-native";
import { styles } from './disponibilidadeStyles';
import CardBaia from '../../components/CardBaia/CardBaia';
import ResumoBaia from '../../components/ResumoBaia/ResumoBaia';

export default function Disponibilidade() {
    const [modalVisible, setModalVisible] = useState(false);
    const [baiaCount, setBaiaCount] = useState(1); // Estado para controlar o número de ResumoBaia

    // Função para abrir o modal
    const abrirModal = () => {
        setModalVisible(true);
    };

    // Função para fechar o modal
    const fecharModal = () => {
        setModalVisible(false);
    };

    // Função para adicionar um novo ResumoBaia
    const adicionarBaia = () => {
        Alert.alert(
            "Adicionar Baia",
            "Você deseja adicionar uma nova baia?",
            [
                {
                    text: "Cancelar",
                    style: "cancel"
                },
                {
                    text: "Adicionar",
                    onPress: () => setBaiaCount(prevCount => prevCount + 1)
                }
            ],
            { cancelable: false }
        );
    };

    return (
        <View style={styles.container}>
            <View style={styles.descricaoPagina}>
                <Text style={{ marginTop: '3%', fontSize: 23, fontWeight: 'bold', marginBottom: '2%' }}>Legenda</Text>

                <View style={styles.legenda}>
                    <View style={styles.quadradoLegendaDisponivel} />
                    <Text style={styles.legendaText}>Disponível</Text>
                    <View style={styles.quadradoLegendaOcupado} />
                    <Text style={styles.legendaText}>Ocupada</Text>
                </View>
            </View>

            <View style={styles.baias}>
                {/* Renderizando os ResumoBaia conforme o contador */}
                {[...Array(baiaCount)].map((_, index) => (
                    <TouchableOpacity key={index} onPress={abrirModal}>
                        <ResumoBaia />
                    </TouchableOpacity>
                ))}

                {/* Modal para exibir CardBaia */}
                <Modal
                    visible={modalVisible}
                    transparent={true}
                    animationType="fade"
                    onRequestClose={fecharModal} // Fecha o modal quando o botão de voltar é pressionado 
                >
                    <View style={styles.modalBackground}>
                        <View style={styles.cardContainer}>
                            <CardBaia />
                        </View>
                    </View>
                </Modal>
            </View>

            {/* Botão para adicionar novo ResumoBaia */}
            <View style={styles.screenOptions}>
                <Pressable onPress={adicionarBaia} style={styles.buttonAdicionarBaia}>
                    <Text style={styles.textButtonAddBaia}>Adicionar Baia</Text>
                </Pressable>
            </View>
        </View>
    );
}