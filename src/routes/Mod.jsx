import blogFetch from "../axios/config";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Mod.css";
import "../components/Modal.css";
//import Modal from "../components/Modal";

const Mod = () => {
  const [posts, setTodos] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);

  const getTodos = async () => {
    try {
      const response = await blogFetch.get("/todos");
      const data = response.data;
      setTodos(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  function deletePost(id) {
    blogFetch.delete(`/${id}`);
  }

  function handleEditClick(post) {
    setSelectedPost(post);
  }

  async function handleSaveClick() {
    try {
      const response = await blogFetch.put(
        `/${selectedPost.id}`,
        selectedPost
      );
      
      const updatedPost = response.data;
      setTodos((prevPosts) =>
        prevPosts.map((post) =>
          post.id === updatedPost.id ? updatedPost : post
        )
      );

      setSelectedPost(null);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="mod">
      <h1>Deletar / Editar</h1>
      {posts.length === 0 ? (
        <p>Carregando...</p>
      ) : (
        posts.map((post) => (
          <div className="post" key={post.id}>
            <h2>
              {post.id + " - " + post.titulo}
              <button
                onClick={() => deletePost(post.id)}
                className="btnDel"
              >
                Deletar
              </button>
              <button
                onClick={() => handleEditClick(post)}
                className="btnAlt"
              >
                Editar
              </button>
            </h2>
            <p>{post.conteudo}</p>
          </div>
        ))
      )}

      {selectedPost && (
      <div className="modal">
        <div className="modal-content">
          <h2>Editar post</h2>
          <form>
            <div>
              <label htmlFor="title">Título:</label>
              <input
                type="text"
                id="title"
                value={selectedPost.titulo}
                onChange={(event) =>
                  setSelectedPost({
                    ...selectedPost,
                    titulo: event.target.value,
                  })
                }
              />
            </div>
            <div>
              <label htmlFor="content">Conteúdo:</label>
              <textarea
                id="content"
                value={selectedPost.conteudo}
                onChange={(event) =>
                  setSelectedPost({
                    ...selectedPost,
                    conteudo: event.target.value,
                  })
                }
              />
            </div>
          </form>
          <button onClick={() => setSelectedPost(null)}>Cancelar</button>
          <button onClick={handleSaveClick}>Salvar</button>
        </div>
      </div>
    )}
  </div>
);
}

export default Mod;
