import React, { useState, useEffect } from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { FlatList } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import axios from 'axios';

const ListaContatos = (props) => {
    const [contatos, setContatos] = useState([]);

    useEffect(() => {
        const fetchContatos = async () => {
          try {
            const response = await axios.get('http://professornilson.com/testeservico/clientes');
            const fetchedContatos = response.data;
            setContatos(fetchedContatos);
          } catch (error) {
            console.error('Error fetching contacts:', error);
          }
        };
    
        fetchContatos();
      }, []);   

      return (
        <View style={styles.container}>
          <FlatList
            data={contatos}
            renderItem={({ item }) => (
              <View style={styles.contato}>
                <MaterialCommunityIcons name="account-circle" size={80} color="#1670f7" />
                <View>
                  <Text style={styles.nome}>{item.nome} {item.sobrenome}</Text>
                  <Text style={styles.telefone}>{item.telefone}</Text>
                </View>
              </View>
            )}
            keyExtractor={(item) => item.id || item.nome}
            ListEmptyComponent={() => (
                <View style={styles.textContainer}>
                    <Text style={styles.emptyText}>Nenhum contato encontrado.</Text>
                </View>
            )}
          />
        </View>
      );

};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    contato: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        borderBottomWidth: 3,
        borderColor: '#ccc'
    },
    contatoPosicionamento: {
        flexDirection: 'column',
        width: 150
    },
    nome: {
        fontWeight: 'bold',
        fontSize: 20,
    },
    telefone: {
        fontWeight: 'bold',
        fontSize: 20,
    },
    textContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    emptyText: {
        fontWeight: 'bold',
        fontSize: 20,
    },
});

export default ListaContatos;
