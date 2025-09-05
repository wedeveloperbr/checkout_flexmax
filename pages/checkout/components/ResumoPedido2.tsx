"use client"

import { useState } from "react"
import { Row, Col } from "reactstrap"
import { Bag, Plus, Minus } from "phosphor-react"
import css from "../components/ResumoPedido2.module.css"

interface ResumoPedidoProps {
  addOffer: boolean
}

export default function ResumoPedido({ addOffer }: ResumoPedidoProps) {
  const [quantity, setQuantity] = useState(1)
  const [coupon, setCoupon] = useState("FL3M4X200FF")
  const [couponApplied, setCouponApplied] = useState(false)

  const basePrice = 149.9
  const offerPrice = 0
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
    <div>
      <div className="cards">
        {/* Título */}
        <div className="d-flex align-content-center">
          <Bag size={22} color="#000" />
          <h2 className="titleCards">Resumo do pedido</h2>
        </div>

        {/* Produto */}
        <div className="mt-2">
          <Row>
            <Col>
              <div className="d-flex align-items-center">
                {/* Imagem */}
                <img src="/produto.png" style={{ width: "80px", marginRight: "12px" }} />

                {/* Infos */}
                <div style={{ flex: 1 }}>
                  {/* Nome */}
                  <h3 className={css.infoPeca}>
                    Tech T-shirt Insider - Azul Royal G
                  </h3>

                  {/* Quantidade + preço */}
                  <div className="d-flex align-items-center mt-1">
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

                    <span style={{ margin: "0 12px", fontSize: "14px", fontWeight: "500" }}>
                      {quantity}
                    </span>

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

                    <span className="titleProduct" style={{ marginLeft: "auto" }}>
                      {formatPrice(basePrice)}
                    </span>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>

        {/* Resumo preços */}
        <div style={{ marginTop: "12px" }}>
          <div className="d-flex justify-content-between" style={{ marginBottom: "8px" }}>
            <span className="textProduct">Subtotal</span>
            <span className="textProduct">{formatPrice(subtotal)}</span>
          </div>

          {/* Cupom */}
          <div style={{ margin: "12px 0" }}>
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

          <hr style={{ opacity: 0.15, margin: "12px 0" }} />

          <div className="d-flex justify-content-between">
            <span className="titleProduct">Total</span>
            <span className="titleProduct">{formatPrice(total)}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
