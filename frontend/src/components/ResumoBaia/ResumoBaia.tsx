import { View, Text } from 'react-native';
import { styles } from './ResumoBaiaStyles';

// Recebe a prop numero para exibir no título
const ResumoBaia = () => {
    return (
        <View style={styles.resumoBaiaForma}>
            {/* Título do card com o número da baia */}
            <View style={styles.resumoBaiaHeader}>
                <Text style={styles.resumoBaiaHeaderText}>BAIA x</Text>
            </View>

            {/* Informações resumidas da baia */}
            <View>
                <Text style={styles.tituloBaia}>Cachorro 1</Text>
            </View>
        </View>
    );
};

export default ResumoBaia;