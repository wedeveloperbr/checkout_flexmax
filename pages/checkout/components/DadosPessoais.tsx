"use client"

import { useState, useEffect } from "react"
import { CheckCircle } from "phosphor-react"

interface DadosPessoaisProps {
    data: {
        nome: string
        email: string
        telefone: string
        dataNascimento: string
        cpf: string
    }
    onUpdate: (data: any) => void
    onNext: () => void
}

export default function DadosPessoais({ data, onUpdate, onNext }: DadosPessoaisProps) {
    const [formData, setFormData] = useState(data)
    const [validFields, setValidFields] = useState<{ [key: string]: boolean }>({})

    useEffect(() => {
        onUpdate(formData)

        // Validar campos
        const newValidFields = {
            nome: formData.nome.length > 2,
            email: formData.email.includes("@") && formData.email.includes("."),
            telefone: formData.telefone.length >= 10,
            dataNascimento: formData.dataNascimento.length === 10,
            cpf: formData.cpf.length >= 11,
        }
        setValidFields(newValidFields)
    }, [formData, onUpdate])

    const handleChange = (field: string, value: string) => {
        setFormData((prev) => ({ ...prev, [field]: value }))
    }

    const isFormValid = Object.values(validFields).every((valid) => valid)

    const handleSubmit = () => {
        if (isFormValid) {
            onNext()
        }
    }

    return (
        <div>
            <div className="labels">Nome completo</div>
            <div style={{ position: "relative" }}>
                <input
                    className="inputs"
                    placeholder="Digite seu nome completo"
                    value={formData.nome}
                    onChange={(e) => handleChange("nome", e.target.value)}
                />
                {validFields.nome && (
                    <CheckCircle
                        size={20}
                        color="#41DA69"
                        weight="fill"
                        style={{ position: "absolute", right: "12px", top: "11px" }}
                    />
                )}
            </div>

            <div className="labels">E-mail</div>
            <div style={{ position: "relative" }}>
                <input
                    className="inputs"
                    type="email"
                    placeholder="Digite seu e-mail"
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                />
                {validFields.email && (
                    <CheckCircle
                        size={20}
                        color="#41DA69"
                        weight="fill"
                        style={{ position: "absolute", right: "12px", top: "11px" }}
                    />
                )}
            </div>

            <div className="labels">Telefone (WhatsApp)</div>
            <div style={{ position: "relative" }}>
                <input
                    className="inputs"
                    placeholder="(11) 9 9000-0000"
                    value={formData.telefone}
                    onChange={(e) => handleChange("telefone", e.target.value)}
                />
                {validFields.telefone && (
                    <CheckCircle
                        size={20}
                        color="#41DA69"
                        weight="fill"
                        style={{ position: "absolute", right: "12px", top: "11px" }}
                    />
                )}
            </div>

            <div className="labels">Data de nascimento</div>
            <div style={{ position: "relative" }}>
                <input
                    className="inputs"
                    placeholder="07/09/2000"
                    value={formData.dataNascimento}
                    onChange={(e) => handleChange("dataNascimento", e.target.value)}
                />
                {validFields.dataNascimento && (
                    <CheckCircle
                        size={20}
                        color="#41DA69"
                        weight="fill"
                        style={{ position: "absolute", right: "12px", top: "11px" }}
                    />
                )}
            </div>

            <div className="labels">CPF</div>
            <div style={{ position: "relative" }}>
                <input
                    className="inputs"
                    placeholder="914.473.545-20"
                    value={formData.cpf}
                    onChange={(e) => handleChange("cpf", e.target.value)}
                />
                {validFields.cpf && (
                    <CheckCircle
                        size={20}
                        color="#41DA69"
                        weight="fill"
                        style={{ position: "absolute", right: "12px", top: "11px" }}
                    />
                )}
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
                Continuar para entrega
            </button>
        </div>
    )
}
