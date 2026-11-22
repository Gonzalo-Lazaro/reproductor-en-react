// Encabezado: Muestra el nombre del artista, el título del álbum
// y la hora arriba a la derecha.
// Props: artista, album y hora
function Encabezado({ artista = "Alejandro Sanz", album = "Más", hora = "17:08" }) {
  return (
    <header className="encabezado">
      <span className="hora">{hora}</span>
      <h1>{artista}</h1>
      <h2>- {album} -</h2>
    </header>
  );
}

export default Encabezado;