import { useState, type SubmitEvent } from 'react'
import styles from '../auth-form.module.css'
import { registerUser } from '../../../../../../shared/api/auth'

type RegistrationProps = {
    onSwitch?: () => void // переход ко входу
}

export const Registration = ({ onSwitch }: RegistrationProps) => {
    const [isPasswordShown, setIsPasswordShown] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const [isLoading, setIsLoading] = useState(false)

    const handleSubmit = async (event: SubmitEvent<HTMLFormElement>) => {
        event.preventDefault()
        const form = new FormData(event.currentTarget)

        setError(null)
        setIsLoading(true)

        try {
            const request = await registerUser({
                name: String(form.get('name')),
                email: String(form.get('email')),
                password: String(form.get('password')),
            })

            if (request.error) {
                setError(request.error)
                return
            }

            onSwitch?.()
        } catch {
            setError('Не удалось связаться с сервером')
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className={styles.root}>
            <h2 className={styles.title}>Создайте аккаунт</h2>
            <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.field}>
                    <label htmlFor="reg-name">Имя</label>
                    <input id="reg-name" name="name" type="text" autoComplete="name" placeholder="Иван" required />
                </div>
                <div className={styles.field}>
                    <label htmlFor="reg-email">Электронная почта</label>
                    <input
                        id="reg-email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        placeholder="ivan@example.com"
                        required
                    />
                </div>
                <div className={styles.field}>
                    <label htmlFor="reg-pass">Пароль</label>
                    <div className={styles.pass}>
                        <input
                            id="reg-pass"
                            name="password"
                            type={isPasswordShown ? 'text' : 'password'}
                            autoComplete="new-password"
                            minLength={8}
                            required
                            aria-describedby="reg-pass-hint"
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
                    <small id="reg-pass-hint">Не меньше 8 символов</small>
                </div>
                {error && <p className={styles.error} role="alert">{error}</p>}
                <button type="submit" className={styles.submit} disabled={isLoading}>
                    Создать аккаунт
                </button>
                <p className={styles.switch}>
                    Уже есть аккаунт?{' '}
                    <button type="button" onClick={onSwitch}>
                        Войти
                    </button>
                </p>
            </form>
        </div>
    )
}
