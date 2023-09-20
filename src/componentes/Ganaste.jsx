import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';


function Ganaste() {

    return (
        <>
            <h1>¡Ganaste!</h1>
            <Button variant="primary">
                <Link to={"/"} className="custom-link">Volver al menu</Link>
            </Button>
        </>
    );
}

export default Ganaste;
