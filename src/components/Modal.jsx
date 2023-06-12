import React, { useState } from 'react';
import '../css/modal.css';

export default function Modal({ isOpen, onClose, children }) {
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
            <div className="modal-content">
                <button className="modal-close" onClick={closeModal}>
                    &times;
                </button>
                {children}
            </div>
        </div>
    );
};
