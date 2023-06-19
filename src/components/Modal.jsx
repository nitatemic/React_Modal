import React, { useState } from 'react';
import '../css/modal.css';

export default function Modal({ isOpen, onClose, displayCross, children }) {
    const [modalOpen, setModalOpen] = useState(isOpen);

    const closeModal = () => {
        setModalOpen(false);
        onClose();
    };

    if (!modalOpen) {
        console.log(modalOpen);
        console.log('Modal is closed');
        return null;
    }

    return (
        <div className="modal-overlay">
            <div className="modal-background">
                {displayCross && (
                <button className="modal-cross" onClick={closeModal}>
                    &times;
                </button>)}
                {children}
            </div>
        </div>
    );
};
