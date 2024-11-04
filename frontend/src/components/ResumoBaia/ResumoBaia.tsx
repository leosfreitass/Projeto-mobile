import { View, Text } from 'react-native';
import { styles } from './ResumoBaiaStyles';

// Recebe a prop numero para exibir no título
const ResumoBaia = ({ numero }: { numero: number }) => {
    return (
        <View style={styles.resumoBaiaForma}>
            {/* Título do card com o número da baia */}
            <View style={styles.resumoBaiaHeader}>
                <Text style={styles.resumoBaiaHeaderText}>BAIA {numero}</Text>
            </View>

            {/* Informações resumidas da baia */}
            <View>
                <Text style={styles.tituloBaia}>Cachorro {numero}</Text>
            </View>
        </View>
    );
};

export default ResumoBaia;