
import './App.css';
import logo from './logo.png';
import burguer from "./burguer.png"
import anitta from "./anita.png"
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p className='nameLogo'>BURGER LAND</p>
      </header>
      <div class="grid-container">
        <button class="grid-item">Porções</button>
        <button class="grid-item">Drinks</button>
        <button class="grid-item">Sobremesas</button>
        <button class="grid-item">Entradas</button>
        <button class="grid-item">Bebidas</button>
        <button class="grid-item">Especiais</button>

    </div>
    <p className='burguer'>BURGERS</p>
   
    <div class="grid-2x2">
        <div class="menu">
        <img src={burguer} className="App-logo" alt="logo" />
            <div className='pagina'>
            <p className="farmer">Farmer</p>
            <p className="description">Um delicioso hambúrguer com <br />ingredientes frescos.</p>
            </div>
        </div>
        <div class="menu">
        <img src={anitta} className="App-logo" alt="logo" />
            <div className='pagina'>
            <p className="farmer">ANITA</p>
            <p className="description">Pão manteiga, hamburger e bacon, queijo cheddar, <br />cebola, alface, picles, e geleia de pimenta</p>
            </div>
        </div>
        <div class="menu">
        <img src={burguer} className="App-logo" alt="logo" />
           <div className='pagina'>
           <p className="farmer">Salada</p>
            <p className="description">Salada fresca com <br /> legumes da estação.</p>
           </div>
        </div>
        <div class="menu">
        <img src={burguer} className="App-logo" alt="logo" />
       
            <div className='pagina'>
            <p className="farmer">Drink</p>
            <p className="description">Bebidas refrescantes para acompanhar sua refeição.</p>
            </div>
        </div>
    </div>

    </div>
  );
}

export default App;
