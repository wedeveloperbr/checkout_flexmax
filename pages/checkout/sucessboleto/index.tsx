"use client"

import { Container, Row, Col } from 'reactstrap'
import css from "../checkout.module.css"
import { BarcodeIcon, Clock, Copy } from "@phosphor-icons/react";

export default function SucessBoleto() {
    return (
        <Container>
            <Row>
                <div className={css.container}>
                        <Col md={8}>
                            <div className={css.info}>
                                <div className={css.aguardandoPagamento}>
                                    <Clock size={32} color="#FFA600" />
                                    Aguardando pagamento
                                </div>

                                <h4 className={css.titlePix}>
                                    Finalize o pagamento em até 48
                                    <br />
                                    horas para garantir seu pedido.
                                </h4>
                                <h6 className={css.subtitlePix}>Como pagar no PIX:</h6>
                                <p className={css.infoPix}>
                                    1. Enviamos um e-mail para name@mail.com com todos os detalhes da sua compra.
                                </p>
                                <p className={css.infoPix}>
                                    2. Seu boleto já está disponível e anexado no e-mail.
                                </p>
                                <p className={css.infoPix}>3. Seu produto foi reservado por 2 dias, aguardando o pagamento.</p>
                                <p className={css.infoPix}>
                                    4. Lembre-se: o boleto vence em 48 horas.
                                </p>
                                <p className={css.infoPix}>
                                    5. Para garantir sua compra, recomendamos o pagamento o quanto antes.
                                </p>
                            </div>
                        </Col>
                    <Col md={4} className="d-flex justify-content-end align-items-center">
                        <div className={css.containerBoletoRight}>
                            <div className="cards">
                                <div className={css.titleBoletoRight}>
                                    <BarcodeIcon className={css.iconBoleto} size={28} color="#41DA69" />
                                    <br />
                                    Pagamento Pix
                                </div>
                                <h4 className={css.subtitlePixRight}>
                                    Escaneie o código de barras ou<br />
                                    copie o abaixo.
                                </h4>
                                <p className={css.valorText}>Valor: {}</p>
                                <div className="cards">
                                    <img src="/boleto.png" alt="qr code" style={{textAlign: "center"}}/>
                                </div>
                                <p className={css.ouText}>ou</p>
                                <button className={css.botaoBoleto}>
                                    <Copy size={26}/>
                                    Copiar código de barras</button>
                            </div>
                        </div>
                    </Col>
                </div>
            </Row>
        </Container>
    )
}