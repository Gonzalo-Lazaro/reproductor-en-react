// Fila con un botón de pausa, una barra de progreso y un botón de volumen.
// Props: Porcentaje
function MiniReproductor({ porcentaje = 40 }) {
  return (
    <div className="mini">
      <button className="btn-azul">⏸</button>
      <div className="pista">
        <div className="relleno" style={{ width: `${porcentaje}%` }} />
      </div>
      <button className="btn-gris">🔊</button>
    </div>
  );
}

export default MiniReproductor;