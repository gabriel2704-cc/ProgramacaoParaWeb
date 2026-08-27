const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

const ola = (request, response) => {
    response.status(200).json("Seja bem-vindo ao express!");
}

const sobre = (request, response) => {
    response.status(200).json("ISSO AQUI agora");
}

const pegaDados = (request, response) => {
    const { nome, profissao } = request.body
    response.status(200).json({ nome: nome, profissao: profissao, mensagem: "dados recebidos" })
}



const Listalivros = [
    {
        "nome": "Servidor com Express",
        "editora": "Moderna",
        "ano": "2026",
    },
    {
        "nome": "React",
        "editora": "IFSUL",
        "ano": "2000",
    },
    {
        "nome": "Node",
        "editora": "IFSUL",
        "ano": "2005",
    },
]

const livros = (request, response) => {
    response.status(200).json(Listalivros);
}


const addLivros = (request, response) => {
    const { nome, editora, ano } = request.body
    if (nome.length > 0 && editora.length > 0 && ano.length > 0) {
        Listalivros.push({ nome: nome, editora: editora, ano: ano })
        response.status(200).json("Livro add com sucesso!");

    }
    return response.status(500).json({ error: "Todos os campos são obrigatórios" });

}

const getLivroPorIndice = (request, response) => {
    const index = parseInt(request.params.index)
    const livros = Listalivros[index]
    if (livros != null) {
        response.status(200).json(livros)
    }
    return response.status(404).json({ error: "Livro não encontrado" })

}

const removerLivroPorIndice = (request, response) => {
    const index = parseInt(request.params.index)
    const livros = Listalivros[index]
    if (livros != null) {
        Listalivros.splice(index, 1);
        response.status(200).json("Livro removido")
    }
    return response.status(500).json({ error: "Livro não encontrado" })

}


app.route("/livros/:index").get(getLivroPorIndice).delete(removerLivroPorIndice);

app.route("/").get(ola).post(pegaDados);
app.route("/sobre").get(sobre);
app.route("/livros").get(livros).post(addLivros);
app.listen(3002, () => {
    console.log("servidor rodando....")
})