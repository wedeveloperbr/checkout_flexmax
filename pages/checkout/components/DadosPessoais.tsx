"use client"

import { useState, useEffect } from "react"
import { CheckCircle } from "phosphor-react"
import { InputMask } from "@react-input/mask"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
interface DadosPessoaisProps {
  data?: {
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
  // valores default para evitar undefined
  const [formData, setFormData] = useState({
    nome: data?.nome ?? "",
    email: data?.email ?? "",
    telefone: data?.telefone ?? "",
    dataNascimento: data?.dataNascimento ?? "",
    cpf: data?.cpf ?? "",
  })

  const [validFields, setValidFields] = useState<{ [key: string]: boolean }>({})

  useEffect(() => {
    onUpdate(formData)

    const newValidFields = {
      nome: formData.nome.trim().length > 2,
      email: formData.email.includes("@") && formData.email.includes("."),
      telefone: formData.telefone.replace(/\D/g, "").length >= 10,
      dataNascimento: formData.dataNascimento.length === 10,
      cpf: formData.cpf.replace(/\D/g, "").length === 11,
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
      {/* Nome */}
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

      {/* Email */}
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

      {/* Telefone */}
      <div className="labels">Telefone (WhatsApp)</div>
      <div style={{ position: "relative" }}>
        <InputMask
          mask="(__) _____-____"
          replacement={{ _: /\d/ }}
          className="inputs"
          placeholder="(11) 9 9000-0000"
          value={formData.telefone}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleChange("telefone", e.target.value)
          }
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

      {/* Data de nascimento */}
      <div className="labels">Data de nascimento</div>
      <div style={{ position: "relative" }}>
        <InputMask
          mask="99/99/9999"
          className="inputs"
          replacement={{ 9: /\d/ }}
          placeholder="07/09/2000"
          value={formData.dataNascimento}
          onChange={(e: { target: { value: string } }) =>
            handleChange("dataNascimento", e.target.value)
          }
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

      {/* CPF */}
      <div className="labels">CPF</div>
      <div style={{ position: "relative" }}>
        <InputMask
          mask="999.999.999-99"
          replacement={{ 9: /\d/ }}
          className="inputs"
          placeholder="914.473.545-20"
          value={formData.cpf}
          onChange={(e: { target: { value: string } }) =>
            handleChange("cpf", e.target.value)
          }
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

      {/* Botão */}
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
