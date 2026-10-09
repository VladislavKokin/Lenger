import { useState } from 'react'
import { AuthModal, type AuthModalMode } from '../../../../../modal/auth-modal/auth-modal'
import styles from './hero.module.css'

export const Hero = () => {
  const [isModalWindow, setIsModalWindow] = useState<AuthModalMode>(null)

  return (
    <>
      <div className={`${styles.container} ${styles.hero}`} id="top" aria-labelledby="hero-h">
        <div className={styles.sheet}>
          <div className={styles.heroText}>
            <span className={styles.eyebrow}>Учёт доходов и расходов</span>
            <h1 id="hero-h">
              Деньги любят <mark>счёт</mark>
            </h1>
            <p className={styles.lead}>
              Записывайте доходы и расходы за пару секунд, раскладывайте их по счетам и категориям —
              графики сами покажут, куда уходит бюджет.
            </p>
            <div className={styles.cta}>
              <button
                type="button"
                className={`${styles.btn} ${styles.btnLime} ${styles.btnLg}`}
                onClick={() => setIsModalWindow('register')}
              >
                Создать аккаунт
              </button>
              <a className={`${styles.btn} ${styles.btnQuiet} ${styles.btnLg}`} href="#features">
                Посмотреть возможности
              </a>
            </div>
            <p className={styles.micro}>Регистрация по почте — меньше минуты</p>
          </div>
          <div className={styles.heroVisual}>
            <div className={styles.heroPhone}>
              <img
                className={`${styles.phone} ${styles.onLight}`}
                src="/previews/light/phone.svg"
                alt="Главная страница приложения на телефоне: баланс, счета, расходы по категориям"
                loading="lazy"
              />
              <img
                className={`${styles.phone} ${styles.onDark}`}
                src="/previews/dark/phone.svg"
                alt="Главная страница приложения на телефоне: баланс, счета, расходы по категориям"
                loading="lazy"
              />
              <img
                className={`${styles.toast} ${styles.onLight}`}
                src="/previews/light/toast.svg"
                alt=""
                loading="lazy"
              />
              <img
                className={`${styles.toast} ${styles.onDark}`}
                src="/previews/dark/toast.svg"
                alt=""
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
      <AuthModal mode={isModalWindow} onChange={setIsModalWindow} />
    </>
  )
}
