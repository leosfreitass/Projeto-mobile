import { View, Text } from "react-native";
import { styles } from "./DogsCardStyle";
import { Dogs } from "../../types/dogs";

export default function DogsCard({ item }: { item: Dogs }) {
  return (
    <View style={styles.dogsCard}>
      <Text style={styles.text}>Nome: {item.name}</Text>
      <Text style={styles.text}>Raça: {item.breed}</Text>
      <Text style={styles.text}>Idade: {item.age}</Text>
      <Text style={styles.text}>Baia: {item.locatedAt}</Text>
    </View>
  );
}