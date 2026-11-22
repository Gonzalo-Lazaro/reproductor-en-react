import "./App.css";
import { cantantes } from "./data/cantantes";
import Encabezado from "./components/Encabezado";
import BarraProgreso from "./components/BarraProgreso";
import PanelLateral from "./components/PanelLateral";
import MiniReproductor from "./components/MiniReproductor";
import Controles from "./components/Controles";

// Poner cantantes.bisbal para cambiar de artista
const cantante = cantantes.sanz;

function App() {
  return (
    <div className="movil">
      <Encabezado artista={cantante.artista} album={cantante.album} />
      <BarraProgreso />
      <PanelLateral imagen={cantante.imagen} alt={cantante.artista} />
      <MiniReproductor />
      <Controles />
    </div>
  );
}

export default App;