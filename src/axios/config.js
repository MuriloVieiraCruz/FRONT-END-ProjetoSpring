import axios from "axios";

//Configuração de objeto global / colocando a base da url para poder usar em outras partes do código
const blogFetch = axios.create({
    baseURL: "http://localhost:8082",
    headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, OPTIONS',
        'X-Requested-With': 'XMLHttpRequest'
    },
});

export default blogFetch;