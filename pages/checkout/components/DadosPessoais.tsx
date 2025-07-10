import React from 'react';
import { Container, Row, Col } from 'reactstrap';


export default function DadosPessoais(){
    return(
        <div>
            <div>
                <h2>Dados Pessoais</h2>
                <form>
                    <div>
                        <label htmlFor="nome">Nome Completo:</label>
                        <input type="text" id="nome" name="nome" required />
                    </div>
                    <div>
                        <label htmlFor="email">E-mail:</label>
                        <input type="email" id="email" name="email" required />
                    </div>
                    <div>
                        <label htmlFor="telefone">Telefone:</label>
                        <input type="tel" id="telefone" name="telefone" required />
                    </div>
                    <button type="submit">Continuar</button>
                </form>
            </div>
        </div>
    )
}