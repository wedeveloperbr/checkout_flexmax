"use client"

import { Confetti } from "phosphor-react"
import { Row, Col } from "reactstrap"

interface OfertaProps {
    addOffer: boolean
    setAddOffer: (value: boolean) => void
}

export default function Oferta({ addOffer, setAddOffer }: OfertaProps) {
    return (
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
                <input type="checkbox" id="myCheck" checked={addOffer} onChange={(e) => setAddOffer(e.target.checked)} />
                <div className="textProduct" style={{ fontSize: 12 }}>
                    Adicionar esta oferta única ao meu pedido
                </div>
            </div>
        </div>
    )
}
