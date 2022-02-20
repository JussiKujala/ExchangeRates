import './App.css';
import { useState } from 'react';

const URL = 'http://api.exchangeratesapi.io/v1/latest?access_key='
const API_KEY = 'ec89cdb825c145576016dfbeafa6c532'

function App() {
const[eur,setEur] = useState(0);
const[gbp,setGbp] = useState(0);
const[rate,setRate] = useState(0);

  return (
      <div id="container">
        <form onSubmit={convert}>
          <div>
            <label>Eur</label>&nbsp;
            <input type="number" step="0.01" value={eur} onChange={e => setEur(e.target.value)}/>
            <output>{gbp.toFixed(2)} €</output>
            </div>
            <div>
              <button>Calculate</button>
            </div>
            </form>
      </div>
  );
}

export default App;
