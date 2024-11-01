import * as React from 'react';
import { View, Text, Modal, TouchableOpacity } from "react-native";
import { styles } from './disponibilidadeStyles';
import CardBaia from '../../components/CardBaia/CardBaia'
import ResumoBaia from '../../components/ResumoBaia/ResumoBaia';

export default function Disponibilidade(){

    const [modalVisible, setModalVisible] = React.useState(false);

    // Função para abrir o modal
    const abrirModal = () => {
        setModalVisible(true);
    };

    // Função para fechar o modal
    const fecharModal = () => {
        setModalVisible(false);
    };

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
                 {/* Quando o usuário tocar em ResumoBaia, o modal abre */}
                 <TouchableOpacity onPress={abrirModal}>
                    <ResumoBaia />
                </TouchableOpacity>

                {/* Modal para exibir CardBaia */}
                <Modal
                    visible={modalVisible}
                    transparent={true} 
                    animationType="fade"
                    onRequestClose={fecharModal} // Fecha o modal quando o botão de voltar é pressionado 
                >
                    {/* View para detectar toques fora do CardBaia */}
                    <TouchableOpacity 
                        style={styles.modalBackground} 
                        activeOpacity={1} 
                        onPress={fecharModal}
                    >
                        {/* Envolva o CardBaia em outra View para que ele não feche ao clicar nele */}
                        <View style={styles.cardContainer}>
                            <CardBaia />
                        </View>
                    </TouchableOpacity>
                </Modal>
            </View>
        </View>      
    )
}