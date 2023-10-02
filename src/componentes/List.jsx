import React, { useState } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';
import './List.css';
import Login from './LogIn';
import { useAuth } from '../context/AuthContext'; // Importa useAuth desde tu contexto de autenticación

function List() {
    const [modalId, setModalId] = useState(0);
    const { isAuthenticated, login, logout } = useAuth();
    const handleShowModal = (e) => {
        let id = parseInt(e.target.id);
        setShowModal(true);
        setModalId(id);
    };

    const handleCloseModal = () => setShowModal(false);
    const [showModal, setShowModal] = useState(false);
    const [modalInfo] = useState([
        {
            title: "Reciclar",
            body: "En este juego deberás elegir si el objeto que se te muestra es reciclable o no.",
            link: "/Reciclar"
        },
        {
            title: "Problemas ambientales",
            body: "En este juego deberás encontrar las palabras escondidas en la pantalla y clickearlas, para ganar debes encontrar 30.",
            link: "/ProblemasAmbientales"
        },
        {
            title: "Calentamiento global",
            body: "En este juego deberás detener el calentamiento global, para ello tendrás que clickear más rápido de lo que se calienta el planeta.",
            link: "/CalentamientoGlobal"
        }
    ]);

    return (
        <>
            <Login />
            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>{modalInfo[modalId].title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{modalInfo[modalId].body}</Modal.Body>
                <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
                Cerrar
            </Button>
            {isAuthenticated ? ( // Verifica si el usuario está autenticado
                <Button variant="primary" onClick={handleCloseModal}>   
                    <Link to={modalInfo[modalId].link} className="custom-link">
                        Jugar
                    </Link>
                </Button>
            ) : (
                <p>Inicia sesión para jugar.</p>
            )}
        </Modal.Footer>
            </Modal>
            <h1>Eco-Juegos ♻</h1>
            <ListGroup>
                <ListGroup.Item>
                    <Button id='0' onClick={handleShowModal} className="custom-button">
                        Reciclar
                    </Button>
                </ListGroup.Item>
                <ListGroup.Item>
                    <Button id='1' onClick={handleShowModal} className="custom-button">
                        Problemas ambientales
                    </Button>
                </ListGroup.Item>
                <ListGroup.Item>
                    <Button id='2' onClick={handleShowModal} className="custom-button">
                        Calentamiento global
                    </Button>
                </ListGroup.Item>
            </ListGroup>
        </>
    );
}

export default List;
