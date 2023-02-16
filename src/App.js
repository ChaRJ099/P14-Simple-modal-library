import React, { useState } from 'react';
import './app.scss';
import LightModal from './lib/light-modal';
import SimpleButton from './components/button/button';


export default function App() {
    const [modalVisible, setModalVisible] = useState(false);

    const toogleModal = (e) => {
        e.preventDefault();
        setModalVisible(!modalVisible);
    };

    return (
        <div className='test-container'>
            <LightModal onClick={toogleModal} modalVisible={modalVisible} text={"Employee created!"} />
            <SimpleButton onClick={toogleModal} />
        </div>
    )
}