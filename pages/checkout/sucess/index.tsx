"use client"

import { ShieldCheck } from "phosphor-react";
import { Container, Row, Col, Form } from "reactstrap";
import css from "@/components/styles.module.css";
import { useEffect, useState } from "react";
import ResumoPedido from "../components/ResumoPedido";

export default function Success() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        endereco: "",
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
        <div className="py-5">
            <Container>
                <Row className="justify-content-center">
                    <Col md={6} className="text-center">
                        <div className="mb-3">
                            <ShieldCheck size={48} color="#41DA69" weight="fill" />
                        </div>

                        <div className={css.info}>
                            <div>
                                <ShieldCheck size={20} color="#41DA69" />
                            </div>
                            <div>
                                Compra Realizada
                            </div>
                            <div>

                            </div>
                        </div>

                        <p className="text-muted mt-2">
                            Muito Obrigado {formData.dadosPessoais.nome}!
                            Seu pedido foi feito com sucesso.
                        </p>

                        <div>Endereço</div>
                        <div>
                            <input
                                className="inputs"
                                placeholder="Av. Paulista"
                                value={formData.endereco.endereco}
                                onChange={(e) => handleChange("endereco", e.target.value)}
                            />
                        </div>

                        <div>CEP</div>
                        <div>
                            <input
                                className="inputs"
                                placeholder="12345-678"
                                value={formData.endereco.cep}
                                onChange={(e) => handleChange("cep", e.target.value)}
                            />
                        </div>

                        <div className="mt-4">
                            <button className="btn btn-success px-4">Voltar à loja</button>
                        </div>
                    </Col>

                    <Col>
                        <ResumoPedido />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
