import './App.css';
import Community from './Component/Community/Community';
import Featured from './Component/Featured/Featured';
import Hero from './Component/Hero/Hero';
import Mission from './Component/Mission/Mission';
import Dropdown from './Component/Nav/Dropdown';
import Stories from './Component/Stories/Stories';
import React,{useState} from 'react';
// import HamDrop from './Component/Nav/hamDrop/HamDrop';
// import {BrowserRouter} from 'react-router-dom';

function App(){

  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  

  function closeModal() {
    setIsOpen(false);
  }

  
  return (
    <div className="body">
      
        <div className={modalIsOpen === true ? 'dropDownMenu' : 'dropDownMenu__links_deactive'}>
          <div className="dropDownMenu__links">

                  <ul>
                      <li className="dropDownMenu__link">Products</li>
                      <li className="dropDownMenu__link">Stories</li>
                      <li className="dropDownMenu__link">Mission</li>
                  </ul>
                  
              </div>
              <div onClick={closeModal} className="close__btn">X</div>
        </div>
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
  );
}


export default App;
