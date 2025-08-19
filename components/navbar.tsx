import React from 'react';
import css from './styles.module.css';
import { Container, Row, Col } from 'reactstrap';
import {
    ShieldCheck
} from '@phosphor-icons/react';

export default function Navbar(){
    return(
        <div className={css.navbar}>
            <div className={css.backgroundNav}>
                <Container>
                    <Row>
                        <Col>
                            <div>
                                <img src="/logo.png" alt="Logo" style={{ width: '150px', height: 'auto' }} />
                            </div>
                        </Col>
                        <Col className="d-flex justify-content-end align-items-center">
                            <div className={css.info}>
                                <div>
                                    <ShieldCheck size={20} color="#41DA69" />
                                </div>
                                <div>
                                    Compra segura
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className={css.backgroundOferta}>
                <div className={css.textOferta}>
                    Esta oferta termina em: <span className={css.time}> 00H : 26M : 29S </span>
                </div>
            </div>
        </div>
    )
}