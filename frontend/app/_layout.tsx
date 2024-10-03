import { Stack } from "expo-router";
import Header from "@/components/Header/Header";

export default function RootLayout() {
  return (
    
      <Stack>
        <Stack.Screen name="index" />
        <Stack.Screen name="cadastrar" />
      </Stack>

  );
}