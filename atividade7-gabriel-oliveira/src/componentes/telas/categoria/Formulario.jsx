import { useContext } from 'react';
import Alerta from '../../comuns/Alerta';
import CampoEntrada from '../../comuns/CampoEntrada';
import Dialogo from '../../comuns/Dialogo';
import CategoriaContext from './CategoriaContext';
import Col from 'react-bootstrap/Col';

function Formulario() {
  const { objeto, handleChange, acaoCadastrar, alerta, exibirForm, setExibirForm } = useContext(CategoriaContext);

  return (
    <Dialogo
      id="modalCategoria"
      idform="formularioCategoria"
      titulo="Categoria do restaurante"
      acaoCadastrar={acaoCadastrar}
      exibirForm={exibirForm}
      setExibirForm={setExibirForm}
    >
      <Alerta alerta={alerta} />
      <Col xs={12}>
        <CampoEntrada
          value={objeto.codigo}
          id="txtCodigo"
          name="codigo"
          label="Código"
          tipo="number"
          onchange={handleChange}
          readonly
          maxCaracteres={5}
        />
      </Col>
      <Col xs={12}>
        <CampoEntrada
          value={objeto.nome}
          id="txtNome"
          name="nome"
          label="Nome"
          tipo="text"
          onchange={handleChange}
          msgvalido="Campo nome OK!"
          msginvalido="Informe o nome"
          requerido
          maxCaracteres={40}
        />
      </Col>
    </Dialogo>
  );
}

export default Formulario;
