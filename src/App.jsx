import { BrowserRouter, Routes, Route } from "react-router-dom";
import List from './componentes/List';
import Reciclar from "./componentes/Reciclar";
import ProblemasAmbientales from "./componentes/ProblemasAmbientales";
import CalentamientoGlobal from "./componentes/CalentamientoGlobal";
import Ganaste from "./componentes/Ganaste";
import Perdiste from "./componentes/Perdiste";
import './App.css';
import Login from "./componentes/LogIn";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<List />}></Route>
            <Route path="/Reciclar" element={<Reciclar />}></Route>
            <Route path="/ProblemasAmbientales" element={<ProblemasAmbientales />}></Route>
            <Route path="/CalentamientoGlobal" element={<CalentamientoGlobal />}></Route>
            <Route path="/Ganaste" element={<Ganaste />}></Route>
            <Route path="/Perdiste" element={<Perdiste />}></Route>
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
