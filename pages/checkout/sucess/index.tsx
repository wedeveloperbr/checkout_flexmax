"use client";

import { ShieldCheck } from "phosphor-react";
import { Container, Row, Col } from "reactstrap";
import css from "../checkout.module.css";
import { useEffect, useState } from "react";
import ResumoPedido2 from "../components/ResumoPedido2";

export default function Success() {
  const [addOffer, setAddOffer] = useState(false);
  const [formData, setFormData] = useState({
    dadosPessoais: {
      nome: "",
    },
    email: "",
    endereco: {
      endereco: "",
      cep: "",
    },
    frete: {
      opcao: "",
      valor: 0,
    },
    pagamento: {
      tipo: "",
      dados: {
        numero: "",
        nomeCartao: "",
        validade: "",
        cvv: "",
      },
    },
  });

  useEffect(() => {
    const data = localStorage.getItem("checkoutData");
    console.log("Data from localStorage:", data);
    if (data) {
      setFormData(JSON.parse(data));
    }
  }, []);

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  console.log("Form Data:", formData);
  return (
    <Container>
      <Row>
        <div className={css.container}>
          <Col md={8}>
            <div className={css.info}>
              <div className={css.infoItem}>
                <ShieldCheck size={20} color="#41DA69"/>
                Compra Realizada
              </div>

              <p className={css.infoText}>
                Muito Obrigado {formData.dadosPessoais.nome}! <br />
                Seu pedido foi realizado com sucesso.
              </p>

                <div className={css.endereco}>Endereço: {formData.endereco.endereco}</div>
                <div className={css.cep}>CEP: {formData.endereco.cep}</div>
                <div className={css.frete}>Frete: {formData.frete.opcao}</div>
                <div className={css.numero}>{formData.pagamento.dados.numero}</div>

              <div>
                <button className={css.buttonsucess}>Voltar para loja</button>
              </div>
            </div>
          </Col>

          <Col md={4} className="d-flex justify-content-end">
            <div className={css.infoTotal}>
              <ResumoPedido2 addOffer/>
            </div>
          </Col>
        </div>
      </Row>
    </Container>
  );
}
