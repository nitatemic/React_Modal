# @nitatemic/ReactModal

[![npm version](https://img.shields.io/npm/v/@nitatemic/reactmodal.svg)](https://www.npmjs.com/package/@nitatemic/reactmodal)

A simple modal component for React.

## Installation

You can install the package using npm or yarn:

```
npm install @nitatemic/ReactModal
```
or
```
yarn add @nitatemic/ReactModal
```

## Usage

```
import React, { useState } from 'react';
import Modal from '@nitatemic/ReactModal';

const App = () => {
    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <div>
            <button onClick={openModal}>Open Modal</button>
            <Modal isOpen={modalOpen} onClose={closeModal}>
                <h2>Modal Content</h2>
                <p>This is the content of the modal.</p>
                <button onClick={closeModal}>Close</button>
            </Modal>
        </div>
    );
};

export default App;

```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/edit/nitatemicreactmodal?file=src%2FApp.jsx)

## Props

The Modal component accepts the following props:

 - **isOpen** (boolean): Determines whether the modal is open or closed.
 - **onClose** (function): Callback function to be executed when the modal is closed.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
