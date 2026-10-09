import { useState } from 'react'
import { AuthModal, type AuthModalMode } from '../../../../../modal/auth-modal/auth-modal'
import styles from './header.module.css'

export const Header = () => {
    const [isModalWindow, setIsModalWindow] = useState<AuthModalMode>(null)

    return (
      <header className={styles.header}>
        <div className={`${styles.container} ${styles.headerInner}`}>
          <a className={styles.logo} href="#top">
            <i>₽</i>Мои финансы
          </a>
          <nav className={styles.nav} aria-label="Разделы страницы">
            <a href="#features">Возможности</a>
            <a href="#how">Как начать</a>
            <a href="#devices">Устройства</a>
            <a href="#faq">Вопросы</a>
          </nav>
          <div className={styles.headerActions}>
            <button
              type="button"
              className={`${styles.btn} ${styles.btnQuiet}`}
              onClick={() => setIsModalWindow("auth")}
            >
              Войти
            </button>
            <button
              type="button"
              className={`${styles.btn} ${styles.btnLime}`}
              onClick={() => setIsModalWindow("register")}
            >
              Создать аккаунт
            </button>
          </div>
        </div>
        <AuthModal mode={isModalWindow} onChange={setIsModalWindow} />
      </header>
    );
}