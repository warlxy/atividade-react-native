import { Pressable, StyleSheet, Text } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as auth from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Login from "./screens/Login"
import CadastroUsuario from "./screens/Cadastro"
import ListaContatos from "./screens/ListaContatos"
import Contatos from "./screens/Contatos"
import Sucesso from './screens/Sucesso';


const Stack = createStackNavigator();
const navigation = useNavigation();

const handleLogout = async () => {
  try {
    await auth().signOut();
    console.log('Usuário deslogou com sucesso');
    navigation.navigate('Login');
  } catch (error) {
    console.error('Erro ao deslogar:', error);
    
  }
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} options={{ 
            headerStyle: {
              backgroundColor: '#1670f7',
            },
            headerTintColor: '#fff',
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize:20,
            } }}
        />

        <Stack.Screen name="Usuário" component={CadastroUsuario} options={{ 
          headerStyle: {
            backgroundColor: '#1670f7',
          },
          headerTintColor: '#fff',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize:20,
          }, }}
        />

        <Stack.Screen name="Lista de Contatos" component={ListaContatos} options={{ 
          headerLeft: () => (
            <Pressable onPress={handleLogout}>
              <Text style={styles.headerLeftText}>Sair</Text>
            </Pressable>
          ),
          headerStyle: {
            backgroundColor: '#1670f7',
          },
          headerTintColor: '#fff',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize:20,
          },
          headerRight: () => {
            const navigation = useNavigation();
            return (
              <Pressable onPress={() => navigation.navigate('Novo Contato')}>
                <Icon style={styles.icone} name="plus" size={30} color="#fff" />
              </Pressable>
            );
          },
           }}
        />

        <Stack.Screen name="Novo Contato" component={Contatos} options={{ 
          headerStyle: {
            backgroundColor: '#1670f7',
          },
          headerTintColor: '#fff',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize:20,
          } 
          }}
        />
      </Stack.Navigator>
      <Stack.Screen name="Sucesso" component={Sucesso}
        />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icone: {
    paddingRight: 20,
  },
  headerLeftText: {
    color: '#fff',
    fontSize: 16,
    marginLeft: 10,
  },
});
