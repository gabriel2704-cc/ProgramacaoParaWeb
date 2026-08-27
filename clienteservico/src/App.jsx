const { useState } = require("react");

function App() {
    const [mensagem, setMensagem] = useState("");

    const getOla = async () => {
        await fetch('http://localhost:3002')
            .then(response => response.json())
            .then(json => setMensagem(json))
            .catch(err => setMensagem("Err: " + err))
    }

    const pegaDados = async () => {
        await fetch('http://localhost:3002', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ nome: "aaa", profissao: "aluno" })
        })
            .then(response => response.json())
            .then(json => setMensagem("Nome: " + json.nome + " Mensagem: " + json.mensagem))
    }


    return (
        <div>
            <h1>{mensagem}</h1>
            <button onClick={() => getOla()}>Ola</button>
            <button onClick={() => pegaDados()}>Pega Dados</button>
        </div>

    )
}

export default App;