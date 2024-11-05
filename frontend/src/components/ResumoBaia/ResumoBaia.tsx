import { View, Text } from 'react-native';
import { styles } from './ResumoBaiaStyles';

type ResumoBaiaProps = {
    baiaId: number;
};

const ResumoBaia = ({ baiaId }: ResumoBaiaProps) => {
    return (
        <View style={styles.resumoBaiaForma}>
            <View style={styles.resumoBaiaHeader}>
                <Text style={styles.resumoBaiaHeaderText}>BAIA {baiaId}</Text>
            </View>
            <View>
                <Text style={styles.tituloBaia}>Cachorro 1</Text>
            </View>
        </View>
    );
};

export default ResumoBaia;