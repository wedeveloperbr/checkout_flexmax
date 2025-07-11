"use client"

import { useState } from "react"
import { Container, Row, Col } from "reactstrap"
import DadosPessoais from "@/pages/checkout/components/DadosPessoais"
import ResumosPedido from "@/pages/checkout/components/ResumoPedido"
import { Confetti, Package, Wallet } from "phosphor-react"

export default function Checkout() {
    const [addOffer, setAddOffer] = useState(false)

    return (
        <div className="pt-5" style={{ backgroundColor: "#FCFFFC" }}>
            <Container>
                <Row>
                    <Col>
                        <div>
                            <DadosPessoais />
                        </div>
                    </Col>
                    <Col>
                        <div className="cards">
                            <div className="d-flex align-content-center">
                                <Package size={22} color="#000" />
                                <h2 className="titleCards">Frete</h2>
                            </div>
                            <div>
                                <p className="texts">Preencha seus dados para calcular o frete.</p>
                            </div>
                        </div>
                        <div className="cards mt-4">
                            <div className="d-flex align-content-center">
                                <Wallet size={22} color="#000" />
                                <h2 className="titleCards">Pagamento</h2>
                            </div>
                            <div>
                                <p className="texts">Complete seus dados e o endereço para habilitar o pagamento.</p>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div>
                            <div className="cards">
                                <div className="d-flex align-content-center">
                                    <Confetti size={22} color="#000" />
                                    <h2 className="titleCards">Oferta</h2>
                                </div>
                                <div className="mt-4">
                                    <Row>
                                        <Col md={4}>
                                            <img src="/produto.png" style={{ width: "100%" }} />
                                        </Col>
                                        <Col className="d-flex align-items-center">
                                            <div>
                                                <h3 className="titleProduct">Oversized T-Shirt - 40% OFF</h3>
                                                <p className="textProduct">Oferta exclusiva, só disponível nesta compra.</p>
                                                <div className="mt-2 d-flex align-items-center">
                                                    <div className="valueProduct">R$ 299,90</div>
                                                    <div className="valuePromoProduct">R$ 197,90</div>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                                <div>
                                    <hr style={{ opacity: 0.15, margin: "30px 0" }} />
                                </div>
                                <div className="checkbox">
                                    <input
                                        type="checkbox"
                                        id="myCheck"
                                        checked={addOffer}
                                        onChange={(e) => setAddOffer(e.target.checked)}
                                    />
                                    <div className="textProduct" style={{ fontSize: 12 }}>
                                        Adicionar esta oferta única ao meu pedido
                                    </div>
                                </div>
                            </div>
                        </div>

                        <ResumosPedido addOffer={addOffer} />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
