import { useState, type SubmitEvent } from 'react'
import form from '../../../modal.module.css'
import styles from '../auth-form.module.css'
import { getErrorMessage, useRegisterMutation } from '../../../../../../shared/api'
import { EyeIcon } from '../../../../../../shared/ui/Icons/Icons'

type RegistrationProps = {
    onSwitch?: () => void // переход ко входу
}

export const Registration = ({ onSwitch }: RegistrationProps) => {
    const [isPasswordShown, setIsPasswordShown] = useState(false)
    const [register, { isLoading, error }] = useRegisterMutation()

    const handleSubmit = async (event: SubmitEvent<HTMLFormElement>) => {
        event.preventDefault()
        const form = new FormData(event.currentTarget)

        const { data } = await register({
            name: String(form.get('name')),
            email: String(form.get('email')),
            password: String(form.get('password')),
        })

        if (data) {
            onSwitch?.()
        }
    }

    return (
        <div className={form.root}>
            <h2 className={form.title}>Создайте аккаунт</h2>
            <form className={form.form} onSubmit={handleSubmit}>
                <div className={form.field}>
                    <label htmlFor="reg-name">Имя</label>
                    <input id="reg-name" name="name" type="text" autoComplete="name" placeholder="Иван" required />
                </div>
                <div className={form.field}>
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
                <div className={form.field}>
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
                            <EyeIcon className="icon" aria-hidden="true" />
                        </button>
                    </div>
                    <small id="reg-pass-hint">Не меньше 8 символов</small>
                </div>
                {error && <p className={form.error} role="alert">{getErrorMessage(error)}</p>}
                <button type="submit" className={form.save} disabled={isLoading}>
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
