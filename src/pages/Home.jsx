import blogFetch from "../axios/config";
import { useState, useEffect } from "react"
import { Link } from "react-router-dom";
import "../style/Home.css";

const Home = () => {

  const [posts, setTodos] = useState([]);

//Resgatar os dados da API
  const getTodos = async() => {

    try {
      //resposta da API
      const response = await blogFetch.get("/poscontroller/todos");

      const data = response.data;
      setTodos(data);
      
    } catch (error) {
      console.log(error);
    }

  }

  useEffect(() => {//aqui chamo os meus métodos

    getTodos();

  }, [])

  return (//aqui retorna os conteúdos da API
    <div className="home">
      <h1>Últimos posts</h1>
      {posts.length === 0 ? (<p>Carregando...</p>) : (
        posts.map((post) => (
          <div className="post" key={post.id}>
            <h2>{post.id + " - " + post.titulo}</h2>
            <p>{post.conteudo}</p>
            <Link to={`/posts/${post.id}`} className="btn">Ler Mais</Link>
          </div>
        ))
      )}
    </div>
  )
}

export default Home