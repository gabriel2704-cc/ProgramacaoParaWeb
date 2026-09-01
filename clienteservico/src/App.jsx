import React, { useEffect, useState } from 'react';

function App() {
    const [mensagem, setMensagem] = useState('');
    const [novoLivro, setNovoLivro] = useState({ nome: '', editora: '', ano: '' });
    const [livros, setLivros] = useState([
        { nome: 'React', editora: 'IFSUL', ano: '2022' },
        { nome: 'Node', editora: 'Moderna', ano: '2020' }
    ]);

    const getOla = async () => {
        await fetch('http://localhost:3002')
            .then(response => response.json())
            .then(json => setMensagem(json))
            .catch(err => setMensagem('Err: ' + err));
    };

    const pegaDados = async () => {
        await fetch('http://localhost:3002', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ nome: 'aaa', profissao: 'aluno' })
        })
            .then(response => response.json())
            .then(json => setMensagem('Nome: ' + json.nome + ' Mensagem: ' + json.mensagem))
            .catch(err => setMensagem('Err: ' + err));
    };

    useEffect(() => {
        console.log('Lista de livros atualizada:', livros);
    }, [livros]);

    const alterarCampo = (event) => {
        const { name, value } = event.target;
        setNovoLivro({ ...novoLivro, [name]: value });
    };

    const cadastrarLivro = (event) => {
        event.preventDefault();

        const nome = novoLivro.nome.trim();
        const editora = novoLivro.editora.trim();
        const ano = novoLivro.ano.trim();

        if (!nome || !editora || !ano) {
            alert('Preencha nome, editora e ano antes de cadastrar.');
            return;
        }

        setLivros([...livros, { nome, editora, ano }]);
        setNovoLivro({ nome: '', editora: '', ano: '' });
    };

    const removerLivro = (index) => {
        const livrosAtualizados = livros.filter((_, i) => i !== index);
        setLivros(livrosAtualizados);
    };

    return (
        <div>
            <h1>{mensagem}</h1>
            <button onClick={() => getOla()}>Ola</button>
            <button onClick={() => pegaDados()} style={{ marginLeft: '10px' }}>Pega Dados</button>

            <form onSubmit={cadastrarLivro}>
                <div>
                    <label>
                        Nome:
                        <input
                            type="text"
                            name="nome"
                            value={novoLivro.nome}
                            onChange={alterarCampo}
                        />
                    </label>
                </div>

                <div>
                    <label>
                        Editora:
                        <input
                            type="text"
                            name="editora"
                            value={novoLivro.editora}
                            onChange={alterarCampo}
                        />
                    </label>
                </div>

                <div>
                    <label>
                        Ano:
                        <input
                            type="text"
                            name="ano"
                            value={novoLivro.ano}
                            onChange={alterarCampo}
                        />
                    </label>
                </div>

                <button type="submit">Criar Novo</button>
            </form>

            <table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Editora</th>
                        <th>Ano</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {livros.map((livro, index) => (
                        <tr key={`${livro.nome}-${index}`}>
                            <td>{livro.nome}</td>
                            <td>{livro.editora}</td>
                            <td>{livro.ano}</td>
                            <td>
                                <button type="button" onClick={() => removerLivro(index)}>
                                    Remover
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default App;