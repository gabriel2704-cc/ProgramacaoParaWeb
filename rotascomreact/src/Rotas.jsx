import { useParams } from "react-router";

const Rotas = () => {
    // capturando o parâmetro recebido na rota
    const { id } = useParams();
    return (
        <>
            <h1>Entendendo o react-router</h1>
            {id &&
                <>
                    <h1> Parâmemetro recebido: {id}</h1>
                </>
            }
        </>
    )
}

export default Rotas;