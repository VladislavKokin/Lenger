import { useState, type SubmitEvent } from 'react'
import { useDispatch } from 'react-redux'
import form from '../../../modal.module.css'
import styles from '../auth-form.module.css'
import { EyeIcon } from '../../../../../../shared/ui/Icons/Icons'
import { getErrorMessage, useLoginMutation } from '../../../../../../shared/api'
import { setUser } from '../../../../../store/auth-slice'

type AuthorizationProps = {
    onSwitch?: () => void
    onSuccess?: () => void
}

export const Authorization = ({ onSwitch, onSuccess }: AuthorizationProps) => {
    const [isPasswordShown, setIsPasswordShown] = useState(false)
    const [login, { isLoading, error }] = useLoginMutation()
    const dispatch = useDispatch()

    const handleSubmit = async (event: SubmitEvent<HTMLFormElement>) => {
        event.preventDefault()
        const form = new FormData(event.currentTarget)

        const { data } = await login({
            email: String(form.get('email')),
            password: String(form.get('password')),
        })

        if (data?.user) {
            dispatch(setUser(data.user))
            onSuccess?.()
        }
    }

    return (
        <div className={form.root}>
            <h2 className={form.title}>С возвращением</h2>
            <form className={form.form} onSubmit={handleSubmit}>
                <div className={form.field}>
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
                <div className={form.field}>
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
                            <EyeIcon className="icon" aria-hidden="true" />
                        </button>
                    </div>
                </div>
                {error && <p className={form.error} role="alert">{getErrorMessage(error)}</p>}
                <button type="submit" className={form.save} disabled={isLoading}>
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
