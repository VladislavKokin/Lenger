import { useState, type SubmitEvent } from 'react'
import styles from '../auth-form.module.css'

type AuthorizationProps = {
    onSwitch?: () => void 
}

export const Authorization = ({ onSwitch }: AuthorizationProps) => {
    const [isPasswordShown, setIsPasswordShown] = useState(false)

    const handleSubmit = (event: SubmitEvent<HTMLFormElement>) => {
        event.preventDefault()
    }

    return (
        <div className={styles.root}>
            <h2 className={styles.title}>С возвращением</h2>
            <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.field}>
                    <label htmlFor="login-email">Электронная почта</label>
                    <input
                        id="login-email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        placeholder="ivan@example.com"
                        required
                    />
                </div>
                <div className={styles.field}>
                    <label htmlFor="login-pass">Пароль</label>
                    <div className={styles.pass}>
                        <input
                            id="login-pass"
                            name="password"
                            type={isPasswordShown ? 'text' : 'password'}
                            autoComplete="current-password"
                            required
                        />
                        <button
                            type="button"
                            className={styles.eye}
                            aria-label={isPasswordShown ? 'Скрыть пароль' : 'Показать пароль'}
                            aria-pressed={isPasswordShown}
                            onClick={() => setIsPasswordShown(!isPasswordShown)}
                        >
                            <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12z" />
                                <circle cx="12" cy="12" r="3" />
                            </svg>
                        </button>
                    </div>
                </div>
                <button type="submit" className={styles.submit}>
                    Войти
                </button>
                <p className={styles.switch}>
                    Нет аккаунта?{' '}
                    <button type="button" onClick={onSwitch}>
                        Зарегистрироваться
                    </button>
                </p>
            </form>
        </div>
    )
}
