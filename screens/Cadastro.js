import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import * as auth from '@react-native-firebase/auth';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

const Cadastro = () => {
    const [nome, setNome] = useState('');
    const [cpf, setCpf] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigation = useNavigation();

    const handleBack = () => {
       console.log("voltando")
    };

    const handleCadastrar = async () => {
        try {
          const { email, password } = { email, password };
          await auth().createUserWithEmailAndPassword(email, password);
          console.log('Usuário criado com sucesso');
          navigation.navigate('Sucesso');
        } catch (error) {
          console.error('Erro ao registrar:', error);
          // implementar a mensagem de erro
        }
      };

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <View style={styles.inputContainer}>
                    <Text style={styles.inputLabel}>Nome</Text>
                    <View style={styles.input}>
                        <TextInput
                            style={styles.textInput}
                            onChangeText={setNome}
                        />
                    </View>
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.inputLabel}>Cpf</Text>
                    <View style={styles.input}>
                        <TextInput
                            style={styles.textInput}
                            onChangeText={setCpf}
                        />
                    </View>
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.inputLabel}>Email</Text>
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
                    style={styles.btn}
                    onPress={handleCadastrar} 
                >
                    <Text style={styles.btnText}>Salvar</Text>
                </Pressable>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    header: {
        position: 'absolute',
        top: 0,
        width: '100%',
        backgroundColor: '#1670f7',
        paddingVertical: 10,
        alignItems: 'center',
    },
    headerTextContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 5,
        borderRadius: 5,
    },
    headerText: {
        fontSize: 20,
        color: '#fff',
        fontWeight: 'bold',
        marginLeft: 'auto',
    },
    content: {
        marginTop: 50,
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
    btn: {
        width: 150,
        height: 40,
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        margin: 10,
        backgroundColor: '#1670f7'
    },
    btnText: {
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
    }
});

export default Cadastro;