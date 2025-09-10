"use client"

import { useState, useEffect } from "react"
import { CheckCircle } from "phosphor-react"
import { Row, Col, Input } from "reactstrap"
import { InputMask } from "@react-input/mask"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
interface FreteProps {
    data: {
        cep: string
        endereco: string
        numero: string
        complemento: string
        cidade: string
        estado: string
        destinatario: string
        tipo: string
    }
    onUpdate: (data: any) => void
    onNext: () => void
}

export default function Frete({ data, onUpdate, onNext }: FreteProps) {
    const [formData, setFormData] = useState(data)
    const [validFields, setValidFields] = useState<{ [key: string]: boolean }>({})
    const [selectedShipping, setSelectedShipping] = useState(data.tipo || "")

    useEffect(() => {
        onUpdate(formData)

        const newValidFields = {
            cep: formData.cep.length >= 8,
            endereco: formData.endereco.length > 5,
            numero: formData.numero.length > 0,
            cidade: formData.cidade.length > 2,
            estado: formData.estado.length === 2,
            destinatario: formData.destinatario.length > 2,
        }
        setValidFields(newValidFields)
    }, [formData, onUpdate])

    const handleChange = (field: string, value: string) => {
        setFormData((prev) => ({ ...prev, [field]: value }))
    }

    const isFormValid = Object.values(validFields).every((valid) => valid) && selectedShipping !== ""

    const handleSubmit = () => {
        if (isFormValid) {
            onNext()
        }
    }

    return (
        <div>
            <div className="labels">CEP</div>
            <div style={{ position: "relative" }}>
                <InputMask
                    mask="99999-999"
                    replacement={{ 9: /\d/ }}
                    className="inputs"
                    placeholder="00000-000"
                    value={formData.cep}
                    onChange={(e: { target: { value: string } }) => handleChange("cep", e.target.value)}
                />
                {validFields.cep && (
                    <CheckCircle
                        size={20}
                        color="#41DA69"
                        weight="fill"
                        style={{ position: "absolute", right: "12px", top: "11px" }}
                    />
                )}
            </div>

            <div className="labels">Endereço</div>
            <div style={{ position: "relative" }}>
                <input
                    className="inputs"
                    placeholder="Av. Paulista"
                    value={formData.endereco}
                    onChange={(e) => handleChange("endereco", e.target.value)}
                />
                {validFields.endereco && (
                    <CheckCircle
                        size={20}
                        color="#41DA69"
                        weight="fill"
                        style={{ position: "absolute", right: "12px", top: "11px" }}
                    />
                )}
            </div>

            <Row>
                <Col md={6}>
                    <div className="labels">Número</div>
                    <div style={{ position: "relative" }}>
                        <InputMask
                            mask="9999"
                            replacement={{ 9: /\d/ }}
                            className="inputs"
                            placeholder="23"
                            value={formData.numero}
                            onChange={(e: { target: { value: string } }) => handleChange("numero", e.target.value)}
                        />
                        {validFields.numero && (
                            <CheckCircle
                                size={20}
                                color="#41DA69"
                                weight="fill"
                                style={{ position: "absolute", right: "12px", top: "11px" }}
                            />
                        )}
                    </div>
                </Col>
                <Col md={6}>
                    <div className="labels">Complemento</div>
                    <input
                        className="inputs"
                        placeholder="Apto 100"
                        value={formData.complemento}
                        onChange={(e) => handleChange("complemento", e.target.value)}
                    />
                </Col>
            </Row>

            <Row>
                <Col md={6}>
                    <div className="labels">Cidade</div>
                    <div style={{ position: "relative" }}>
                        <input
                            className="inputs"
                            placeholder="Curitiba"
                            value={formData.cidade}
                            onChange={(e) => handleChange("cidade", e.target.value)}
                        />
                        {validFields.cidade && (
                            <CheckCircle
                                size={20}
                                color="#41DA69"
                                weight="fill"
                                style={{ position: "absolute", right: "12px", top: "11px" }}
                            />
                        )}
                    </div>
                </Col>
                <Col md={6}>
                    <div className="labels">Estado</div>
                    <div style={{ position: "relative" }}>
                        <input
                            className="inputs"
                            placeholder="PR"
                            value={formData.estado}
                            onChange={(e) => handleChange("estado", e.target.value)}
                        />
                        {validFields.estado && (
                            <CheckCircle
                                size={20}
                                color="#41DA69"
                                weight="fill"
                                style={{ position: "absolute", right: "12px", top: "11px" }}
                            />
                        )}
                    </div>
                </Col>
            </Row>

            <div className="labels">Destinatário</div>
            <div style={{ position: "relative" }}>
                <input
                    className="inputs"
                    placeholder="Mark Zuckerberg"
                    value={formData.destinatario}
                    onChange={(e) => handleChange("destinatario", e.target.value)}
                />
                {validFields.destinatario && (
                    <CheckCircle
                        size={20}
                        color="#41DA69"
                        weight="fill"
                        style={{ position: "absolute", right: "12px", top: "11px"}}
                    />
                )}
            </div>

            <div className="labels">Entrega</div>

            <div className="checkbox mt-2 p-3" style={{
                border: selectedShipping === "PAC" ? "1px solid #41DA69" : "1px solid #191F2D1A",
                background: selectedShipping === "PAC" ? "#41DA690D" : "#FFFFFF",
                }} onClick={() => setSelectedShipping("PAC")}>
                <Input
                    style={{border: 'solid 1px #191F2D'}}
                    type="radio"
                    name="shipping"
                    checked={selectedShipping === "PAC"}
                    onChange={() => setSelectedShipping("PAC")}
                />
                <div style={{ flex: 1, marginLeft: "10px" }}>
                    <div className="d-flex justify-content-between align-items-center">
                        <div>
                            <div style={{ fontWeight: "500", fontSize: "14px" }}>PAC</div>
                            <div style={{ fontSize: "12px", color: "#666" }}>Entrega em 6 dias úteis</div>
                        </div>
                        <div style={{ fontWeight: "500", color: "#41DA69" }}>Grátis</div>
                    </div>
                </div>
            </div>

            <div className="checkbox mt-2 p-3" style={{
                border: selectedShipping === "SEDEX" ? "1px solid #41DA69" : "1px solid #191F2D1A",
                background: selectedShipping === "SEDEX" ? "#41DA690D" : "#FFFFFF",
                }} onClick={() => setSelectedShipping("SEDEX")}>
                <Input
                    style={{border: 'solid 1px #191F2D'}}
                    type="radio"
                    name="shipping"
                    checked={selectedShipping === "SEDEX"}
                    onChange={() => setSelectedShipping("SEDEX")}
                />
                <div style={{ flex: 1, marginLeft: "10px" }}>
                    <div className="d-flex justify-content-between align-items-center">
                        <div>
                            <div style={{ fontWeight: "500", fontSize: "14px" }}>SEDEX</div>
                            <div style={{ fontSize: "12px", color: "#666" }}>Entrega em 4 dias úteis</div>
                        </div>
                        <div style={{ fontWeight: "500" }}>R$ 24,90</div>
                    </div>
                </div>
            </div>

            <div className="checkbox mt-2 p-3" style={{
                border: selectedShipping === "Loggi" ? "1px solid #41DA69" : "1px solid #191F2D1A",
                background: selectedShipping === "Loggi" ? "#41DA690D" : "#FFFFFF",
                }} onClick={() => setSelectedShipping("Loggi")}>
                <Input
                    style={{border: 'solid 1px #191F2D'}}
                    type="radio"
                    name="shipping"
                    checked={selectedShipping === "Loggi"}
                    onChange={() => setSelectedShipping("Loggi")}
                />
                <div style={{ flex: 1, marginLeft: "10px" }}>
                    <div className="d-flex justify-content-between align-items-center">
                        <div>
                            <div style={{ fontWeight: "500", fontSize: "14px" }}>Loggi</div>
                            <div style={{ fontSize: "12px", color: "#666" }}>Entrega em 3 dias úteis</div>
                        </div>
                        <div style={{ fontWeight: "500" }}>R$ 24,90</div>
                    </div>
                </div>
            </div>

            <button
                className="button-principal"
                onClick={handleSubmit}
                disabled={!isFormValid}
                style={{
                    opacity: isFormValid ? 1 : 0.5,
                    cursor: isFormValid ? "pointer" : "not-allowed",
                }}
            >
                Continuar para pagamento
            </button>
        </div>
    )
}
