// Foto del cantante a la izquierda y, a la derecha,
// bloques grises con el texto descriptivo.
// Props: imagen y alt
function PanelLateral({ imagen = "/img/alejandro-sanz.png", alt = "Alejandro Sanz" }) {
  // Ancho de cada bloque gris
  const anchos = [95, 65, 100, 80];

  return (
    <section className="panel">
      <img src={imagen} alt={alt} />
      <div className="textos">
        {anchos.map((ancho, i) => (
          <div key={i} className="bloque" style={{ width: `${ancho}%` }} />
        ))}
      </div>
    </section>
  );
}

export default PanelLateral;