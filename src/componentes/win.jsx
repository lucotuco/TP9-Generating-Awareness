import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import './List.css';

function CalentamientoGlobal() {
    return (
        <ListGroup>
            <ListGroup.Item><Button className='boton' variant="light">juego</Button></ListGroup.Item>
        </ListGroup>
    );
}

export default CalentamientoGlobal;