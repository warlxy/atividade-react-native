import axios from 'axios';

function consultarDados(){

    axios.get('http://professornilson.com/testeservico/clientes')
    
    .then(function (response) {
    console.log(response);
    }).catch(function (error) {
    console.log(error);
    
    });
    
}

function inserirDados(){

    axios.post('http://professornilson.com/testeservico/clientes'
    , {
    
    nome: getNome,
    telefone: getTelefone,
    cpf: getCpf
    }).then(function (response) {
    console.log(response);
    }).catch(function (error) {
    console.log(error);
    
    });
    
}

function alterarDados(){

    axios.put("http://professornilson.com/testeservico/clientes/"+getId
    ,
    
    {
    nome: getNome,
    telefone: getTelefone,
    cpf: getCpf
    }).then(function (response) {
    console.log(response);
    }).catch(function (error) {
    console.log(error);
    
    });
    
}

function excluirDados(){

    axios.delete("http://professornilson.com/testeservico/clientes/'+getId'")
    
    .then(function (response) {
    console.log(response);
    }).catch(function (error) {
    console.log(error);
    
    });
    
}