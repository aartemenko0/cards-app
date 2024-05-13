import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import logo from "../../images/logo-no-background.png";

export default function Header() {
  return (
    <header className={styles.header}>
      <div>
        <Link to="/">
          <img src={logo} alt="logo" />
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
            <Link to="*">New</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
