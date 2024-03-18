import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Pressable, StyleSheet, Text, View } from 'react-native';

const Sucesso = () => {

    const navigation = useNavigation();

    const handleVoltarLogin = () => {
      navigation.navigate('Login');
    };
  
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Cadastro realizado com sucesso!</Text>
        <Pressable style={styles.btn} onPress={handleVoltarLogin}>
          <Text style={styles.btnText}>Voltar ao Login</Text>
        </Pressable>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    btn: {
      width: 150,
      height: 40,
      borderWidth: 1,
      borderRadius: 5,
      padding: 10,
      margin: 10,
      backgroundColor: '#1670f7',
    },
    btnText: {
      color: '#fff',
      fontWeight: 'bold',
      textAlign: 'center',
    },
  });
  
  export default Sucesso;
  