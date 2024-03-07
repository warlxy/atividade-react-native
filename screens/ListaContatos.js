import React, { useState, useEffect } from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { FlatList } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';

const ListaContatos = (props) => {
    const { route } = props;
    const [contatos, setContatos] = useState([
        { nome: 'Marcos', sobrenome: 'Andrade', telefone: '81 988553424' },
        { nome: 'Patrícia', sobrenome: 'Tavares', telefone: '81 998765332' },
        { nome: 'Rodrigo', sobrenome: 'Antunes', telefone: '81 987765525' }
    ]);

    useEffect(() => {
        if (route.params && route.params.contato) {
          const novoContato = route.params.contato;
          setContatos([...contatos, novoContato]);
        }
      }, [route.params]);      

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
                keyExtractor={(item) => item.nome}
            />
        </View>
    );

}

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
});

export default ListaContatos;
