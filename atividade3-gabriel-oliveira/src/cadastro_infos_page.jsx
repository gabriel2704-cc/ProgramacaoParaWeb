import { useContext } from "react";
import AppContext from "./AppContext";

function CadastroInfos({ concluir }) {
  /* Aqui capturamos do contexto os estados e funções que desejamos utilizar */
  const { qtdHoras, setQtdHoras, valHora, setvalHora } = useContext(AppContext);

  return (
    <div>
      <h2>Dados Profissionais</h2>
      <label>Digite quantas horas semanais você trabalha: </label>
      <input
        type="number"
        value={qtdHoras}
        onChange={(e) => setQtdHoras(e.target.value)}
      />
      <br />
      <br />
      <label>Digite o valor da hora trabalhada: </label>
      <input
        type="number"
        value={valHora}
        onChange={(e) => setvalHora(e.target.value)}
      />
      <br />
      <br />
      <button onClick={concluir}>Concluir</button>
    </div>
  );
}

export default CadastroInfos;