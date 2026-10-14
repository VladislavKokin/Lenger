import { AnimatePresence, motion } from 'motion/react'
import { Modal } from '../../../../shared/ui/Modal/Modal'
import { Authorization, Registration } from './components'
import styles from './auth-modal.module.css'

export type AuthModalMode = 'auth' | 'register' | null

type AuthModalProps = {
    mode: AuthModalMode
    onChange: (mode: AuthModalMode) => void
}

const tabs = [
    { mode: 'auth', label: 'Вход' },
    { mode: 'register', label: 'Регистрация' },
] as const

export const AuthModal = ({ mode, onChange }: AuthModalProps) => {
    const offset = mode === 'register' ? 16 : -16

    return (
        <Modal isOpen={mode !== null} onClose={() => onChange(null)}>
            <div className={styles.root}>
                <div className={styles.brand}>
                    <i>₽</i>Мои финансы
                </div>
                <div
                    className={`${styles.tabs} ${mode === 'register' ? styles.tabsRegister : ''}`}
                    role="tablist"
                    aria-label="Вход или регистрация"
                >
                    {tabs.map((tab) => (
                        <button
                            key={tab.mode}
                            type="button"
                            role="tab"
                            aria-selected={mode === tab.mode}
                            className={`${styles.tab} ${mode === tab.mode ? styles.tabActive : ''}`}
                            onClick={() => onChange(tab.mode)}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>
                <AnimatePresence mode="wait" initial={false}>
                    <motion.div
                        key={mode}
                        initial={{ opacity: 0, x: offset }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: offset }}
                        transition={{ duration: 0.15 }}
                    >
                        {mode === 'auth' && <Authorization onSwitch={() => onChange('register')} />}
                        {mode === 'register' && <Registration onSwitch={() => onChange('auth')} />}
                    </motion.div>
                </AnimatePresence>
            </div>
        </Modal>
    )
}
