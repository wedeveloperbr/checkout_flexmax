"use client";

import { ShieldCheck } from "phosphor-react";
import { Container, Row, Col } from "reactstrap";
import css from "../checkout.module.css";
import { useEffect, useState } from "react";
import ResumoPedido2 from "../components/ResumoPedido2";

const initialData = {
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
};

export default function Success() {
  const [formData, setFormData] = useState(initialData);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const data = localStorage.getItem("checkoutData");
      console.log("Data from localStorage:", data);
      if (data) {
        try {
          // mescla com initialData para evitar undefined
          const parsed = JSON.parse(data);
          setFormData({ ...initialData, ...parsed });
        } catch (error) {
          console.error("Erro ao parsear localStorage:", error);
        }
      }
    }
  }, []);

  console.log("Form Data:", formData);

  return (
    <Container>
      <Row>
        <div className={css.container}>
          <Col md={8}>
            <div className={css.info}>
              <div className={css.infoItem}>
                <ShieldCheck size={20} color="#41DA69" />
                Compra Realizada
              </div>

              <p className={css.infoText}>
                Muito Obrigado {formData.dadosPessoais?.nome || "Cliente"}! <br />
                Seu pedido foi realizado com sucesso.
              </p>

              <div className={css.endereco}>
                Endereço: {formData.endereco?.endereco || "Não informado"}
              </div>
              <div className={css.cep}>
                CEP: {formData.endereco?.cep || "Não informado"}
              </div>
              <div className={css.frete}>
                Frete: {formData.frete?.opcao || "Não selecionado"}
              </div>
              <div className={css.numero}>
                Cartão: {formData.pagamento?.dados?.numero || "----"}
              </div>

              <div>
                <button className={css.buttonsucess}>Voltar para loja</button>
              </div>
            </div>
          </Col>

          <Col md={4} className="d-flex justify-content-end">
            <div className={css.infoTotal}>
              <ResumoPedido2 addOffer />
            </div>
          </Col>
        </div>
      </Row>
    </Container>
  );
}
