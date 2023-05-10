import React from 'react';
import './style.css';
import Logo from '../../assets/logo.png';

const Footer = () =>(
    <footer>
        <div className='largura-limitada'>
            <div className='container'>
                <div className='box'>
                    <img src={Logo} />
                </div>

                <div className='box'>
                    <h2>Endereço</h2>
                    <p>Av. Bernardino de Campos, 123 São Paulo, SP 12345-678</p>
                </div>

                <div className='box'>
                    <h2>Contato</h2>
                    <p>info@exemplo.com</p>
                    <p>Tel: (11) 5555-5555</p>
                </div>

                <div className='box'>
                    <h2>Horários</h2>
                    <p>ABERTO TODOS OS DIAS</p>
                    <p>10:00 - 22:00</p>
                </div>
            </div>

            <p>Gelateria. Orgulhosamente desenvolvida por <a href='mailto:contato.dev.vitor@gmail.com'>Vitor L.</a></p>
        </div>
    </footer>
)

export default Footer;