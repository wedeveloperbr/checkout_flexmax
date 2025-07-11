"use client"

import { useState } from "react"
import { Row, Col } from "reactstrap"
import { Bag, Plus, Minus } from "phosphor-react"

interface ResumoPedidoProps {
    addOffer: boolean
}

export default function ResumoPedido({ addOffer }: ResumoPedidoProps) {
    const [quantity, setQuantity] = useState(1)
    const [coupon, setCoupon] = useState("FL3M4X200FF")
    const [couponApplied, setCouponApplied] = useState(false)

    const basePrice = 149.9
    const offerPrice = 197.9
    const subtotal = basePrice * quantity + (addOffer ? offerPrice : 0)
    const discount = couponApplied ? 39.9 : 0
    const shipping = 0
    const total = subtotal - discount + shipping

    const handleQuantityChange = (change: number) => {
        const newQuantity = quantity + change
        if (newQuantity >= 1) {
            setQuantity(newQuantity)
        }
    }

    const applyCoupon = () => {
        if (coupon.trim()) {
            setCouponApplied(true)
        }
    }

    const formatPrice = (price: number) => {
        return `R$ ${price.toFixed(2).replace(".", ",")}`
    }

    return (
        <div className="mt-4">
            <div className="cards">
                <div className="d-flex align-content-center">
                    <Bag size={22} color="#000" />
                    <h2 className="titleCards">Resumo do pedido</h2>
                </div>
                <div className="mt-4">
                    <Row>
                        <Col md={3}>
                            <img src="/produto.png" style={{ width: "100%" }} />
                        </Col>
                        <Col>
                            <div>
                                <h3 className="titleProduct">Tech T-shirt Insider - Azul Royal G</h3>
                                <div className="d-flex justify-content-between align-items-center mt-3">
                                    <div className="d-flex align-items-center">
                                        <button
                                            onClick={() => handleQuantityChange(-1)}
                                            style={{
                                                width: "24px",
                                                height: "24px",
                                                border: "1px solid #191F2D1A",
                                                background: "transparent",
                                                borderRadius: "4px",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                cursor: "pointer",
                                            }}
                                        >
                                            <Minus size={12} />
                                        </button>
                                        <span style={{ margin: "0 12px", fontSize: "14px", fontWeight: "500" }}>{quantity}</span>
                                        <button
                                            onClick={() => handleQuantityChange(1)}
                                            style={{
                                                width: "24px",
                                                height: "24px",
                                                border: "1px solid #191F2D1A",
                                                background: "transparent",
                                                borderRadius: "4px",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                cursor: "pointer",
                                            }}
                                        >
                                            <Plus size={12} />
                                        </button>
                                    </div>
                                    <div className="titleProduct">{formatPrice(basePrice)}</div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>

                <div style={{ margin: "20px 0" }}>
                    <div className="labels">Cupom</div>
                    <div className="d-flex" style={{ gap: "8px" }}>
                        <input
                            className="inputs"
                            value={coupon}
                            onChange={(e) => setCoupon(e.target.value)}
                            placeholder="Digite seu cupom"
                            style={{ flex: 1 }}
                        />
                        <button
                            onClick={applyCoupon}
                            style={{
                                padding: "10px 16px",
                                backgroundColor: "#41DA69",
                                border: "none",
                                borderRadius: "8px",
                                color: "white",
                                fontWeight: "500",
                                fontSize: "14px",
                                cursor: "pointer",
                            }}
                        >
                            Aplicar
                        </button>
                    </div>
                </div>

                <div style={{ marginTop: "20px" }}>
                    <div className="d-flex justify-content-between" style={{ marginBottom: "8px" }}>
                        <span className="textProduct">Subtotal</span>
                        <span className="textProduct">{formatPrice(subtotal)}</span>
                    </div>

                    {couponApplied && (
                        <div className="d-flex justify-content-between" style={{ marginBottom: "8px" }}>
                            <span className="textProduct">Desconto</span>
                            <span className="textProduct" style={{ color: "#41DA69" }}>
                -{formatPrice(discount)}
              </span>
                        </div>
                    )}

                    <div className="d-flex justify-content-between" style={{ marginBottom: "8px" }}>
                        <span className="textProduct">Frete</span>
                        <span className="textProduct" style={{ color: "#41DA69" }}>
              Grátis
            </span>
                    </div>

                    <hr style={{ opacity: 0.15, margin: "15px 0" }} />

                    <div className="d-flex justify-content-between">
                        <span className="titleProduct">Total</span>
                        <span className="titleProduct">{formatPrice(total)}</span>
                    </div>
                </div>

                {/* Avaliações */}
                <div style={{ marginTop: "30px" }}>
                    <div className="d-flex align-items-center mb-3">
                        <img
                            src="/placeholder.svg?height=40&width=40"
                            style={{ width: "40px", height: "40px", borderRadius: "50%", marginRight: "12px" }}
                        />
                        <div>
                            <div style={{ fontSize: "12px", fontWeight: "500" }}>Luana Weber</div>
                            <div style={{ fontSize: "12px", color: "#FFD700" }}>★★★★★</div>
                        </div>
                    </div>
                    <p style={{ fontSize: "12px", color: "#666", fontStyle: "italic" }}>
                        "Compra rápida, entrega no prazo e produto de ótima qualidade. Recomendo!"
                    </p>

                    <div className="d-flex align-items-center mb-3 mt-4">
                        <img
                            src="/placeholder.svg?height=40&width=40"
                            style={{ width: "40px", height: "40px", borderRadius: "50%", marginRight: "12px" }}
                        />
                        <div>
                            <div style={{ fontSize: "12px", fontWeight: "500" }}>Rafael Martinez</div>
                            <div style={{ fontSize: "12px", color: "#FFD700" }}>★★★★★</div>
                        </div>
                    </div>
                    <p style={{ fontSize: "12px", color: "#666", fontStyle: "italic" }}>
                        "A camiseta é super confortável e veste muito bem. Não esperava tanta qualidade por esse preço!"
                    </p>
                </div>
            </div>
        </div>
    )
}
