import React from 'react';
import styles from './Header.module.css';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      Pomodoro tracker
    </header>
  )
}

export default Header;
