import { View, Text } from "react-native";
import { styles } from "./OwnerCardStyles";
import { Owner } from "../../types/owner";

export default function OwnerCard({ item }: { item: Owner }) {
  return (
    <View style={styles.ownerCard}>
      <Text style={styles.text}>CPF: {item.cpf}</Text>
      <Text style={styles.text}>Nome: {item.name}</Text>
      <Text style={styles.text}>Endereço: {item.address}</Text>
      <Text style={styles.text}>Telefone: {item.telephoneNumber}</Text>
    </View>
  );
}