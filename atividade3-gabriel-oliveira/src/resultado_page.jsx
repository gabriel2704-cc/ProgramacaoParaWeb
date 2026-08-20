import { useContext } from "react";
import AppContext from "./AppContext";

function ExibeResultado({ voltar }) {
  // Aqui capturamos do contexto os estados que queremos usar
  const { nome, telefone, salario, inss, salarioLiquido } = useContext(AppContext);

  const formatarMoeda = (valor) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(valor);
  };

  return (
    <div>
      <h2>Resultado do Cálculo</h2>
      <p>
        <strong>Nome:</strong> {nome}
      </p>
      <p>
        <strong>Telefone:</strong> {telefone}
      </p>
      <p>
        <strong>Salário Bruto:</strong> {formatarMoeda(salario)}
      </p>
      <p>
        <strong>Contribuição INSS:</strong> {formatarMoeda(inss)}
      </p>
      <p>
        <strong>Salário Líquido:</strong> {formatarMoeda(salarioLiquido)}
      </p>
      <button onClick={voltar}>Voltar ao Início</button>
    </div>
  );
}

export default ExibeResultado;