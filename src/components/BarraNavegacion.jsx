// Tres iconos en la parte inferior de la pantalla.
// Props: Iconos
function BarraNavegacion({ iconos = ["🏠", "🟪", "☰"] }) {
  return (
    <nav className="nav">
      {iconos.map((icono, i) => (
        <span key={i}>{icono}</span>
      ))}
    </nav>
  );
}

export default BarraNavegacion;