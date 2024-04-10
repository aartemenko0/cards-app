import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import logo from "../../images/logo-no-background.png";

export default function Header() {
  return (
    <header>
      <div className={styles.header__logo}>
        <Link to="/">
          <img src={logo} alt="logo" className={styles.logo} />
        </Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/game">Слайдер</Link>{" "}
            {/* Ссылка на страницу со слайдером */}
          </li>
          <li>
            <Link to="/">Главная</Link> {/* Ссылка на главную страницу */}
          </li>
          <li>
            <Link to="/link3">Ссылка 3</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
