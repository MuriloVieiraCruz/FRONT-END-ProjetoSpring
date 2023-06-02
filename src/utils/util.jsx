//criar função para autenticar / fazer uma chamada para o serviço
import blogFetch from "../axios/config";

//função que vai acessar a API
export async function LoginRequest (email,  password) {
    try {
        const request = await blogFetch.post('/login/autenticar',{email, password});

        return request.data;
    } catch (error) {
        return null;
    }
}