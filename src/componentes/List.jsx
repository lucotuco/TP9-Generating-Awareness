import React, { useState } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';
import './List.css';
import { useAuth,AuthContext  } from '../context/AuthContext'; // Importa useAuth


function List() {

    const [modalId, setModalId] = useState(0)
    const { user, login, logout } = useAuth(); // Obtiene funciones y estado de autenticación
    const handleShowModal = (e) => {
        let id = parseInt(e.target.id)
        setShowModal(true)
        setModalId(id)
    }
    
    const handleCloseModal = () => setShowModal(false)
    const [showModal, setShowModal] = useState(false)
    const [modalInfo, setModalInfo] = useState([
    {
        title: "Reciclar",
        body: "En este juego deberas de elegir si el objeto que se te muestra es reciclable o no.",
        link: "/Reciclar"
    },
    {
        title: "Problemas ambientales",
        body: "En este juego deberas encontar las palabras escondidas en la pantalla y clickearlas, para ganar debes encontrar 30.",
        link: "/ProblemasAmbientales"
    },
    {
        title: "Calentamiento global",
        body: "En este juego deberas detener el calentamiento global, para ello tendras que clickear mas rapido que lo que se calienta el planeta.",
        link: "/CalentamientoGlobal"
    }
])


    return (
        <> 
        
            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>{modalInfo[modalId].title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {modalInfo[modalId].body}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>
                        Cerrar
                    </Button>
                    <Button variant="primary" onClick={handleCloseModal}>
                        <Link to={modalInfo[modalId].link} className="custom-link">Jugar</Link>
                    </Button>
                </Modal.Footer>
            </Modal>
            <h1>Eco-Juegos ♻</h1>
            <ListGroup>
                <ListGroup.Item>
                    <Button id='0' onClick={handleShowModal} className="custom-button" >Reciclar</Button>
                </ListGroup.Item>
                <ListGroup.Item>
                    <Button id='1' onClick={handleShowModal} className="custom-button" >Problemas ambientales</Button>
                </ListGroup.Item>
                <ListGroup.Item>
                    <Button id='2' onClick={handleShowModal} className="custom-button" >Calentamiento global</Button>
                </ListGroup.Item>
            </ListGroup>
        </>
    );
}

export default List;
