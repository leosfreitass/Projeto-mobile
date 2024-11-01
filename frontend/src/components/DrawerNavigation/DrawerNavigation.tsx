import "./gesture-handler";
import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Cadastro from "../../screens/cadastrarTutor/cadastroTutor";
import Index from "../../screens/principal/principal";
import CadastroCachorro from "../../screens/cadastrarCachorro/cadastroCachorro";
import Disponibilidade from "../../screens/disponibilidade/disponibilidade";
import { createStackNavigator } from "@react-navigation/stack";
import Listados from "../../screens/Listados/Listados";

const Drawer = createDrawerNavigator();

const Stack = createStackNavigator();

function CadastroStack() {
  //função para que as telas estejam escondidas no menu hamburguer do Drawer
  return (
    <Stack.Navigator
      initialRouteName="CadastroTutor"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="CadastroTutor" component={Cadastro} />
      <Stack.Screen
        name="CadastroCachorro"
        component={CadastroCachorro}
      />
    </Stack.Navigator>
  );
}

export default function MainDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Principal" component={Index} />
      <Drawer.Screen name="Cadastro" component={CadastroStack} />
      <Drawer.Screen
        name="Disponibilidade"
        component={Disponibilidade}
      />
      <Drawer.Screen name="Listados" component={Listados} />
    </Drawer.Navigator>
  );
}
