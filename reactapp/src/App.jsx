import React from "react";
import './App.css'
import { useState } from 'react';
import sun from "../src/assets/images/sun.png"
import moon from "../src/assets/images/moon.png"
import logo from "../src/assets/images/barbearia-logo.png"



export default function App(){

  const [darkTheme, setDarkTheme] = useState(false)
  const changeTheme = () => setDarkTheme(!darkTheme)


  return(
    <div className={darkTheme ? "dark-theme" : "clear-theme"}>
      <header>
        <div className="limit-section header">
          <img className="logo" src={logo} alt="Logo Barbearia" title='Logo Barbearia'/>
          <button className={darkTheme ? 'btn-dark' : 'btn-light'} onClick={changeTheme}>
            <img src={darkTheme ? sun : moon} alt="Imagem lua" title='Imagem lua'/>
            <p>{darkTheme ? 'Light' : 'Dark'}</p>
          </button>
        </div>
      </header>

      <section>
        <div className="banner">
        </div>
      </section>

      <main>
        <section>
          <div className="limit-section content">
            <h1>Bem-vindo a Barber Shop</h1>
            <p>Nossa barbearia sempre oferece profissionais de qualidade e estamos prontos para lidar com suas maiores expectativas.</p>
            <p>Nossos serviços são dedicados ao seu sucesso pessoal. Aqui temos uma equipe premiada que demonstrou o talento de mestres barbeiros em vários concursos de estilo. Deixe nosso barbeiro ser seu estilista pessoal e você nunca ficará desapontado.</p>
            <p className="sign">S. Kelly</p>
          </div>
        </section>
      </main>
    </div>
  )
}