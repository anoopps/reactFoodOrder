import logo from '../assets/logo.jpg';
import React from 'react'
import Button from './Button.jsx';

export default function Header() {
  return <header id="main-header">
        <div id="title">
            <img src={logo} alt="restaurant app" />
            <h1>Food Order App</h1>
        </div>
        <nav>
            <Button textOnly= {true} className="button">Cart (0)</Button>
        </nav>
    </header>
  
}
