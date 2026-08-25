import { useState } from "react";

function Calculadora() {

  const [peso, setPeso] = useState("")
  const [altura, setAltura] = useState("")
  const [imc, setImc] = useState("")
  const [classificacao, setClassificacao] = useState("")

  const calcular = () => {

    const resultado = peso / (altura * altura)

    setImc(resultado.toFixed(2))

    if (resultado < 18.5) {
      setClassificacao("MAGREZA")
    }
    else if (resultado < 25) {
      setClassificacao("NORMAL")
    }
    else if (resultado < 30) {
      setClassificacao("SOBREPESO")
    }
    else if (resultado < 40) {
      setClassificacao("OBESIDADE")
    }
    else {
      setClassificacao("OBESIDADE GRAVE")
    }
  }

  return (
    <div>

      <p>Peso em KG:</p>

      <input
        type="number"
        value={peso}
        onChange={(e) => setPeso(e.target.value)}
      />

      <p>Altura em metros:</p>

      <input
        type="number"
        value={altura}
        onChange={(e) => setAltura(e.target.value)}
      />

      <br />
      <br />

      <button onClick={calcular}>Calcular IMC</button>

      <h2>IMC: {imc}</h2>

      <h2
        style={{
          color:
            classificacao === "SOBREPESO" || classificacao === "OBESIDADE" || classificacao === "OBESIDADE GRAVE" ? "red" : "black"
        }}
      >
        Classificação: {classificacao}
      </h2>

    </div>
  )
}

export default Calculadora;