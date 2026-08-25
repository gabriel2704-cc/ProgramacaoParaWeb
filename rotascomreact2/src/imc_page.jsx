import { useState } from "react";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

function ImcPage() {
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [resultado, setResultado] = useState(null);

  const calcular = (event) => {
    event.preventDefault();
    const imc = Number(peso) / (Number(altura) * Number(altura));
    if (Number.isFinite(imc) && imc > 0) {
      let classificacao = "Obesidade grave";
      if (imc < 18.5) classificacao = "Magreza";
      else if (imc < 25) classificacao = "Normal";
      else if (imc < 30) classificacao = "Sobrepeso";
      else if (imc < 40) classificacao = "Obesidade";
      setResultado({ imc: imc.toFixed(2), classificacao });
    }
  };

  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col md={8} lg={6}>
          <Card className="shadow-sm">
            <Card.Body className="p-4">
              <Card.Title as="h1" className="h3 mb-2">Calculadora de IMC</Card.Title>
              <Card.Text className="text-muted mb-4">
                Informe seus dados para consultar o índice de massa corporal.
              </Card.Text>
              <Form onSubmit={calcular}>
                <Row>
                  <Col sm={6}>
                    <Form.Group className="mb-3" controlId="peso">
                      <Form.Label>Peso (kg)</Form.Label>
                      <Form.Control required min="1" step="0.1" type="number" value={peso} onChange={(event) => setPeso(event.target.value)} />
                    </Form.Group>
                  </Col>
                  <Col sm={6}>
                    <Form.Group className="mb-3" controlId="altura">
                      <Form.Label>Altura (m)</Form.Label>
                      <Form.Control required min="0.5" step="0.01" type="number" value={altura} onChange={(event) => setAltura(event.target.value)} />
                    </Form.Group>
                  </Col>
                </Row>
                <Button type="submit">Calcular IMC</Button>
              </Form>
              {resultado && (
                <Alert variant={resultado.classificacao === "Normal" ? "success" : "warning"} className="mt-4 mb-0">
                  <strong>IMC: {resultado.imc}</strong><br />
                  Classificação: {resultado.classificacao}
                </Alert>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default ImcPage;
