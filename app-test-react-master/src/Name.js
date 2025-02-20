import { useState } from "react";

function Form() {
  const [name, setName] = useState("");

  const handleChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div>
      <header className="p">
        <input
          type="text"
          placeholder="Digite seu nome"
          value={name}
          onChange={handleChange}
        />
        <p>Olá, {name}!</p>
      </header>
    </div>
  );
}

export default Form;
