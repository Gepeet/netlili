import './App.css';
import Community from './Component/Community/Community';
import Featured from './Component/Featured/Featured';
import Hero from './Component/Hero/Hero';
import Mission from './Component/Mission/Mission';
import Dropdown from './Component/Nav/Dropdown';
import Stories from './Component/Stories/Stories';
import React from 'react';
// import HamDrop from './Component/Nav/hamDrop/HamDrop';
import {BrowserRouter} from 'react-router-dom';
import Modal from 'react-modal';
import HamDrop from './Component/Nav/hamDrop/HamDrop';

const customStyles = {
  overlay:{
    background:'none',
  },
  content: {
    margin:'0',
    padding:'0',
    top: '0%',
    left: '0%',
    width:'100vw',
    height:'100vh',
    background:'none'
    // marginRight: '-50%',
    // transform: 'translate(-50%, -50%)',
    // zIndex:'1000'
  },
};

function App(){

  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <BrowserRouter>
      <div className={!modalIsOpen ? 'body' : 'body deactive'}>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        
      >
        <div className={!modalIsOpen ? 'hamdrop': 'hamdropactive'}>
          <HamDrop/>
        </div>
        
      </Modal>
        
        <nav>
          <h3>Adron</h3>
          <Dropdown/>
              <div className="carts">
                  <h4>FR</h4>
                  <span>Cart</span>
                  <div className="cart__value">
                    <span>0</span>
                  </div>
                  <div className="hamburger" onClick={openModal}>
                    <span></span>
                    <span></span>
                </div>
              </div>
              
        </nav>
        <div className="hero__container">
          <Hero/>
        </div>
        <div className="feat">
        <Featured/>
        </div>
        <Mission/>
        <Stories/>
        <Community/>
      </div>
    </BrowserRouter>
  );
}


export default App;
