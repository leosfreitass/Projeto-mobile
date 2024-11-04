import "./gesture-handler";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Cadastro from "../../screens/cadastrarTutor/cadastroTutor";
import Index from "../../screens/principal/principal";
import CadastroCachorro from "../../screens/cadastrarCachorro/cadastroCachorro";
import Disponibilidade from "../../screens/disponibilidade/disponibilidade";
import { createStackNavigator } from "@react-navigation/stack";
import Listados from "../../screens/Listados/Listados";
import {drawerStyles} from "./DrawerNavigationStyles"
import CustomDrawerNomeEmpresa from "../CustomDrawerNomeEmpresa/CustomDrawerNomeEmpresa";
import ListadosCachorros from "../../screens/ListadosCachorros/listadosCachorros";

const Drawer = createDrawerNavigator();

const Stack = createStackNavigator();

function CadastroStack() {
  //função para que as telas de cadastrar cachorro esteja escondida no menu hamburguer do Drawer
  return (
    <Stack.Navigator
      initialRouteName="Cadastro Tutor"
      screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Cadastro Tutor" component={Cadastro} />
      <Stack.Screen
        name="Cadastro Cachorro"
        component={CadastroCachorro}
      />
    </Stack.Navigator>
  );
}

export default function MainDrawer() {
  return (
    <Drawer.Navigator
    drawerContent={(props) => <CustomDrawerNomeEmpresa {...props} />}
    screenOptions={drawerStyles}>
      <Drawer.Screen name="Principal" component={Index} />
      <Drawer.Screen name="Cadastro" component={CadastroStack} />
      <Drawer.Screen name="Disponibilidade" component={Disponibilidade} />
      <Drawer.Screen name="Listados" component={Listados} />
      <Drawer.Screen name="Listados Cachorro" component={ListadosCachorros} />
    </Drawer.Navigator>
  );
}
