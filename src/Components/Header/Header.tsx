import React from "react";
import * as Styles from "./Header.styles";

const Header: React.FC = () => {
  return (
    <Styles.Container>
      <div className="container">
        <div className="logo">
          <h1>Alisson Macedo</h1>
        </div>
        <nav className="nav">
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">Sobre</a>
            </li>
            <li>
              <a href="#projects">Projetos</a>
            </li>
            <li>
              <a href="#contact">Contato</a>
            </li>
          </ul>
        </nav>
      </div>
    </Styles.Container>
  );
};

export default Header;
