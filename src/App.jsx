import React, { useState, useEffect } from 'react';
import Modal from './components/Modal.jsx';
import './App.css';

const App = () => {
    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (event.target.classList.contains('modal-overlay')) {
                closeModal();
            }
        };

        if (modalOpen) {
            document.addEventListener('click', handleOutsideClick);
        }

        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };
    }, [modalOpen]);

    return (
        <div>
            <button onClick={openModal}>Open modal</button>
            {modalOpen && (
                <Modal isOpen={modalOpen} onClose={closeModal}>
                    <h2 className="title-modal">Modal content</h2>
                    <p className="content-modal">This is the content of the modal.</p>
                    <button onClick={closeModal}>Close</button>
                </Modal>
            )}
        </div>
    );
};

export default App;
