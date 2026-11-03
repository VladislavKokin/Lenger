import { useState, type ChangeEvent, type SubmitEvent } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Modal } from '../../../../shared/ui/Modal/Modal'
import { getErrorMessage, useDeleteUserMutation, useLogoutMutation, useUpdateUserMutation } from '../../../../shared/api'
import { ROUTES } from '../../../../shared/routes/routes'
import { selectUser, setUser } from '../../../store/auth-slice'
import form from '../modal.module.css'
import styles from './settings.module.css'

const THEME_KEY = 'theme'

const isDarkTheme = () => {
    if (typeof window === 'undefined') return false
    const { theme } = document.documentElement.dataset
    return theme ? theme === 'dark' : matchMedia('(prefers-color-scheme: dark)').matches
}

type SettingsProps = {
    isOpen: boolean
    onClose: () => void
}

export const Settings = ({ isOpen, onClose }: SettingsProps) => {
    const [isDark, setIsDark] = useState(isDarkTheme)
    const [logoutUser] = useLogoutMutation()
    const [updateUser, { isLoading: isSaving, isSuccess: isSaved, error: saveError }] = useUpdateUserMutation()
    const [deleteUser, { isLoading: isDeleting, error: deleteError }] = useDeleteUserMutation()
    const user = useSelector(selectUser)
    const dispatch = useDispatch()

    const handleNameSubmit = async (event: SubmitEvent<HTMLFormElement>) => {
        event.preventDefault()
        const form = new FormData(event.currentTarget)

        const { data } = await updateUser({ name: String(form.get('name')) })

        if (data?.user) {
            dispatch(setUser(data.user))
        }
    }

    const handleDelete = async () => {
        if (!window.confirm('Удалить аккаунт? Это действие нельзя отменить.')) return

        const { error } = await deleteUser()

        if (!error) {
            window.location.assign(ROUTES.MAIN)
        }
    }

    const handleThemeChange = (event: ChangeEvent<HTMLInputElement>) => {
        const theme = event.target.checked ? 'dark' : 'light'
        document.documentElement.dataset.theme = theme
        localStorage.setItem(THEME_KEY, theme)
        setIsDark(event.target.checked)
    }

    const handleLogout = async () => {
        await logoutUser()
        window.location.assign(ROUTES.MAIN)
    }

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <div className={form.root}>
                <h2 className={form.title}>Настройки</h2>
                <form className={form.form} onSubmit={handleNameSubmit}>
                    <label className={form.field} htmlFor="settings-name">
                        Имя
                        <span className={styles.nameRow}>
                            <input
                                id="settings-name"
                                name="name"
                                type="text"
                                autoComplete="name"
                                defaultValue={user?.name}
                                pattern=".*\S.*"
                                required
                            />
                            <button type="submit" className={form.save} disabled={isSaving}>
                                Сохранить
                            </button>
                        </span>
                    </label>
                    {saveError && <p className={form.error} role="alert">{getErrorMessage(saveError)}</p>}
                    {isSaved && <p className={form.saved} role="status">Имя сохранено</p>}
                </form>
                <label className={styles.row}>
                    Сменить тему
                    <input
                        type="checkbox"
                        role="switch"
                        className={styles.switch}
                        checked={isDark}
                        onChange={handleThemeChange}
                    />
                </label>
                <button type="button" className={styles.logout} onClick={handleLogout}>
                    Выйти из аккаунта
                </button>
                <button type="button" className={styles.delete} onClick={handleDelete} disabled={isDeleting}>
                    Удалить аккаунт
                </button>
                {deleteError && <p className={form.error} role="alert">{getErrorMessage(deleteError)}</p>}
            </div>
        </Modal>
    )
}