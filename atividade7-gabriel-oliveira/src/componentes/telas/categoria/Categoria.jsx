import { useEffect, useState } from 'react';
import Carregando from '../../comuns/Carregando';
import CategoriaContext from './CategoriaContext';
import Formulario from './Formulario';
import Tabela from './Tabela';

const categoriasIniciais = [
  { codigo: 1, nome: 'Entradas' },
  { codigo: 2, nome: 'Pratos principais' },
  { codigo: 3, nome: 'Sobremesas' },
];

const objetoInicial = { codigo: '', nome: '' };

function Categoria() {
  const [listaObjetos, setListaObjetos] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [editar, setEditar] = useState(false);
  const [exibirForm, setExibirForm] = useState(false);
  const [objeto, setObjeto] = useState(objetoInicial);
  const [alerta, setAlerta] = useState({ status: '', message: '' });

  const recuperaCategorias = async () => {
    setCarregando(true);
    await new Promise((resolve) => setTimeout(resolve, 300));
    const categoriasSalvas = localStorage.getItem('categorias-culinarias');
    setListaObjetos(categoriasSalvas ? JSON.parse(categoriasSalvas) : categoriasIniciais);
    setCarregando(false);
  };

  useEffect(() => {
    recuperaCategorias();
  }, []);

  useEffect(() => {
    if (!carregando) {
      localStorage.setItem('categorias-culinarias', JSON.stringify(listaObjetos));
    }
  }, [listaObjetos, carregando]);

  const novoObjeto = () => {
    setEditar(false);
    setAlerta({ status: '', message: '' });
    setObjeto({ ...objetoInicial, codigo: proximoCodigo() });
    setExibirForm(true);
  };

  const editarObjeto = (codigo) => {
    const categoria = listaObjetos.find((item) => item.codigo === codigo);
    if (!categoria) return;
    setObjeto(categoria);
    setEditar(true);
    setAlerta({ status: '', message: '' });
    setExibirForm(true);
  };

  const acaoCadastrar = (event) => {
    event.preventDefault();
    const dados = { codigo: objeto.codigo, nome: objeto.nome.trim() };
    if (!dados.nome) {
      setAlerta({ status: 'warning', message: 'Preencha o nome da categoria.' });
      return;
    }

    if (editar) {
      setListaObjetos((lista) => lista.map((item) => item.codigo === dados.codigo ? dados : item));
      setAlerta({ status: 'success', message: 'Categoria atualizada com sucesso.' });
    } else {
      setListaObjetos((lista) => [...lista, dados]);
      setAlerta({ status: 'success', message: 'Categoria cadastrada com sucesso.' });
      setEditar(true);
    }
    setObjeto(dados);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setObjeto((estadoAtual) => ({ ...estadoAtual, [name]: value }));
  };

  const remover = (codigo) => {
    const categoria = listaObjetos.find((item) => item.codigo === codigo);
    if (!categoria || !window.confirm(`Excluir a categoria "${categoria.nome}"?`)) return;
    setListaObjetos((lista) => lista.filter((item) => item.codigo !== codigo));
    setAlerta({ status: 'success', message: 'Categoria removida.' });
  };

  const proximoCodigo = () => listaObjetos.reduce((maior, item) => Math.max(maior, Number(item.codigo)), 0) + 1;

  return (
    <CategoriaContext.Provider value={{ listaObjetos, alerta, remover, objeto, editar, editarObjeto, acaoCadastrar, handleChange, novoObjeto, exibirForm, setExibirForm }}>
      <Carregando carregando={carregando}>
        <Tabela />
      </Carregando>
      <Formulario />
    </CategoriaContext.Provider>
  );
}

export default Categoria;
