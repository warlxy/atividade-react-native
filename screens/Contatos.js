import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button, Pressable } from 'react-native';

const Contatos = ({ navigation }) => {
    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [telefone, setTelefone] = useState('');
  
    const salvarContato = () => {
      const contato = {
        nome,
        sobrenome,
        telefone,
      };
  
      navigation.navigate('Lista de Contatos', { contato });
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
                    <Text style={styles.inputLabel}>Sobrenome</Text>
                    <View style={styles.input}>
                        <TextInput
                            style={styles.textInput}
                            onChangeText={setSobrenome}
                        />
                    </View>
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.inputLabel}>Telefone</Text>
                    <View style={styles.input}>
                        <TextInput
                            style={styles.textInput}
                            secureTextEntry={true}
                            onChangeText={setTelefone}
                        />
                    </View>
                </View>
                <Pressable
                    style={styles.btn}
                    onPress={salvarContato} 
                >
                    <Text style={styles.btnText}>Salvar</Text>
                </Pressable>
        </View>
      </View>
    );
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

export default Contatos;
