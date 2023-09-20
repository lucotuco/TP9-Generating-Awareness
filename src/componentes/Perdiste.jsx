import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';


function Perdiste() {

    return (
        <>
            <h1>Perdiste 😢</h1>
            <Button variant="primary">
                <Link to={"/"} className="custom-link">Volver al menu</Link>
            </Button>
        </>
    );
}

export default Perdiste;