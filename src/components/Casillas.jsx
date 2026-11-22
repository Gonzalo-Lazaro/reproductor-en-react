import { useRef, useEffect } from "react";

// Columna: Tres casillas (desmarcada, marcada e indeterminada).
function Columna() {
  const indeterminada = useRef(null);

  useEffect(() => {
    indeterminada.current.indeterminate = true;
  }, []);

  return (
    <div className="columna">
      <label><input type="checkbox" /> not selected</label>
      <label><input type="checkbox" defaultChecked /> selected</label>
      <label><input type="checkbox" ref={indeterminada} /> indeterminate</label>
    </div>
  );
}

// Casillas: Dos columnas idénticas.
function Casillas() {
  return (
    <div className="casillas">
      <Columna />
      <Columna />
    </div>
  );
}

export default Casillas;