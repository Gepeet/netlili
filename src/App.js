import './App.css';
import Featured from './Component/Featured/Featured';
import Hero from './Component/Hero/Hero';
import Dropdown from './Component/Nav/Dropdown';


function App() {
  return (
    <div className="body">
      <nav>
        <h3>Adron</h3>
        <Dropdown/>
            <div className="carts">
                <h4>FR</h4>
                <span>Cart</span>
                <div className="cart__value">
                  <span>0</span>
                </div>
                <div className="hamburger">
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
      
    </div>
  );
}

export default App;
