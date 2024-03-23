import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

export default function Header() {
  return (
    <nav className={styles.header}>
      <ul className={styles.header__links}>
        <li className={styles.link}>
          <Link to='/wordlist'>Список  слов</Link>
        </li>
        <li className={styles.link}>
          <Link to='/'>Главная</Link>
        </li>
      </ul>
    </nav>
  )
}