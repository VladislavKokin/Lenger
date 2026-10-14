import { useState } from 'react'
import { AuthModal, type AuthModalMode } from '../../../../../modal/auth-modal/auth-modal'
import styles from './cta.module.css'

export const Cta = () => {
  const [isModalWindow, setIsModalWindow] = useState<AuthModalMode>(null)

  return (
    <section className={`container ${styles.cta}`} aria-labelledby="cta-h">
      <div className={styles.band}>
        <div>
          <h2 className="section-title" id="cta-h">Начните с одного счёта</h2>
          <p>
            Добавьте карту или кошелёк и запишите первую трату — через неделю станет видно, куда
            уходят деньги.
          </p>
        </div>
        <div className={styles.actions}>
          <button
            type="button"
            className={styles.btn}
            onClick={() => setIsModalWindow('register')}
          >
            Создать аккаунт
          </button>
          <button type="button" className={styles.link} onClick={() => setIsModalWindow('auth')}>
            Уже есть аккаунт? Войти
          </button>
        </div>
      </div>
      <AuthModal mode={isModalWindow} onChange={setIsModalWindow} />
    </section>
  )
}
