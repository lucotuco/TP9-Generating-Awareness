import React, { useState, useEffect } from 'react';
import ProgressBar from "@ramonak/react-progress-bar";
import Button from 'react-bootstrap/Button';
import './CalentamientoGlobal.css';

function CalentamientoGlobal() {

    const [completed, setCompleted] = useState(50);

    useEffect(() => {
        const interval = setInterval(() => {
            if (completed < 100) {
                setCompleted(prevCompleted => prevCompleted + 1)
            }
            if (completed === 100) {
                window.location.href = '/Perdiste'
            }
            if (completed === 0) {
                window.location.href = '/Ganaste'
            }
        }, 200)

        return () => clearInterval(interval);
    }, [completed])

    const handleClick = (e) => {
        setCompleted(completed - 1)
    }

    return (
        <>
            <div className="container">
                <img src="https://images.vexels.com/media/users/3/160982/isolated/preview/1b0eb174bde37b2d0b622aa0ced410dd-planeta-tierra-globo-europa-africa-plana.png" alt="" />
                <ProgressBar className="progressBar" completed={completed} bgColor="#6db65b" height="20px" />
                <img src="https://cdn-icons-png.flaticon.com/512/2933/2933866.png" alt="Earth icon" />
                <Button onClick={handleClick}>Reducir</Button>
            </div>
        </>
    )
}

export default CalentamientoGlobal;
