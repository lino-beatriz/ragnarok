import React from 'react';
import './styles.css';
import Logo from '../../images/logo.png';

const Header = () => (
    <header id="main-header">
        <div id="logo">
            <img src={Logo} alt="Ragnarok" title="Ragnarok"/>
        </div>

        <div id="search-field">
            <input type="text" id="txt-search" placeholder="Qual jogo você procura?"/>
        </div>
    </header>
);

export default Header;