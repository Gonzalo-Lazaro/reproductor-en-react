import "./App.css";
import { cantantes } from "./data/cantantes";
import Encabezado from "./components/Encabezado";

// Con cantantes.bisbal cambiamos de artista
const cantante = cantantes.sanz;

function App() {
  return (
    <div className="movil">
      <Encabezado artista={cantante.artista} album={cantante.album} />
    </div>
  );
}

export default App;