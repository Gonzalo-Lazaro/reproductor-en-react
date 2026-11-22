// Campo de búsqueda redondeado con el texto centrado.
// Props: Texto
function BarraBusqueda({ texto = "Alejandro Sanz" }) {
  return <input className="busqueda" type="text" value={texto} readOnly />;
}

export default BarraBusqueda;