import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import {User} from "phosphor-react";


export default function DadosPessoais(){
    return(
        <div className="cards">
            <div>
                <div className="d-flex align-items-center">
                    <div>
                        <User size={22} color='#000'/>
                    </div>
                    <h2 className="titleCards">Dados Pessoais</h2>
                </div>
            </div>
            <form>
                <div>
                    <label className="labels" htmlFor="nome">Nome Completo</label>
                    <input className="inputs" placeholder="João da Silva" type="text" id="nome" name="nome" required />
                </div>
                <div>
                    <label className="labels" htmlFor="email">E-mail</label>
                    <input className="inputs" placeholder="nome@email.com" type="email" id="email" name="email" required />
                </div>
                <div>
                    <label className="labels" htmlFor="telefone">Telefone <span style={{color: '#191F2D80'}}>(WhatsApp)</span></label>
                    <input className="inputs" placeholder="(11) 9 9000-0000" type="tel" id="telefone" name="telefone" required />
                </div>
                <div>
                    <label className="labels" htmlFor="telefone">Data de nascimento</label>
                    <input className="inputs" placeholder="DD/MM/AAAA" type="tel" id="telefone" name="telefone" required />
                </div>
                <div>
                    <label className="labels" htmlFor="telefone">CPF</label>
                    <input className="inputs" placeholder="000.000.000-00" type="tel" id="telefone" name="telefone" required />
                </div>
                <button className="button-principal" type="submit">Continuar</button>
            </form>
        </div>
    )
}