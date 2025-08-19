import React from 'react';
import { Container } from 'reactstrap';
import css from "@/components/styles.module.css";
import {ShieldCheck} from "@phosphor-icons/react";


export default function Footer(){
    return(
        <div className={css.bgfooter}

        >
            <hr style={{opacity: 0.1}}/>
            <Container>
                <div className="mt-4 d-flex align-items-center flex-column">
                    <div className={css.info}>
                        <div>
                            <ShieldCheck size={20} color="#41DA69" />
                        </div>
                        <div>
                            Compra segura
                        </div>
                    </div>
                    <div className="mt-4 d-flex justify-content-center gap-3">
                        <div className={css.borderLogo}>
                            <img src="/mastercard.svg" alt="Logo" width="50px" style={{filter: 'grayscale(100%)', opacity: 0.8}} />
                        </div>
                        <div className={css.borderLogo}>
                            <img src="/visa.svg" alt="Logo" width="50px" style={{filter: 'grayscale(100%)', opacity: 0.8}} />
                        </div>
                        <div className={css.borderLogo}>
                            <img src="/qrcode.svg" alt="Logo" width="50px" style={{filter: 'grayscale(100%)', opacity: 0.8}} />
                        </div>
                        <div className={css.borderLogo}>
                            <img src="/elo.svg" alt="Logo" width="50px" style={{filter: 'grayscale(100%)', opacity: 0.8}} />
                        </div>
                        <div className={css.borderLogo}>
                            <img src="/hipercard.svg" alt="Logo" width="60px" style={{filter: 'grayscale(100%)', opacity: 0.8}} />
                        </div>
                        <div className={css.borderLogo}>
                            <img src="/amex.svg" alt="Logo" width="70px" style={{filter: 'grayscale(100%)', opacity: 0.8}} />
                        </div>
                        <div className={css.borderLogo}>
                            <img src="/pix.svg" alt="Logo" width="30px" style={{filter: 'grayscale(100%)', opacity: 0.8}} />
                        </div>
                    </div>
                    <div className={css.textFooter}>
                        11.458.658/0001-68 &nbsp;<span style={{opacity: 0.4}}>•</span>&nbsp; Termos de uso &nbsp;<span style={{opacity: 0.4}}>|</span>&nbsp; Política de Privacidade
                    </div>
                </div>
            </Container>
        </div>
    )
}