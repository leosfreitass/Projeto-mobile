import { useState } from "react";
import { View, Text, Modal, TouchableOpacity, Pressable, Alert } from "react-native";
import { styles } from './disponibilidadeStyles';
import CardBaia from '../../components/CardBaia/CardBaia';
import ResumoBaia from '../../components/ResumoBaia/ResumoBaia';

export default function Disponibilidade() {
    const [modalVisible, setModalVisible] = useState(false);
    const [baiaCount, setBaiaCount] = useState(1);
    const [selectedBaia, setSelectedBaia] = useState<number | null>(null);

    const abrirModal = (baiaId: number) => {
        setSelectedBaia(baiaId);
        setModalVisible(true);
    };

    const fecharModal = () => {
        setModalVisible(false);
        setSelectedBaia(null);
    };

    const adicionarBaia = () => {
        Alert.alert("Adicionar Baia", "Você deseja adicionar uma nova baia?", [
            { text: "Cancelar", style: "cancel" },
            { text: "Adicionar", onPress: () => setBaiaCount(prevCount => prevCount + 1) }
        ]);
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
                {[...Array(baiaCount)].map((_, index) => (
                    <TouchableOpacity key={index} onPress={() => abrirModal(index + 1)}>
                        <ResumoBaia baiaId={index + 1} />
                    </TouchableOpacity>
                ))}
                <Modal
                    visible={modalVisible}
                    transparent={true}
                    animationType="fade"
                    onRequestClose={fecharModal}
                >
                    <View style={styles.modalBackground}>
                        <View style={styles.cardContainer}>
                            {selectedBaia !== null && (
                                <CardBaia baiaId={selectedBaia} onSaveSuccess={fecharModal} />
                            )}
                        </View>
                    </View>
                </Modal>
            </View>

            <View style={styles.screenOptions}>
                <Pressable onPress={adicionarBaia} style={styles.buttonAdicionarBaia}>
                    <Text style={styles.textButtonAddBaia}>Adicionar Baia</Text>
                </Pressable>
            </View>
        </View>
    );
}