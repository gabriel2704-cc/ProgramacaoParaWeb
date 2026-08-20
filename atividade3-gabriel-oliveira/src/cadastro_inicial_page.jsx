import { useContext } from "react";
import AppContext from "./AppContext";

function CadastroInicial({ avancar }) {
  /* Aqui capturamos do contexto os estados e funções que desejamos utilizar */
  const { nome, telefone, setNome, setTelefone } = useContext(AppContext);

  return (
    <div>
      <h2> Dados Pessoais</h2>
      <label> Digite seu nome: </label>
      <input
        type="text"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
      <br />
      <br />
      <label>Digite seu telefone: </label>
      <input
        type="number"
        value={telefone}
        onChange={(e) => setTelefone(e.target.value)}
      />
      <br />
      <br />
      <button onClick={avancar}>Avançar</button>
    </div>
  );
}

export default CadastroInicial;