
import './App.css';
import logo from './logo.png';
import burguer from "./burguer.png"
import anitta from "./anita.png"
import burguer2 from "./burguer2.png"
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="nameLogo">BURGER LAND</p>
      </header>
      <div class="grid-container">
        <button class="grid-item">Porções</button>
        <button class="grid-item">Drinks</button>
        <button class="grid-item">Sobremesas</button>
        <button class="grid-item">Entradas</button>
        <button class="grid-item">Bebidas</button>
        <button class="grid-item">Especiais</button>
      </div>
      <p className="burguer">BURGERS</p>

      <div class="grid-2x2">
        <div class="menu">
          <img src={burguer} className="App-logo" alt="logo" />
          <div className="pagina">
            <p className="farmer">Farmer</p>
            <p className="description">
              Um delicioso hambúrguer com <br />
              ingredientes frescos.
            </p>
          </div>
          
        </div>
        <div class="menu">
          <img src={anitta} className="App-logo" alt="logo" />
          <div className="pagina">
            <p className="farmer">ANITA</p>
            <p className="description">
              Pão manteiga, hamburger e bacon, queijo cheddar, <br />
              cebola, alface, picles, e geleia de pimenta
            </p>
          </div>
        </div>
        <div class="menu">
          <img src={burguer} className="App-logo" alt="logo" />
          <div className="pagina">
            <p className="farmer">Salada</p>
            <p className="description">
              Salada fresca com <br /> legumes da estação.
            </p>
          </div>
        </div>
        <div class="menu">
          <img src={burguer2} className="App-logo" alt="logo" />

          <div className="pagina">
            <p className="farmer">CHIMANGO</p>
            <p className="description">
              Pão manteiga, hamburger de frango empanado, queijo prato e ovo,
              alface, tomate e brocolis{" "}
            </p>
            <div className="icones">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 32 33"
              fill="none"
            >
              <path
                d="M22.25 4.5C19.6688 4.5 17.4088 5.61 16 7.48625C14.5912 5.61 12.3313 4.5 9.75 4.5C7.69528 4.50232 5.72539 5.31958 4.27248 6.77248C2.81958 8.22539 2.00232 10.1953 2 12.25C2 21 14.9738 28.0825 15.5262 28.375C15.6719 28.4533 15.8346 28.4943 16 28.4943C16.1654 28.4943 16.3281 28.4533 16.4737 28.375C17.0262 28.0825 30 21 30 12.25C29.9977 10.1953 29.1804 8.22539 27.7275 6.77248C26.2746 5.31958 24.3047 4.50232 22.25 4.5ZM16 26.35C13.7175 25.02 4 18.9613 4 12.25C4.00198 10.7256 4.60842 9.26423 5.68633 8.18633C6.76423 7.10842 8.22561 6.50198 9.75 6.5C12.1812 6.5 14.2225 7.795 15.075 9.875C15.1503 10.0584 15.2785 10.2153 15.4432 10.3257C15.6079 10.4361 15.8017 10.495 16 10.495C16.1983 10.495 16.3921 10.4361 16.5568 10.3257C16.7215 10.2153 16.8497 10.0584 16.925 9.875C17.7775 7.79125 19.8188 6.5 22.25 6.5C23.7744 6.50198 25.2358 7.10842 26.3137 8.18633C27.3916 9.26423 27.998 10.7256 28 12.25C28 18.9513 18.28 25.0188 16 26.35Z"
                fill="#FF5C00"
              />
            </svg>
          </div>
          </div>
          <div className="icones1">
           <div>
            <p className='preco'> R$ 28,00</p>
           </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
