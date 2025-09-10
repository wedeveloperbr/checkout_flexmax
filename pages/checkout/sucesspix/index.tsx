"use client";

import { Clock, Copy } from "phosphor-react";
import { Col, Container, Row } from "reactstrap";
import css from "../checkout.module.css";
import { PixLogo } from "@phosphor-icons/react";

export default function SucessPix() {
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
                Finalize em até 29:39 minutos
                <br />
                para garantir seu pedido.
              </h4>
              <h6 className={css.subtitlePix}>Como pagar no PIX:</h6>
              <p className={css.infoPix}>
                1. Abra o app do seu banco no celular.
              </p>
              <p className={css.infoPix}>
                2. Vá em "Pagamentos" ou "Transferências".
              </p>
              <p className={css.infoPix}>3. Escolha PIX e selecione QR Code.</p>
              <p className={css.infoPix}>
                4. Aponte a câmera para o QR Code ou clique em
                <br /> "Copiar código" e cole no app do banco.
              </p>
              <p className={css.infoPix}>
                5. Confirme o valor e conclua o pagamento.
              </p>
            </div>
          </Col>

          <Col md={4} className="d-flex justify-content-end">
            <div className={css.containerPixRight}>
              <div className="cards">
                <div className={css.titlePixRight}>
                  <PixLogo className={css.iconPix} size={28} color="#41DA69" />
                  <br />
                  Pagamento Pix
                </div>
                <h4 className={css.subtitlePixRight}>
                  Escaneie o QRCode ou
                  <br />
                  copie o código abaixo.
                </h4>
                <p className={css.valorText}>Valor: {}</p>
                <div className="cards">
                  <img src="/QrCode.png" alt="qr code" style={{textAlign: "center"}}/>
                </div>
                <p className={css.ouText}>ou</p>
                <button className={css.botaoPix}>
                <Copy size={26}/>
                Copiar código pix</button>
              </div>
            </div>
          </Col>
        </div>
      </Row>
    </Container>
  );
}
