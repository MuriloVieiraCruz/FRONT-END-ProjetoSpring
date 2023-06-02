import Modal from "react-modal";

export default function MeuModal({showModal, setShowModal, editaPoster,selectedPost }) {

    return (
        <Modal isOpen={showModal} onRequestClose={() => setShowModal()} className="modal">
            <form onSubmit={editaPoster} className="modalForm" >
                <h2>Editar Post</h2>
                <label htmlFor="titulo" className="modalLabel">Título:</label>
                <input
                    className="modalInput"
                    type="text"
                    id="titulo"
                    name="titulo"
                    defaultValue={selectedPost.titulo}
                />
                <label htmlFor="conteudo">Conteúdo:</label>
                <input
                    className="modalInput"
                    id="conteudo"
                    name="conteudo"
                    defaultValue={selectedPost.conteudo}
                ></input>
                <button type="submit" className="modalBtn" >Salvar</button >
                <button onClick={() => setShowModal()} className="modalBtn">Cancelar</button>
            </form>
        </Modal>
    )
}
