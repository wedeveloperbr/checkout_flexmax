"use client"

import { useState } from "react"
import { CreditCard } from "phosphor-react"
import { Row, Col } from "reactstrap"
import Link from "next/link";
import { InputMask } from "@react-input/mask"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
interface PagamentoProps {
    data: {
        tipo: string
        dados: any
    }
    onUpdate: (data: any) => void
    checkoutData: any
}

export default function Pagamento({ data, onUpdate, checkoutData }: PagamentoProps) {
    const [selectedPayment, setSelectedPayment] = useState(data.tipo || "")
    const [cardData, setCardData] = useState({
        nome: "",
        numero: "",
        validade: "",
        cvc: "",
        parcelas: "12x de R$ 10,00",
    })

    const handlePaymentSelect = (type: string) => {
        setSelectedPayment(type)
        onUpdate({ tipo: type, dados: type === "cartao" ? cardData : {} })
    }

    const handleCardChange = (field: string, value: string) => {
        const newCardData = { ...cardData, [field]: value }
        setCardData(newCardData)
        if (selectedPayment === "cartao") {
            onUpdate({ tipo: "cartao", dados: newCardData })
        }
    }

    const handlePaymentSubmit = () => {
        localStorage.setItem("checkoutData", JSON.stringify({
             ...checkoutData, pagamento: { tipo: selectedPayment, dados: cardData }
         }))
    }

    return (
        <div>
            {/* Cartão de Crédito */}
            <div
                className="cards mt-3"
                style={{
                    border: selectedPayment === "cartao" ? "2px solid #41DA69" : "1px solid #191F2D1A",
                    cursor: "pointer",
                }}
                onClick={() => handlePaymentSelect("cartao")}
            >
                <div className="d-flex align-items-center">
                    <CreditCard size={22} style={{ margin: "0 10px" }} />
                    <span className="titleCards" style={{ margin: 0 }}>
            Cartão de crédito
          </span>
                    {selectedPayment === "cartao" && (
                        <div style={{ marginLeft: "auto", color: "#41DA69", fontSize: "12px" }}>
                            <input
                                type="radio"
                                name="payment"
                                checked={selectedPayment === "cartao"}
                                onChange={() => handlePaymentSelect("cartao")}
                            />
                        </div>
                    )}
                </div>

                {selectedPayment === "cartao" && (
                    <div className="mt-3">
                        <div className="labels">Nome no cartão</div>
                        <input
                            className="inputs"
                            placeholder="Mark Zuckerberg"
                            value={cardData.nome}
                            onChange={(e) => handleCardChange("nome", e.target.value)}
                        />

                        <div className="labels">Número do cartão</div>
                        <InputMask
                            mask="9999 9999 9999 9999"
                            replacement={{ 9: /\d/ }}
                            className="inputs"
                            placeholder="1234 1234 1234 1234"
                            value={cardData.numero}
                            onChange={(e) => handleCardChange("numero", e.target.value)}
                        />

                        <Row>
                            <Col md={6}>
                                <div className="labels">Validade</div>
                                <InputMask
                                    mask="99/99"
                                    replacement={{ 9: /\d/ }}
                                    className="inputs"
                                    placeholder="MM/AA"
                                    value={cardData.validade}
                                    onChange={(e) => handleCardChange("validade", e.target.value)}
                                />
                            </Col>
                            <Col md={6}>
                                <div className="labels">CVC</div>
                                <InputMask
                                    mask="999"
                                    replacement={{ 9: /\d/ }}
                                    className="inputs"
                                    placeholder="123"
                                    value={cardData.cvc}
                                    onChange={(e) => handleCardChange("cvc", e.target.value)}
                                />
                            </Col>
                        </Row>

                        <div className="labels">Parcelamento</div>
                        <select
                            className="inputs"
                            value={cardData.parcelas}
                            onChange={(e) => handleCardChange("parcelas", e.target.value)}
                        >
                            <option>12x de R$ 10,00</option>
                            <option>6x de R$ 20,00</option>
                            <option>3x de R$ 40,00</option>
                            <option>1x de R$ 120,00</option>
                        </select>
                    </div>
                )}
            </div>

            {/* PIX */}
            <div
                className="cards mt-3"
                style={{
                    border: selectedPayment === "pix" ? "2px solid #41DA69" : "1px solid #191F2D1A",
                    cursor: "pointer",
                }}
                onClick={() => handlePaymentSelect("pix")}
            >
                <div className="d-flex align-items-center">
                    <img src="/pix.svg" style={{ margin: "0 10px"}}/>
                    <span className="titleCards" style={{ margin: 0 }}>
            PIX
          </span>
                    <div>

                    </div>
                    {selectedPayment === "pix" && <div style={{ marginLeft: "auto", color: "#41DA69", fontSize: "12px" }}>
                        <input
                            type="radio"
                            name="payment"
                            checked={selectedPayment === "pix"}
                            onChange={() => handlePaymentSelect("pix")}
                        />
                    </div>}
                </div>
            </div>

            {/* Boleto */}
            <div
                className="cards mt-3"
                style={{
                    border: selectedPayment === "boleto" ? "2px solid #41DA69" : "1px solid #191F2D1A",
                    cursor: "pointer",
                }}
                onClick={() => handlePaymentSelect("boleto")}
            >
                <div className="d-flex align-items-center">
                    <img src="/boleto.svg" style={{ margin: "0 10px" }} />
                    <span className="titleCards" style={{ margin: 0 }}>
            Boleto
          </span>
                    {selectedPayment === "boleto" && (
                        <div style={{ marginLeft: "auto", color: "#41DA69", fontSize: "12px" }}>
                            <input
                                type="radio"
                                name="payment"
                                checked={selectedPayment === "boleto"}
                                onChange={() => handlePaymentSelect("boleto")}
                            />
                        </div>
                    )}
                </div>
            </div>

            {selectedPayment && <Link href={`/checkout/sucessboleto`}>
                <button className="button-principal" onClick={() => {
                    handlePaymentSubmit();
                }}>
                    Finalizar compra
                </button>
            </Link>}
        </div>
    )
}
