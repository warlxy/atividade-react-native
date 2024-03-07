import React, { useState } from 'react';
import { Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { StyleSheet, Text, TextInput, View } from 'react-native';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigation = useNavigation();

    const handleLogin = () => {
        navigation.navigate('Lista de Contatos')
    };

    const handleCadastro = () => {
        navigation.navigate('Usuário');
    };

    return (
        <View style={styles.container}>
                <MaterialCommunityIcons
                name="account-circle"
                size={150}
                color="#000"
                style={styles.icon}
            />
            <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>Login</Text>
                <View style={styles.input}>
                    <TextInput
                        style={styles.textInput}
                        onChangeText={setEmail}
                    />
                </View>
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>Senha</Text>
                <View style={styles.input}>
                    <TextInput
                        style={styles.textInput}
                        secureTextEntry={true}
                        onChangeText={setPassword}
                    />
                </View>
            </View>
            <Pressable 
                style={styles.btn_entrar}
                onPress={handleLogin} 
            >
                <Text style={styles.btnText}>Entrar</Text>
            </Pressable>

            <Pressable
                style={styles.btn_cadastro}
                onPress={handleCadastro} 
            >
                <Text style={styles.btnText}>Cadastre-se</Text>
            </Pressable>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    inputContainer: {
        marginBottom: 10,
    },
    inputLabel: {
        fontWeight: 'bold',
    },
    input: {
        width: 250,
        height: 40,
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#c1c1c1',
        backgroundColor: '#e8e8e8',
        borderWidth: 1,
        borderRadius: 5,
        padding: 5,
    },
    textInput: {
        flex: 1,
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    btn_entrar: {
        width: 150,
        height: 40,
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        margin: 10,
        backgroundColor: '#1670f7'
    },
    btn_cadastro: {
        width: 150,
        height: 40,
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        margin: 10,
        backgroundColor: '#ff1516'
    },
    btnText: {
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
    }
});

export default Login;