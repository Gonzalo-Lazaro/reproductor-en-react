import "./App.css";
import { cantantes } from "./data/cantantes";
import Encabezado from "./components/Encabezado";
import BarraProgreso from "./components/BarraProgreso";
import PanelLateral from "./components/PanelLateral";
import MiniReproductor from "./components/MiniReproductor";
import Controles from "./components/Controles";
import Casillas from "./components/Casillas";
import BarraBusqueda from "./components/BarraBusqueda";
import Carrusel from "./components/Carrusel";
import BarraNavegacion from "./components/BarraNavegacion";

// Poner cantantes.bisbal para cambiar
const cantante = cantantes.sanz;

function App() {
  return (
    <div className="movil">
      <Encabezado artista={cantante.artista} album={cantante.album} />
      <BarraProgreso />
      <PanelLateral imagen={cantante.imagen} alt={cantante.artista} />
      <MiniReproductor />
      <Controles />
      <Casillas />
      <BarraBusqueda texto={cantante.busqueda} />
      <Carrusel />
      <BarraNavegacion />
    </div>
  );
}

export default App;