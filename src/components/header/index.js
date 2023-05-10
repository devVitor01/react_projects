import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

import Logo from '../../assets/logo.png';

const Header = () => (
    <header>
        <div className='largura-limitada'>
            <div className='box-header box-header1'>
                <Link to='/'><img src={Logo} /></Link>
            </div>

            <div className='box-header box-header2'>
                <nav>
                    <Link to='/' className='link'>Home</Link>
                    <Link to='/sabores' className='link'>Sabores</Link>
                    <Link to='/sobre' className='link'>Sobre</Link>
                </nav>
            </div>
        </div>
    </header>
)

export default Header;