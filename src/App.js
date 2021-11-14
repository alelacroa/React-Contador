import './App.css';
import {useState} from 'react';
import iphone from './images/image.jpg'

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="app">
      <img src={iphone} />
      <h2>Iphone 13</h2>
      <h2>Selecciona la cantidad que deseas comprar:</h2>
      <h1 className={count > 0 ? "positive" : null}>
        {count}
      </h1>
      <div className="button__wrapper">
        <button disabled={count < 1} onClick={() => setCount(count - 1)}>-</button>
        <button disabled={count > 9} onClick={() => setCount(count + 1)}>+</button>
      </div>
      <h2 className={count < 10 ? "ocultar" : null}>No puedes comprar mas de 10 unidades</h2>
    </div>
  );
}

export default App;
