// Dos barras horizontales decorativas.
// La segunda lleva un tramo más oscuro que simula el progreso.
// Props: Porcentaje
function BarraProgreso({ porcentaje = 60 }) {
  return (
    <div className="barras">
      <div className="pista" />
      <div className="pista">
        <div className="relleno" style={{ width: `${porcentaje}%` }} />
      </div>
    </div>
  );
}

export default BarraProgreso;