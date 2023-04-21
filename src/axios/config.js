import axios from "axios";

//Configuração de objeto global / colocando a base da url para poder usar em outras partes do código
const blogFetch = axios.create({
    baseURL: "http://localhost:8082/poscontroller",
    headers: {
        "Content-Type": "application/json",
    },
});

export default blogFetch;