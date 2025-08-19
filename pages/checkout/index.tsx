"use client"

import { useState } from "react"
import { Container, Row, Col } from "reactstrap"
import DadosPessoais from "@/pages/checkout/components/DadosPessoais"
import Frete from "@/pages/checkout/components/Frete"
import Pagamento from "@/pages/checkout/components/Pagamento"
import ResumoPedido from "@/pages/checkout/components/ResumoPedido"
import Oferta from "@/pages/checkout/components/Oferta"
import { CheckCircle, Package, Wallet, User } from "phosphor-react"

interface CheckoutData {
    dadosPessoais: {
        nome: string
        email: string
        telefone: string
        dataNascimento: string
        cpf: string
    }
    endereco: {
        cep: string
        endereco: string
        numero: string
        complemento: string
        cidade: string
        estado: string
        destinatario: string
    }
    frete: {
        opcao: string
        valor: number
    }
    pagamento: {
        tipo: string
        dados: any
    }
}

export default function Checkout() {
    const [currentStep, setCurrentStep] = useState(1)
    const [addOffer, setAddOffer] = useState(false)
    const [checkoutData, setCheckoutData] = useState<CheckoutData>({
        dadosPessoais: {
            nome: "",
            email: "",
            telefone: "",
            dataNascimento: "",
            cpf: "",
        },
        endereco: {
            cep: "",
            endereco: "",
            numero: "",
            complemento: "",
            cidade: "",
            estado: "",
            destinatario: "",
        },
        frete: {
            opcao: "",
            valor: 0,
        },
        pagamento: {
            tipo: "",
            dados: {},
        },
    })

    const updateCheckoutData = (section: keyof CheckoutData, data: any) => {
        setCheckoutData((prev) => {
            const updatedSection = { ...prev[section], ...data }
            if (JSON.stringify(prev[section]) === JSON.stringify(updatedSection)) {
                return prev
            }
            return {
                ...prev,
                [section]: updatedSection,
            }
        })
    }

    const nextStep = () => {
        if (currentStep < 3) {
            setCurrentStep(currentStep + 1)
        }
    }

    const isStepCompleted = (step: number) => {
        switch (step) {
            case 1:
                const { nome, email, telefone, dataNascimento, cpf } = checkoutData.dadosPessoais
                return nome && email && telefone && dataNascimento && cpf
            case 2:
                const { cep, endereco, numero, cidade, estado } = checkoutData.endereco
                return cep && endereco && numero && cidade && estado
            case 3:
                return checkoutData.pagamento.tipo !== ""
            default:
                return false
        }
    }

    return (
        <div className="bgbody">
            <div className="pt-5">
                <Container>
                    <Row>
                        <Col>
                            {/* Etapa 1: Dados Pessoais */}
                            <div className="cards">
                                <div className="d-flex align-content-center">
                                    {isStepCompleted(1) ? (
                                        <CheckCircle size={22} color="#41DA69" weight="fill" />
                                    ) : (
                                        <User size={22} color={currentStep === 1 ? "#000" : "#ccc"} />
                                    )}
                                    <h2
                                        className="titleCards"
                                        style={{
                                            color: currentStep === 1 || isStepCompleted(1) ? "#191F2D" : "#ccc",
                                        }}
                                    >
                                        Dados pessoais
                                    </h2>
                                </div>

                                {currentStep === 1 && (
                                    <DadosPessoais
                                        data={checkoutData.dadosPessoais}
                                        onUpdate={(data) => updateCheckoutData("dadosPessoais", data)}
                                        onNext={nextStep}
                                    />
                                )}

                                {isStepCompleted(1) && currentStep > 1 && (
                                    <div className="mt-3">
                                        <div style={{ fontSize: "12px", color: "#191F2DCC" }}>Nome completo</div>
                                        <div style={{ fontSize: "14px", fontWeight: "500" }}>{checkoutData.dadosPessoais.nome}</div>
                                        <div style={{ fontSize: "12px", color: "#191F2DCC", marginTop: "8px" }}>E-mail</div>
                                        <div style={{ fontSize: "14px", fontWeight: "500" }}>{checkoutData.dadosPessoais.email}</div>
                                        <div style={{ fontSize: "12px", color: "#191F2DCC", marginTop: "8px" }}>CPF</div>
                                        <div style={{ fontSize: "14px", fontWeight: "500" }}>{checkoutData.dadosPessoais.cpf}</div>
                                    </div>
                                )}
                            </div>
                        </Col>

                        <Col>
                            {/* Etapa 2: Frete */}
                            <div className="cards">
                                <div className="d-flex align-content-center">
                                    {isStepCompleted(2) ? (
                                        <CheckCircle size={22} color="#41DA69" weight="fill" />
                                    ) : (
                                        <Package size={22} color={currentStep === 2 ? "#000" : "#ccc"} />
                                    )}
                                    <h2
                                        className="titleCards"
                                        style={{
                                            color: currentStep === 2 || isStepCompleted(2) ? "#191F2D" : "#ccc",
                                        }}
                                    >
                                        Frete
                                    </h2>
                                </div>

                                {currentStep === 1 && (
                                    <div>
                                        <p className="texts">Preencha seus dados para calcular o frete.</p>
                                    </div>
                                )}

                                {currentStep === 2 && (
                                    <Frete
                                        data={checkoutData.endereco}
                                        onUpdate={(data) => updateCheckoutData("endereco", data)}
                                        onNext={nextStep}
                                    />
                                )}

                                {isStepCompleted(2) && currentStep > 2 && (
                                    <div className="mt-3">
                                        <div style={{ fontSize: "12px", color: "#191F2DCC" }}>Endereço</div>
                                        <div style={{ fontSize: "14px", fontWeight: "500" }}>
                                            {checkoutData.endereco.endereco}, {checkoutData.endereco.numero} - {checkoutData.endereco.cidade},{" "}
                                            {checkoutData.endereco.estado}
                                        </div>
                                        <div style={{ fontSize: "12px", color: "#191F2DCC", marginTop: "8px" }}>CEP</div>
                                        <div style={{ fontSize: "14px", fontWeight: "500" }}>{checkoutData.endereco.cep}</div>
                                    </div>
                                )}
                            </div>

                            {/* Etapa 3: Pagamento */}
                            <div className="cards mt-4">
                                <div className="d-flex align-content-center">
                                    {isStepCompleted(3) ? (
                                        <CheckCircle size={22} color="#41DA69" weight="fill" />
                                    ) : (
                                        <Wallet size={22} />
                                    )}
                                    <h2
                                        className="titleCards"
                                    >
                                        Pagamento
                                    </h2>
                                </div>

                                {currentStep < 3 && (
                                    <div>
                                        <p className="texts">Complete seus dados e o endereço para habilitar o pagamento.</p>
                                    </div>
                                )}

                                {currentStep === 3 && (
                                    <Pagamento 
                                        checkoutData={checkoutData}
                                        data={checkoutData.pagamento} onUpdate={(data) => updateCheckoutData("pagamento", data)} />
                                )}
                            </div>
                        </Col>

                        <Col>
                            <Oferta addOffer={addOffer} setAddOffer={setAddOffer} />
                            <ResumoPedido addOffer={addOffer} />
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}
