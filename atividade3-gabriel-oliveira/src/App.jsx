import { useState } from "react";
import AppContext from "./AppContext";
import TelaInicial from "./tela_inicial_page";
import CadastroInicial from "./cadastro_inicial_page";
import CadastroInfos from "./cadastro_infos_page";
import ExibeResultado from "./resultado_page";

function App() {
  /* Usando Contexto API é possível centralizar todas as funções e estados em um componente principal */
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [qtdHoras, setQtdHoras] = useState("");
  const [valHora, setvalHora] = useState("");
  const [salario, setSalario] = useState(0);
  const [inss, setInss] = useState(0);
  const [salarioLiquido, setSalLiquido] = useState(0);
  const [telaAtual, setTelaAtual] = useState("inicial");

  const calculaSalario = () => {
    const salarioBruto = ((Number(qtdHoras) * Number(valHora)) * 5);
    setSalario(salarioBruto);
    calculaInss(salarioBruto);
  };

  const calculaInss = (salarioBruto) => {
    let valorInss = 0;
    
    if (salarioBruto <= 1621.00) {
      valorInss = salarioBruto * 0.075;
    } else if (salarioBruto <= 2902.84) {
      valorInss = salarioBruto * 0.09;
    } else if (salarioBruto <= 4354.27) {
      valorInss = salarioBruto * 0.12;
    } else if (salarioBruto <= 8475.55) {
      valorInss = salarioBruto * 0.14;
    } else {
      valorInss = salarioBruto * 0.14;
    }
    
    setInss(valorInss);
    setSalLiquido(salarioBruto - valorInss);
  };

  const avancarTelaInicial = () => {
    setTelaAtual("cadastroInicial");
  };

  const avancarCadastroInicial = () => {
    setTelaAtual("cadastroInfos");
  };

  const concluir = () => {
    calculaSalario();
    setTelaAtual("resultado");
  };

  const voltar = () => {
    setTelaAtual("inicial");
  };

  const renderTela = () => {
    switch (telaAtual) {
      case "inicial":
        return <TelaInicial avancar={avancarTelaInicial} />;
      case "cadastroInicial":
        return <CadastroInicial avancar={avancarCadastroInicial} />;
      case "cadastroInfos":
        return <CadastroInfos concluir={concluir} />;
      case "resultado":
        return <ExibeResultado voltar={voltar} />;
      default:
        return <TelaInicial avancar={avancarTelaInicial} />;
    }
  };

  return (
    <AppContext.Provider
      value={{
        nome,
        setNome,
        telefone,
        setTelefone,
        qtdHoras,
        setQtdHoras,
        valHora,
        setvalHora,
        salario,
        inss,
        salarioLiquido,
        telaAtual,
        setTelaAtual,
      }}
    >
      <div className="App">{renderTela()}</div>
    </AppContext.Provider>
  );
}

export default App;