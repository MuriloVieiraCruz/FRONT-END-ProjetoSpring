//forma de comunicação com a API
import blogFetch from "../axios/config";

//Gerenciar os valores que estão nos inputs
import { useState } from "react";

import { useNavigate } from "react-router-dom";

import "../style/NewPost.css";

const NewPost = () => {
  const navigate = useNavigate();

  const [titulo,setTitulo] = useState('');
  const [conteudo,setConteudo] = useState('');

  //cria a função que vai ser disparada quando o formulario for enviado
  const createPost = async (e) => {
    e.preventDefault();

    const post = JSON.parse(JSON.stringify({titulo, conteudo, userId: 1}));

    await blogFetch.post("/inserir", post,
    );

    navigate("/");
  };

//fazer a requisição para criar um objeto na API
  return (<div className='new-post'>
    <h2>Inserir novo Post:</h2>
    <form onSubmit={(e) => createPost(e)}>
      <div className="form-control">
        <label htmlFor="title">Título</label>
        <input 
        type="text" 
        name="title" 
        id="title" 
        placeholder='Digite o título'
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label htmlFor="body">Conteúdo:</label>
        <textarea 
        name="body" 
        id="body" 
        placeholder='Digite o conteúdo'
        value={conteudo}
        //mape-ei os valores que eu preciso para estar inserindo o post no sistema
        onChange={(e) => setConteudo(e.target.value)}
        ></textarea>
        </div>
        <input type="submit" value="Criar Post" className='btn'/>
    </form>
  </div>
  //submit para fazer o envio do formulário
)};

export default NewPost