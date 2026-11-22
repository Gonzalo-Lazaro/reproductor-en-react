// Fila de emojis en la que el central va destacado.
// Props: emojis y centro
function Carrusel({ emojis = ["🥶", "😄", "🤠", "😈", "🤖"], centro = 2 }) {
  return (
    <div className="carrusel">
      {emojis.map((emoji, i) => (
        <span key={i} className={i === centro ? "emoji centro" : "emoji"}>
          {emoji}
        </span>
      ))}
    </div>
  );
}

export default Carrusel;