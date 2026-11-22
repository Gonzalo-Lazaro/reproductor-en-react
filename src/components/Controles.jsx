// Píldora gris con slider de volumen, botones de
// retroceso, play y avance, y un icono de volumen.
// Props: Volumen 
function Controles({ volumen = 40 }) {
  return (
    <div className="controles">
      <input type="range" min="0" max="100" defaultValue={volumen} />
      <button className="btn-azul">⏪</button>
      <button className="btn-azul">▶️</button>
      <button className="btn-azul">⏩</button>
      <span>🔈</span>
    </div>
  );
}

export default Controles;