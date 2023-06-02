import { useState, useEffect } from "react";
import "../style/Mod.css";
import blogFetch from "../axios/config";
import Modal from "react-modal";
import MeuModal from "../components/Modal";

Modal.setAppElement("#root");

const Mod = () => {

    const [posts, setPosts] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [selectedPost, setSelectedPost] = useState(null);

    const getTodos = async () => {// atualização da pagina
        try {
            const response = await blogFetch.get("/poscontroller/todos");
            const data = response.data;
            setPosts(data);
        } catch (error) {
            console.log(error);
        }
    };
    
    useEffect(() => { // recarrega pagina
        getTodos();
    }, []);

    function deletePost(id) { // deleta os poster
        blogFetch
            .delete(`postcontroller/${id}`)
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
                console.error(error);
            });

        setPosts(posts.filter((post) => post.id !== id));
    }

    function editaPoster(event) { // altera os poster
        event.preventDefault();
        const form = event.target;
        const updatedPost = {
            id: selectedPost.id,
            titulo: form.titulo.value,
            conteudo: form.conteudo.value,
        };
        blogFetch
            .put(`postcontroller/alt`, updatedPost)
            .then((response) => {
                getTodos();
                console.log(response.data);
            })
            .catch((error) => {
                console.error(error);
            });

        

        setShowModal(false);
    }

    return (
        <div className="mod">
            <h1> Ultimos Posters </h1>
            {posts.length === 0 ? (
                <p> Não a poster no momento </p>
            ) : (
                posts.map((post) => (
                    <div className="mod" key={post.id}>
                        <h2>
                            {post.titulo}
                            <button
                                className="btnAlt"
                                onClick={() => {
                                  
                                    setSelectedPost(post);
                                    setShowModal(true);
                                   
                                }}
                            >
                                Alterar
                            </button>
                            <button className="btnDel" onClick={() => deletePost(post.id)}>
                                Deletar
                            </button>
                        </h2>
                        <p>{post.conteudo} </p>
                    </div>
                ))
            )}

            {showModal && selectedPost && (
                <MeuModal showModal={showModal} setShowModal={() => setShowModal(false)} editaPoster={editaPoster} selectedPost={selectedPost}/>
            )}

        </div>
    );
};

export default Mod
