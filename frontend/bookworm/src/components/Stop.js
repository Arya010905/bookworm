import React, { useState } from 'react';
import './stop.css';
const Stop = () => {
    const [isModalOpen, setModalOpen] = useState(false);

    const handleClick = () => {
        setModalOpen(true);
    };

    const handleClose = () => {
        setModalOpen(false);
    };

    return (
        <div className="stop-container">
            <button className="stop-button" onClick={handleClick}>
                Stop
            </button>
            {isModalOpen && (
                <div className="modal-overlay">
                    <div className="modal">
                        <h2>Recommended Books</h2>
                        <ul>
                            <li>Point 1</li>
                            <li>Point 2</li>
                            <li>Point 3</li>
                            <li>Point 4</li>
                            <li>Point 5</li>
                            <li>Point 6</li>
                            <li>Point 7</li>
                            <li>Point 8</li>
                            <li>Point 9</li>
                            <li>Point 10</li>
                        </ul>
                        <button onClick={handleClose}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Stop;