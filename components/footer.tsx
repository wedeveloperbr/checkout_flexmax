import React from 'react';
import { Container } from 'reactstrap';
import css from "@/components/styles.module.css";
import {ShieldCheck} from "@phosphor-icons/react";


export default function Footer(){
    return(
        <div style={{
            position: 'absolute',
            bottom: 25,
            width: '100%',
            left: '0',
            right: '0',

        }}>
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
                    <div className="mt-4 d-flex align-items-center justify-content-center gap-2">
                        <div>
                            <img src="/mastercard.svg" alt="Logo" width="50px" style={{filter: 'grayscale(100%)', opacity: 0.8}} />
                        </div>
                        <div>
                            <img src="/mastercard.svg" alt="Logo" width="50px" style={{filter: 'grayscale(100%)', opacity: 0.8}} />
                        </div>
                        <div>
                            <img src="/mastercard.svg" alt="Logo" width="50px" style={{filter: 'grayscale(100%)', opacity: 0.8}} />
                        </div>
                        <div>
                            <img src="/mastercard.svg" alt="Logo" width="50px" style={{filter: 'grayscale(100%)', opacity: 0.8}} />
                        </div>
                        <div>
                            <img src="/mastercard.svg" alt="Logo" width="50px" style={{filter: 'grayscale(100%)', opacity: 0.8}} />
                        </div>
                        <div>
                            <img src="/mastercard.svg" alt="Logo" width="50px" style={{filter: 'grayscale(100%)', opacity: 0.8}} />
                        </div>
                        <div>
                            <img src="/mastercard.svg" alt="Logo" width="50px" style={{filter: 'grayscale(100%)', opacity: 0.8}} />
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