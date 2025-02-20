import { useState } from "react";
import "./Counter.css";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="counter-container">
      <p className="counter-text">Contagem: {count}</p>
      <button className="counter-button" onClick={() => setCount(count + 1)}>
        Incrementar
      </button>
    </div>
  );
}

export default Counter;
