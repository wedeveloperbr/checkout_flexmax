import css from './checkout.module.css';
import { Container, Row, Col } from 'reactstrap';


export default function Checkout(){
    return(
        <div>
            <Container>
                <Row>
                    <Col>
                        <div>
                            <div className={css.card}>

                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className={css.card}>

                        </div>
                    </Col>
                    <Col>
                        <div>
                            <img src="/logo.png" alt="Logo" style={{ width: '150px', height: 'auto' }} />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}