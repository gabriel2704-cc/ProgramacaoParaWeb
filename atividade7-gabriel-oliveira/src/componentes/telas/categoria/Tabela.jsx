import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import CategoriaContext from './CategoriaContext';

function Tabela() {
  const { alerta, listaObjetos, remover, novoObjeto, editarObjeto } = useContext(CategoriaContext);

  return (
    <>
      {alerta.message && (
        <div className={`alert alert-${alerta.status === 'success' ? 'success' : 'warning'}`} role="alert">
          {alerta.message}
        </div>
      )}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>Categorias</h2>
        <Button variant="primary" onClick={novoObjeto}>
          Novo <i className="bi bi-file-earmark-plus" aria-hidden="true"></i>
        </Button>
      </div>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Código</th>
            <th>Nome</th>
            <th className="text-center">Ações</th>
          </tr>
        </thead>
        <tbody>
          {listaObjetos.length === 0 ? (
            <tr>
              <td colSpan={3} className="text-center">Nenhuma categoria cadastrada.</td>
            </tr>
          ) : listaObjetos.map((objeto) => (
            <tr key={objeto.codigo}>
              <td>{objeto.codigo}</td>
              <td>{objeto.nome}</td>
              <td className="text-center">
                <Button variant="info" size="sm" className="me-2" onClick={() => editarObjeto(objeto.codigo)}>
                  Editar <i className="bi bi-pencil-square" aria-hidden="true"></i>
                </Button>
                <Button variant="danger" size="sm" onClick={() => remover(objeto.codigo)}>
                  Excluir <i className="bi bi-trash" aria-hidden="true"></i>
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}

export default Tabela;
